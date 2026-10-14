// Vercel Serverless Function — fetches official RSS feeds for seniors news
// Cached for 3 days (259200 seconds)

const FEEDS = [
  {
    url: 'https://www.ssa.gov/rss/news.xml',
    category: 'Social Security',
    source: 'SSA.gov',
  },
  {
    url: 'https://www.cms.gov/newsroom/rss',
    category: 'Medicare',
    source: 'CMS.gov',
  },
  {
    url: 'https://www.hhs.gov/rss/press-releases.xml',
    category: 'Health',
    source: 'HHS.gov',
  },
  {
    url: 'https://acl.gov/rss.xml',
    category: 'Senior Services',
    source: 'ACL.gov',
  },
  {
    url: 'https://www.benefits.gov/news/rss',
    category: 'Benefits',
    source: 'Benefits.gov',
  },
];

function extractTag(text, tag) {
  const cdataRegex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`,
    'i'
  );
  const plainRegex = new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`, 'i');
  const cdataMatch = cdataRegex.exec(text);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = plainRegex.exec(text);
  return plainMatch ? plainMatch[1].trim() : '';
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&#\d+;/g, '').trim();
}

function parseRSS(xml, category, source) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  let id = 0;
  while ((match = itemRegex.exec(xml)) !== null && items.length < 6) {
    const item = match[1];
    const title = stripHtml(extractTag(item, 'title'));
    const link = extractTag(item, 'link') || extractTag(item, 'guid');
    const description = stripHtml(extractTag(item, 'description')).slice(0, 200) + '...';
    const pubDate = extractTag(item, 'pubDate') || extractTag(item, 'dc:date') || '';
    if (title && link && title.length > 5) {
      items.push({
        id: `${source}-${id++}`,
        title,
        link,
        description,
        pubDate: pubDate ? new Date(pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recent',
        category,
        source,
        external: true,
      });
    }
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'GoldenYearsFoundation/1.0 (+https://thegoldenyearsfoundation.com)' },
    });
    clearTimeout(timeout);
    if (!res.ok) return [];
    const text = await res.text();
    return parseRSS(text, feed.category, feed.source);
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  // Cache for 3 days on CDN, serve stale for 1 day while revalidating
  res.setHeader('Cache-Control', 'public, s-maxage=259200, stale-while-revalidate=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const results = await Promise.all(FEEDS.map(fetchFeed));
    const articles = results
      .flat()
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // Always return at least the fallback articles if live feeds fail
    const fallback = [
      {
        id: 'fallback-1',
        title: 'Medicare 2025: $2,000 Cap on Out-of-Pocket Drug Costs',
        link: 'https://www.medicare.gov',
        description: 'Starting in 2025, Medicare Part D introduces a $2,000 annual cap on out-of-pocket prescription drug costs — a historic change for millions of seniors.',
        pubDate: 'May 1, 2025',
        category: 'Medicare',
        source: 'Medicare.gov',
        external: true,
      },
      {
        id: 'fallback-2',
        title: 'Social Security 2025 COLA: 2.5% Increase for Beneficiaries',
        link: 'https://www.ssa.gov',
        description: 'The Social Security Administration announced a 2.5% Cost-of-Living Adjustment for 2025, increasing average monthly benefits by approximately $48.',
        pubDate: 'April 15, 2025',
        category: 'Social Security',
        source: 'SSA.gov',
        external: true,
      },
      {
        id: 'fallback-3',
        title: 'Free Medicare Counseling Available for Florida Seniors — SHINE Program',
        link: 'https://floridashine.org',
        description: 'Florida\'s SHINE program offers free, unbiased Medicare counseling to seniors. Trained volunteers help navigate plan options, coverage gaps, and enrollment periods.',
        pubDate: 'March 10, 2025',
        category: 'Senior Services',
        source: 'Florida SHINE',
        external: true,
      },
      {
        id: 'fallback-4',
        title: 'Extra Help: Prescription Drug Cost Assistance for Low-Income Seniors',
        link: 'https://www.ssa.gov/medicare/part-d',
        description: 'Millions of seniors qualify for Extra Help, a program that reduces Medicare Part D costs. Eligible individuals can save thousands annually on prescription drugs.',
        pubDate: 'February 20, 2025',
        category: 'Benefits',
        source: 'SSA.gov',
        external: true,
      },
      {
        id: 'fallback-5',
        title: 'Understanding Your Medicare Advantage Plan for 2025',
        link: 'https://www.medicare.gov/plan-compare',
        description: 'Medicare Advantage plans have expanded benefits in 2025, including dental, vision, hearing, and transportation. Review your plan during the Annual Enrollment Period.',
        pubDate: 'January 15, 2025',
        category: 'Medicare',
        source: 'Medicare.gov',
        external: true,
      },
      {
        id: 'fallback-6',
        title: 'Senior Isolation Crisis: 40% of Older Adults Report Chronic Loneliness',
        link: 'https://acl.gov',
        description: 'The Administration for Community Living reports rising rates of isolation among seniors, with significant impacts on physical and mental health.',
        pubDate: 'December 1, 2024',
        category: 'Senior Services',
        source: 'ACL.gov',
        external: true,
      },
    ];

    const final = articles.length >= 4 ? articles : [...articles, ...fallback].slice(0, 12);

    res.status(200).json({
      articles: final,
      lastUpdated: new Date().toISOString(),
      liveCount: articles.length,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news', articles: [] });
  }
}
