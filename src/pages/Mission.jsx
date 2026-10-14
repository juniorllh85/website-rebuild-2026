import React from 'react';
import { PageHero, Prose, CtaBand } from '../components/PageParts';
import { useSeo } from '../router';

export default function Mission() {
  useSeo({
    path: '/mission',
    title: 'Our Mission & Vision | The Golden Years Foundation',
    description: 'Our mission is to end loneliness, isolation and unmet basic needs among seniors in Miami-Dade through food security, medicine support, hygiene and companionship.',
  });

  const goals = [
    ['Food security', 'No senior in our buildings goes hungry at the end of the month.'],
    ['Health continuity', 'Seniors keep taking their medications and understand their benefits.'],
    ['Dignity & hygiene', 'Every resident has the basic personal care supplies they need.'],
    ['Connection', 'Every senior has at least one person who checks on them every week.'],
  ];

  return (
    <>
      <PageHero eyebrow="Mission" title="No senior should grow old alone, hungry or forgotten"
        subtitle="We exist to rescue older adults in Miami-Dade from loneliness, isolation and unmet basic needs."
        image="/images/carmen_birthday.webp" />

      <Prose>
        <div className="rounded-3xl bg-slate-900 text-white p-8 not-prose">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">Mission statement</p>
          <p className="text-2xl font-bold leading-snug">
            To improve the quality of life of low-income and isolated seniors in Miami-Dade County by delivering food, medicine support, hygiene essentials
            and consistent companionship — with dignity, respect and love.
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">Why it matters</h2>
        <p>
          Social isolation is not just sad — it is dangerous. Public health research links chronic loneliness in older adults to higher risks of depression,
          heart disease, dementia and early death. When isolation combines with a fixed income, seniors are often forced to choose between groceries, rent and
          prescriptions.
        </p>
        <p>
          Miami-Dade is home to hundreds of thousands of people aged 65 and older, many of them immigrants living far from family, with limited English and
          limited access to transportation. They are often invisible to the systems designed to help them. Our mission is to make them visible again.
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">Our vision</h2>
        <p>
          We envision a Miami-Dade where every senior building has a caring network around it: volunteers who know residents by name, local partners who
          supply food and essentials, and a foundation that coordinates it all transparently. We start with one complex, measure results carefully and scale
          what works.
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">The outcomes we work toward</h2>
        <div className="grid sm:grid-cols-2 gap-5 not-prose">
          {goals.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-xl mb-2">✔ {t}</h3>
              <p className="text-base text-slate-600">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">How we measure success</h2>
        <p>
          We track deliveries completed, the number of seniors enrolled, volunteer hours, and simple wellbeing check-ins with residents. These numbers guide
          our decisions and are shared with donors and partners in our <a href="/news" className="text-emerald-700 underline">news updates</a>.
        </p>
      </Prose>
      <CtaBand />
    </>
  );
}
