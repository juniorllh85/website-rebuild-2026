// Server entry used only at build time (scripts/prerender.mjs) to generate
// static HTML for every route, so Google sees full content without running JS.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import App from './App.jsx';
import { ssrState, localize } from './router.jsx';

const BASE_ROUTES = ['/', '/about', '/mission', '/programs', '/news', '/volunteer', '/contact', '/donate', '/request-help'];

// English + Spanish (/es/...) versions of every page.
export const ROUTES = BASE_ROUTES.flatMap((r) => [
  { path: r, route: r, lang: 'en' },
  { path: localize(r, 'es'), route: r, lang: 'es' },
]);

export async function render(path) {
  ssrState.path = path;
  ssrState.seo = null;
  const { prelude } = await prerenderToNodeStream(<App />);
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return { html, seo: ssrState.seo };
}
