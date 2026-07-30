import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiDir = path.join(__dirname, 'api');

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((cookies, pair) => {
    const [name, ...valueParts] = pair.split('=');
    if (!name) return cookies;
    cookies[name.trim()] = decodeURIComponent((valueParts || []).join('=').trim());
    return cookies;
  }, {});
}

function isValidAdminSecret(req) {
  const secret = process.env.ADMIN_SECRET || 'dev-secret';
  const headerSecret = req.headers['x-admin-secret'] || '';
  const bearer = (req.headers.authorization || '').replace('Bearer ', '');
  const cookies = parseCookies(req.headers.cookie || '');
  const cookieSecret = cookies.admin_secret || '';
  return headerSecret === secret || bearer === secret || cookieSecret === secret;
}

function parseJsonBody(req) {
  if (!req.method || !['POST', 'PUT', 'PATCH'].includes(req.method.toUpperCase())) {
    return null;
  }

  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
  });
}

function createResponseAdapter(res) {
  let statusCode = 200;

  return {
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      res.statusCode = statusCode;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(payload));
    },
    send(payload) {
      res.statusCode = statusCode;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(payload);
    },
    end(payload) {
      res.statusCode = statusCode;
      res.end(payload);
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-api-routes',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const urlPath = req.url ? req.url.split('?')[0].replace(/\/$/, '') : '';

          if (urlPath === '/admin') {
            if (!isValidAdminSecret(req)) {
              res.statusCode = 302;
              res.setHeader('Location', '/admin/login');
              res.end();
              return;
            }
          }

          if (urlPath === '/admin/login') {
            return next();
          }

          if (!req.url || !req.url.startsWith('/api/')) {
            return next();
          }

          const route = urlPath.replace('/api/', '').replace(/\/$/, '');

          if (!route) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'API route not found' }));
            return;
          }

          const handlerPath = path.join(apiDir, `${route}.js`);

          try {
            const moduleUrl = `file://${handlerPath}`;
            const module = await import(moduleUrl);
            const handler = module.default;

            if (typeof handler !== 'function') {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: 'API handler not found' }));
              return;
            }

            req.body = await parseJsonBody(req);
            await handler(req, createResponseAdapter(res));
          } catch (error) {
            console.error(`API handler failed for ${route}:`, error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Local API handler failed' }));
          }
        });
      },
    },
  ],
});
