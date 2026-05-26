import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27m%20interested%20in%20a%20ritual%20hamper.%20Can%20you%20help%20me%20choose%3F';

const weddingRituals = [
  { slug: 'mehndi',  name: 'Mehndi',  emoji: '🌿', desc: 'Artisan mehendi cones, attar, floral accessories, and rose water. Everything to make the mehndi evening magical.', from: '1,299' },
  { slug: 'haldi',   name: 'Haldi',   emoji: '💛', desc: 'Organic haldi, chandan paste, ubtan kit, marigold decor, and kesar treats. The most joyful ritual, beautifully gifted.', from: '999' },
  { slug: 'sangeet', name: 'Sangeet', emoji: '🎶', desc: 'Glitter accessories, Bollywood props, artisan snacks, and party treats for a night to remember.', from: '1,499' },
  { slug: 'tilak',   name: 'Tilak',   emoji: '🪔', desc: 'Sacred chandan tilak, silver thali, premium dry fruits, and designer mithai. For the auspicious ceremony.', from: '1,299' },
  { slug: 'baraat',  name: 'Baraat',  emoji: '🐴', desc: 'A grand welcome kit for the groom — attar, mithai, sehra decor, and a sherwani pocket square.', from: '1,999' },
  { slug: 'vidai',   name: 'Vidai',   emoji: '🌸', desc: 'A keepsake memory box, comfort hamper, and handwritten blessings card. A heartfelt goodbye gift.', from: '1,499' },
];

const lifeRituals = [
  { slug: 'griha-pravesh',   name: 'Griha Pravesh',   emoji: '🏡', desc: 'Puja thali, coconut & rice for the housewarming ceremony, artisan sweets, and a welcome home card.', from: '1,299' },
  { slug: 'annaprashan',     name: 'Annaprashan',     emoji: '🍚', desc: "Baby's first rice ceremony — pure silver spoon & bowl, kheer kit, marigold decor, and a blessing card.", from: '999' },
  { slug: 'mundan',          name: 'Mundan',           emoji: '✂️', desc: "The first haircut ceremony — sacred puja samagri, a silver keepsake hair box, mithai, and blessing card.", from: '899' },
];

function RitualCard({ slug, name, emoji, desc, from, prefix }) {
  return (
    <Link
      to={`/${prefix}/${slug}`}
      className="card flex flex-col group hover-lift border border-transparent hover:border-gold-brand/30 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale h-36 flex items-center justify-center rounded-t-2xl">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{emoji}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl text-navy-brand mb-1">{name}</h3>
        <p className="font-body text-xs text-gold-brand font-semibold mb-2">From ₹{from}</p>
        <p className="font-body text-sm text-navy-mid leading-relaxed flex-1">{desc}</p>
        <p className="font-body text-sm text-rose-brand font-semibold mt-4 group-hover:underline">
          Shop {name} Hampers →
        </p>
      </div>
    </Link>
  );
}

export default function Rituals() {
  return (
    <>
      <SEOHead
        title="Ritual & Ceremony Hampers India — Mehndi, Haldi, Sangeet & More"
        description="Curated ritual hampers for every Indian ceremony — Mehndi, Haldi, Sangeet, Tilak, Baraat, Vidai, Griha Pravesh, Annaprashan, Mundan. Everything you need for the ritual in one beautiful hamper."
        canonical="/rituals"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-navy-brand text-cream-200 font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            ✨ Rituals & Ceremonies
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            One Hamper. Every Ritual. Zero Stress.
          </h1>
          <p className="font-body text-lg text-navy-mid mb-6 leading-relaxed">
            Stop running to six different stores before every ceremony. Our ritual hampers contain
            everything you need — the right items, the right quantities, beautifully packed —
            so you can simply celebrate.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
            WhatsApp to Order
          </a>
        </div>
      </section>

      {/* Wedding Rituals */}
      <section className="bg-cream-100 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Wedding Season Rituals</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Every pre-wedding and wedding ceremony has its own vibe — and its own essentials.
              We've curated a hamper for each one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingRituals.map(r => (
              <RitualCard key={r.slug} {...r} prefix="rituals" />
            ))}
          </div>
        </div>
      </section>

      {/* Life Rituals */}
      <section className="bg-cream-200 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Life's Sacred Milestones</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Beyond weddings, Indian life is full of beautiful ceremonies. Each one deserves a thoughtful, curated gift.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {lifeRituals.map(r => (
              <RitualCard key={r.slug} {...r} prefix="rituals" />
            ))}
          </div>
        </div>
      </section>

      {/* Why ritual hampers */}
      <section className="bg-navy-brand py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why a Ritual Hamper?</h2>
          <p className="font-body text-cream-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Indian ceremonies are detailed, beautiful, and easy to under-prepare for. Here's what makes our ritual hampers different.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: '📋', title: 'Ceremony-Specific', desc: 'Every hamper is built around that specific ritual — the right items, the right quantities. No guessing.' },
              { icon: '🛒', title: 'No Last-Minute Runs', desc: "Stop scrambling for kumkum, mehendi cones, and attar from different shops at 11pm. It's all in one box." },
              { icon: '✍️', title: 'Handwritten Blessings', desc: 'Every hamper includes a handwritten card with your blessing or message — a personal touch that matters.' },
              { icon: '🎁', title: 'Beautiful Gifting', desc: 'These hampers are made to be gifted. Elegant packaging that shows care without any extra effort from you.' },
              { icon: '🚚', title: 'Delivered Pan India', desc: 'Order for family across India — we deliver everywhere, so the ceremony is complete wherever it is.' },
              { icon: '💼', title: 'Bulk for Events', desc: 'Planning a large wedding? Order ritual hampers in bulk with custom branding. From 10 to 10,000 pieces.' },
            ].map(p => (
              <div key={p.title} className="bg-navy-mid/50 rounded-2xl p-6">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-display text-lg text-white mb-2">{p.title}</h3>
                <p className="font-body text-sm text-cream-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate strip */}
      <section className="bg-rose-brand py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">Wedding Season Bulk Orders</h2>
          <p className="font-body text-rose-pale mb-6 max-w-xl mx-auto">
            Getting Mehndi or Haldi hampers for 200 guests? We do bulk orders with custom branding, guaranteed delivery timelines, and dedicated support.
          </p>
          <a
            href="https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20discuss%20bulk%20ritual%20hampers%20for%20a%20wedding."
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp bg-white text-navy-brand hover:bg-cream-100"
          >
            Talk to Us About Bulk Orders
          </a>
        </div>
      </section>
    </>
  );
}
