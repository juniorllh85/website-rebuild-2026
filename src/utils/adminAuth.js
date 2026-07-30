export const ADMIN_SECRET_KEY = 'adminSecret';
export const ADMIN_COOKIE_KEY = 'admin_secret';

const writeCookie = (name, value, options = {}) => {
  if (typeof document === 'undefined') return;
  const parts = [`${name}=${encodeURIComponent(value)}`];
  if (options.path) parts.push(`path=${options.path}`);
  if (options.maxAge != null) parts.push(`max-age=${options.maxAge}`);
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (options.secure) parts.push('Secure');
  document.cookie = parts.join('; ');
};

export const getAdminToken = () => {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(ADMIN_SECRET_KEY) || '';
};

export const setAdminToken = (token) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ADMIN_SECRET_KEY, token);
  writeCookie(ADMIN_COOKIE_KEY, token, { path: '/', sameSite: 'Strict' });
};

export const clearAdminToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ADMIN_SECRET_KEY);
  writeCookie(ADMIN_COOKIE_KEY, '', { path: '/', maxAge: 0, sameSite: 'Strict' });
};

export const getAuthHeaders = () => {
  const token = getAdminToken();
  if (!token) return {};
  return { 'x-admin-secret': token };
};
