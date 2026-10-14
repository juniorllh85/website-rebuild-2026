import React, { useState } from 'react';
import { PageHero } from '../components/PageParts';
import { Link, useSeo } from '../router';
import { ORG } from '../data/site';

const amounts = [
  { v: 15, t: 'One hygiene & dignity kit' },
  { v: 25, t: 'A week of groceries for one senior' },
  { v: 50, t: 'A month of vitamins for two seniors' },
  { v: 100, t: 'A birthday celebration for a whole floor' },
];

export default function Donate() {
  const [amount, setAmount] = useState(25);
  useSeo({
    path: '/donate',
    title: 'Donate to Help Seniors in Miami-Dade | The Golden Years Foundation',
    description: `Make a secure, tax-deductible donation to The Golden Years Foundation (501(c)(3), EIN ${ORG.ein}). Your gift provides food, medicine support and companionship to seniors.`,
  });

  return (
    <>
      <PageHero eyebrow="Donate" title="Your gift brings food, care and company to a senior today"
        subtitle="100% secure checkout. Tax-deductible to the extent allowed by law." image="/images/donation.webp" />

      <section className="mx-auto max-w-5xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 bg-white">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Choose an amount</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {amounts.map((a) => (
              <button key={a.v} type="button" id={`donate-amount-${a.v}`} onClick={() => setAmount(a.v)} aria-pressed={amount === a.v}
                className={`rounded-2xl border-2 p-4 text-left transition ${amount === a.v ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                <div className="text-2xl font-black text-slate-900">${a.v}</div>
                <div className="text-xs text-slate-600">{a.t}</div>
              </button>
            ))}
          </div>
          <a id="donate-secure-checkout" href={ORG.donateUrl} target="_blank" rel="noopener noreferrer"
            className="block text-center w-full rounded-2xl py-4 font-black text-lg text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg hover:brightness-110 transition">
            🔒 Donate securely
          </a>
          <p className="mt-3 text-xs text-center text-slate-500">
            You will be redirected to our secure Square checkout (HTTPS, PCI-compliant). Enter ${amount} or any amount you choose. We never see or store your card details.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs text-slate-500">
            <span>🔒 SSL encrypted</span><span>💳 Cards, Apple Pay, Google Pay</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-700">
          <h2 className="text-2xl font-extrabold text-slate-900">Where your money goes</h2>
          <p>Your donation funds direct services for seniors in our Miami-Dade pilot complex: groceries, hygiene supplies, vitamins and over-the-counter health items, and celebrations that fight isolation. Our volunteers donate their time, keeping overhead low.</p>
          <h3 className="text-xl font-extrabold text-slate-900">Other ways to give</h3>
          <ul className="space-y-2">
            <li>📦 <strong>In-kind donations</strong> — non-perishable food, hygiene items, adult diapers. <Link to="/contact" className="text-emerald-700 underline">Contact us</Link> to arrange drop-off.</li>
            <li>🏢 <strong>Corporate matching & sponsorships</strong> — ask your employer to match your gift.</li>
            <li>🤝 <strong>Give your time</strong> — <Link to="/volunteer" className="text-emerald-700 underline">become a volunteer</Link>.</li>
          </ul>
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <p className="font-bold mb-1">Tax information</p>
            <p className="text-slate-300 text-sm">{ORG.name} is a {ORG.legalStatus}. EIN: <strong className="text-white">{ORG.ein}</strong>. You will receive an emailed receipt for your records. Questions? <a href={`mailto:${ORG.email}`} className="underline">{ORG.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
