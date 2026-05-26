import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA      = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar%2C%20I%27d%20love%20to%20order%20a%20hamper%21';
const WA_FD   = 'https://wa.me/919599004265?text=Hi!%20I%27m%20interested%20in%20a%20Father%27s%20Day%20hamper';
const WA_CORP = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar%2C%20I%27m%20interested%20in%20corporate%20gifting.';

const festivals = [
  { name: "Father's Day",     date: 'Jun 21', emoji: '👔', urgent: true,  to: '/collections/fathers-day' },
  { name: 'Ganesh Chaturthi', date: 'Aug 27', emoji: '🐘', urgent: false, to: '/collections/ganesh-chaturthi' },
  { name: 'Rakhi',            date: 'Aug 9',  emoji: '🪢', urgent: false, to: '/collections/rakhi' },
  { name: 'Navratri',         date: 'Oct 2',  emoji: '🪔', urgent: false, to: '/collections/navratri' },
  { name: 'Diwali',           date: 'Nov 8',  emoji: '🪔', urgent: false, to: '/collections/diwali' },
  { name: 'Christmas',        date: 'Dec 25', emoji: '🎄', urgent: false, to: '/collections/christmas' },
];

const hampers = [
  { name: 'The Essential Hamper', price: '999',   tag: 'Best Seller', desc: 'Premium dry fruits, artisan chocolates, and a personalised handwritten card. Perfect for any occasion.',   waMsg: "Hi! I'm interested in The Essential Hamper. Can you share details?" },
  { name: 'The Celebration Box',  price: '1,999', tag: 'Most Gifted', desc: 'Curated gourmet treats, scented candle, dried florals, and a satin-ribbon box. Unboxing magic.',           waMsg: "Hi! I'm interested in The Celebration Box. Can you share details?" },
  { name: 'The Grand Gesture',    price: '2,999', tag: 'Premium',     desc: "Our most luxurious hamper — premium chocolates, nuts, tea, bath essentials, and a keepsake box.",           waMsg: "Hi! I'm interested in The Grand Gesture hamper. Can you share details?" },
];

const trustPoints = [
  { icon: '✍️', title: 'Handwritten Cards',       desc: 'Every hamper includes a handwritten card with your message. Complimentary, always.' },
  { icon: '🚚', title: 'Free PAN India Delivery', desc: 'We deliver everywhere in India. No minimum order, no hidden charges.' },
  { icon: '🎨', title: 'Curated, Not Assembled',  desc: 'Each hamper is built around a theme, mood, and recipient — not random products in a box.' },
  { icon: '💼', title: 'Corporate Ready',         desc: 'Bulk orders for 10 to 10,000 units, custom branding available.' },
];

const rituals = [
  { name: 'Mehndi',        emoji: '🌿', to: '/rituals/mehndi',       from: '1,299' },
  { name: 'Haldi',         emoji: '💛', to: '/rituals/haldi',        from: '999' },
  { name: 'Sangeet',       emoji: '🎶', to: '/rituals/sangeet',      from: '1,499' },
  { name: 'Tilak',         emoji: '🪔', to: '/rituals/tilak',        from: '1,299' },
  { name: 'Baraat',        emoji: '🐴', to: '/rituals/baraat',       from: '1,999' },
  { name: 'Griha Pravesh', emoji: '🏡', to: '/rituals/griha-pravesh', from: '1,299' },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Premium Festive Gift Hampers | PAN India Delivery"
        description="Tyoohar Ghar curates premium festive gift hampers for Diwali, Rakhi, Father's Day, Mehndi, Haldi and every Indian celebration. Handwritten cards included. Free PAN India delivery."
        canonical="/"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-cream-100 via-cream-200 to-rose-pale">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="reveal">
            <span className="inline-block bg-rose-pale text-rose-brand font-body text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              🎁 Father's Day · June 21
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy-brand leading-tight mb-5">
              Every Celebration Deserves a Beautiful Hamper
            </h1>
            <p className="font-body text-base md:text-lg text-navy-mid leading-relaxed mb-7 max-w-lg">
              We curate premium festive gift hampers for every major Indian celebration — beautifully packaged,
              personally delivered, with a handwritten card that makes it feel like home.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm md:text-base px-5 md:px-7 py-3 md:py-3.5">
                Order a Hamper
              </a>
              <Link to="/collections" className="btn-outline text-sm md:text-base px-5 md:px-7 py-3 md:py-3.5">
                Browse Collections
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-rose-pale to-gold-pale rounded-3xl flex flex-col items-center justify-center shadow-xl hover-lift transition-all duration-500">
              <span className="text-7xl mb-4">🎁</span>
              <p className="font-display text-lg text-navy-brand text-center px-6">Beautiful hampers,<br />lovingly curated</p>
              <p className="font-body text-sm text-rose-brand mt-2">Replace with product photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FESTIVAL BAR */}
      <section className="bg-navy-brand py-4 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-3 md:gap-4 md:justify-center min-w-max md:min-w-0">
            {festivals.map(f => (
              <Link key={f.name} to={f.to}
                className={"flex items-center gap-1.5 font-body text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 py-2 rounded-full transition-all " + (f.urgent ? 'bg-rose-brand text-white font-semibold animate-pulse' : 'text-cream-300 hover:text-white hover:bg-navy-mid')}>
                <span>{f.emoji}</span>
                <span>{f.name}</span>
                <span className="text-xs opacity-70">{f.date}</span>
              </Link>
            ))}
            <Link to="/collections" className="flex items-center gap-1.5 font-body text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-cream-300 hover:text-white hover:bg-navy-mid transition-all">
              All →
            </Link>
          </div>
        </div>
      </section>

      {/* FATHER'S DAY SPOTLIGHT */}
      <section className="bg-cream-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-md grid md:grid-cols-2 card-shimmer">
            <div className="bg-gradient-to-br from-gold-pale to-rose-pale p-8 md:p-10 flex items-center justify-center min-h-44 md:min-h-52">
              <div className="text-center">
                <span className="text-5xl md:text-6xl">👔</span>
                <p className="font-display text-base md:text-lg text-navy-brand mt-3">Father's Day</p>
                <p className="font-body text-sm text-rose-brand">June 21 · Order by June 18</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block text-rose-brand font-body text-xs font-semibold uppercase tracking-widest mb-3">
                🔥 Order Now — Limited Slots
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-navy-brand mb-3 leading-tight">
                Make Dad Feel Like a King This Father's Day
              </h2>
              <p className="font-body text-sm md:text-base text-navy-mid mb-6 leading-relaxed">
                Curated hampers starting at ₹999. Premium treats, artisan goodies, and a handwritten card.
                Free delivery anywhere in India.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA_FD} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">Order Father's Day Hamper</a>
                <Link to="/collections/fathers-day" className="btn-outline text-sm">See Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Why Tyoohar Ghar?</h2>
            <p className="section-subtitle max-w-xl mx-auto">We believe every Indian celebration deserves a gift that actually feels like one.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {trustPoints.map(p => (
              <div key={p.title} className="card p-4 md:p-6 text-center group hover-lift">
                <span className="text-3xl md:text-4xl mb-3 md:mb-4 block transition-transform duration-300 group-hover:scale-110">{p.icon}</span>
                <h3 className="font-display text-base md:text-lg text-navy-brand mb-1 md:mb-2">{p.title}</h3>
                <p className="font-body text-xs md:text-sm text-navy-mid leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAMPERS */}
      <section className="bg-cream-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Our Hampers</h2>
            <p className="section-subtitle max-w-xl mx-auto">Curated with care. Every hamper ships with a personalised handwritten card — included, always.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {hampers.map(h => (
              <div key={h.name} className="card flex flex-col group hover-lift">
                <div className="bg-gradient-to-br from-rose-pale to-gold-pale h-44 md:h-52 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110 inline-block">🎁</span>
                    <p className="font-body text-xs text-rose-brand mt-2">Add product photo</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg md:text-xl text-navy-brand">{h.name}</h3>
                    <span className="font-body text-xs bg-rose-pale text-rose-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">{h.tag}</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl text-rose-brand mb-3">&#8377;{h.price}</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-4 flex-1">{h.desc}</p>
                  <a href={"https://wa.me/919599004265?text=" + encodeURIComponent(h.waMsg)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center text-sm">
                    Order This Hamper
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link to="/collections" className="btn-outline text-sm md:text-base px-7 py-3 md:py-3.5">View All Collections →</Link>
          </div>
        </div>
      </section>

      {/* RITUALS TEASER */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-100 to-rose-pale py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-navy-brand text-cream-200 font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              ✨ NEW — Rituals & Ceremonies
            </span>
            <h2 className="section-title mb-3">One Hamper for Every Ritual</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Stop running to six different shops before every ceremony.
              Our ritual hampers have everything you need — the right items, right quantities, beautifully packed.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {rituals.map(r => (
              <Link
                key={r.name}
                to={r.to}
                className="card p-4 text-center group hover-lift border border-transparent hover:border-gold-brand/40 transition-all duration-300"
              >
                <span className="text-3xl mb-2 block transition-transform duration-300 group-hover:scale-110">{r.emoji}</span>
                <p className="font-display text-sm text-navy-brand mb-1">{r.name}</p>
                <p className="font-body text-xs text-rose-brand">from ₹{r.from}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/rituals" className="btn-primary px-8 py-3.5">
              Explore All Ritual Hampers →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy-brand py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl md:text-4xl text-white mb-3">How It Works</h2>
          <p className="font-body text-cream-300 mb-10 md:mb-12 max-w-md mx-auto text-sm md:text-base">Ordering takes under 3 minutes. We handle everything else.</p>
          <div className="grid md:grid-cols-3 gap-0 md:gap-8">
            {[
              { step: '01', icon: '🛍️', title: 'Choose Your Hamper',    desc: "Browse our collections or tell us the occasion and budget. We'll suggest the perfect hamper." },
              { step: '02', icon: '💬', title: 'WhatsApp Us',           desc: "Share your hamper choice, delivery address, and the message you'd like on the card." },
              { step: '03', icon: '📦', title: 'Delivered Beautifully', desc: 'We pack, write the card, and ship. Arrives ready to gift — no assembly needed.' },
            ].map((s, i) => (
              <div key={s.step} className={"flex flex-col items-center py-8 md:py-0 " + (i < 2 ? 'border-b md:border-b-0 border-white/10' : '')}>
                <span className="font-display text-4xl md:text-5xl text-rose-brand/30 mb-2">{s.step}</span>
                <span className="text-3xl md:text-4xl mb-3">{s.icon}</span>
                <h3 className="font-display text-lg md:text-xl text-white mb-2">{s.title}</h3>
                <p className="font-body text-sm text-cream-300 leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-10 md:mt-12 text-sm md:text-base px-7 py-3 md:py-3.5 inline-flex">
            Start Your Order →
          </a>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-5">Born from a Simple Observation</h2>
          <p className="font-body text-base md:text-lg text-navy-mid leading-relaxed mb-5">
            India celebrates more festivals than almost any culture on earth. Yet most online gifting still looks like a
            wholesale catalogue — generic baskets, plastic wrapping, the same dry-fruit boxes for every occasion.
          </p>
          <p className="font-body text-base md:text-lg text-navy-mid leading-relaxed mb-8">
            Tyoohar Ghar was built to fill that gap. We curate hampers the way a thoughtful friend would — with a clear
            theme, premium items, elegant packaging, and a handwritten note that makes the person on the other end feel truly seen.
          </p>
          <Link to="/about" className="btn-outline">Our Story →</Link>
        </div>
      </section>

      {/* CORPORATE STRIP */}
      <section className="bg-rose-brand py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="font-display text-xl md:text-3xl text-white mb-2">Corporate Gifting for Diwali 2026</h2>
            <p className="font-body text-rose-pale text-sm md:text-base max-w-xl">Early orders open. From 10 hampers to 10,000 — custom branding, bulk pricing, guaranteed delivery.</p>
          </div>
          <a href={WA_CORP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp bg-white text-[#25D366] hover:bg-cream-100 whitespace-nowrap flex-shrink-0 text-sm">
            Get a Quote
          </a>
        </div>
      </section>

      {/* UGC CTA */}
      <section className="bg-cream-200 py-12 md:py-14 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <span className="text-4xl mb-4 block">📸</span>
          <h2 className="section-title mb-3">Share Your Unboxing</h2>
          <p className="font-body text-sm md:text-base text-navy-mid mb-6 leading-relaxed">
            Tag us <strong>@tyoohar_ghar</strong> on Instagram when your hamper arrives and get <strong>10% off your next order</strong>. We repost every single one.
          </p>
          <a href="https://www.instagram.com/tyoohar_ghar" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Follow on Instagram →
          </a>
        </div>
      </section>
    </>
  );
}
