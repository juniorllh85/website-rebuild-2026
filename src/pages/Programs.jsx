import React from 'react';
import { PageHero, CtaBand } from '../components/PageParts';
import { Link, useSeo, useT, useLang } from '../router';

// Each program stores English and Spanish text side by side.
const programs = [
  {
    id: 'food',
    image: '/images/food.webp',
    en: {
      title: 'Food Security Deliveries',
      summary: 'Regular grocery deliveries so no senior goes hungry at the end of the month.',
      body: [
        'Many of the seniors we serve live on Social Security alone. By the last week of the month, the refrigerator is often empty. Our volunteers deliver bags of non-perishable staples, fresh produce when available and easy-to-prepare meals directly to residents’ doors.',
        'Deliveries are scheduled, not random. Each senior is visited by familiar faces, which also gives us a chance to check on their wellbeing.',
      ],
      impact: 'A $25 donation covers about one week of groceries for one senior.',
    },
    es: {
      title: 'Entregas de seguridad alimentaria',
      summary: 'Entregas regulares de víveres para que ningún adulto mayor pase hambre a fin de mes.',
      body: [
        'Muchos de los adultos mayores que atendemos viven únicamente del Seguro Social. Para la última semana del mes, el refrigerador suele estar vacío. Nuestros voluntarios entregan bolsas con alimentos no perecederos, productos frescos cuando hay disponibles y comidas fáciles de preparar directamente en la puerta de los residentes.',
        'Las entregas son programadas, no al azar. Cada adulto mayor recibe la visita de caras conocidas, lo que también nos permite ver cómo se encuentra.',
      ],
      impact: 'Una donación de $25 cubre aproximadamente una semana de víveres para un adulto mayor.',
    },
  },
  {
    id: 'medicine',
    image: '/images/medicine.webp',
    en: {
      title: 'Medicine & Health Support',
      summary: 'Helping seniors keep up with medications, vitamins and health benefits.',
      body: [
        'We help seniors stay on track with their prescriptions by connecting them with pharmacy assistance programs, providing over-the-counter essentials and vitamins, and helping them understand Medicare, Medicaid and Extra Help letters.',
        'We do not provide medical care ourselves; we connect residents with licensed providers and public programs and remove the small barriers that cause people to stop treatment.',
      ],
      impact: 'A $50 donation supplies a month of vitamins and basic health items for two seniors.',
    },
    es: {
      title: 'Apoyo con medicamentos y salud',
      summary: 'Ayudamos a los adultos mayores a mantenerse al día con sus medicamentos, vitaminas y beneficios de salud.',
      body: [
        'Ayudamos a los adultos mayores a seguir al día con sus recetas conectándolos con programas de asistencia farmacéutica, proporcionándoles artículos básicos de venta libre y vitaminas, y ayudándoles a entender las cartas de Medicare, Medicaid y Extra Help.',
        'No brindamos atención médica directamente; conectamos a los residentes con proveedores autorizados y programas públicos, y eliminamos las pequeñas barreras que hacen que las personas abandonen su tratamiento.',
      ],
      impact: 'Una donación de $50 provee un mes de vitaminas y artículos básicos de salud para dos adultos mayores.',
    },
  },
  {
    id: 'hygiene',
    image: '/images/hygiene_donations.webp',
    en: {
      title: 'Hygiene & Dignity Kits',
      summary: 'Personal care kits that protect health and self-esteem.',
      body: [
        'Soap, shampoo, toothpaste, adult diapers and cleaning supplies are expensive and are not covered by food assistance. Our dignity kits are assembled by volunteers and delivered with discretion.',
        'Good hygiene prevents infections and falls, and helps seniors feel confident enough to leave their apartments and socialize.',
      ],
      impact: 'A $15 donation provides one complete hygiene kit.',
    },
    es: {
      title: 'Kits de higiene y dignidad',
      summary: 'Kits de cuidado personal que protegen la salud y la autoestima.',
      body: [
        'El jabón, el champú, la pasta de dientes, los pañales para adultos y los productos de limpieza son costosos y no los cubre la asistencia alimentaria. Nuestros kits de dignidad son armados por voluntarios y entregados con discreción.',
        'Una buena higiene previene infecciones y caídas, y ayuda a los adultos mayores a sentirse con la confianza suficiente para salir de sus apartamentos y socializar.',
      ],
      impact: 'Una donación de $15 provee un kit de higiene completo.',
    },
  },
  {
    id: 'companionship',
    image: '/images/events_thanksgiving.webp',
    en: {
      title: 'Companionship & Celebrations',
      summary: 'Birthdays, holidays and friendly visits that fight loneliness.',
      body: [
        'Loneliness is as harmful as many physical illnesses. We celebrate residents’ birthdays, host Thanksgiving, Mother’s Day and holiday gatherings, and organize regular friendly visits and phone calls.',
        'For many residents, these moments are the only celebrations they have all year.',
      ],
      impact: 'A $100 donation funds a birthday celebration for an entire floor.',
    },
    es: {
      title: 'Compañía y celebraciones',
      summary: 'Cumpleaños, días festivos y visitas amistosas que combaten la soledad.',
      body: [
        'La soledad es tan dañina como muchas enfermedades físicas. Celebramos los cumpleaños de los residentes, organizamos reuniones de Acción de Gracias, del Día de las Madres y de las fiestas, y coordinamos visitas amistosas y llamadas telefónicas regulares.',
        'Para muchos residentes, estos momentos son las únicas celebraciones que tienen en todo el año.',
      ],
      impact: 'Una donación de $100 financia una celebración de cumpleaños para todo un piso.',
    },
  },
  {
    id: 'benefits',
    image: '/images/vitamins.webp',
    en: {
      title: 'Benefits Navigation & Resources',
      summary: 'Guidance on Social Security, Medicare, SNAP and local senior programs.',
      body: [
        'Government programs can be confusing, especially for seniors with limited English or internet access. Volunteers help residents read letters, find the right phone numbers and connect with services such as SNAP, the Alliance for Aging and SHINE Medicare counseling.',
        'We also publish plain-language guides on our news page.',
      ],
      impact: 'Free for every senior we serve.',
    },
    es: {
      title: 'Orientación sobre beneficios y recursos',
      summary: 'Orientación sobre el Seguro Social, Medicare, SNAP y programas locales para adultos mayores.',
      body: [
        'Los programas del gobierno pueden ser confusos, especialmente para adultos mayores con poco inglés o sin acceso a internet. Los voluntarios ayudan a los residentes a leer cartas, encontrar los números de teléfono correctos y conectarse con servicios como SNAP, Alliance for Aging y la asesoría de Medicare SHINE.',
        'También publicamos guías en lenguaje sencillo en nuestra página de noticias.',
      ],
      impact: 'Gratis para cada adulto mayor que atendemos.',
    },
  },
];

export default function Programs() {
  const t = useT();
  const lang = useLang();
  useSeo({
    path: '/programs',
    title: t('Programs & Services for Seniors | The Golden Years Foundation', 'Programas y servicios para adultos mayores | The Golden Years Foundation'),
    description: t(
      'Food deliveries, medicine and health support, hygiene kits, companionship and benefits navigation for low-income seniors in Miami-Dade, FL.',
      'Entregas de alimentos, apoyo con medicamentos y salud, kits de higiene, compañía y orientación sobre beneficios para adultos mayores de bajos ingresos en Miami-Dade, FL.'
    ),
  });

  const list = programs.map((p) => ({ ...p, ...(p[lang] || p.en) }));

  return (
    <>
      <PageHero eyebrow={t('Programs & Services', 'Programas y servicios')} title={t('Practical help, delivered with love', 'Ayuda práctica, entregada con amor')}
        subtitle={t('Five programs working together to keep Miami-Dade seniors fed, healthy, clean and connected.', 'Cinco programas que trabajan juntos para que los adultos mayores de Miami-Dade estén alimentados, sanos, limpios y acompañados.')}
        image="/images/hygiene.webp" />

      <nav aria-label={t('Programs', 'Programas')} className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex gap-2 overflow-x-auto text-sm font-semibold">
          {list.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 transition">{p.title}</a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {list.map((p, i) => (
          <article key={p.id} id={p.id} className={`grid md:grid-cols-2 gap-10 items-center scroll-mt-32 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <img src={p.image} alt={p.title} width="800" height="600" loading="lazy" decoding="async" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{p.title}</h2>
              <p className="text-lg text-emerald-700 font-semibold mb-4">{p.summary}</p>
              {p.body.map((para, k) => <p key={k} className="text-slate-700 leading-relaxed mb-4">{para}</p>)}
              <div className="rounded-2xl bg-amber-50 border border-amber-200 px-5 py-4 text-amber-900 font-semibold mb-5">💡 {p.impact}</div>
              <div className="flex flex-wrap gap-3">
                <Link to="/donate" className="rounded-xl px-5 py-3 font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110">{t('Support this program', 'Apoye este programa')}</Link>
                <Link to="/volunteer" className="rounded-xl px-5 py-3 font-bold text-emerald-700 border border-emerald-200 hover:bg-emerald-50">{t('Volunteer', 'Sea voluntario')}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
