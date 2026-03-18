import React from 'react';

export default function Testimonials({ onDonateClick }) {
  const testimonials = [
    {
      id: 1,
      name: "María R., 81 years",
      text: "When they knocked on my door with flowers on Mother's Day, I hadn't left my apartment in three weeks. I thought no one remembered I existed. That hug from the volunteer changed everything. I started looking forward to mornings again, waiting to see who would visit me next. For the first time in years, I felt like someone's mother again — not just an old woman forgotten by the world.",
      initials: "MR",
      location: "Pilot Building · Miami-Dade",
      image: "/images/events_mothers_day.png",
      badge: "🌹 Mother's Day Event",
      color: "amber"
    },
    {
      id: 2,
      name: "Alberto G., 76 years",
      text: "I used to skip meals to make my medication copay last. Since the foundation started bringing groceries, I no longer have to choose between eating and my heart medicine. I've gained back 8 pounds and my doctor says my labs are the best in five years. I feel like I have a future again.",
      initials: "AG",
      location: "Pilot Building · Miami-Dade",
      image: "/images/food.png",
      badge: "🍱 Nutrition Program",
      color: "emerald"
    },
    {
      id: 3,
      name: "José M., 84 years",
      initials: "JM",
      location: "Pilot Building · Miami-Dade",
      text: "I had spent four Thanksgivings alone watching TV with a frozen dinner. At the foundation's dinner I laughed so much my cheeks hurt. I met Doña Carmen, now my best friend — we knock on each other's doors every morning. Loneliness was killing me silently. Not anymore.",
      image: "/images/events_thanksgiving.png",
      badge: "🎉 Thanksgiving",
      color: "violet"
    },
    {
      id: 4,
      name: "Elena R., 88 years",
      initials: "ER",
      location: "Pilot Building · Miami-Dade",
      text: "At 88, arthritis makes it hard to shop. When they brought the hygiene kit to my door, I cried. Not from sadness — from gratitude. I feel clean, cared for, and dignified. My daughter lives far away and those small packages give me the same feeling as when she used to take care of me. Thank you from the bottom of my heart.",
      image: "/images/hygiene.png",
      badge: "🧼 Dignity Kits",
      color: "amber"
    },
    {
      id: 5,
      name: "Rosa P., 73 years",
      initials: "RP",
      location: "Pilot Building · Miami-Dade",
      text: "My insulin was costing me $240 a month. I was rationing my doses — which my doctor told me was extremely dangerous. The foundation stepped in and covered the gap. Three months later my A1C dropped from 9.8 to 7.1. My doctor said it's like I have a personal advocate watching over me. I do — and I thank God for them every day.",
      image: "/images/medicine.png",
      badge: "💊 Medicine Support",
      color: "rose"
    },
    {
      id: 6,
      name: "Carmen M., 90 years",
      initials: "CM",
      location: "Pilot Building · Miami-Dade",
      text: "I turned 90 believing no one would notice. Then they knocked on my door with balloons, a cake, and ten neighbors I'd never properly spoken to. We sang, we told stories, we laughed until we cried. My doctor had told my son I was showing signs of early depression from isolation. After that birthday, something in me reignited. I started leaving my apartment daily. My son says I look 10 years younger. I tell him — I feel like I have a reason to be here again.",
      image: "/images/carmen_birthday_custom.png",
      badge: "🎂 Birthday Celebration",
      color: "pink",
      wide: true
    },
    {
      id: 7,
      name: "Fernando G., 79 years",
      initials: "FG",
      location: "Pilot Building · Miami-Dade",
      text: "After my wife passed away, I stopped talking. Weeks went by without a single conversation. A volunteer named Carlos started visiting every Thursday. We play chess. We talk about baseball. Now I count the days to Thursday. He doesn't know it, but he saved my life. A man at 79 needs to feel he still matters.",
      image: "/images/volunteer_white_logo.png",
      badge: "🤝 Volunteer Visit",
      color: "teal"
    },
    {
      id: 8,
      name: "Luz V., 82 years",
      initials: "LV",
      location: "Pilot Building · Miami-Dade",
      text: "I immigrated to the US 40 years ago and worked my whole life. In my old age I ended up alone, not speaking much English, afraid to leave my floor. The Golden Years Foundation brought people to me. Now I have a community again — in my own building. I feel like a person again, not a forgotten relic. My will to live came back with every knock on my door.",
      image: "/images/events_gathering.png",
      badge: "🌟 Community Event",
      color: "amber"
    }
  ];

  return (
    <section id="testimonios" className="relative overflow-hidden border-t" style={{ background: 'linear-gradient(180deg, #080d1a 0%, #0a1220 50%, #070c18 100%)' }}>
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(251,191,36,0.07) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(251,191,36,0.10)', borderColor: 'rgba(251,191,36,0.25)', color: '#fbbf24' }}>
            ❤️ Stories of Hope
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Lives changed.{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Hope restored.
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
            These are real voices from the seniors we serve — their words, their transformation, their renewed reason to live.
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
          <p className="text-lg mb-6" style={{ color: 'rgba(203,213,225,0.75)' }}>Your donation writes the next story of hope.</p>
          <button onClick={() => onDonateClick(50)} className="rounded-full px-10 py-4 text-lg font-black text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#0a0f1e', boxShadow: '0 8px 40px rgba(251,191,36,0.4)' }}>
            ❤️ Be Part of Their Story
          </button>
        </div>

      </div>
    </section>
  );
}
