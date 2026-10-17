// Server entry used only at build time (scripts/prerender.mjs) to generate
// static HTML for every route, so Google sees full content without running JS.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import App from './App.jsx';
import { ssrState } from './router.jsx';

export const ROUTES = ['/', '/about', '/mission', '/programs', '/news', '/volunteer', '/contact', '/donate', '/request-help'];

export async function render(path) {
  ssrState.path = path;
  ssrState.seo = null;
  const { prelude } = await prerenderToNodeStream(<App />);
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return { html, seo: ssrState.seo };
}
