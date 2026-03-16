import React from 'react';

export default function Header({ onDonateClick }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <div className="font-extrabold tracking-tight text-lg sm:text-xl">
          <span className="hidden sm:inline">The Golden Years Foundation</span>
          <span className="sm:hidden">TGYF</span>
        </div>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <a href="#inicio" className="hover:text-emerald-700">Home</a>
          <a href="#impacto" className="hover:text-emerald-700">Impact</a>
          <a href="#metricas" className="hover:text-emerald-700">Metrics</a>
          <a href="#porque" className="hover:text-emerald-700">Why Us</a>
          <a href="#ayuda" className="hover:text-emerald-700">How We Help</a>
          <a href="#vision" className="hover:text-emerald-700">Vision</a>
          <a href="#plan" className="hover:text-emerald-700">Plan</a>
          <a href="#piloto" className="hover:text-emerald-700">Pilot</a>
          <a href="#expansion" className="hover:text-emerald-700">Expansion</a>
          <a href="#donar" className="hover:text-emerald-700">Donate</a>
          <a href="#contacto" className="hover:text-emerald-700">Contact</a>
        </nav>

        <button
          onClick={() => onDonateClick(50)}
          className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
