/* global process */
import fs from 'fs';
import path from 'path';

const getProductsPath = () => path.resolve(process.cwd(), 'data', 'products.json');

const isValidAdminSecret = (req) => {
  const secret = process.env.ADMIN_SECRET || 'dev-secret';
  const headerSecret = req.headers['x-admin-secret'] || '';
  const bearer = (req.headers.authorization || '').replace('Bearer ', '');
  return headerSecret === secret || bearer === secret;
};

export default async function handler(req, res) {
  const p = getProductsPath();

  if (req.method === 'GET') {
    try {
      const raw = await fs.promises.readFile(p, 'utf8').catch(() => '[]');
      const products = JSON.parse(raw || '[]');
      return res.status(200).json({ success: true, products });
    } catch (err) {
      console.error('Failed to read products:', err);
      return res.status(500).json({ error: 'Failed to load products' });
    }
  }

  if (!isValidAdminSecret(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
      const newProduct = {
        id: body.id || `product-${Date.now()}`,
        name: body.name || 'Nuevo producto',
        category: body.category || 'Otros',
        price: Number(body.price) || 0,
        badge: body.badge || '',
        description: body.description || '',
        image: body.image || '',
        materials: body.materials || '',
        isNew: Boolean(body.isNew),
      };
      existing.push(newProduct);
      await fs.promises.writeFile(p, JSON.stringify(existing, null, 2), 'utf8');
      return res.status(200).json({ success: true, product: newProduct });
    } catch (err) {
      console.error('Failed to save product:', err);
      return res.status(500).json({ error: 'Failed to save product' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const body = req.body || {};
      const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
      const updated = existing.map((product) =>
        product.id === body.id
          ? {
              ...product,
              name: body.name ?? product.name,
              category: body.category ?? product.category,
              price: body.price != null ? Number(body.price) : product.price,
              badge: body.badge ?? product.badge,
              description: body.description ?? product.description,
              image: body.image ?? product.image,
              materials: body.materials ?? product.materials,
              isNew: body.isNew != null ? Boolean(body.isNew) : product.isNew,
            }
          : product
      );
      await fs.promises.writeFile(p, JSON.stringify(updated, null, 2), 'utf8');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to update product:', err);
      return res.status(500).json({ error: 'Failed to update product' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const body = req.body || {};
      const existing = JSON.parse(await fs.promises.readFile(p, 'utf8').catch(() => '[]') || '[]');
      const filtered = existing.filter((product) => product.id !== body.id);
      await fs.promises.writeFile(p, JSON.stringify(filtered, null, 2), 'utf8');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to delete product:', err);
      return res.status(500).json({ error: 'Failed to delete product' });
    }
  }

  res.setHeader('Allow', 'GET, POST, PUT, DELETE');
  res.status(405).end('Method Not Allowed');
}
