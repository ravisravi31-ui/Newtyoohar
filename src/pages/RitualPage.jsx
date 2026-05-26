import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';

const WA_BASE = 'https://wa.me/919599004265?text=';

const ritualMeta = {
  mehndi: {
    name: 'Mehndi',
    emoji: '🌿',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    tagline: 'The night of colour and tradition',
    intro: "The Mehndi ceremony is one of the most joyful pre-wedding rituals. Our Mehndi hampers bring together premium artisan mehendi cones, authentic attar, floral accessories, and rose water — everything needed for the evening, beautifully packed.",
    whyPoints: [
      "Premium artisan mehendi cones — rich, dark colour, quick dry",
      "Authentic attar (traditional perfume) to complement the ceremony",
      "Floral hair accessories thoughtfully chosen for the occasion",
      "Everything in one box — no last-minute runs to multiple shops",
    ],
    hampers: [
      { key: 'mehndi-starter', name: 'The Mehndi Starter', price: '1,299', tag: 'Best Value', items: 'Artisan mehendi cones (6 count) · Authentic attar vial · Floral hair accessories · Rose water spray · Bangle set · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Mehndi Starter (Rs.1,299). Can you share details?" },
      { key: 'mehndi-celebration', name: 'The Mehndi Celebration', price: '2,499', tag: 'Most Popular', items: 'Premium mehendi cones (12 count) · Authentic attar duo · Floral jewellery set · Rose & jasmine water · Bangles set · Artisan ladoo box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Mehndi Celebration (Rs.2,499). Can you share details?" },
      { key: 'mehndi-grand', name: 'The Mehndi Grand', price: '3,999', tag: 'Luxury Gift', items: 'Professional artisan mehendi kit · Luxury attar collection · Kundan hair accessories · Rose water & ubtan set · Premium mithai box · Gold-dipped bangle set · Satin-wrapped keepsake box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Mehndi Grand (Rs.3,999). Can you share details?" },
    ],
  },

  haldi: {
    name: 'Haldi',
    emoji: '💛',
    gradient: 'from-gold-pale via-rose-pale to-cream-200',
    tagline: 'The most joyful ceremony of the wedding season',
    intro: "Haldi is the one ceremony where everyone gets involved — and the one most people under-prepare for. Our Haldi hampers contain organic haldi, chandan paste, ubtan kit, and marigold decor — everything for the ceremony, minus the chaos.",
    whyPoints: [
      "Only 100% organic haldi and chandan — safe for all skin types",
      "Ubtan kit included — the traditional beauty ritual alongside the ceremony",
      "Marigold and rose decoration pack to set the scene",
      "The kesar & mithai box makes it feel like a true celebration",
    ],
    hampers: [
      { key: 'haldi-glow-starter', name: 'The Haldi Glow Starter', price: '999', tag: 'Best Value', items: 'Organic haldi powder · Chandan (sandalwood) paste · Rose water · Ubtan scrub · Marigold decorative pack · Mithai box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Haldi Glow Starter (Rs.999). Can you share details?" },
      { key: 'haldi-celebration', name: 'The Haldi Celebration', price: '1,999', tag: 'Most Popular', items: 'Organic haldi & chandan set · Traditional ubtan kit · Rose & jasmine water duo · Marigold garland decor · Kesar (saffron) pack · Premium mithai box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Haldi Celebration (Rs.1,999). Can you share details?" },
      { key: 'haldi-grand-ritual', name: 'The Grand Haldi Ritual', price: '3,499', tag: 'Luxury Gift', items: 'Premium organic haldi & chandan · Luxury ubtan set · Kesar & chandan soap · Rose & jasmine water duo · Marigold & rose decoration kit · Premium mithai · Keepsake box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Haldi Ritual (Rs.3,499). Can you share details?" },
    ],
  },

  sangeet: {
    name: 'Sangeet',
    emoji: '🎶',
    gradient: 'from-rose-pale via-gold-pale to-cream-200',
    tagline: 'Dance, celebrate, make memories',
    intro: "The Sangeet night is all about dancing, laughing, and creating memories that last a lifetime. Our Sangeet hampers are packed with glitter accessories, Bollywood props, artisan snacks, and party treats — everything for an unforgettable night.",
    whyPoints: [
      "Fun Bollywood photo props — Instagram-worthy moments guaranteed",
      "Glitter accessories so everyone can join the party in style",
      "Premium artisan snacks and treats to keep the energy going",
      "A thoughtful gift that doubles as a party prop kit",
    ],
    hampers: [
      { key: 'sangeet-starter', name: 'The Sangeet Starter', price: '1,499', tag: 'Fun & Festive', items: 'Glitter accessories set · Mini Bollywood photo props · Artisan snack mix · Premium chocolates · Mini celebration crackers (safe) · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Sangeet Starter (Rs.1,499). Can you share details?" },
      { key: 'sangeet-party-box', name: 'The Sangeet Party Box', price: '2,799', tag: 'Most Popular', items: 'Full Bollywood photo prop kit · Shimmery jewellery set · Premium artisan snack hamper · Luxury chocolate collection · Flower crown · Satin ribbon box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Sangeet Party Box (Rs.2,799). Can you share details?" },
    ],
  },

  tilak: {
    name: 'Tilak',
    emoji: '🪔',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    tagline: 'An auspicious beginning to the wedding journey',
    intro: "The Tilak ceremony marks the formal beginning of the wedding alliance. Our Tilak hampers contain sacred chandan, premium puja samagri, a silver-toned thali, and designer mithai — everything needed for this auspicious occasion.",
    whyPoints: [
      "Sacred chandan tilak and kumkum — ritually appropriate and premium quality",
      "Silver-toned puja thali with all essentials",
      "Designer mithai box fit for gifting at a ceremony",
      "Everything in one hamper — prepared and presented beautifully",
    ],
    hampers: [
      { key: 'tilak-essentials', name: 'The Tilak Essentials', price: '1,299', tag: 'Traditional', items: 'Sacred chandan tilak · Kumkum & haldi kit · Silver-toned thali set · Premium dry fruits box · Designer mithai box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Tilak Essentials (Rs.1,299). Can you share details?" },
      { key: 'tilak-grand', name: 'The Tilak Grand', price: '2,499', tag: 'Premium Gift', items: 'Premium puja thali set · Pure silver chandan & kumkum container set · Kesar & haldi kit · Luxury dry fruit box · Designer mithai collection · Full puja samagri kit · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Tilak Grand (Rs.2,499). Can you share details?" },
    ],
  },

  baraat: {
    name: 'Baraat',
    emoji: '🐴',
    gradient: 'from-gold-pale via-rose-pale to-cream-200',
    tagline: 'Welcome the groom and his family in style',
    intro: "The Baraat is a grand arrival — and the welcome should match. Our Baraat hampers are designed to welcome the groom and his family with warmth, including premium attar, mithai, a sherwani pocket square, and a handwritten welcome card.",
    whyPoints: [
      "Premium attar — the perfect gift for the groom to wear on his baraat",
      "Grand mithai box to welcome the baraat with sweetness",
      "Sehra decoration pack to complete the look",
      "Personalised handwritten welcome card from the bride's family",
    ],
    hampers: [
      { key: 'baraat-welcome', name: 'The Baraat Welcome', price: '1,999', tag: 'Essential', items: "Welcome sehra decoration · Premium attar for groom · Dry fruit welcome box · Grand mithai box · Sherwani pocket square · Personalised welcome card", wa: "Hi Tyoohar Ghar! I'd like to order The Baraat Welcome hamper (Rs.1,999). Can you share details?" },
      { key: 'baraat-grand-welcome', name: 'The Grand Baraat Welcome', price: '3,999', tag: 'Luxury', items: 'Premium floral welcome kit · Luxury attar collection · Grand mithai & dry fruit box · Groom keepsake gift · Personalised welcome letter (handwritten) · Satin ribbon gift box', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Baraat Welcome (Rs.3,999). Can you share details?" },
    ],
  },

  vidai: {
    name: 'Vidai',
    emoji: '🌸',
    gradient: 'from-rose-pale via-cream-200 to-gold-pale',
    tagline: 'A heartfelt blessing as she begins her new journey',
    intro: "Vidai is one of the most emotional moments of a wedding — a daughter leaving home. Our Vidai hampers are designed to be the last, most personal gift from her family: a memory keepsake, comfort items from home, and a handwritten letter she'll treasure forever.",
    whyPoints: [
      "Personalised memory journal to record her wedding memories",
      "Comfort items she loves — homemade snacks, honey, her favourite things",
      "Family photo frame — a piece of home to take with her",
      "Handwritten letter card from family — a gift she'll keep forever",
    ],
    hampers: [
      { key: 'vidai-memories', name: 'The Vidai Memories Box', price: '1,499', tag: 'Heartfelt', items: 'Personalised memory journal · Family photo frame · Home comfort box (honey, artisan snacks) · Dried flower keepsake · Personalised handwritten letter card', wa: "Hi Tyoohar Ghar! I'd like to order The Vidai Memories Box (Rs.1,499). Can you share details?" },
      { key: 'vidai-blessings', name: 'The Vidai Blessings', price: '2,999', tag: 'Most Gifted', items: 'Luxury memory keepsake box · Silver-toned blessing items · Family ritual blessing set · Premium comfort hamper · Dried rose petal sachet · Personalised handwritten letter · Satin ribbon box', wa: "Hi Tyoohar Ghar! I'd like to order The Vidai Blessings (Rs.2,999). Can you share details?" },
    ],
  },

  'griha-pravesh': {
    name: 'Griha Pravesh',
    emoji: '🏡',
    gradient: 'from-cream-200 via-gold-pale to-rose-pale',
    tagline: 'A blessed new beginning in a new home',
    intro: "Griha Pravesh (housewarming) is one of the most auspicious occasions in Indian life. Our Griha Pravesh hampers contain everything needed for the puja, plus thoughtful gifts for the new home — because a new beginning deserves to be celebrated properly.",
    whyPoints: [
      "Complete puja samagri — everything for the housewarming ceremony",
      "Coconut, rice, and auspicious items traditionally used at Griha Pravesh",
      "Premium artisan sweets to share with family and guests",
      "A beautiful houseplant — a living gift for the new home",
    ],
    hampers: [
      { key: 'griha-welcome', name: 'The Griha Pravesh Welcome', price: '1,299', tag: 'Traditional', items: 'Puja thali with essentials · Coconut & rice pouch · Small holy plant (tulsi) · Premium sweets box · Agarbatti & diya set · Personalised blessing card', wa: "Hi Tyoohar Ghar! I'd like to order The Griha Pravesh Welcome (Rs.1,299). Can you share details?" },
      { key: 'griha-premium', name: 'The Griha Pravesh Premium', price: '2,499', tag: 'Most Popular', items: 'Full puja samagri kit · Premium organic dry fruits · Artisan scented candles · Premium mithai box · Brass diya set · Luxury agarbatti collection · Personalised blessing card', wa: "Hi Tyoohar Ghar! I'd like to order The Griha Pravesh Premium (Rs.2,499). Can you share details?" },
    ],
  },

  annaprashan: {
    name: 'Annaprashan',
    emoji: '🍚',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    tagline: "Baby's first rice — a milestone to celebrate",
    intro: "Annaprashan (the baby's first rice ceremony) is one of the most beautiful milestones in a child's life. Our hampers contain a pure silver spoon and bowl, a premium kheer preparation kit, marigold decoration, and everything needed for this auspicious first meal.",
    whyPoints: [
      "Pure silver spoon and bowl — a traditional and lasting keepsake",
      "Organic kheer preparation kit — everything for the first meal ceremony",
      "Marigold and floral decoration pack for the celebration",
      "Artisan mithai box to share with family and guests",
    ],
    hampers: [
      { key: 'annaprashan-blessing', name: 'The Annaprashan Blessing', price: '999', tag: 'Traditional', items: "Baby's first silver spoon · Organic kheer preparation kit · Decorative banana leaf set · Artisan mithai box · Personalised blessing card", wa: "Hi Tyoohar Ghar! I'd like to order The Annaprashan Blessing (Rs.999). Can you share details?" },
      { key: 'annaprashan-grand', name: 'The Annaprashan Grand', price: '1,999', tag: 'Premium Gift', items: 'Pure silver spoon & bowl set · Premium organic kheer kit · Floral decoration pack · Designer mithai box · Sacred puja samagri · Baby memory card · Personalised blessing card', wa: "Hi Tyoohar Ghar! I'd like to order The Annaprashan Grand (Rs.1,999). Can you share details?" },
    ],
  },

  mundan: {
    name: 'Mundan',
    emoji: '✂️',
    gradient: 'from-cream-200 via-rose-pale to-gold-pale',
    tagline: "The baby's first haircut — an auspicious milestone",
    intro: "Mundan (the first haircut ceremony) is a deeply auspicious milestone in Indian families. Our Mundan hampers include sacred puja samagri, a silver keepsake hair box for the baby's first locks, artisan mithai, and a personalised blessing card.",
    whyPoints: [
      "Silver keepsake hair box — a treasured memento of this milestone",
      "Complete sacred puja samagri for the ceremony",
      "Premium artisan mithai to celebrate and share",
      "Personalised blessing card from family — a memory they'll keep",
    ],
    hampers: [
      { key: 'mundan-blessings', name: 'The Mundan Blessings', price: '899', tag: 'Traditional', items: 'Sacred water (gangajal) · Tilak kit · Puja samagri · Artisan mithai box · Personalised blessing card', wa: "Hi Tyoohar Ghar! I'd like to order The Mundan Blessings (Rs.899). Can you share details?" },
      { key: 'mundan-grand', name: 'The Mundan Grand', price: '1,599', tag: 'Premium Gift', items: 'Premium puja samagri · Silver keepsake hair box · Designer mithai box · Sacred gangajal · Baby milestone memory card · Personalised blessing card', wa: "Hi Tyoohar Ghar! I'd like to order The Mundan Grand (Rs.1,599). Can you share details?" },
    ],
  },
};

export default function RitualPage({ ritual }) {
  const meta = ritualMeta[ritual];

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl text-navy-brand mb-4">Coming Soon</p>
          <Link to="/rituals" className="btn-outline">Back to Rituals</Link>
        </div>
      </div>
    );
  }

  const waMsg = encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a " + meta.name + " hamper. Can you help me choose?");

  return (
    <>
      <SEOHead
        title={meta.name + " Hamper India — Curated by Tyoohar Ghar"}
        description={"Curated " + meta.name + " hamper by Tyoohar Ghar. " + meta.intro + " Starting from Rs." + meta.hampers[0]?.price + " with free PAN India delivery."}
        canonical={"/rituals/" + ritual}
      />

      {/* Hero */}
      <section className={"bg-gradient-to-br " + meta.gradient + " py-16 md:py-24"}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-navy-brand text-cream-200 font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            ✨ Ritual Hamper
          </span>
          <div className="text-6xl mb-4">{meta.emoji}</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-3 leading-tight">
            {meta.name} Hamper
          </h1>
          <p className="font-body text-base text-rose-brand font-semibold mb-5">{meta.tagline}</p>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            {meta.intro}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_BASE + waMsg} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-3.5">
              Order a {meta.name} Hamper
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">See Hampers ↓</a>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            ✍️ Handwritten card included · 🚚 Free PAN India delivery · 📦 Premium packaging
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">
            Choose Your {meta.name} Hamper
          </h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            Every hamper includes a personalised handwritten card with your blessing or message.
          </p>
          <div className={"grid gap-6 " + (meta.hampers.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3')}>
            {meta.hampers.map(h => (
              <div key={h.key} className="card flex flex-col group hover-lift">
                <HamperGallery hamperKey={h.key} emoji={meta.emoji} gradient={meta.gradient} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl text-navy-brand">{h.name}</h3>
                    <span className="font-body text-xs bg-gold-pale text-gold-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 border border-gold-light">{h.tag}</span>
                  </div>
                  <p className="font-display text-2xl text-rose-brand mb-3">&#8377;{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <a href={WA_BASE + encodeURIComponent(h.wa)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                    Order This Hamper
                  </a>
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
            <h2 className="font-display text-3xl text-navy-brand mb-4">What Makes This Hamper Special</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {meta.whyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold-brand text-lg flex-shrink-0 mt-0.5">✦</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="text-gold-brand text-lg flex-shrink-0 mt-0.5">✦</span>
                <span className="leading-relaxed">Handwritten card — personalise your blessing or message</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Need a Custom Hamper?</h3>
            <p className="font-body text-navy-mid mb-4 text-sm leading-relaxed">
              Have specific items you need? A particular budget? We build custom {meta.name} hampers for every requirement.
            </p>
            <a
              href={WA_BASE + encodeURIComponent("Hi! I'd like a custom " + meta.name + " hamper. Can you help?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center mb-4"
            >
              Request Custom Hamper
            </a>
            <Link to="/rituals" className="btn-outline w-full justify-center text-sm">
              See All Ritual Hampers
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Planning a full wedding?</p>
          <Link to="/rituals" className="font-display text-xl text-white hover:text-rose-light transition-colors">
            See All Ritual Hampers →
          </Link>
        </div>
      </section>
    </>
  );
}
