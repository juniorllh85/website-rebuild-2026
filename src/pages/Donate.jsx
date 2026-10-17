import React, { useState } from 'react';
import { PageHero } from '../components/PageParts';
import { Link, useSeo, useT } from '../router';
import { ORG } from '../data/site';

const amounts = [
  { v: 15, en: 'One hygiene & dignity kit', es: 'Un kit de higiene y dignidad' },
  { v: 25, en: 'A week of groceries for one senior', es: 'Una semana de alimentos para un adulto mayor' },
  { v: 50, en: 'A month of vitamins for two seniors', es: 'Un mes de vitaminas para dos adultos mayores' },
  { v: 100, en: 'A birthday celebration for a whole floor', es: 'Una celebración de cumpleaños para todo un piso' },
];

export default function Donate() {
  const [amount, setAmount] = useState(25);
  const t = useT();
  useSeo({
    path: '/donate',
    title: t('Donate to Help Seniors in Miami-Dade | The Golden Years Foundation', 'Done para ayudar a adultos mayores en Miami-Dade | The Golden Years Foundation'),
    description: t(
      `Make a secure, tax-deductible donation to The Golden Years Foundation (501(c)(3), EIN ${ORG.ein}). Your gift provides food, medicine support and companionship to seniors.`,
      `Haga una donación segura y deducible de impuestos a The Golden Years Foundation (501(c)(3), EIN ${ORG.ein}). Su aporte brinda alimentos, apoyo con medicamentos y compañía a adultos mayores.`
    ),
  });

  return (
    <>
      <PageHero eyebrow={t('Donate', 'Donar')} title={t('Your gift brings food, care and company to a senior today', 'Su donación lleva alimentos, cuidado y compañía a un adulto mayor hoy')}
        subtitle={t('100% secure checkout. Tax-deductible to the extent allowed by law.', 'Pago 100% seguro. Deducible de impuestos en la medida permitida por la ley.')} image="/images/donation.webp" />

      <section className="mx-auto max-w-5xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 bg-white">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{t('Choose an amount', 'Elija una cantidad')}</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {amounts.map((a) => (
              <button key={a.v} type="button" id={`donate-amount-${a.v}`} onClick={() => setAmount(a.v)} aria-pressed={amount === a.v}
                className={`rounded-2xl border-2 p-4 text-left transition ${amount === a.v ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                <div className="text-2xl font-black text-slate-900">${a.v}</div>
                <div className="text-xs text-slate-600">{t(a.en, a.es)}</div>
              </button>
            ))}
          </div>
          <a id="donate-secure-checkout" href={ORG.donateUrl} target="_blank" rel="noopener noreferrer"
            className="block text-center w-full rounded-2xl py-4 font-black text-lg text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg hover:brightness-110 transition">
            🔒 {t('Donate securely', 'Donar de forma segura')}
          </a>
          <p className="mt-3 text-xs text-center text-slate-500">
            {t(
              `You will be redirected to our secure Square checkout (HTTPS, PCI-compliant). Enter $${amount} or any amount you choose. We never see or store your card details.`,
              `Será redirigido a nuestro pago seguro de Square (HTTPS, cumple con PCI). Ingrese $${amount} o la cantidad que usted elija. Nunca vemos ni guardamos los datos de su tarjeta.`
            )}
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs text-slate-500">
            <span>🔒 {t('SSL encrypted', 'Cifrado SSL')}</span><span>💳 {t('Cards, Apple Pay, Google Pay', 'Tarjetas, Apple Pay, Google Pay')}</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-700">
          <h2 className="text-2xl font-extrabold text-slate-900">{t('Where your money goes', 'A dónde va su dinero')}</h2>
          <p>{t('Your donation funds direct services for seniors in our Miami-Dade pilot complex: groceries, hygiene supplies, vitamins and over-the-counter health items, and celebrations that fight isolation. Our volunteers donate their time, keeping overhead low.', 'Su donación financia servicios directos para adultos mayores en nuestro complejo piloto de Miami-Dade: alimentos, artículos de higiene, vitaminas y productos de salud de venta libre, y celebraciones que combaten el aislamiento. Nuestros voluntarios donan su tiempo, lo que mantiene bajos los gastos administrativos.')}</p>
          <h3 className="text-xl font-extrabold text-slate-900">{t('Other ways to give', 'Otras formas de ayudar')}</h3>
          <ul className="space-y-2">
            <li>📦 <strong>{t('In-kind donations', 'Donaciones en especie')}</strong> — {t('non-perishable food, hygiene items, adult diapers.', 'alimentos no perecederos, artículos de higiene, pañales para adultos.')} <Link to="/contact" className="text-emerald-700 underline">{t('Contact us', 'Contáctenos')}</Link> {t('to arrange drop-off.', 'para coordinar la entrega.')}</li>
            <li>🏢 <strong>{t('Corporate matching & sponsorships', 'Donaciones equivalentes de empresas y patrocinios')}</strong> — {t('ask your employer to match your gift.', 'pida a su empleador que iguale su donación.')}</li>
            <li>🤝 <strong>{t('Give your time', 'Done su tiempo')}</strong> — <Link to="/volunteer" className="text-emerald-700 underline">{t('become a volunteer', 'hágase voluntario')}</Link>.</li>
          </ul>
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <p className="font-bold mb-1">{t('Tax information', 'Información fiscal')}</p>
            <p className="text-slate-300 text-sm">{ORG.name} {t(`is a ${ORG.legalStatus}`, 'es una organización sin fines de lucro 501(c)(3)')}. EIN: <strong className="text-white">{ORG.ein}</strong>. {t('You will receive an emailed receipt for your records. Questions?', 'Recibirá un recibo por correo electrónico para sus registros. ¿Preguntas?')} <a href={`mailto:${ORG.email}`} className="underline">{ORG.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
