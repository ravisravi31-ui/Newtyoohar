import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20hamper.%20Can%20you%20help%20me%20choose%3F";

const upcomingCollections = [
  { slug: 'fathers-day',      name: "Father's Day",       emoji: '👔', date: 'June 21, 2026',      urgency: 'Order by June 18',       desc: 'Curated hampers for Dad — chocolates, gourmet treats, whiskey glass sets. Starting at ₹999.',       badge: 'Happening Now', badgeColor: 'bg-rose-brand text-white' },
  { slug: 'ganesh-chaturthi', name: 'Ganesh Chaturthi',   emoji: '🐘', date: 'August 27, 2026',    urgency: 'Pre-order open',         desc: 'Modaks, puja essentials, mithai, and brass idols. Ganpati Bappa Morya.',                            badge: 'Pre-Book', badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light' },
  { slug: 'rakhi',            name: 'Rakhi',               emoji: '🪢', date: 'August 9, 2026',     urgency: 'Pre-order open',         desc: 'Sweet hampers and luxury gift sets for your brother. Make this Rakhi memorable.',                    badge: 'Pre-Book', badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light' },
  { slug: 'navratri',         name: 'Navratri',            emoji: '🪔', date: 'October 2, 2026',    urgency: 'Accepting orders',       desc: 'Fasting snack kits, puja essentials, jewellery sets, and devotion hampers.',                         badge: 'Available', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'karwa-chauth',     name: 'Karwa Chauth',        emoji: '🌙', date: 'October 12, 2026',   urgency: 'Accepting orders',       desc: 'Thoughtful hampers for the woman you love. Skincare, sweets, and keepsake gifts.',                   badge: 'Available', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'bhai-dooj',        name: 'Bhai Dooj',           emoji: '🪢', date: 'November 2, 2026',   urgency: 'Accepting orders',       desc: 'Chocolates, gourmet treats, and a tika set for the sibling bond.',                                   badge: 'Available', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'diwali',           name: 'Diwali',              emoji: '🪔', date: 'November 8, 2026',   urgency: 'Corporate orders open',  desc: 'Premium festive hampers — dry fruits, sweets, candles, and luxury gifting.',                          badge: 'Pre-Book', badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light' },
  { slug: 'christmas',        name: 'Christmas',           emoji: '🎄', date: 'December 25, 2026',  urgency: 'Holiday orders open',    desc: 'Artisan chocolates, cookies, candles, and festive cheer.',                                           badge: 'Holiday', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'lohri',            name: 'Lohri & Makar Sankranti', emoji: '🔥', date: 'Jan 13, 2027',   urgency: 'Accepting orders',       desc: 'Rewri, gajak, til laddoos, and harvest treats for the bonfire celebration.',                          badge: 'Available', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'holi',             name: 'Holi',                emoji: '🌈', date: 'March 14, 2027',     urgency: 'Pre-order open',         desc: 'Organic herbal colours, thandai kits, artisan sweets, and everything for Holi.',                      badge: 'Pre-Book', badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light' },
  { slug: 'eid',              name: 'Eid',                  emoji: '🌙', date: 'March 2027',         urgency: 'Accepting orders',       desc: 'Premium dates, attar, artisan mithai, and bakery delights for Eid Mubarak.',                          badge: 'Available', badgeColor: 'bg-cream-300 text-navy-mid' },
];

const yearRoundCollections = [
  { slug: 'wedding',      name: 'Wedding',      emoji: '💍', desc: 'Welcome gifts, return gifts, and couple hampers. Elegant gifting for the biggest celebration.',  badge: 'Year-round', badgeColor: 'bg-cream-300 text-navy-mid' },
  { slug: 'baby-shower',  name: 'Baby Shower',  emoji: '🍼', desc: 'Celebrate the new arrival with sweet hampers for the mum-to-be and the little one.',             badge: 'Year-round', badgeColor: 'bg-cream-300 text-navy-mid' },
];

export default function Collections() {
  return (
    <>
      <SEOHead
        title="Festive Gift Hampers India — All Collections | Tyoohar Ghar"
        description="Browse all Tyoohar Ghar festive gift hampers — Father's Day, Holi, Rakhi, Diwali, Navratri, Karwa Chauth, Christmas and more. Premium hampers from ₹899 with free PAN India delivery."
        canonical="/collections"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 via-cream-100 to-rose-pale py-14 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-4 leading-tight">All Gift Collections</h1>
          <p className="font-body text-lg text-navy-mid mb-6 leading-relaxed">
            Every occasion deserves a beautiful hamper. Browse our curated collections for every
            festival, celebration, and milestone — all starting at ₹899 with free PAN India delivery.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">WhatsApp to Order</a>
            <a href="/rituals" className="btn-outline px-7 py-3.5 text-base">Ritual Hampers →</a>
          </div>
        </div>
      </section>

      {/* Festival Grid */}
      <section className="bg-cream-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl md:text-3xl text-navy-brand mb-2">Festive Collections</h2>
          <p className="font-body text-navy-light mb-8 text-sm">Sorted by upcoming date — order early for guaranteed delivery</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCollections.map(c => (
              <Link
                key={c.slug}
                to={"/collections/" + c.slug}
                className="card flex flex-col hover:border-rose-brand border border-transparent transition-all duration-300 group hover-lift"
              >
                <div className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale h-44 flex items-center justify-center rounded-t-2xl overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="font-display text-xl text-navy-brand">{c.name}</h2>
                    <span className={"font-body text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 " + c.badgeColor}>{c.badge}</span>
                  </div>
                  <p className="font-body text-xs text-navy-light mb-1">{c.date} · {c.urgency}</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed flex-1">{c.desc}</p>
                  <p className="font-body text-sm text-rose-brand font-semibold mt-4 group-hover:underline">Shop {c.name} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Year-round */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl md:text-3xl text-navy-brand mb-2">Year-Round Celebrations</h2>
          <p className="font-body text-navy-light mb-8 text-sm">Always available — order any time</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {yearRoundCollections.map(c => (
              <Link
                key={c.slug}
                to={"/collections/" + c.slug}
                className="card flex flex-col hover:border-gold-brand border border-transparent transition-all duration-300 group hover-lift"
              >
                <div className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale h-36 flex items-center justify-center rounded-t-2xl">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="font-display text-xl text-navy-brand">{c.name}</h2>
                    <span className={"font-body text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 " + c.badgeColor}>{c.badge}</span>
                  </div>
                  <p className="font-body text-sm text-navy-mid leading-relaxed flex-1">{c.desc}</p>
                  <p className="font-body text-sm text-rose-brand font-semibold mt-4 group-hover:underline">Shop {c.name} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals teaser */}
      <section className="bg-gradient-to-br from-gold-pale to-rose-pale py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-4xl mb-4 block">✨</span>
          <h2 className="font-display text-2xl md:text-3xl text-navy-brand mb-3">Looking for Ritual Hampers?</h2>
          <p className="font-body text-navy-mid mb-6 max-w-xl mx-auto leading-relaxed">
            Mehndi, Haldi, Sangeet, Griha Pravesh, Annaprashan, and more — we have curated hampers
            for every Indian ceremony and ritual. One hamper, zero stress.
          </p>
          <Link to="/rituals" className="btn-primary px-8 py-3.5">
            Explore Ritual Hampers →
          </Link>
        </div>
      </section>

      {/* Corporate strip */}
      <section className="bg-navy-brand py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 text-sm mb-2">Ordering for your team or clients?</p>
          <Link to="/corporate-gifting" className="font-display text-2xl text-white hover:text-rose-light transition-colors">
            See Corporate Gifting →
          </Link>
          <p className="font-body text-cream-300 text-sm mt-3">Bulk pricing · Custom branding · Dedicated account manager</p>
        </div>
      </section>
    </>
  );
}
