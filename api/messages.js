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
  if (req.method === 'GET') {
    if (!isValidAdminSecret(req)) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      const p = path.resolve(process.cwd(), 'data', 'messages.json');
      const raw = await fs.promises.readFile(p, 'utf8').catch(() => '[]');
      const messages = JSON.parse(raw || '[]');
      return res.status(200).json({ success: true, messages });
    } catch (err) {
      console.error('Failed to read messages:', err);
      return res.status(500).json({ error: 'Failed to load messages' });
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const body = req.body || {};

    const p = path.resolve(process.cwd(), 'data', 'messages.json');
    const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
    existing.push({ ...body, receivedAt: new Date().toISOString() });
    await fs.promises.writeFile(p, JSON.stringify(existing, null, 2), 'utf8');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to persist message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
}
