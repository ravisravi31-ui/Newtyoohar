import SEOHead from '../components/SEOHead.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const steps = [
  { n: '01', title: 'Tell us about your order', desc: 'Share the quantity, budget per hamper, occasion, and any branding requirements via WhatsApp.' },
  { n: '02', title: 'We send a proposal', desc: 'You receive a curated hamper proposal with pricing within 24 hours. Bulk discounts applied automatically.' },
  { n: '03', title: 'Approve and confirm', desc: 'Review the hampers, approve the card message(s), and confirm payment. We accept NEFT, RTGS, UPI.' },
  { n: '04', title: 'We pack and dispatch', desc: 'Every hamper is individually packed with a personalised card and dispatched to each address. Tracking shared.' },
];

const tiers = [
  { qty: '10–25 hampers', discount: '5% off', note: 'Great for team gifting' },
  { qty: '26–50 hampers', discount: '10% off', note: 'Medium corporate orders' },
  { qty: '51–100 hampers', discount: '15% off', note: 'Large team or client list' },
  { qty: '100+ hampers', discount: 'Custom pricing', note: 'White-label branding available' },
];

export default function Corporate() {
  return (
    <>
      <SEOHead
        title="Corporate Gifting India 2026 — Bulk Hampers | Tyoohar Ghar"
        description="Premium corporate gifting hampers India 2026. Bulk Diwali, Rakhi, and festive hampers for teams and clients. Custom branding, personalised cards, free PAN India delivery. WhatsApp for bulk pricing."
        canonical="/corporate-gifting"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-brand via-navy-mid to-navy-brand py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-gold-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            🏢 Corporate Gifting
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-5 leading-tight">
            Bulk Festive Hampers for Your Team & Clients
          </h1>
          <p className="font-body text-cream-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Make every colleague, client, and partner feel valued this festive season. We handle
            bulk orders from 10 to 1,000+ hampers — with custom branding, personalised cards, and
            coordinated delivery across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'm interested in corporate gifting hampers. Can you share bulk pricing?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Get Bulk Pricing
            </a>
          </div>
          <p className="font-body text-cream-300 text-sm mt-5">
            Minimum order: 10 hampers · Custom branding available at 100+ · GST invoice provided
          </p>
        </div>
      </section>

      {/* Why Corporate */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-10">
            Why Companies Choose Tyoohar Ghar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🎁', 'Curated hampers', 'Every hamper is thoughtfully put together — not a random assortment. Your recipients will notice.'],
              ['✍️', 'Personalised at scale', 'Each hamper gets an individual handwritten card with a custom message. Even at 500 units.'],
              ['🚚', 'Pan India delivery', 'We ship to every address on your list. Delhi, Mumbai, Bangalore, Tier 2 cities — all included.'],
              ['🏷️', 'Custom branding', 'Add your company logo to the box, ribbon, or card. Minimum 100 hampers for white-label.'],
              ['📋', 'GST invoice', 'We issue a proper GST invoice for every corporate order. Finance won\'t complain.'],
              ['💬', 'Dedicated support', 'A dedicated WhatsApp contact for your order from inquiry to delivery.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card p-6">
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-display text-lg text-navy-brand mb-2">{title}</h3>
                <p className="font-body text-sm text-navy-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Bulk Pricing</h2>
          <p className="font-body text-navy-mid text-center mb-8">
            Volume discounts applied automatically. No negotiation required.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tiers.map(t => (
              <div key={t.qty} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <p className="font-display text-lg text-navy-brand">{t.qty}</p>
                  <p className="font-body text-xs text-navy-light">{t.note}</p>
                </div>
                <span className="font-display text-xl text-rose-brand">{t.discount}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-center text-sm text-navy-light mt-6">
            All discounts are applied to the base hamper price. Delivery is free across India for all corporate orders.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-brand py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-white text-center mb-10">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-brand text-white font-display text-lg mb-4">{s.n}</span>
                <h3 className="font-display text-white text-base mb-2">{s.title}</h3>
                <p className="font-body text-cream-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-cream-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy-brand mb-4">Popular Occasions</h2>
          <p className="font-body text-navy-mid mb-8 max-w-xl mx-auto">
            We handle corporate gifting for every major occasion on the Indian calendar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🪔 Diwali', '🪢 Rakhi', '🌙 Karwa Chauth', '🎄 Christmas', '🎂 Employee Birthdays', '🏆 Client Appreciation', '🎊 Company Anniversary', '🤝 Onboarding Kits'].map(o => (
              <span key={o} className="bg-cream-300 text-navy-mid font-body text-sm px-4 py-2 rounded-full">{o}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-brand py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl text-white mb-4">Ready to Get Started?</h2>
          <p className="font-body text-white text-opacity-90 mb-6 leading-relaxed">
            WhatsApp us with your requirement — occasion, quantity, and budget — and we'll send you a proposal within 24 hours.
          </p>
          <a
            href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like to discuss a corporate gifting order. Can you help?")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-navy-brand font-body font-semibold text-base px-8 py-3.5 rounded-full hover:bg-cream-100 transition-colors shadow-md"
          >
            <svg className="w-5 h-5 flex-shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Your Corporate Order
          </a>
        </div>
      </section>
    </>
  );
}
