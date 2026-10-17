// Build-time prerender: writes a fully rendered static HTML file for every route
// (dist/index.html, dist/about.html, ...) so visitors and Google reviewers get
// real content instantly, before any JavaScript runs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, ROUTES } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const SITE = 'https://thegoldenyearsfoundation.com';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const route of ROUTES) {
  const { html, seo } = await render(route);
  let page = template.replace('<div id="root"><!--app-html--></div>', `<div id="root" data-prerendered="true">${html}</div>`);
  if (seo) {
    const url = SITE + (route === '/' ? '/' : route);
    page = page
      .replace(/<title>.*?<\/title>/s, `<title>${esc(seo.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(seo.description)}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(seo.title)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(seo.description)}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  }
  // The hero image is only on the home page; don't preload it elsewhere.
  if (route !== '/') page = page.replace(/\s*<link rel="preload" as="image"[^>]*>/, '');
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), page);
  console.log(`prerendered ${route} -> ${file} (${(html.length / 1024).toFixed(1)} KB)`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
