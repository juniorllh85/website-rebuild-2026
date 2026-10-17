import React from 'react';
import { PageHero, InlineForm } from '../components/PageParts';
import { useSeo, useT, useLang } from '../router';

// [English title, English description, Spanish title, Spanish description]
const roles = [
  ['🚚 Delivery driver', 'Pick up groceries and hygiene kits and deliver them to seniors’ doors. 2–3 hours, usually Saturday mornings.',
    '🚚 Conductor de entregas', 'Recoja víveres y kits de higiene y llévelos a la puerta de los adultos mayores. 2–3 horas, normalmente los sábados por la mañana.'],
  ['☕ Friendly visitor', 'Spend an hour a week visiting the same senior for conversation, games or a walk.',
    '☕ Visitante amistoso', 'Dedique una hora a la semana a visitar al mismo adulto mayor para conversar, jugar o salir a caminar.'],
  ['📞 Phone buddy', 'Call isolated seniors once or twice a week from home. Spanish speakers especially needed.',
    '📞 Compañero telefónico', 'Llame desde su casa a adultos mayores aislados una o dos veces por semana. Necesitamos especialmente personas que hablen español.'],
  ['📦 Kit packer', 'Help sort donations and assemble food bags and dignity kits at our packing days.',
    '📦 Empacador de kits', 'Ayude a clasificar donaciones y a armar bolsas de alimentos y kits de dignidad en nuestras jornadas de empaque.'],
  ['🎉 Event helper', 'Help us set up birthday parties, Thanksgiving and holiday celebrations.',
    '🎉 Ayudante de eventos', 'Ayúdenos a preparar fiestas de cumpleaños, celebraciones de Acción de Gracias y de las fiestas.'],
  ['💻 Skilled volunteer', 'Offer marketing, accounting, legal, translation, photography or IT help remotely.',
    '💻 Voluntario profesional', 'Ofrezca ayuda remota en mercadeo, contabilidad, asuntos legales, traducción, fotografía o informática.'],
];

export default function Volunteer() {
  const t = useT();
  const lang = useLang();
  useSeo({
    path: '/volunteer',
    title: t('Volunteer with Seniors in Miami | The Golden Years Foundation', 'Voluntariado con adultos mayores en Miami | The Golden Years Foundation'),
    description: t(
      'Volunteer in Miami-Dade: deliver groceries, visit isolated seniors, make phone calls or help at events. Flexible schedules. Sign up today.',
      'Sea voluntario en Miami-Dade: entregue víveres, visite a adultos mayores aislados, haga llamadas o ayude en eventos. Horarios flexibles. Inscríbase hoy.'
    ),
  });

  const es = lang === 'es';
  const list = roles.map(([te, de, ts, ds]) => (es ? [ts, ds] : [te, de]));
  const roleOptions = es
    ? roles.map((r) => r[2].replace(/^\S+\s/, ''))
    : roles.map((r) => r[0].slice(3));

  return (
    <>
      <PageHero eyebrow={t('Volunteer', 'Voluntariado')} title={t('Give an hour. Change a whole week.', 'Dé una hora. Cambie toda una semana.')}
        subtitle={t('Our volunteers are the heart of the foundation. No special skills needed — just a kind heart and a little time.', 'Nuestros voluntarios son el corazón de la fundación. No se necesitan habilidades especiales — solo un buen corazón y un poco de tiempo.')}
        image="/images/volunteers_white.webp" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">{t('Ways to volunteer', 'Formas de ser voluntario')}</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">{t('Choose what fits your schedule. Individuals, families with teens (16+ with an adult), students needing service hours and corporate groups are all welcome.', 'Elija lo que mejor se ajuste a su horario. Son bienvenidos personas individuales, familias con adolescentes (16+ acompañados de un adulto), estudiantes que necesitan horas de servicio comunitario y grupos corporativos.')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(([title, d]) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{t('How it works', 'Cómo funciona')}</h2>
            {es ? (
              <ol className="space-y-4 text-slate-700">
                <li><strong>1. Inscríbase</strong> usando el formulario.</li>
                <li><strong>2. Llamada breve</strong> — lo conocemos a usted y su disponibilidad.</li>
                <li><strong>3. Orientación</strong> — una sesión de 45 minutos sobre cómo trabajar con respeto junto a los adultos mayores.</li>
                <li><strong>4. Primer turno</strong> — comienza acompañado de un voluntario con experiencia.</li>
              </ol>
            ) : (
              <ol className="space-y-4 text-slate-700">
                <li><strong>1. Sign up</strong> using the form.</li>
                <li><strong>2. Short call</strong> — we get to know you and your availability.</li>
                <li><strong>3. Orientation</strong> — a 45-minute session on working respectfully with seniors.</li>
                <li><strong>4. First shift</strong> — you start alongside an experienced volunteer.</li>
              </ol>
            )}
            <p className="mt-6 text-sm text-slate-500">{t('Volunteers who visit seniors in person must be 18+ and agree to a basic background check for the safety of the people we serve.', 'Los voluntarios que visitan a adultos mayores en persona deben tener 18 años o más y aceptar una verificación básica de antecedentes, por la seguridad de las personas que atendemos.')}</p>
          </div>
          <div className="lg:col-span-3">
            <InlineForm id="volunteer-form" type="voluntariado" submitLabel={t('Sign me up to volunteer', 'Quiero inscribirme como voluntario')} fields={[
              { name: 'fullName', label: t('Full name', 'Nombre completo'), required: true },
              { name: 'email', label: t('Email', 'Correo electrónico'), type: 'email', required: true },
              { name: 'phone', label: t('Phone', 'Teléfono'), type: 'tel', required: true },
              { name: 'availability', label: t('Availability', 'Disponibilidad'), type: 'select', required: true, options: es ? ['Entre semana', 'Fines de semana', 'Por las noches', 'Solo remoto', 'Flexible'] : ['Weekdays', 'Weekends', 'Evenings', 'Remote only', 'Flexible'] },
              { name: 'role', label: t('Preferred role', 'Función preferida'), type: 'select', full: true, options: roleOptions },
              { name: 'motivation', label: t('Tell us a little about yourself', 'Cuéntenos un poco sobre usted'), type: 'textarea', full: true },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
