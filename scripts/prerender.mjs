// Build-time prerender: writes a fully rendered static HTML file for every route
// in English and Spanish (dist/index.html, dist/about.html, dist/es.html,
// dist/es/about.html, ...) so visitors and Google reviewers get real content
// instantly, before any JavaScript runs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, ROUTES } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const SITE = 'https://thegoldenyearsfoundation.com';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const esPath = (r) => (r === '/' ? '/es' : `/es${r}`);

for (const { path: urlPath, route, lang } of ROUTES) {
  const { html, seo } = await render(urlPath);
  let page = template.replace('<div id="root"><!--app-html--></div>', `<div id="root" data-prerendered="true">${html}</div>`);
  const url = SITE + urlPath;
  page = page
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:locale" content=")[^"]*/, `$1${lang === 'es' ? 'es_US' : 'en_US'}`)
    .replace(/(<link rel="alternate" hreflang="en" href=")[^"]*/, `$1${SITE}${route}`)
    .replace(/(<link rel="alternate" hreflang="es" href=")[^"]*/, `$1${SITE}${esPath(route)}`)
    .replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*/, `$1${SITE}${route}`);
  if (seo) {
    page = page
      .replace(/<title>.*?<\/title>/s, `<title>${esc(seo.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(seo.description)}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(seo.title)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(seo.description)}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(seo.title)}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(seo.description)}`);
  } else {
    console.warn(`WARNING: ${urlPath} did not call useSeo()`);
  }
  // The hero image is only on the home page; don't preload it elsewhere.
  if (route !== '/') page = page.replace(/\s*<link rel="preload" as="image"[^>]*>/, '');
  const file = urlPath === '/' ? 'index.html' : `${urlPath.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true });
  fs.writeFileSync(path.join(dist, file), page);
  console.log(`prerendered ${urlPath} -> ${file} (${(html.length / 1024).toFixed(1)} KB)`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
