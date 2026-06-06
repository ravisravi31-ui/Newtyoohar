import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';
<<<<<<< HEAD
import { useCart } from '../context/CartContext.jsx';
=======
import Countdown from '../components/Countdown.jsx';
>>>>>>> 84cac1d (Father's Day: optimized hamper photos, countdown, hero photos)

const hampers = [
  {
    key:   'fd-dads-treat',
    name:  "The Dad's Treat",
    price: '₹999',
    items: 'Premium mixed nuts · Dark chocolates · Assorted cookies · Personalised card',
    tag:   'Best Value',
    emoji: '👔',
    wa:    "Hi Tyoohar Ghar! I'd like to order The Dad's Treat hamper (₹999) for Father's Day. Can you share the order details?",
  },
  {
    key:   'fd-cool-dad-box',
    name:  "The Cool Dad Box",
    price: '₹1,799',
    items: 'Artisan coffee · Premium tea · Gourmet snacks · Scented candle · Personalised card',
    tag:   'Most Popular',
    emoji: '☕',
    wa:    "Hi Tyoohar Ghar! I'd like to order The Cool Dad Box (₹1,799) for Father's Day. Can you share details?",
  },
  {
    key:   'fd-grand-dad-hamper',
    name:  "The Grand Dad Hamper",
    price: '₹2,999',
    items: 'Luxury nuts & dates · Fine chocolates · Premium whiskey glass set · Personalised leather tag · Keepsake box · Handwritten card',
    tag:   'Premium Gift',
    emoji: '🥃',
    wa:    "Hi Tyoohar Ghar! I'd like to order The Grand Dad Hamper (₹2,999) for Father's Day. Can you share details?",
  },
];

export default function FathersDay() {
  const { openModal, addToCart, openCart } = useCart();
  return (
    <>
      <SEOHead
        title="Father's Day Gift Hampers India 2026 — Order by June 18"
        description="Best Father's Day gift hampers in India 2026. Premium curated hampers starting ₹999 — chocolates, gourmet treats, personalised card. Free PAN India delivery. Order by June 18."
        canonical="/collections/fathers-day"
      />

      {/* Hero */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        {/* Background photo + overlay */}
        <img
          src="/images/hampers/fd-cool-dad-box/Hamper.webp"
          alt="Father's Day gift hamper by Tyoohar Ghar"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-brand/85 via-navy-brand/75 to-rose-brand/70" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-rose-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5 animate-pulse">
            🔥 Order by June 18 for on-time delivery
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-5 leading-tight">
            Father's Day Gift Hampers India 2026
          </h1>
          <p className="font-body text-lg text-cream-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Give Dad more than a card this Father's Day (June 21, 2026). Our premium curated hampers start at ₹999,
            come with a personalised handwritten card, and deliver free across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20Father%27s%20Day%20hamper.%20Can%20you%20help%20me%20choose?"
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order Now — Father's Day
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">See Hampers ↓</a>
          </div>
          <div className="mt-9 flex justify-center">
            <Countdown target="2026-06-21T00:00:00+05:30" />
          </div>
          <p className="font-body text-sm text-cream-300 mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · ⏱ Dispatched in 24–48 hrs
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">
            Choose Your Father's Day Hamper
          </h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            All hampers include a personalised handwritten card with your message. Just tell us what you'd like it to say.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.key} className="card flex flex-col group hover-lift">
                {/* Clickable gallery area opens modal */}
                <button
                  onClick={() => openModal(h)}
                  className="text-left w-full focus:outline-none focus:ring-2 focus:ring-rose-brand/40 rounded-t-2xl"
                  aria-label={`View ${h.name} details`}
                >
                  <HamperGallery
                    hamperKey={h.key}
                    emoji={h.emoji}
                    gradient="from-gold-pale to-rose-pale"
                  />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <button onClick={() => openModal(h)} className="text-left mb-2 group/title">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-xl text-navy-brand group-hover/title:text-rose-brand transition-colors">{h.name}</h3>
                      <span className="font-body text-xs bg-gold-pale text-gold-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 border border-gold-light">
                        {h.tag}
                      </span>
                    </div>
                  </button>
                  <p className="font-display text-2xl text-rose-brand mb-3">{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => { addToCart(h); openCart(); }}
                      className="inline-flex items-center justify-center gap-2 bg-navy-brand text-white font-body font-semibold px-4 py-2.5 rounded-full transition-all hover:bg-navy-mid hover:shadow-md hover:-translate-y-0.5 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    <a
                      href={`https://wa.me/919599004265?text=${encodeURIComponent(h.wa)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp justify-center text-sm py-2.5"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Order from Tyoohar Ghar?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🎁', 'Every hamper is curated around Dad — not a random assortment'],
                ['✍️', 'Handwritten card included — tell us what to write'],
                ['🚚', 'Free delivery anywhere in India'],
                ['⏱', "Order by June 18 for guaranteed Father's Day delivery"],
                ['📦', 'Premium packaging — the unboxing is part of the gift'],
                ['💬', 'Order in 3 minutes via WhatsApp — no complicated checkout'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Custom Hamper?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Have a specific budget or know what Dad loves? We'll build a custom hamper just for him.
              WhatsApp us with your budget and preferences.
            </p>
            <a
              href="https://wa.me/919599004265?text=Hi!%20I%27d%20like%20a%20custom%20Father%27s%20Day%20hamper.%20Can%20you%20help?"
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Hamper
            </a>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Not sure what to pick?</p>
          <Link
            to="/blog/fathers-day-gift-hampers-india-2026"
            className="font-display text-xl text-white hover:text-rose-light transition-colors"
          >
            Read our Father's Day Gift Guide 2026 →
          </Link>
        </div>
      </section>
    </>
  );
}
