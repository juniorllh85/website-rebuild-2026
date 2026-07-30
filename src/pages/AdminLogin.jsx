import React, { useEffect, useState } from 'react';
import { setAdminToken, getAdminToken } from '../utils/adminAuth';

export default function AdminLogin() {
  const [secret, setSecret] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getAdminToken();
    if (token && typeof window !== 'undefined') {
      window.location.href = '/admin';
    }
  }, []);

  const login = async () => {
    setStatus('checking');
    setError(null);

    if (!secret.trim()) {
      setError('Ingresa la clave de administrador.');
      setStatus(null);
      return;
    }

    try {
      const res = await fetch('/api/orders', {
        headers: { 'x-admin-secret': secret.trim() },
      });
      if (!res.ok) {
        setError('Clave inválida.');
        setStatus('error');
        return;
      }
      setAdminToken(secret.trim());
      setStatus('authenticated');
      if (typeof window !== 'undefined') {
        window.location.href = '/admin';
      }
    } catch (err) {
      console.error(err);
      setError('No se pudo conectar al servidor.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-12">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="text-3xl font-black text-white">Admin Login</h1>
          <p className="mt-3 text-sm text-slate-400">Ingresa tu clave para acceder al panel de administración.</p>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Clave de administrador
              <input
                type="password"
                value={secret}
                onChange={(event) => setSecret(event.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none"
                placeholder="Ingresa tu clave secreta"
              />
            </label>
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
            <button
              type="button"
              onClick={login}
              className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              {status === 'checking' ? 'Validando...' : 'Iniciar sesión'}
            </button>
            <a href="/" className="text-sm text-slate-400 transition hover:text-white">Volver al sitio</a>
          </div>
        </div>
      </div>
    </div>
  );
}
