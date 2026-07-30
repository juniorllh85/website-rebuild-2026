/* global process */
import fs from 'fs';
import path from 'path';

const isValidAdminSecret = (req) => {
  const secret = process.env.ADMIN_SECRET || 'dev-secret';
  const headerSecret = req.headers['x-admin-secret'] || '';
  const bearer = (req.headers.authorization || '').replace('Bearer ', '');
  return headerSecret === secret || bearer === secret;
};

export default async function handler(req, res) {
  const p = path.resolve(process.cwd(), 'data', 'orders.json');

  if (req.method === 'GET') {
    if (!isValidAdminSecret(req)) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      const raw = await fs.promises.readFile(p, 'utf8').catch(() => '[]');
      const orders = JSON.parse(raw || '[]');
      return res.status(200).json({ success: true, orders });
    } catch (err) {
      console.error('Failed to read orders:', err);
      return res.status(500).json({ error: 'Failed to load orders' });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
      const order = {
        ...body,
        receivedAt: new Date().toISOString(),
        status: body.status || 'pending',
      };
      existing.push(order);
      await fs.promises.writeFile(p, JSON.stringify(existing, null, 2), 'utf8');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to persist order:', err);
      return res.status(500).json({ error: 'Failed to save order' });
    }
  }

  if (req.method === 'PUT') {
    if (!isValidAdminSecret(req)) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      const body = req.body || {};
      const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
      const updated = existing.map((order) =>
        order.transaction_id === body.transaction_id
          ? { ...order, status: body.status || order.status }
          : order
      );
      await fs.promises.writeFile(p, JSON.stringify(updated, null, 2), 'utf8');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to update order:', err);
      return res.status(500).json({ error: 'Failed to update order' });
    }
  }

  res.setHeader('Allow', 'GET, POST, PUT');
  res.status(405).end('Method Not Allowed');
}
