import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo, useT } from '../router';
import { ORG, fullAddress } from '../data/site';

export default function Contact() {
  const t = useT();
  useSeo({
    path: '/contact',
    title: t('Contact Us | The Golden Years Foundation – Miami, FL', 'Contáctenos | The Golden Years Foundation – Miami, FL'),
    description: t(
      `Contact The Golden Years Foundation in Miami-Dade. Call ${ORG.phone}, email ${ORG.email} or send us a message. 501(c)(3) EIN ${ORG.ein}.`,
      `Comuníquese con The Golden Years Foundation en Miami-Dade. Llámenos al ${ORG.phone}, escríbanos a ${ORG.email} o envíenos un mensaje. 501(c)(3) EIN ${ORG.ein}.`
    ),
  });

  const items = [
    { key: 'address', icon: FaMapMarkerAlt, label: t('Address', 'Dirección'), value: fullAddress() },
    { key: 'phone', icon: FaPhoneAlt, label: t('Phone', 'Teléfono'), value: ORG.phone, href: ORG.phoneLink },
    { key: 'email', icon: FaEnvelope, label: t('Email', 'Correo electrónico'), value: ORG.email, href: `mailto:${ORG.email}` },
    { key: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp', value: t('Message us', 'Escríbanos'), href: ORG.whatsapp },
  ];

  return (
    <>
      <PageHero eyebrow={t('Contact', 'Contacto')} title={t('Let’s talk', 'Hablemos')} subtitle={t('Questions, partnerships, in-kind donations or press — we usually answer within one business day.', 'Preguntas, alianzas, donaciones en especie o prensa: normalmente respondemos en un día hábil.')} />
      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {items.map((item) => {
            const Icon = item.icon;
            const { key, label, value, href } = item;
            return (
            <div key={key} className="flex gap-4 items-start rounded-2xl border border-slate-200 p-5">
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
          <InlineForm id="contact-form" type="contacto" submitLabel={t('Send message', 'Enviar mensaje')} fields={[
            { name: 'fullName', label: t('Full name', 'Nombre completo'), required: true },
            { name: 'email', label: t('Email', 'Correo electrónico'), type: 'email', required: true },
            { name: 'phone', label: t('Phone', 'Teléfono'), type: 'tel' },
            { name: 'topic', label: t('Topic', 'Tema'), type: 'select', required: true, options: [t('General question', 'Pregunta general'), t('In-kind donation', 'Donación en especie'), t('Partnership / sponsorship', 'Alianza / patrocinio'), t('Media', 'Prensa'), t('Other', 'Otro')] },
            { name: 'message', label: t('Message', 'Mensaje'), type: 'textarea', required: true, full: true },
          ]} />
        </div>
      </section>
    </>
  );
}
