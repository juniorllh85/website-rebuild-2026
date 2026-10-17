/* eslint-disable react-refresh/only-export-components */
import { useEffect, useSyncExternalStore } from 'react';

// Tiny client-side router (no dependency). Every route is also pre-rendered to
// static HTML at build time (see scripts/prerender.mjs).
// Spanish pages live under /es (e.g. /es/about).
const listeners = new Set();
const isServer = typeof window === 'undefined';
const SITE = 'https://thegoldenyearsfoundation.com';

// Set by entry-server.jsx during build-time prerendering.
export const ssrState = { path: '/', seo: null };

function normalize(p) {
  const clean = p.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

const subscribe = (fn) => {
  listeners.add(fn);
  window.addEventListener('popstate', fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener('popstate', fn);
  };
};
const getPath = () => normalize(window.location.pathname);
const getServerPath = () => ssrState.path;

export function navigate(to) {
  if (to === window.location.pathname + window.location.hash) return;
  window.history.pushState({}, '', to);
  listeners.forEach((fn) => fn());
  if (!to.includes('#')) window.scrollTo({ top: 0, behavior: 'instant' });
}

/** Full current path, including the /es prefix. */
export function usePath() {
  return useSyncExternalStore(subscribe, getPath, getServerPath);
}

/** Split a full path into { lang, route } — e.g. "/es/about" -> { lang: 'es', route: '/about' }. */
export function splitPath(path) {
  if (path === '/es' || path.startsWith('/es/')) return { lang: 'es', route: normalize(path.slice(3)) };
  return { lang: 'en', route: path };
}

/** Build a URL path for a route in a given language. */
export function localize(route, lang) {
  if (lang !== 'es') return route;
  return route === '/' ? '/es' : `/es${route}`;
}

export function useLang() {
  return splitPath(usePath()).lang;
}

/** Translation helper: const t = useT(); t('Hello', 'Hola') */
export function useT() {
  const lang = useLang();
  return (en, es) => (lang === 'es' ? es : en);
}

/**
 * Internal link. `to` is a language-neutral route ("/about", "/donate#form");
 * the /es prefix is added automatically on Spanish pages. Pass `lang` to force a language.
 */
export function Link({ to, lang, children, onClick, ...rest }) {
  const current = useLang();
  const internal = to.startsWith('/');
  const href = internal ? localizeHref(to, lang || current) : to;
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (!internal) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a href={href} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

function localizeHref(to, lang) {
  const [route, hash] = to.split('#');
  return localize(route || '/', lang) + (hash ? `#${hash}` : '');
}

// Per-page SEO: title, description, canonical, <html lang>, hreflang.
// `path` is the language-neutral route ("/about").
export function useSeo({ title, description, path }) {
  const lang = useLang();
  if (isServer) ssrState.seo = { title, description, path, lang };
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    const url = SITE + localize(path, lang);
    set('meta[name="description"]', 'content', description);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('meta[property="og:locale"]', 'content', lang === 'es' ? 'es_US' : 'en_US');
    set('link[rel="canonical"]', 'href', url);
    set('meta[property="og:url"]', 'content', url);
    set('link[hreflang="en"]', 'href', SITE + path);
    set('link[hreflang="es"]', 'href', SITE + localize(path, 'es'));
    set('link[hreflang="x-default"]', 'href', SITE + path);
  }, [title, description, path, lang]);
}
