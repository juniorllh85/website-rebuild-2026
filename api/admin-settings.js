/* global process */
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const p = path.resolve(process.cwd(), 'public', 'admin-settings.json');
    try {
      const raw = await fs.promises.readFile(p, 'utf8');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).end(raw);
    } catch (err) {
      console.error('Failed to read admin settings:', err);
      res.status(500).json({ error: 'Failed to read settings' });
    }
    return;
  }

  if (req.method === 'POST') {
    const secret = (process.env.ADMIN_SECRET || 'dev-secret');
    const headerSecret = req.headers['x-admin-secret'] || '';
    const bearer = (req.headers.authorization || '').replace('Bearer ', '');
    try {
      const body = req.body || {};
      const providedSecret = body?.secret || headerSecret || bearer;
      if (!providedSecret || providedSecret !== secret) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }
      const p = path.resolve(process.cwd(), 'public', 'admin-settings.json');
      await fs.promises.writeFile(p, JSON.stringify(body.settings, null, 2), 'utf8');
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to write admin settings:', err);
      res.status(500).json({ error: 'Failed to save settings' });
    }
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
