import React from 'react';
import { PageHero, CtaBand } from '../components/PageParts';
import { Link, useSeo } from '../router';

const programs = [
  {
    id: 'food',
    title: 'Food Security Deliveries',
    image: '/images/food.webp',
    summary: 'Regular grocery deliveries so no senior goes hungry at the end of the month.',
    body: [
      'Many of the seniors we serve live on Social Security alone. By the last week of the month, the refrigerator is often empty. Our volunteers deliver bags of non-perishable staples, fresh produce when available and easy-to-prepare meals directly to residents’ doors.',
      'Deliveries are scheduled, not random. Each senior is visited by familiar faces, which also gives us a chance to check on their wellbeing.',
    ],
    impact: 'A $25 donation covers about one week of groceries for one senior.',
  },
  {
    id: 'medicine',
    title: 'Medicine & Health Support',
    image: '/images/medicine.webp',
    summary: 'Helping seniors keep up with medications, vitamins and health benefits.',
    body: [
      'We help seniors stay on track with their prescriptions by connecting them with pharmacy assistance programs, providing over-the-counter essentials and vitamins, and helping them understand Medicare, Medicaid and Extra Help letters.',
      'We do not provide medical care ourselves; we connect residents with licensed providers and public programs and remove the small barriers that cause people to stop treatment.',
    ],
    impact: 'A $50 donation supplies a month of vitamins and basic health items for two seniors.',
  },
  {
    id: 'hygiene',
    title: 'Hygiene & Dignity Kits',
    image: '/images/hygiene_donations.webp',
    summary: 'Personal care kits that protect health and self-esteem.',
    body: [
      'Soap, shampoo, toothpaste, adult diapers and cleaning supplies are expensive and are not covered by food assistance. Our dignity kits are assembled by volunteers and delivered with discretion.',
      'Good hygiene prevents infections and falls, and helps seniors feel confident enough to leave their apartments and socialize.',
    ],
    impact: 'A $15 donation provides one complete hygiene kit.',
  },
  {
    id: 'companionship',
    title: 'Companionship & Celebrations',
    image: '/images/events_thanksgiving.webp',
    summary: 'Birthdays, holidays and friendly visits that fight loneliness.',
    body: [
      'Loneliness is as harmful as many physical illnesses. We celebrate residents’ birthdays, host Thanksgiving, Mother’s Day and holiday gatherings, and organize regular friendly visits and phone calls.',
      'For many residents, these moments are the only celebrations they have all year.',
    ],
    impact: 'A $100 donation funds a birthday celebration for an entire floor.',
  },
  {
    id: 'benefits',
    title: 'Benefits Navigation & Resources',
    image: '/images/vitamins.webp',
    summary: 'Guidance on Social Security, Medicare, SNAP and local senior programs.',
    body: [
      'Government programs can be confusing, especially for seniors with limited English or internet access. Volunteers help residents read letters, find the right phone numbers and connect with services such as SNAP, the Alliance for Aging and SHINE Medicare counseling.',
      'We also publish plain-language guides on our news page.',
    ],
    impact: 'Free for every senior we serve.',
  },
];

export default function Programs() {
  useSeo({
    path: '/programs',
    title: 'Programs & Services for Seniors | The Golden Years Foundation',
    description: 'Food deliveries, medicine and health support, hygiene kits, companionship and benefits navigation for low-income seniors in Miami-Dade, FL.',
  });

  return (
    <>
      <PageHero eyebrow="Programs & Services" title="Practical help, delivered with love"
        subtitle="Five programs working together to keep Miami-Dade seniors fed, healthy, clean and connected."
        image="/images/hygiene.webp" />

      <nav aria-label="Programs" className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex gap-2 overflow-x-auto text-sm font-semibold">
          {programs.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 transition">{p.title}</a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {programs.map((p, i) => (
          <article key={p.id} id={p.id} className={`grid md:grid-cols-2 gap-10 items-center scroll-mt-32 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <img src={p.image} alt={p.title} width="800" height="600" loading="lazy" decoding="async" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{p.title}</h2>
              <p className="text-lg text-emerald-700 font-semibold mb-4">{p.summary}</p>
              {p.body.map((t, k) => <p key={k} className="text-slate-700 leading-relaxed mb-4">{t}</p>)}
              <div className="rounded-2xl bg-amber-50 border border-amber-200 px-5 py-4 text-amber-900 font-semibold mb-5">💡 {p.impact}</div>
              <div className="flex flex-wrap gap-3">
                <Link to="/donate" className="rounded-xl px-5 py-3 font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110">Support this program</Link>
                <Link to="/volunteer" className="rounded-xl px-5 py-3 font-bold text-emerald-700 border border-emerald-200 hover:bg-emerald-50">Volunteer</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
