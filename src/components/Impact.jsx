import React from 'react';
import { impactStats } from '../data/constants';
import { useT } from '../router';

export default function Impact() {
  const t = useT();
  return (
    <section id="impacto" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">{t('Impact and Scale of the Approach', 'Impacto y alcance de nuestro enfoque')}</h2>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          {t(
            'Our project focuses on a residential complex in Miami-Dade with three buildings. We started with a pilot in one building to serve between 400 and 500 seniors. The progressive expansion seeks to reach between 1,200 and 1,500 seniors within the complex.',
            'Nuestro proyecto se enfoca en un complejo residencial de Miami-Dade con tres edificios. Comenzamos con un piloto en un edificio para atender entre 400 y 500 adultos mayores. La expansión progresiva busca llegar a entre 1,200 y 1,500 adultos mayores dentro del complejo.'
          )}
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {impactStats.map((s) => (
            <div key={s.label} className="rounded-3xl border bg-white p-8 shadow-sm">
              <div className="text-4xl font-extrabold text-emerald-600">{s.value}</div>
              <p className="mt-2 text-slate-600">{t(s.label, s.labelEs)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
