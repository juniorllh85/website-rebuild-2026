import React from 'react';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo } from '../router';
import { ORG } from '../data/site';

export default function RequestHelp() {
  useSeo({
    path: '/request-help',
    title: 'Request Help for a Senior | The Golden Years Foundation',
    description: 'Seniors in Miami-Dade can request free groceries, hygiene kits, medicine support, benefits guidance or a friendly visitor. Family members and caregivers may apply too.',
  });

  return (
    <>
      <PageHero eyebrow="Request Help" title="You are not alone. We are here to help."
        subtitle="If you are a senior (60+) in Miami-Dade — or you are worried about one — tell us what you need. All our services are free."
        image="/images/hero.webp" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6 text-slate-700">
          <h2 className="text-3xl font-extrabold text-slate-900">What we can help with</h2>
          <ul className="space-y-3">
            <li>🛒 Groceries and food deliveries</li>
            <li>🧼 Hygiene and personal care kits</li>
            <li>💊 Help getting medications and vitamins</li>
            <li>📄 Understanding Medicare, Medicaid, Social Security and SNAP</li>
            <li>☕ A friendly visitor or weekly phone call</li>
          </ul>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
            <p className="font-bold text-emerald-900">Prefer to talk?</p>
            <p>Call us at <a className="underline font-bold" href={ORG.phoneLink}>{ORG.phone}</a> (English & Español).</p>
          </div>
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5 text-rose-900">
            <strong>Emergency?</strong> Call <a href="tel:911" className="underline font-bold">911</a>. For the Florida Elder Helpline call <a href="tel:18009635337" className="underline font-bold">1-800-963-5337</a>.
          </div>
        </div>
        <div className="lg:col-span-3">
          <InlineForm id="request-help-form" type="solicitud_ayuda" submitLabel="Send my request" fields={[
            { name: 'fullName', label: 'Senior’s full name', required: true },
            { name: 'age', label: 'Age', type: 'number', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', required: true },
            { name: 'email', label: 'Email (optional)', type: 'email' },
            { name: 'address', label: 'Neighborhood / building in Miami-Dade', required: true, full: true },
            { name: 'need', label: 'Type of help needed', type: 'select', required: true, full: true, options: ['Food', 'Hygiene kit', 'Medicine support', 'Benefits guidance', 'Companionship', 'Other'] },
            { name: 'requester', label: 'I am…', type: 'select', required: true, options: ['The senior', 'Family member', 'Caregiver / social worker', 'Neighbor / friend'] },
            { name: 'language', label: 'Preferred language', type: 'select', options: ['English', 'Español', 'Other'] },
            { name: 'details', label: 'Tell us more about the situation', type: 'textarea', full: true },
          ]} />
        </div>
      </section>
    </>
  );
}
