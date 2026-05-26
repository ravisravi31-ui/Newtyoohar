import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';

const WA_HOLI = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20Holi%20hamper.%20Can%20you%20help%20me%20choose%3F';

const hampers = [
  {
    key: 'holi-colour-burst',
    name: 'The Colour Burst Box',
    price: '999',
    tag: 'Best Value',
    items: 'Organic gulal colours (5 shades) · Pichkari (water gun) · Thandai premix · Mini meetha (sweets) · Personalised card',
    wa: "Hi Tyoohar Ghar! I'd like to order The Colour Burst Box (Rs.999) for Holi. Can you share details?",
    emoji: '🌈',
  },
  {
    key: 'holi-premium-box',
    name: 'The Holi Premium Box',
    price: '1,799',
    tag: 'Most Popular',
    items: 'Organic herbal gulal (7 shades) · Premium pichkari · Thandai powder + dry fruits · Artisan sweets box · Scented candle · Personalised card',
    wa: "Hi Tyoohar Ghar! I'd like to order The Holi Premium Box (Rs.1,799). Can you share details?",
    emoji: '🌈',
  },
  {
    key: 'holi-grand-festive',
    name: 'The Grand Holi Hamper',
    price: '2,999',
    tag: 'Premium Gift',
    items: 'Luxury organic colour set (10 shades) · Designer pichkari · Premium thandai kit · Gourmet mithai box · Fragrant oil set · Festive keepsake box · Personalised card',
    wa: "Hi Tyoohar Ghar! I'd like to order The Grand Holi Hamper (Rs.2,999). Can you share details?",
    emoji: '🌈',
  },
];

export default function Holi() {
  return (
    <>
      <SEOHead
        title="Holi Gift Hampers India 2027 — Organic Colours & Festive Treats"
        description="Celebrate Holi with Tyoohar Ghar's curated gift hampers. Organic herbal gulal, thandai kits, artisan sweets and more. Starting at Rs.999 with free PAN India delivery."
        canonical="/collections/holi"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-pale via-gold-pale to-cream-200 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-rose-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            🌈 Holi — Festival of Colours
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Holi Gift Hampers <br className="hidden md:block" />That Are Pure Joy
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Make this Holi unforgettable. Our curated hampers bring together organic herbal colours,
            authentic thandai, artisan sweets, and everything needed to celebrate in vibrant style.
            Free delivery anywhere in India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_HOLI} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-3.5">
              Order a Holi Hamper
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">
              See Hampers ↓
            </a>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            🎨 Organic herbal colours only · ✍️ Handwritten card included · 🚚 Free PAN India delivery
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Choose Your Holi Hamper</h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            All hampers use only organic, skin-safe herbal colours. No harsh chemicals. Just pure, joyful celebration.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.key} className="card flex flex-col group hover-lift">
                <HamperGallery hamperKey={h.key} emoji={h.emoji} gradient="from-rose-pale to-gold-pale" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl text-navy-brand">{h.name}</h3>
                    <span className="font-body text-xs bg-gold-pale text-gold-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 border border-gold-light">
                      {h.tag}
                    </span>
                  </div>
                  <p className="font-display text-2xl text-rose-brand mb-3">&#8377;{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <a
                    href={`https://wa.me/919599004265?text=${encodeURIComponent(h.wa)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-whatsapp justify-center"
                  >
                    Order This Hamper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why organic colours */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Our Holi Hampers?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🌿', 'Only organic, herbal, skin-safe gulal — no chemical colours'],
                ['🎁', 'Every hamper is curated around the spirit of Holi — not random items'],
                ['✍️', 'Personalised handwritten card — tell us exactly what to write'],
                ['🚚', 'Free delivery across India — gift to family wherever they are'],
                ['📦', 'Premium packaging — the unboxing IS part of the celebration'],
                ['💬', 'Order via WhatsApp in 3 minutes — no forms, no checkout hassle'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Want a Custom Holi Box?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Gifting a group of friends? Want specific thandai flavours? Prefer dry Holi items only?
              We build custom hampers for every preference and budget.
            </p>
            <a
              href="https://wa.me/919599004265?text=Hi!%20I%27d%20like%20a%20custom%20Holi%20hamper.%20Can%20you%20help?"
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Holi Hamper
            </a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Need help choosing the right hamper?</p>
          <Link to="/collections" className="font-display text-xl text-white hover:text-rose-light transition-colors">
            Browse All Our Collections →
          </Link>
        </div>
      </section>
    </>
  );
}
