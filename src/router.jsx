/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';

// Tiny client-side router (no dependency). Works with Vercel rewrites to /index.html.
const listeners = new Set();

export function navigate(to) {
  if (to === window.location.pathname + window.location.hash) return;
  window.history.pushState({}, '', to);
  listeners.forEach((fn) => fn());
  if (!to.includes('#')) window.scrollTo({ top: 0, behavior: 'instant' });
}

export function usePath() {
  const [path, setPath] = useState(() => normalize(window.location.pathname));
  useEffect(() => {
    const update = () => setPath(normalize(window.location.pathname));
    listeners.add(update);
    window.addEventListener('popstate', update);
    return () => {
      listeners.delete(update);
      window.removeEventListener('popstate', update);
    };
  }, []);
  return path;
}

function normalize(p) {
  const clean = p.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export function Link({ to, children, onClick, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (!to.startsWith('/')) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

// Per-page SEO: title, description, canonical.
export function useSeo({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    set('meta[name="description"]', 'content', description);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('link[rel="canonical"]', 'href', `https://thegoldenyearsfoundation.com${path === '/' ? '/' : path}`);
    set('meta[property="og:url"]', 'content', `https://thegoldenyearsfoundation.com${path === '/' ? '/' : path}`);
  }, [title, description, path]);
}
