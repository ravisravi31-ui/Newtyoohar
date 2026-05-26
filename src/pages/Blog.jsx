import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const posts = [
  {
    slug: 'fathers-day-gift-hampers-india-2026',
    title: "Best Father's Day Gift Hampers in India 2026 — Complete Gift Guide",
    excerpt: "Father's Day 2026 falls on June 21. Looking for the perfect hamper for Dad? We break down the best options from ₹999 to ₹2,999, with ordering tips so it arrives on time.",
    date: 'May 10, 2026',
    readTime: '5 min read',
    tags: ["Father's Day", 'Gift Guide', '2026'],
    emoji: '👔',
    featured: true,
  },
];

const upcoming = [
  { title: "Rakhi Gift Guide 2026 — Best Hampers for Your Brother", emoji: '🪢', date: 'Coming July 2026', tags: ['Rakhi', 'Gift Guide'] },
  { title: "Diwali 2026 Corporate Gift Hampers — A Buyer's Guide", emoji: '🪔', date: 'Coming September 2026', tags: ['Diwali', 'Corporate'] },
  { title: "How to Write the Perfect Card Message for Every Festival", emoji: '✍️', date: 'Coming June 2026', tags: ['Tips', 'Gifting'] },
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog — Gifting Guides & Festival Tips | Tyoohar Ghar"
        description="Gift guides, festival tips, and hamper ideas from Tyoohar Ghar. Find the perfect gift for Father's Day, Rakhi, Diwali, and every Indian festival."
        canonical="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 to-cream-100 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-display text-4xl text-navy-brand mb-3">Gifting Guides & Festival Tips</h1>
          <p className="font-body text-navy-mid">
            Ideas, inspiration, and honest advice on gifting for every Indian festival.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-cream-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Featured post */}
          {posts.filter(p => p.featured).map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card flex flex-col sm:flex-row gap-6 p-6 sm:p-8 mb-8 hover:border-rose-brand border border-transparent transition-all duration-200 group"
            >
              <div className="bg-gradient-to-br from-gold-pale to-rose-pale w-full sm:w-40 h-40 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">{post.emoji}</span>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(t => (
                    <span key={t} className="bg-rose-pale text-rose-brand font-body text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                  ))}
                  <span className="bg-cream-300 text-navy-mid font-body text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                </div>
                <h2 className="font-display text-xl text-navy-brand mb-2 leading-snug group-hover:text-rose-brand transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-navy-mid leading-relaxed mb-3">{post.excerpt}</p>
                <p className="font-body text-xs text-navy-light">{post.date} · {post.readTime}</p>
              </div>
            </Link>
          ))}

          {/* Upcoming posts */}
          <div className="mt-4">
            <h2 className="font-display text-2xl text-navy-brand mb-6">Coming Soon</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {upcoming.map(post => (
                <div key={post.title} className="card p-5 opacity-80">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{post.emoji}</span>
                    <div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {post.tags.map(t => (
                          <span key={t} className="bg-cream-300 text-navy-mid font-body text-xs px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                      <p className="font-display text-navy-brand text-sm leading-snug mb-1">{post.title}</p>
                      <p className="font-body text-xs text-navy-light">{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Ready to order?</p>
          <a
            href="https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20hamper."
            target="_blank" rel="noopener noreferrer"
            className="font-display text-xl text-white hover:text-rose-light transition-colors"
          >
            Browse Our Collections →
          </a>
        </div>
      </section>
    </>
  );
}
