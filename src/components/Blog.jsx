import React, { useState } from 'react';
import { Link, useT, useLang } from '../router';

// Each post stores English and Spanish text side by side. `category` is the
// English key (used for colors/filtering); its label is translated below.
const posts = [
  {
    id: 16,
    category: 'Events',
    image: '/images/events_thanksgiving.webp',
    en: {
      date: 'October 13, 2026',
      title: 'Help Us Give Our Seniors an Unforgettable Thanksgiving Dinner',
      excerpt:
        'This November we want to bring an unforgettable Thanksgiving dinner to the seniors of all three buildings we serve — many of whom would otherwise spend the holiday alone. We are seeking sponsors, donations and volunteers to cover the meals, set the tables, serve the food and share an evening of gratitude and company. Every contribution helps put a warm plate and a smile in front of a senior who gave so much to our community.',
      readTime: '2 min read',
    },
    es: {
      date: '13 de octubre de 2026',
      title: 'Ayúdenos a regalarles a nuestros adultos mayores una cena de Acción de Gracias inolvidable',
      excerpt:
        'Este noviembre queremos llevar una cena de Acción de Gracias inolvidable a los adultos mayores de los tres edificios que atendemos — muchos de los cuales, de otro modo, pasarían la fecha solos. Buscamos patrocinadores, donaciones y voluntarios para cubrir las comidas, poner las mesas, servir los platos y compartir una velada de gratitud y compañía. Cada aporte ayuda a poner un plato caliente y una sonrisa frente a un adulto mayor que tanto le ha dado a nuestra comunidad.',
      readTime: '2 min de lectura',
    },
  },
  {
    id: 15,
    category: 'Impact',
    image: '/images/hygiene_donations.webp',
    en: {
      date: 'October 11, 2026',
      title: 'Door-to-Door: Donations Delivered to Every Senior in Our Three Buildings',
      excerpt:
        'This past weekend our volunteers held donation and assistance events across the three residential buildings we serve, delivering help directly to the door of each senior’s apartment. No one had to travel to a food bank, wait in line or carry heavy bags — the support came to them. For many residents with limited mobility, this is the difference between having what they need and going without.',
      readTime: '3 min read',
    },
    es: {
      date: '11 de octubre de 2026',
      title: 'Puerta a puerta: donaciones entregadas a cada adulto mayor de nuestros tres edificios',
      excerpt:
        'El pasado fin de semana, nuestros voluntarios realizaron jornadas de donación y asistencia en los tres edificios residenciales que atendemos, llevando la ayuda directamente a la puerta del apartamento de cada adulto mayor. Nadie tuvo que ir a un banco de alimentos, hacer fila ni cargar bolsas pesadas — la ayuda llegó hasta ellos. Para muchos residentes con movilidad limitada, esto marca la diferencia entre tener lo que necesitan y quedarse sin ello.',
      readTime: '3 min de lectura',
    },
  },
  {
    id: 14,
    category: 'Resources',
    image: '/images/medicine.webp',
    en: {
      date: 'October 10, 2026',
      title: 'Medicare Open Enrollment Starts October 15: A Checklist for Seniors',
      excerpt:
        'Medicare Open Enrollment runs from October 15 to December 7. This is the one time each year when seniors can switch Medicare Advantage or Part D drug plans. Our volunteers are offering free help reviewing plan letters at our pilot complex.',
      readTime: '4 min read',
    },
    es: {
      date: '10 de octubre de 2026',
      title: 'La inscripción abierta de Medicare comienza el 15 de octubre: una lista de verificación para adultos mayores',
      excerpt:
        'La inscripción abierta de Medicare va del 15 de octubre al 7 de diciembre. Es la única época del año en que los adultos mayores pueden cambiar de plan Medicare Advantage o de plan de medicamentos de la Parte D. Nuestros voluntarios ofrecen ayuda gratuita para revisar las cartas de los planes en nuestro complejo piloto.',
      readTime: '4 min de lectura',
    },
  },
  {
    id: 13,
    category: 'Volunteer',
    image: '/images/volunteers_white.webp',
    en: {
      date: 'September 22, 2026',
      title: 'Fall 2026 Volunteer Orientation: Join Our Next Group',
      excerpt:
        'We are welcoming a new group of volunteers this fall for grocery deliveries, friendly visits and phone check-ins. Sign up through our Volunteer page and we will contact you with the next orientation date.',
      readTime: '2 min read',
    },
    es: {
      date: '22 de septiembre de 2026',
      title: 'Orientación de voluntarios otoño 2026: únase a nuestro próximo grupo',
      excerpt:
        'Este otoño damos la bienvenida a un nuevo grupo de voluntarios para entregas de víveres, visitas amistosas y llamadas de seguimiento. Inscríbase en nuestra página de Voluntariado y nos comunicaremos con usted para informarle la fecha de la próxima orientación.',
      readTime: '2 min de lectura',
    },
  },
  {
    id: 12,
    category: 'Resources',
    image: '/images/hygiene.webp',
    en: {
      date: 'August 18, 2026',
      title: 'Hurricane Season Preparedness for Seniors Living Alone',
      excerpt:
        'Hurricane season in South Florida runs through November 30. We share a simple preparedness checklist for older adults: a two-week medication supply, copies of documents, water and food, and registering with the Miami-Dade Emergency & Evacuation Assistance Program.',
      readTime: '5 min read',
    },
    es: {
      date: '18 de agosto de 2026',
      title: 'Preparación para la temporada de huracanes para adultos mayores que viven solos',
      excerpt:
        'La temporada de huracanes en el sur de la Florida se extiende hasta el 30 de noviembre. Compartimos una sencilla lista de preparación para adultos mayores: un suministro de medicamentos para dos semanas, copias de documentos, agua y alimentos, y la inscripción en el Programa de Asistencia de Emergencia y Evacuación de Miami-Dade.',
      readTime: '5 min de lectura',
    },
  },
  {
    id: 1,
    category: 'Events',
    image: '/images/events_thanksgiving.webp',
    en: {
      date: 'November 28, 2024',
      title: 'Thanksgiving Celebration: Gratitude and Joy for Our Seniors',
      excerpt:
        'This Thanksgiving, our volunteers gathered to deliver warm meals, share stories, and celebrate with the seniors in our pilot complex in Miami-Dade. More than 120 elders participated in this special day of gratitude, laughter, and community.',
      readTime: '3 min read',
    },
    es: {
      date: '28 de noviembre de 2024',
      title: 'Celebración de Acción de Gracias: gratitud y alegría para nuestros adultos mayores',
      excerpt:
        'Este Día de Acción de Gracias, nuestros voluntarios se reunieron para entregar comidas calientes, compartir historias y celebrar con los adultos mayores de nuestro complejo piloto en Miami-Dade. Más de 120 adultos mayores participaron en este día especial de gratitud, risas y comunidad.',
      readTime: '3 min de lectura',
    },
  },
  {
    id: 2,
    category: 'Events',
    image: '/images/events_mothers_day.webp',
    en: {
      date: 'May 12, 2024',
      title: "Mother's Day: Honoring Every Senior Who Gave Us Life",
      excerpt:
        'We organized a special Mother\'s Day celebration to honor the incredible women in our community. Flowers, personalized cards, and heartfelt moments made this day unforgettable for dozens of seniors who are too often forgotten.',
      readTime: '2 min read',
    },
    es: {
      date: '12 de mayo de 2024',
      title: 'Día de las Madres: un homenaje a cada adulta mayor que nos dio la vida',
      excerpt:
        'Organizamos una celebración especial del Día de las Madres para honrar a las mujeres increíbles de nuestra comunidad. Flores, tarjetas personalizadas y momentos llenos de cariño hicieron de este día algo inolvidable para decenas de adultas mayores que con demasiada frecuencia son olvidadas.',
      readTime: '2 min de lectura',
    },
  },
  {
    id: 3,
    category: 'Community',
    image: '/images/carmen_birthday.webp',
    en: {
      date: 'March 15, 2024',
      title: 'A Birthday Worth Remembering: Carmen\'s Story',
      excerpt:
        'Carmen turned 84 years old, and thanks to our volunteers, she did not celebrate alone. This is the kind of impact we strive for every day — reminding every senior that they are seen, loved, and valued by their community.',
      readTime: '3 min read',
    },
    es: {
      date: '15 de marzo de 2024',
      title: 'Un cumpleaños para recordar: la historia de Carmen',
      excerpt:
        'Carmen cumplió 84 años y, gracias a nuestros voluntarios, no lo celebró sola. Este es el tipo de impacto que buscamos cada día — recordarle a cada adulto mayor que su comunidad lo ve, lo quiere y lo valora.',
      readTime: '3 min de lectura',
    },
  },
  {
    id: 4,
    category: 'Impact',
    image: '/images/donation.webp',
    en: {
      date: 'February 3, 2024',
      title: '2,400+ Deliveries and Counting: Our Journey So Far',
      excerpt:
        'From food packages and hygiene kits to medicine support and companionship — our team of dedicated volunteers has completed over 2,400 deliveries to seniors in Miami-Dade. Here\'s a look at the numbers behind our mission.',
      readTime: '4 min read',
    },
    es: {
      date: '3 de febrero de 2024',
      title: 'Más de 2,400 entregas y contando: nuestro recorrido hasta ahora',
      excerpt:
        'Desde paquetes de alimentos y kits de higiene hasta apoyo con medicamentos y compañía — nuestro equipo de voluntarios dedicados ha completado más de 2,400 entregas a adultos mayores en Miami-Dade. Aquí le mostramos las cifras detrás de nuestra misión.',
      readTime: '4 min de lectura',
    },
  },
  {
    id: 5,
    category: 'Volunteer',
    image: '/images/volunteer_white_logo.webp',
    en: {
      date: 'January 10, 2024',
      title: 'Join Our Volunteer Network — Your Time Changes Lives',
      excerpt:
        'Our volunteers are the heartbeat of The Golden Years Foundation. From weekend delivery runs to companionship visits, there are many ways to get involved and make a real difference in the lives of isolated seniors.',
      readTime: '3 min read',
    },
    es: {
      date: '10 de enero de 2024',
      title: 'Únase a nuestra red de voluntarios — su tiempo cambia vidas',
      excerpt:
        'Nuestros voluntarios son el corazón de The Golden Years Foundation. Desde rutas de entrega los fines de semana hasta visitas de compañía, hay muchas maneras de participar y marcar una diferencia real en la vida de adultos mayores aislados.',
      readTime: '3 min de lectura',
    },
  },
  {
    id: 6,
    category: 'Mission',
    image: '/images/events_gathering.webp',
    en: {
      date: 'December 1, 2023',
      title: 'Why We Started: The Crisis of Senior Isolation in Miami-Dade',
      excerpt:
        'Over 40% of seniors in the United States report feeling lonely on a regular basis. In Miami-Dade, thousands of elders live without family support, adequate nutrition, or access to medicine. This is why The Golden Years Foundation exists.',
      readTime: '5 min read',
    },
    es: {
      date: '1 de diciembre de 2023',
      title: 'Por qué empezamos: la crisis del aislamiento de los adultos mayores en Miami-Dade',
      excerpt:
        'Más del 40% de los adultos mayores en los Estados Unidos dicen sentirse solos con frecuencia. En Miami-Dade, miles de adultos mayores viven sin apoyo familiar, sin una nutrición adecuada o sin acceso a medicamentos. Por eso existe The Golden Years Foundation.',
      readTime: '5 min de lectura',
    },
  },
  {
    id: 7,
    category: 'Resources',
    image: '/images/medicine.webp',
    en: {
      date: 'May 1, 2025',
      title: 'Medicare 2025: Key Changes Every Senior Needs to Know',
      excerpt:
        'The 2025 Medicare updates bring significant changes: a new $2,000 cap on out-of-pocket drug costs, expanded mental health coverage, and broader Medicare Advantage benefits. Here is what every senior needs to know to make the most of their benefits this year.',
      readTime: '5 min read',
    },
    es: {
      date: '1 de mayo de 2025',
      title: 'Medicare 2025: cambios clave que todo adulto mayor debe conocer',
      excerpt:
        'Las actualizaciones de Medicare para 2025 traen cambios importantes: un nuevo límite de $2,000 en los gastos de bolsillo por medicamentos, mayor cobertura de salud mental y beneficios más amplios de Medicare Advantage. Esto es lo que todo adulto mayor debe saber para aprovechar al máximo sus beneficios este año.',
      readTime: '5 min de lectura',
    },
  },
  {
    id: 8,
    category: 'Resources',
    image: '/images/vitamins.webp',
    en: {
      date: 'April 15, 2025',
      title: 'Social Security 2025: COLA Increase and What It Means for You',
      excerpt:
        'Social Security recipients received a 2.5% Cost-of-Living Adjustment (COLA) in 2025. Learn how this affects your monthly benefits, the new earnings limits, and how Medicare Part B premiums impact your take-home income this year.',
      readTime: '4 min read',
    },
    es: {
      date: '15 de abril de 2025',
      title: 'Seguro Social 2025: el aumento por COLA y lo que significa para usted',
      excerpt:
        'Los beneficiarios del Seguro Social recibieron un Ajuste por Costo de Vida (COLA) del 2.5% en 2025. Conozca cómo afecta esto a sus beneficios mensuales, los nuevos límites de ingresos y cómo las primas de la Parte B de Medicare influyen en su ingreso neto este año.',
      readTime: '4 min de lectura',
    },
  },
  {
    id: 9,
    category: 'Resources',
    image: '/images/hygiene_donations.webp',
    en: {
      date: 'March 10, 2025',
      title: 'Medicaid vs. Medicare: Understanding the Difference',
      excerpt:
        'Many seniors confuse Medicare and Medicaid, but they are very different programs. This guide breaks down what each covers, who qualifies, and how "dual eligible" seniors in Florida can use both programs together to minimize out-of-pocket healthcare costs.',
      readTime: '6 min read',
    },
    es: {
      date: '10 de marzo de 2025',
      title: 'Medicaid vs. Medicare: entienda la diferencia',
      excerpt:
        'Muchos adultos mayores confunden Medicare y Medicaid, pero son programas muy distintos. Esta guía explica qué cubre cada uno, quién califica y cómo los adultos mayores con "doble elegibilidad" en la Florida pueden usar ambos programas juntos para reducir al mínimo sus gastos médicos de bolsillo.',
      readTime: '6 min de lectura',
    },
  },
  {
    id: 10,
    category: 'Resources',
    image: '/images/food.webp',
    en: {
      date: 'February 20, 2025',
      title: 'Free and Low-Cost Resources for Seniors in Miami-Dade',
      excerpt:
        'From prescription assistance to free meals and transportation, Miami-Dade County offers many programs for seniors. This guide covers the Alliance for Aging, Extra Help, SNAP, SHINE counseling, and more — all available at no cost.',
      readTime: '5 min read',
    },
    es: {
      date: '20 de febrero de 2025',
      title: 'Recursos gratuitos y de bajo costo para adultos mayores en Miami-Dade',
      excerpt:
        'Desde ayuda con recetas médicas hasta comidas y transporte gratuitos, el Condado de Miami-Dade ofrece muchos programas para adultos mayores. Esta guía incluye Alliance for Aging, Extra Help, SNAP, la asesoría SHINE y más — todo sin costo alguno.',
      readTime: '5 min de lectura',
    },
  },
];

const categoryLabels = {
  All: { en: 'All', es: 'Todas' },
  Events: { en: 'Events', es: 'Eventos' },
  Community: { en: 'Community', es: 'Comunidad' },
  Impact: { en: 'Impact', es: 'Impacto' },
  Volunteer: { en: 'Volunteer', es: 'Voluntariado' },
  Mission: { en: 'Mission', es: 'Misión' },
  Resources: { en: 'Resources', es: 'Recursos' },
};

const categoryColors = {
  Events: { bg: 'rgba(16,185,129,0.12)', text: '#10b981' },
  Community: { bg: 'rgba(251,191,36,0.12)', text: '#f59e0b' },
  Impact: { bg: 'rgba(99,102,241,0.12)', text: '#818cf8' },
  Volunteer: { bg: 'rgba(236,72,153,0.12)', text: '#ec4899' },
  Mission: { bg: 'rgba(14,165,233,0.12)', text: '#38bdf8' },
  Resources: { bg: 'rgba(239,68,68,0.12)', text: '#f87171' },
};

export default function Blog({ limit }) {
  const t = useT();
  const lang = useLang();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const catLabel = (c) => (categoryLabels[c] ? categoryLabels[c][lang] || categoryLabels[c].en : c);
  const localize = (p) => ({ ...p, ...(p[lang] || p.en) });

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];
  const all = (filter === 'All' ? posts : posts.filter(p => p.category === filter)).map(localize);
  const filtered = limit ? all.slice(0, limit) : all;

  if (selected) {
    const post = localize(posts.find(p => p.id === selected));
    const cat = categoryColors[post.category] || { bg: 'rgba(16,185,129,0.12)', text: '#10b981' };
    return (
      <section className="relative min-h-screen" style={{ background: 'linear-gradient(160deg, #080d1a 0%, #0a1220 60%, #070c18 100%)' }}>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-2 text-sm font-bold mb-10 transition-colors"
            style={{ color: '#34d399' }}
          >
            {t('← Back to News', '← Volver a Noticias')}
          </button>
          <img src={post.image} alt={post.title} width="1200" height="600" decoding="async" className="w-full h-72 object-cover rounded-3xl mb-8" />
          <span
            className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: cat.bg, color: cat.text }}
          >
            {catLabel(post.category)}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-4 mb-3 leading-tight">{post.title}</h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(148,163,184,0.6)' }}>{post.date} · {post.readTime}</p>
          <div className="text-base leading-relaxed" style={{ color: 'rgba(203,213,225,0.85)' }}>
            <p className="mb-4">{post.excerpt}</p>
            <p className="mb-4">
              {t(
                'At The Golden Years Foundation, every action we take is rooted in a simple belief: that every senior deserves dignity, care, and community — regardless of their circumstances. Our team of dedicated volunteers works tirelessly to ensure that no elder in Miami-Dade feels forgotten or alone.',
                'En The Golden Years Foundation, cada acción que realizamos nace de una convicción sencilla: todo adulto mayor merece dignidad, cuidado y comunidad — sin importar sus circunstancias. Nuestro equipo de voluntarios dedicados trabaja incansablemente para que ningún adulto mayor en Miami-Dade se sienta olvidado o solo.'
              )}
            </p>
            <p className="mb-4">
              {t(
                'We are a 501(c)(3) nonprofit organization (EIN: 35-2905128) committed to long-term, sustainable impact. With your support — whether through donations, volunteering, or simply spreading the word — we can continue to reach more seniors every day.',
                'Somos una organización sin fines de lucro 501(c)(3) (EIN: 35-2905128) comprometida con un impacto sostenible a largo plazo. Con su apoyo — ya sea mediante donaciones, voluntariado o simplemente corriendo la voz — podemos seguir llegando a más adultos mayores cada día.'
              )}
            </p>
            {lang === 'es' ? (
              <p>
                ¿Quiere participar? Hágase <Link to="/volunteer" style={{ color: '#34d399' }}>voluntario</Link>, <Link to="/donate" style={{ color: '#34d399' }}>done</Link> o escríbanos a <a href="mailto:info@thegoldenyearsfoundation.com" style={{ color: '#34d399' }}>info@thegoldenyearsfoundation.com</a>.
              </p>
            ) : (
              <p>
                Want to get involved? <Link to="/volunteer" style={{ color: '#34d399' }}>Volunteer</Link>, <Link to="/donate" style={{ color: '#34d399' }}>donate</Link>, or reach out at <a href="mailto:info@thegoldenyearsfoundation.com" style={{ color: '#34d399' }}>info@thegoldenyearsfoundation.com</a>.
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="relative overflow-hidden border-t"
      style={{ background: 'linear-gradient(160deg, #080d1a 0%, #0a1220 60%, #070c18 100%)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)', transform: 'translate(25%,-25%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 65%)', transform: 'translate(-25%, 25%)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(16,185,129,0.10)', borderColor: 'rgba(16,185,129,0.25)', color: '#34d399' }}>
            {t('📰 News & Stories', '📰 Noticias e historias')}
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {t('Our Impact, ', 'Nuestro impacto, ')}<span style={{ color: '#34d399' }}>{t('In Their Words', 'en sus propias palabras')}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(148,163,184,0.75)' }}>
            {t('Real stories, events, and updates from the heart of our mission in Miami-Dade.', 'Historias reales, eventos y novedades desde el corazón de nuestra misión en Miami-Dade.')}
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap gap-2 justify-center mb-12 ${limit ? 'hidden' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
              style={
                filter === cat
                  ? { background: '#10b981', color: '#fff' }
                  : { background: 'rgba(255,255,255,0.06)', color: 'rgba(148,163,184,0.75)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {catLabel(cat)}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => {
            const cat = categoryColors[post.category] || { bg: 'rgba(16,185,129,0.12)', text: '#10b981' };
            return (
              <article
                key={post.id}
                onClick={() => setSelected(post.id)}
                className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.7) 0%, transparent 60%)' }} />
                  <span
                    className="absolute top-3 left-3 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: cat.bg, color: cat.text, backdropFilter: 'blur(8px)' }}
                  >
                    {catLabel(post.category)}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs mb-3" style={{ color: 'rgba(148,163,184,0.5)' }}>{post.date} · {post.readTime}</p>
                  <h3 className="text-base font-extrabold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'rgba(148,163,184,0.7)' }}>
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-bold" style={{ color: '#34d399' }}>
                    {t('Read more', 'Leer más')} <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {limit && (
          <div className="text-center mt-12">
            <Link to="/news" id="home-all-news" className="inline-block rounded-full px-8 py-3 font-bold text-white border border-emerald-400/40 hover:bg-emerald-500/10 transition">
              {t('See all news & updates →', 'Ver todas las noticias y novedades →')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
