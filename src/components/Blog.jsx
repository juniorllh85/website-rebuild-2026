import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    date: 'November 28, 2024',
    category: 'Events',
    title: 'Thanksgiving Celebration: Gratitude and Joy for Our Seniors',
    excerpt:
      'This Thanksgiving, our volunteers gathered to deliver warm meals, share stories, and celebrate with the seniors in our pilot complex in Miami-Dade. More than 120 elders participated in this special day of gratitude, laughter, and community.',
    image: '/images/events_thanksgiving.png',
    readTime: '3 min read',
  },
  {
    id: 2,
    date: 'May 12, 2024',
    category: 'Events',
    title: "Mother's Day: Honoring Every Senior Who Gave Us Life",
    excerpt:
      'We organized a special Mother\'s Day celebration to honor the incredible women in our community. Flowers, personalized cards, and heartfelt moments made this day unforgettable for dozens of seniors who are too often forgotten.',
    image: '/images/events_mothers_day.png',
    readTime: '2 min read',
  },
  {
    id: 3,
    date: 'March 15, 2024',
    category: 'Community',
    title: 'A Birthday Worth Remembering: Carmen\'s Story',
    excerpt:
      'Carmen turned 84 years old, and thanks to our volunteers, she did not celebrate alone. This is the kind of impact we strive for every day — reminding every senior that they are seen, loved, and valued by their community.',
    image: '/images/carmen_birthday.png',
    readTime: '3 min read',
  },
  {
    id: 4,
    date: 'February 3, 2024',
    category: 'Impact',
    title: '2,400+ Deliveries and Counting: Our Journey So Far',
    excerpt:
      'From food packages and hygiene kits to medicine support and companionship — our team of dedicated volunteers has completed over 2,400 deliveries to seniors in Miami-Dade. Here\'s a look at the numbers behind our mission.',
    image: '/images/donation.png',
    readTime: '4 min read',
  },
  {
    id: 5,
    date: 'January 10, 2024',
    category: 'Volunteer',
    title: 'Join Our Volunteer Network — Your Time Changes Lives',
    excerpt:
      'Our volunteers are the heartbeat of The Golden Years Foundation. From weekend delivery runs to companionship visits, there are many ways to get involved and make a real difference in the lives of isolated seniors.',
    image: '/images/volunteer_white_logo.png',
    readTime: '3 min read',
  },
  {
    id: 6,
    date: 'December 1, 2023',
    category: 'Mission',
    title: 'Why We Started: The Crisis of Senior Isolation in Miami-Dade',
    excerpt:
      'Over 40% of seniors in the United States report feeling lonely on a regular basis. In Miami-Dade, thousands of elders live without family support, adequate nutrition, or access to medicine. This is why The Golden Years Foundation exists.',
    image: '/images/events_gathering.png',
    readTime: '5 min read',
  },
  {
    id: 7,
    date: 'May 1, 2025',
    category: 'Resources',
    title: 'Medicare 2025: Key Changes Every Senior Needs to Know',
    excerpt:
      'The 2025 Medicare updates bring significant changes: a new $2,000 cap on out-of-pocket drug costs, expanded mental health coverage, and broader Medicare Advantage benefits. Here is what every senior needs to know to make the most of their benefits this year.',
    image: '/images/medicine.png',
    readTime: '5 min read',
  },
  {
    id: 8,
    date: 'April 15, 2025',
    category: 'Resources',
    title: 'Social Security 2025: COLA Increase and What It Means for You',
    excerpt:
      'Social Security recipients received a 2.5% Cost-of-Living Adjustment (COLA) in 2025. Learn how this affects your monthly benefits, the new earnings limits, and how Medicare Part B premiums impact your take-home income this year.',
    image: '/images/vitamins.png',
    readTime: '4 min read',
  },
  {
    id: 9,
    date: 'March 10, 2025',
    category: 'Resources',
    title: 'Medicaid vs. Medicare: Understanding the Difference',
    excerpt:
      'Many seniors confuse Medicare and Medicaid, but they are very different programs. This guide breaks down what each covers, who qualifies, and how "dual eligible" seniors in Florida can use both programs together to minimize out-of-pocket healthcare costs.',
    image: '/images/hygiene_donations.png',
    readTime: '6 min read',
  },
  {
    id: 10,
    date: 'February 20, 2025',
    category: 'Resources',
    title: 'Free and Low-Cost Resources for Seniors in Miami-Dade',
    excerpt:
      'From prescription assistance to free meals and transportation, Miami-Dade County offers many programs for seniors. This guide covers the Alliance for Aging, Extra Help, SNAP, SHINE counseling, and more — all available at no cost.',
    image: '/images/food.png',
    readTime: '5 min read',
  },
];

const categoryColors = {
  Events: { bg: 'rgba(16,185,129,0.12)', text: '#10b981' },
  Community: { bg: 'rgba(251,191,36,0.12)', text: '#f59e0b' },
  Impact: { bg: 'rgba(99,102,241,0.12)', text: '#818cf8' },
  Volunteer: { bg: 'rgba(236,72,153,0.12)', text: '#ec4899' },
  Mission: { bg: 'rgba(14,165,233,0.12)', text: '#38bdf8' },
  Resources: { bg: 'rgba(239,68,68,0.12)', text: '#f87171' },
};

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  if (selected) {
    const post = posts.find(p => p.id === selected);
    const cat = categoryColors[post.category] || { bg: 'rgba(16,185,129,0.12)', text: '#10b981' };
    return (
      <section className="relative min-h-screen" style={{ background: 'linear-gradient(160deg, #080d1a 0%, #0a1220 60%, #070c18 100%)' }}>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-2 text-sm font-bold mb-10 transition-colors"
            style={{ color: '#34d399' }}
          >
            ← Back to News
          </button>
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-3xl mb-8" />
          <span
            className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: cat.bg, color: cat.text }}
          >
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-4 mb-3 leading-tight">{post.title}</h1>
          <p className="text-sm mb-8" style={{ color: 'rgba(148,163,184,0.6)' }}>{post.date} · {post.readTime}</p>
          <div className="text-base leading-relaxed" style={{ color: 'rgba(203,213,225,0.85)' }}>
            <p className="mb-4">{post.excerpt}</p>
            <p className="mb-4">
              At The Golden Years Foundation, every action we take is rooted in a simple belief: that every senior deserves dignity, care, and community — regardless of their circumstances. Our team of dedicated volunteers works tirelessly to ensure that no elder in Miami-Dade feels forgotten or alone.
            </p>
            <p className="mb-4">
              We are a 501(c)(3) nonprofit organization (EIN: 35-2905128) committed to long-term, sustainable impact. With your support — whether through donations, volunteering, or simply spreading the word — we can continue to reach more seniors every day.
            </p>
            <p>
              Want to get involved? Reach out at <a href="mailto:thegoldenyearsfoundation@gmail.com" style={{ color: '#34d399' }}>thegoldenyearsfoundation@gmail.com</a> or follow us on social media to stay updated on our latest events and stories.
            </p>
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
            📰 News & Stories
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our Impact, <span style={{ color: '#34d399' }}>In Their Words</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(148,163,184,0.75)' }}>
            Real stories, events, and updates from the heart of our mission in Miami-Dade.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
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
              {cat}
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.7) 0%, transparent 60%)' }} />
                  <span
                    className="absolute top-3 left-3 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: cat.bg, color: cat.text, backdropFilter: 'blur(8px)' }}
                  >
                    {post.category}
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
                    Read more <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
