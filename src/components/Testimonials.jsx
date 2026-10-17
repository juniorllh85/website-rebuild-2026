import React from 'react';
import { useLang } from '../router';

export default function Testimonials({ onDonateClick }) {
  const lang = useLang();
  const es = lang === 'es';
  const tr = (en, esText) => (es ? esText : en);
  const testimonials = [
    {
      id: 1,
      name: tr("María R., 81 years", "María R., 81 años"),
      text: tr("When they knocked on my door with flowers on Mother's Day, I hadn't left my apartment in three weeks. I thought no one remembered I existed. That hug from the volunteer changed everything. I started looking forward to mornings again, waiting to see who would visit me next. For the first time in years, I felt like someone's mother again — not just an old woman forgotten by the world.", "Cuando tocaron a mi puerta con flores el Día de las Madres, yo llevaba tres semanas sin salir de mi apartamento. Pensaba que nadie se acordaba de que yo existía. Ese abrazo de la voluntaria lo cambió todo. Volví a esperar las mañanas con ilusión, pendiente de quién vendría a visitarme. Por primera vez en años me sentí madre otra vez, no solo una viejita olvidada por el mundo."),
      initials: "MR",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      image: "/images/events_mothers_day.webp",
      badge: tr("🌹 Mother's Day Event", "🌹 Evento del Día de las Madres"),
      color: "amber"
    },
    {
      id: 2,
      name: tr("Alberto G., 76 years", "Alberto G., 76 años"),
      text: tr("I used to skip meals to make my medication copay last. Since the foundation started bringing groceries, I no longer have to choose between eating and my heart medicine. I've gained back 8 pounds and my doctor says my labs are the best in five years. I feel like I have a future again.", "Yo me saltaba comidas para que me alcanzara el copago de las medicinas. Desde que la fundación empezó a traerme alimentos, ya no tengo que escoger entre comer y mi medicina del corazón. Recuperé 8 libras y mi médico dice que mis análisis son los mejores en cinco años. Siento que tengo futuro otra vez."),
      initials: "AG",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      image: "/images/food.webp",
      badge: tr("🍱 Nutrition Program", "🍱 Programa de nutrición"),
      color: "emerald"
    },
    {
      id: 3,
      name: tr("José M., 84 years", "José M., 84 años"),
      initials: "JM",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      text: tr("I had spent four Thanksgivings alone watching TV with a frozen dinner. At the foundation's dinner I laughed so much my cheeks hurt. I met Doña Carmen, now my best friend — we knock on each other's doors every morning. Loneliness was killing me silently. Not anymore.", "Había pasado cuatro Días de Acción de Gracias solo, viendo televisión con una cena congelada. En la cena de la fundación me reí tanto que me dolían las mejillas. Conocí a Doña Carmen, que ahora es mi mejor amiga: cada mañana nos tocamos la puerta el uno al otro. La soledad me estaba matando en silencio. Ya no."),
      image: "/images/events_thanksgiving.webp",
      badge: tr("🎉 Thanksgiving", "🎉 Acción de Gracias"),
      color: "violet"
    },
    {
      id: 4,
      name: tr("Elena R., 88 years", "Elena R., 88 años"),
      initials: "ER",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      text: tr("At 88, arthritis makes it hard to shop. When they brought the hygiene kit to my door, I cried. Not from sadness — from gratitude. I feel clean, cared for, and dignified. My daughter lives far away and those small packages give me the same feeling as when she used to take care of me. Thank you from the bottom of my heart.", "A los 88 años, la artritis me hace difícil ir de compras. Cuando me trajeron el kit de higiene a la puerta, lloré. No de tristeza, sino de gratitud. Me siento limpia, cuidada y digna. Mi hija vive lejos y esos paquetitos me hacen sentir lo mismo que cuando ella me cuidaba. Gracias de todo corazón."),
      image: "/images/hygiene.webp",
      badge: tr("🧼 Dignity Kits", "🧼 Kits de dignidad"),
      color: "amber"
    },
    {
      id: 5,
      name: tr("Rosa P., 73 years", "Rosa P., 73 años"),
      initials: "RP",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      text: tr("My insulin was costing me $240 a month. I was rationing my doses — which my doctor told me was extremely dangerous. The foundation stepped in and covered the gap. Three months later my A1C dropped from 9.8 to 7.1. My doctor said it's like I have a personal advocate watching over me. I do — and I thank God for them every day.", "La insulina me costaba $240 al mes. Estaba racionando las dosis, algo que mi médico me dijo que era sumamente peligroso. La fundación me ayudó a cubrir la diferencia. Tres meses después, mi A1C bajó de 9.8 a 7.1. Mi médico dice que es como tener a alguien que vela por mí. Y así es: le doy gracias a Dios por ellos todos los días."),
      image: "/images/medicine.webp",
      badge: tr("💊 Medicine Support", "💊 Apoyo con medicamentos"),
      color: "rose"
    },
    {
      id: 6,
      name: tr("Carmen M., 90 years", "Carmen M., 90 años"),
      initials: "CM",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      text: tr("I turned 90 believing no one would notice. Then they knocked on my door with balloons, a cake, and ten neighbors I'd never properly spoken to. We sang, we told stories, we laughed until we cried. My doctor had told my son I was showing signs of early depression from isolation. After that birthday, something in me reignited. I started leaving my apartment daily. My son says I look 10 years younger. I tell him — I feel like I have a reason to be here again.", "Cumplí 90 años creyendo que nadie se daría cuenta. Entonces tocaron a mi puerta con globos, un pastel y diez vecinos con los que nunca había hablado de verdad. Cantamos, contamos historias y nos reímos hasta llorar. Mi médico le había dicho a mi hijo que yo mostraba señales de depresión por el aislamiento. Después de ese cumpleaños, algo en mí se volvió a encender. Empecé a salir de mi apartamento todos los días. Mi hijo dice que parezco 10 años más joven. Yo le digo que siento que tengo una razón para estar aquí otra vez."),
      image: "/images/carmen_birthday_custom.webp",
      badge: tr("🎂 Birthday Celebration", "🎂 Celebración de cumpleaños"),
      color: "pink",
      wide: true
    },
    {
      id: 7,
      name: tr("Fernando G., 79 years", "Fernando G., 79 años"),
      initials: "FG",
      location: tr("Pilot Building · Miami-Dade", "Edificio piloto · Miami-Dade"),
      text: tr("After my wife passed away, I stopped talking. Weeks went by without a single conversation. A volunteer named Carlos started visiting every Thursday. We play chess. We talk about baseball. Now I count the days to Thursday. He doesn't know it, but he saved my life. A man at 79 needs to feel he still matters.", "Después de que falleció mi esposa, dejé de hablar. Pasaban semanas sin una sola conversación. Un voluntario llamado Carlos empezó a visitarme cada jueves. Jugamos ajedrez. Hablamos de pelota. Ahora cuento los días para que llegue el jueves. Él no lo sabe, pero me salvó la vida. Un hombre a los 79 años necesita sentir que todavía importa."),
      image: "/images/volunteer_white_logo.webp",
      badge: tr("🤝 Volunteer Visit", "🤝 Visita de voluntario"),
      color: "teal"
    }
  ];

  return (
    <section id="testimonios" className="relative overflow-hidden border-t" style={{ background: 'linear-gradient(180deg, #080d1a 0%, #0a1220 50%, #070c18 100%)' }}>
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(251,191,36,0.07) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(251,191,36,0.10)', borderColor: 'rgba(251,191,36,0.25)', color: '#fbbf24' }}>
            {tr('❤️ Stories of Hope', '❤️ Historias de esperanza')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            {tr('Lives changed.', 'Vidas transformadas.')}{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {tr('Hope restored.', 'Esperanza renovada.')}
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
            {tr('These are real voices from the seniors we serve — their words, their transformation, their renewed reason to live.', 'Estas son voces reales de los adultos mayores que atendemos: sus palabras, su transformación, sus nuevas ganas de vivir.')}
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`group rounded-3xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 ${t.wide ? 'md:col-span-2' : ''}`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
            >
              <div className="h-52 rounded-2xl overflow-hidden mb-5 relative">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.6) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(251,191,36,0.85)', color: '#0a0f1e' }}>{t.badge}</div>
              </div>
              <div className={`text-${t.color}-400 text-3xl mb-3 leading-none`}>"</div>
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: 'rgba(226,232,240,0.9)' }}>
                {t.text}
              </p>
              <div className="mt-5 flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0" style={{ background: `linear-gradient(135deg, #fbbf24, #f59e0b)` }}>{t.initials}</div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: '#34d399' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donate CTA under testimonials */}
        <div className="mt-14 text-center">
          <p className="text-lg mb-6" style={{ color: 'rgba(203,213,225,0.75)' }}>{tr('Your donation writes the next story of hope.', 'Su donación escribe la próxima historia de esperanza.')}</p>
          <button onClick={() => onDonateClick(50)} className="rounded-full px-10 py-4 text-lg font-black text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#0a0f1e', boxShadow: '0 8px 40px rgba(251,191,36,0.4)' }}>
            {tr('❤️ Be Part of Their Story', '❤️ Sea parte de su historia')}
          </button>
        </div>

      </div>
    </section>
  );
}
