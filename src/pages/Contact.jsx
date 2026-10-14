import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo } from '../router';
import { ORG, fullAddress } from '../data/site';

export default function Contact() {
  useSeo({
    path: '/contact',
    title: 'Contact Us | The Golden Years Foundation – Miami, FL',
    description: `Contact The Golden Years Foundation in Miami-Dade. Call ${ORG.phone}, email ${ORG.email} or send us a message. 501(c)(3) EIN ${ORG.ein}.`,
  });

  const items = [
    { icon: FaMapMarkerAlt, label: 'Address', value: fullAddress() },
    { icon: FaPhoneAlt, label: 'Phone', value: ORG.phone, href: ORG.phoneLink },
    { icon: FaEnvelope, label: 'Email', value: ORG.email, href: `mailto:${ORG.email}` },
    { icon: FaWhatsapp, label: 'WhatsApp', value: 'Message us', href: ORG.whatsapp },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk" subtitle="Questions, partnerships, in-kind donations or press — we usually answer within one business day." />
      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {items.map((item) => {
            const Icon = item.icon;
            const { label, value, href } = item;
            return (
            <div key={label} className="flex gap-4 items-start rounded-2xl border border-slate-200 p-5">
              <span className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0"><Icon /></span>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500">{label}</div>
                {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-emerald-700">{value}</a> : <div className="font-bold text-slate-900">{value}</div>}
              </div>
            </div>
            );
          })}
          <div className="rounded-2xl bg-slate-900 text-white p-5 text-sm">
            <div className="font-bold">{ORG.name}</div>
            <div className="text-slate-300">{ORG.legalStatus} · EIN {ORG.ein}</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <InlineForm id="contact-form" type="contacto" submitLabel="Send message" fields={[
            { name: 'fullName', label: 'Full name', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel' },
            { name: 'topic', label: 'Topic', type: 'select', required: true, options: ['General question', 'In-kind donation', 'Partnership / sponsorship', 'Media', 'Other'] },
            { name: 'message', label: 'Message', type: 'textarea', required: true, full: true },
          ]} />
        </div>
      </section>
    </>
  );
}
