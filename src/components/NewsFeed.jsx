import React, { useState, useEffect } from 'react';

const categoryColors = {
  'Social Security': { bg: 'rgba(99,102,241,0.15)', text: '#818cf8', dot: '#6366f1' },
  'Medicare': { bg: 'rgba(16,185,129,0.15)', text: '#34d399', dot: '#10b981' },
  'Health': { bg: 'rgba(14,165,233,0.15)', text: '#38bdf8', dot: '#0ea5e9' },
  'Senior Services': { bg: 'rgba(251,191,36,0.15)', text: '#fbbf24', dot: '#f59e0b' },
  'Benefits': { bg: 'rgba(236,72,153,0.15)', text: '#f472b6', dot: '#ec4899' },
  'Events': { bg: 'rgba(239,68,68,0.15)', text: '#f87171', dot: '#ef4444' },
};

const defaultColor = { bg: 'rgba(148,163,184,0.12)', text: '#94a3b8', dot: '#64748b' };

function ArticleCard({ article, onClick }) {
  const color = categoryColors[article.category] || defaultColor;
  return (
    <article
      onClick={() => onClick(article)}
      className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: color.bg, color: color.text }}
          >
            {article.category}
          </span>
          <span className="text-xs" style={{ color: 'rgba(148,163,184,0.45)' }}>
            {article.source}
          </span>
        </div>
        <h3 className="text-sm font-extrabold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-3 mb-4" style={{ color: 'rgba(148,163,184,0.65)' }}>
          {article.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>{article.pubDate}</span>
          <span className="text-xs font-bold flex items-center gap-1 transition-all group-hover:translate-x-1" style={{ color: '#34d399' }}>
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
}

function ArticleModal({ article, onClose }) {
  if (!article) return null;
  const color = categoryColors[article.category] || defaultColor;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative rounded-3xl max-w-xl w-full p-8 max-h-[85vh] overflow-y-auto"
        style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.1)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>
        <span
          className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: color.bg, color: color.text }}
        >
          {article.category}
        </span>
        <h2 className="text-xl font-extrabold text-white mt-4 mb-2 leading-tight">{article.title}</h2>
        <p className="text-xs mb-5" style={{ color: 'rgba(148,163,184,0.5)' }}>
          {article.pubDate} · {article.source}
        </p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(203,213,225,0.8)' }}>
          {article.description}
        </p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
          style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}
        >
          Read Full Article on {article.source} →
        </a>
      </div>
    </div>
  );
}

export default function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [liveCount, setLiveCount] = useState(0);

  useEffect(() => {
    fetch('/api/news')
      .then(r => r.json())
      .then(data => {
        setArticles(data.articles || []);
        setLastUpdated(data.lastUpdated);
        setLiveCount(data.liveCount || 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];
  const filtered = filter === 'All' ? articles : articles.filter(a => a.category === filter);

  return (
    <section
      id="noticias"
      className="relative overflow-hidden border-t"
      style={{ background: 'linear-gradient(160deg, #060b18 0%, #091019 60%, #060b16 100%)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)', transform: 'translate(-25%,-25%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)', transform: 'translate(25%,25%)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(99,102,241,0.10)', borderColor: 'rgba(99,102,241,0.25)', color: '#818cf8' }}>
            📡 Live News Feed
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Seniors News & <span style={{ color: '#818cf8' }}>Official Updates</span>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-4" style={{ color: 'rgba(148,163,184,0.75)' }}>
            Official updates from SSA.gov, Medicare.gov, CMS.gov and more — automatically refreshed every 3 days.
          </p>
          {lastUpdated && (
            <div className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(148,163,184,0.55)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              {liveCount > 0 ? `${liveCount} live articles` : 'Curated articles'} · Updated {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
              style={
                filter === cat
                  ? { background: '#6366f1', color: '#fff' }
                  : { background: 'rgba(255,255,255,0.05)', color: 'rgba(148,163,184,0.7)', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl p-6 animate-pulse" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="h-4 rounded-full mb-4 w-1/3" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <div className="h-4 rounded mb-2" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-4 rounded mb-2 w-4/5" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-3 rounded w-2/3" style={{ background: 'rgba(255,255,255,0.04)' }} />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">📡</p>
            <p className="text-white font-bold mb-2">Could not connect to news feed</p>
            <p className="text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Please check your connection and refresh the page.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => (
              <ArticleCard key={article.id} article={article} onClick={setSelected} />
            ))}
          </div>
        )}

        {/* Sources */}
        <div className="mt-14 pt-8 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs mb-4" style={{ color: 'rgba(148,163,184,0.45)' }}>Official sources monitored by The Golden Years Foundation</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SSA.gov', 'Medicare.gov', 'CMS.gov', 'HHS.gov', 'ACL.gov', 'Benefits.gov'].map(src => (
              <span key={src} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(148,163,184,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {src}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ArticleModal article={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
