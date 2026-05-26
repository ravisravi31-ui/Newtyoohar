import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';
import { useCart } from '../context/CartContext.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const hampers = [
  {
    key:   'rakhi-sweet-surprise',
    name:  "Rakhi Sweet Box",
    price: '₹899',
    items: 'Artisan rakhi · Assorted mithai · Mixed dry fruits · Personalised card',
    tag:   'Best Value',
    emoji: '🍬',
    wa:    "Hi Tyoohar Ghar! I'd like to order the Rakhi Sweet Box (₹899). Can you share details?",
  },
  {
    key:   'rakhi-premium-treat',
    name:  "Bhaiya's Treat Hamper",
    price: '₹1,599',
    items: 'Premium rakhi · Gourmet chocolates · Cashews & almonds · Candle · Personalised card',
    tag:   'Most Popular',
    emoji: '🎁',
    wa:    "Hi Tyoohar Ghar! I'd like to order Bhaiya's Treat Hamper (₹1,599). Can you share details?",
  },
  {
    key:   'rakhi-grand-gesture',
    name:  "The Grand Rakhi Hamper",
    price: '₹2,499',
    items: 'Designer rakhi set · Premium dry fruits · Artisan chocolates · Scented candle · Satin gift box · Personalised card',
    tag:   'Premium Gift',
    emoji: '🪢',
    wa:    "Hi Tyoohar Ghar! I'd like to order The Grand Rakhi Hamper (₹2,499). Can you share details?",
  },
];

export default function Rakhi() {
  const { openModal, addToCart, openCart } = useCart();
  return (
    <>
      <SEOHead
        title="Rakhi Gift Hampers India 2026 — Premium Curated Hampers"
        description="Celebrate Rakhi with Tyoohar Ghar's premium gift hampers. Artisan rakhis, chocolates, dry fruits, and more. Starting ₹899. Free PAN India delivery. Pre-order now."
        canonical="/collections/rakhi"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-pale via-cream-200 to-gold-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-navy-brand text-cream-200 font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            🪢 Rakhi — August 9, 2026
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Rakhi Gift Hampers India 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Make this Rakhi unforgettable. Our curated hampers pair artisan rakhis with premium treats,
            chocolates, and dry fruits — delivered with a handwritten card anywhere in India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a Rakhi hamper. Can you help me choose?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order a Rakhi Hamper
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">See Hampers ↓</a>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · 🪢 Artisan rakhi included
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">
            Choose Your Rakhi Hamper
          </h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            Every hamper includes a personalised handwritten card. Tell us what you'd like it to say.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.key} className="card flex flex-col group hover-lift">
                <button
                  onClick={() => openModal(h)}
                  className="text-left w-full focus:outline-none focus:ring-2 focus:ring-rose-brand/40 rounded-t-2xl"
                  aria-label={`View ${h.name} details`}
                >
                  <HamperGallery
                    hamperKey={h.key}
                    emoji={h.emoji}
                    gradient="from-rose-pale to-gold-pale"
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
                    href={WA_BASE + encodeURIComponent(h.wa)}
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

      {/* Why + Custom */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Tyoohar Ghar for Rakhi?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🪢', 'Artisan rakhi included — not plastic, not mass-made'],
                ['🎁', 'Every hamper curated around the sibling bond'],
                ['✍️', 'Handwritten card — tell us your Rakhi message'],
                ['🚚', 'Free delivery anywhere in India — gift to brothers in any city'],
                ['📦', 'Premium packaging — the unboxing is part of the celebration'],
                ['💬', 'Order in 3 minutes on WhatsApp'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Custom Rakhi Hamper?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Know exactly what your brother loves? Tell us the budget and preferences and
              we'll build a custom hamper just for him.
            </p>
            <a
              href={WA_BASE + encodeURIComponent("Hi! I'd like a custom Rakhi hamper. Can you help?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Rakhi Hamper
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Explore more celebrations</p>
          <Link to="/collections" className="font-display text-xl text-white hover:text-rose-light transition-colors">
            Browse All Gift Collections →
          </Link>
        </div>
      </section>
    </>
  );
}
