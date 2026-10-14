import React from 'react';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo } from '../router';

const roles = [
  ['🚚 Delivery driver', 'Pick up groceries and hygiene kits and deliver them to seniors’ doors. 2–3 hours, usually Saturday mornings.'],
  ['☕ Friendly visitor', 'Spend an hour a week visiting the same senior for conversation, games or a walk.'],
  ['📞 Phone buddy', 'Call isolated seniors once or twice a week from home. Spanish speakers especially needed.'],
  ['📦 Kit packer', 'Help sort donations and assemble food bags and dignity kits at our packing days.'],
  ['🎉 Event helper', 'Help us set up birthday parties, Thanksgiving and holiday celebrations.'],
  ['💻 Skilled volunteer', 'Offer marketing, accounting, legal, translation, photography or IT help remotely.'],
];

export default function Volunteer() {
  useSeo({
    path: '/volunteer',
    title: 'Volunteer with Seniors in Miami | The Golden Years Foundation',
    description: 'Volunteer in Miami-Dade: deliver groceries, visit isolated seniors, make phone calls or help at events. Flexible schedules. Sign up today.',
  });

  return (
    <>
      <PageHero eyebrow="Volunteer" title="Give an hour. Change a whole week."
        subtitle="Our volunteers are the heart of the foundation. No special skills needed — just a kind heart and a little time."
        image="/images/volunteers_white.webp" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">Ways to volunteer</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">Choose what fits your schedule. Individuals, families with teens (16+ with an adult), students needing service hours and corporate groups are all welcome.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{t}</h3>
              <p className="text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">How it works</h2>
            <ol className="space-y-4 text-slate-700">
              <li><strong>1. Sign up</strong> using the form.</li>
              <li><strong>2. Short call</strong> — we get to know you and your availability.</li>
              <li><strong>3. Orientation</strong> — a 45-minute session on working respectfully with seniors.</li>
              <li><strong>4. First shift</strong> — you start alongside an experienced volunteer.</li>
            </ol>
            <p className="mt-6 text-sm text-slate-500">Volunteers who visit seniors in person must be 18+ and agree to a basic background check for the safety of the people we serve.</p>
          </div>
          <div className="lg:col-span-3">
            <InlineForm id="volunteer-form" type="voluntariado" submitLabel="Sign me up to volunteer" fields={[
              { name: 'fullName', label: 'Full name', required: true },
              { name: 'email', label: 'Email', type: 'email', required: true },
              { name: 'phone', label: 'Phone', type: 'tel', required: true },
              { name: 'availability', label: 'Availability', type: 'select', required: true, options: ['Weekdays', 'Weekends', 'Evenings', 'Remote only', 'Flexible'] },
              { name: 'role', label: 'Preferred role', type: 'select', full: true, options: roles.map((r) => r[0].slice(3)) },
              { name: 'motivation', label: 'Tell us a little about yourself', type: 'textarea', full: true },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
