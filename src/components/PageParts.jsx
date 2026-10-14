import React, { useState } from 'react';
import { Link } from '../router';

export function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #050a14 0%, #0b1a2c 60%, #062a24 100%)' }}>
      {image && (
        <img src={image} alt="" width="1600" height="900" fetchPriority="high" decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-25" />
      )}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(16,185,129,0.22), transparent 55%)' }} />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center">
        {eyebrow && <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400 mb-4">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(203,213,225,0.9)' }}>{subtitle}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }) {
  return <div className="prose-tgyf mx-auto max-w-3xl px-4 py-16 text-slate-700 text-lg leading-relaxed space-y-6">{children}</div>;
}

export function CtaBand() {
  const cards = [
    { to: '/donate', icon: '❤️', title: 'Donate', text: 'Fund groceries, medicine support and hygiene kits for a senior in need.', cls: 'from-emerald-600 to-teal-600 text-white', id: 'cta-donate' },
    { to: '/volunteer', icon: '🤝', title: 'Volunteer', text: 'Deliver supplies, visit seniors, or help us behind the scenes.', cls: 'from-amber-400 to-amber-500 text-slate-900', id: 'cta-volunteer' },
    { to: '/request-help', icon: '🏠', title: 'Request Help', text: 'Are you, or someone you love, a senior in need? We are here for you.', cls: 'from-slate-800 to-slate-900 text-white', id: 'cta-request-help' },
  ];
  return (
    <section className="bg-emerald-50/60 border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-10">How you can take action today</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} id={c.id}
              className={`group rounded-3xl p-8 bg-gradient-to-br ${c.cls} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-2xl font-extrabold mb-2">{c.title}</h3>
              <p className="opacity-90">{c.text}</p>
              <span className="mt-5 inline-block font-bold group-hover:translate-x-1 transition-transform">Get started →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const inputCls = 'w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300 bg-white';

// Generic inline form posting to /api/send-email. fields: [{name,label,type,required,options,full}]
export function InlineForm({ type, fields, submitLabel = 'Send', id }) {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('ok');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div role="status" className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-2xl font-extrabold text-emerald-800 mb-2">Thank you! We received your message.</h3>
        <p className="text-emerald-900/80">A member of our team will contact you within 2 business days.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5 rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
      {fields.map((f) => (
        <label key={f.name} className={`grid gap-2 ${f.full ? 'sm:col-span-2' : ''}`}>
          <span className="text-sm font-semibold text-slate-800">{f.label}{f.required && ' *'}</span>
          {f.type === 'textarea' ? (
            <textarea name={f.name} required={f.required} className={`${inputCls} min-h-[120px]`} />
          ) : f.type === 'select' ? (
            <select name={f.name} required={f.required} className={inputCls} defaultValue="">
              <option value="" disabled>Select…</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <input name={f.name} type={f.type || 'text'} required={f.required} className={inputCls} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'sending'}
          className="w-full rounded-2xl py-4 font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg hover:brightness-110 transition disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {status === 'error' && (
          <p role="alert" className="mt-3 text-sm text-rose-600 text-center">
            We could not send your message. Please call us at 786-442-5540 or email info@thegoldenyearsfoundation.com.
          </p>
        )}
        <p className="mt-3 text-xs text-slate-500 text-center">Your information is private and never shared. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
      </div>
    </form>
  );
}
