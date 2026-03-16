import React from 'react';
import { impactStats } from '../data/constants';

export default function Impact() {
  return (
    <section id="impacto" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Impact and Scale of the Approach</h2>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Our project focuses on a residential complex in Miami-Dade with three buildings.
          We started with a pilot in one building to serve between 400 and 500 seniors.
          The progressive expansion seeks to reach between 1,200 and 1,500 seniors within the complex.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {impactStats.map((s) => (
            <div key={s.label} className="rounded-3xl border bg-white p-8 shadow-sm">
              <div className="text-4xl font-extrabold text-emerald-600">{s.value}</div>
              <p className="mt-2 text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
