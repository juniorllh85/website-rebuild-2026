import React from 'react';
import { helpCards } from '../data/constants';

export default function HowWeHelp() {
  return (
    <section id="ayuda" className="border-t bg-emerald-50/50">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">How We Help</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Targeted and consistent interventions that go straight to the basic needs of seniors living alone.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helpCards.map((c) => (
          <div
            key={c.title}
            className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
          >
            <div className="h-72 sm:h-80 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition duration-300 z-10" />
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
              </div>
              <p className="mt-4 text-slate-600 leading-relaxed flex-1">{c.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t pt-6">
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Periodic and organized deliveries</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Focus on continuity and prevention</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Simple and measurable tracking</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
