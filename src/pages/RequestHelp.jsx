import React from 'react';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo, useT } from '../router';
import { ORG } from '../data/site';

export default function RequestHelp() {
  const t = useT();
  useSeo({
    path: '/request-help',
    title: t('Request Help for a Senior | The Golden Years Foundation', 'Solicite ayuda para un adulto mayor | The Golden Years Foundation'),
    description: t('Seniors in Miami-Dade can request free groceries, hygiene kits, medicine support, benefits guidance or a friendly visitor. Family members and caregivers may apply too.', 'Los adultos mayores de Miami-Dade pueden solicitar alimentos gratuitos, kits de higiene, apoyo con medicamentos, orientación sobre beneficios o un visitante amigable. Familiares y cuidadores también pueden solicitarlo.'),
  });

  return (
    <>
      <PageHero eyebrow={t('Request Help', 'Solicitar ayuda')} title={t('You are not alone. We are here to help.', 'Usted no está solo. Estamos aquí para ayudarle.')}
        subtitle={t('If you are a senior (60+) in Miami-Dade — or you are worried about one — tell us what you need. All our services are free.', 'Si usted es un adulto mayor (60+) en Miami-Dade — o le preocupa alguno — díganos qué necesita. Todos nuestros servicios son gratuitos.')}
        image="/images/hero.webp" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6 text-slate-700">
          <h2 className="text-3xl font-extrabold text-slate-900">{t('What we can help with', 'En qué podemos ayudarle')}</h2>
          <ul className="space-y-3">
            <li>🛒 {t('Groceries and food deliveries', 'Alimentos y entregas de comida')}</li>
            <li>🧼 {t('Hygiene and personal care kits', 'Kits de higiene y cuidado personal')}</li>
            <li>💊 {t('Help getting medications and vitamins', 'Ayuda para obtener medicamentos y vitaminas')}</li>
            <li>📄 {t('Understanding Medicare, Medicaid, Social Security and SNAP', 'Orientación sobre Medicare, Medicaid, Seguro Social y SNAP (cupones de alimentos)')}</li>
            <li>☕ {t('A friendly visitor or weekly phone call', 'Un visitante amigable o una llamada semanal')}</li>
          </ul>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
            <p className="font-bold text-emerald-900">{t('Prefer to talk?', '¿Prefiere hablar con alguien?')}</p>
            <p>{t('Call us at', 'Llámenos al')} <a className="underline font-bold" href={ORG.phoneLink}>{ORG.phone}</a> {t('(English & Español).', '(inglés y español).')}</p>
          </div>
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5 text-rose-900">
            <strong>{t('Emergency?', '¿Emergencia?')}</strong> {t('Call', 'Llame al')} <a href="tel:911" className="underline font-bold">911</a>. {t('For the Florida Elder Helpline call', 'Para la Línea de Ayuda para Personas Mayores de Florida (Elder Helpline), llame al')} <a href="tel:18009635337" className="underline font-bold">1-800-963-5337</a>.
          </div>
        </div>
        <div className="lg:col-span-3">
          <InlineForm id="request-help-form" type="solicitud_ayuda" submitLabel={t('Send my request', 'Enviar mi solicitud')} fields={[
            { name: 'fullName', label: t('Senior’s full name', 'Nombre completo del adulto mayor'), required: true },
            { name: 'age', label: t('Age', 'Edad'), type: 'number', required: true },
            { name: 'phone', label: t('Phone', 'Teléfono'), type: 'tel', required: true },
            { name: 'email', label: t('Email (optional)', 'Correo electrónico (opcional)'), type: 'email' },
            { name: 'address', label: t('Neighborhood / building in Miami-Dade', 'Vecindario / edificio en Miami-Dade'), required: true, full: true },
            { name: 'need', label: t('Type of help needed', 'Tipo de ayuda que necesita'), type: 'select', required: true, full: true, options: [t('Food', 'Alimentos'), t('Hygiene kit', 'Kit de higiene'), t('Medicine support', 'Apoyo con medicamentos'), t('Benefits guidance', 'Orientación sobre beneficios'), t('Companionship', 'Compañía'), t('Other', 'Otro')] },
            { name: 'requester', label: t('I am…', 'Yo soy…'), type: 'select', required: true, options: [t('The senior', 'El adulto mayor'), t('Family member', 'Familiar'), t('Caregiver / social worker', 'Cuidador / trabajador social'), t('Neighbor / friend', 'Vecino / amigo')] },
            { name: 'language', label: t('Preferred language', 'Idioma preferido'), type: 'select', options: [t('English', 'Inglés'), 'Español', t('Other', 'Otro')] },
            { name: 'details', label: t('Tell us more about the situation', 'Cuéntenos más sobre la situación'), type: 'textarea', full: true },
          ]} />
        </div>
      </section>
    </>
  );
}
