import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';

const WA_BASE = 'https://wa.me/919599004265?text=';

const festivalMeta = {
  'Karwa Chauth': {
    emoji: '🌙',
    gradient: 'from-gold-pale via-rose-pale to-cream-200',
    badge: '🌙 Karwa Chauth',
    description: "Show her how cherished she is. Our Karwa Chauth hampers are curated for the woman who fasts with love — skincare, sweets, jewellery, and a handwritten card that makes the moment feel personal.",
    hampers: [
      { key: 'karwa-glow-box', name: 'The Glow Box', price: '1,299', tag: 'Best Value', items: 'Rose face mask · Saffron body butter · Traditional sargi sweets · Sindoor & bindi set · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Glow Box for Karwa Chauth (Rs.1,299). Can you share details?" },
      { key: 'karwa-premium', name: 'The Karwa Chauth Premium', price: '2,499', tag: 'Most Gifted', items: 'Luxury skincare duo · Kesar & chandan face kit · Designer bindi set · Premium mithai box · Silver-toned diya · Satin-wrapped gift box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Karwa Chauth Premium (Rs.2,499). Can you share details?" },
    ],
  },
  'Christmas': {
    emoji: '🎄',
    gradient: 'from-rose-pale via-cream-200 to-gold-pale',
    badge: '🎄 Christmas',
    description: "Spread festive cheer with curated Christmas hampers filled with artisan chocolates, Christmas cookies, scented candles, and warm treats — beautifully wrapped and delivered across India.",
    hampers: [
      { key: 'christmas-joy-box', name: 'The Christmas Joy Box', price: '1,199', tag: 'Best Value', items: 'Assorted Christmas cookies · Dark & milk chocolates · Cinnamon scented candle · Handwritten Christmas card', wa: "Hi Tyoohar Ghar! I'd like to order The Christmas Joy Box (Rs.1,199). Can you share details?" },
      { key: 'christmas-premium', name: 'The Christmas Premium', price: '2,299', tag: 'Most Popular', items: 'Artisan chocolate collection · Christmas cookie tin · Mulled wine spice mix · Premium scented candle duo · Festive ribbon box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Christmas Premium (Rs.2,299). Can you share details?" },
      { key: 'christmas-grand', name: 'The Grand Christmas Hamper', price: '3,499', tag: 'Luxury Gift', items: 'Luxury Belgian chocolate assortment · Artisan cookie tin · Christmas pudding · Premium candle trio · Satin bow keepsake box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Christmas Hamper (Rs.3,499). Can you share details?" },
    ],
  },
  'Wedding': {
    emoji: '💍',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    badge: '💍 Wedding',
    description: "Beautiful hampers for the wedding couple, bridesmaids, family, and guests. From welcome gifts to return gifts — we handle the gifting so you can focus on celebrating.",
    hampers: [
      { key: 'wedding-welcome', name: 'The Wedding Welcome Hamper', price: '1,799', tag: 'Guest Favourite', items: 'Premium dry fruits · Artisan chocolates · Attar (perfume) · Decorative mithai box · Personalised welcome card', wa: "Hi Tyoohar Ghar! I'd like to order The Wedding Welcome Hamper (Rs.1,799). Can you share details?" },
      { key: 'wedding-grand-gift', name: 'The Grand Wedding Gift', price: '3,499', tag: 'Most Gifted', items: 'Luxury dry fruit & nut assortment · Premium chocolate box · Designer attar set · Silver-toned keepsake bowl · Satin ribbon box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Wedding Gift (Rs.3,499). Can you share details?" },
    ],
    extraCta: { label: 'See Ritual Hampers (Mehndi, Haldi, Sangeet...)', to: '/rituals' },
  },
  'Baby Shower': {
    emoji: '🍼',
    gradient: 'from-rose-pale via-gold-pale to-cream-200',
    badge: '🍼 Baby Shower',
    description: "Celebrate the newest arrival with sweet, thoughtful hampers for the mum-to-be, the baby, and the whole family. Curated with love — because every new beginning deserves something beautiful.",
    hampers: [
      { key: 'baby-love-box', name: 'The Baby Love Box', price: '1,299', tag: 'Sweet & Simple', items: 'Organic baby skincare set · Soft muslin wrap · Premium chocolates for mum · Baby-themed artisan cookies · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Baby Love Box (Rs.1,299). Can you share details?" },
      { key: 'baby-grand', name: 'The Grand Baby Hamper', price: '2,799', tag: 'Most Popular', items: 'Luxury organic baby kit · Knitted keepsake toy · Premium chocolates for mum · Artisan cookie tin · Scented candle for nursery · Satin-bow box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Baby Hamper (Rs.2,799). Can you share details?" },
    ],
  },
  'Navratri': {
    emoji: '🪔',
    gradient: 'from-gold-pale via-rose-pale to-cream-200',
    badge: '🪔 Navratri',
    description: "Navratri is a time for devotion, dance, and togetherness. Our hampers bring together everything needed for the celebration — traditional sweets, puja essentials, and gifts for the women in your life.",
    hampers: [
      { key: 'navratri-devotion', name: 'The Navratri Devotion Box', price: '999', tag: 'Best Value', items: 'Sabudana & fasting snack mix · Traditional sindoor & kumkum set · Mini diya set · Mithai box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Navratri Devotion Box (Rs.999). Can you share details?" },
      { key: 'navratri-celebration', name: 'The Navratri Celebration', price: '1,999', tag: 'Most Gifted', items: 'Premium fasting snack hamper · Traditional jewellery set · Puja samagri kit · Artisan mithai box · Scented agarbatti · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Navratri Celebration (Rs.1,999). Can you share details?" },
      { key: 'navratri-grand', name: 'The Grand Navratri Hamper', price: '3,299', tag: 'Premium Gift', items: 'Luxury fasting food kit · Kundan jewellery set · Premium puja samagri · Saffron & rose dry fruit box · Artisan mithai · Decorative diya set · Keepsake box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Navratri Hamper (Rs.3,299). Can you share details?" },
    ],
  },
  'Ganesh Chaturthi': {
    emoji: '🐘',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    badge: '🐘 Ganesh Chaturthi',
    description: "Celebrate Ganapati with hampers filled with traditional modaks, puja essentials, and festive treats. Perfect for families and for sending to loved ones during the 10-day celebration.",
    hampers: [
      { key: 'ganesh-blessings', name: 'The Ganesh Blessings Box', price: '1,099', tag: 'Traditional', items: 'Artisan modaks (12 pieces) · Coconut laddoos · Puja samagri set · Mini Ganesh idol (brass finish) · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Ganesh Blessings Box (Rs.1,099). Can you share details?" },
      { key: 'ganesh-celebration', name: 'The Celebration Hamper', price: '2,499', tag: 'Most Popular', items: 'Premium modak assortment · Artisan mithai box · Complete puja thali · Brass Ganesh idol · Luxury agarbatti set · Decorative diya · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Ganesh Celebration Hamper (Rs.2,499). Can you share details?" },
    ],
  },
  'Lohri': {
    emoji: '🔥',
    gradient: 'from-gold-pale via-rose-pale to-cream-200',
    badge: '🔥 Lohri / Makar Sankranti',
    description: "Lohri and Makar Sankranti celebrate the harvest, the sun's journey, and the warmth of community. Our hampers bring together traditional treats — rewri, gajak, til sweets — to share the joy.",
    hampers: [
      { key: 'lohri-warmth-box', name: 'The Lohri Warmth Box', price: '899', tag: 'Traditional', items: 'Rewri & gajak assortment · Til (sesame) laddoos · Groundnut chikki · Popcorn mix · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Lohri Warmth Box (Rs.899). Can you share details?" },
      { key: 'lohri-harvest-grand', name: 'The Harvest Grand Hamper', price: '1,999', tag: 'Premium Gift', items: 'Premium rewri & gajak box · Artisan til sweets · Mixed chikki assortment · Dry fruit pouch · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Harvest Grand Hamper (Rs.1,999). Can you share details?" },
    ],
  },
  'Eid': {
    emoji: '🌙',
    gradient: 'from-gold-pale via-cream-200 to-rose-pale',
    badge: '🌙 Eid',
    description: "Eid is a time for gratitude, generosity, and celebration with loved ones. Our Eid hampers are filled with premium dates, artisan mithai, bakery delights, and thoughtful gifts — delivered beautifully across India.",
    hampers: [
      { key: 'eid-mubarak-box', name: 'The Eid Mubarak Box', price: '1,299', tag: 'Most Gifted', items: 'Premium Medjool dates · Sheer khurma ingredients · Artisan mithai assortment · Sharbat concentrate · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Eid Mubarak Box (Rs.1,299). Can you share details?" },
      { key: 'eid-grand-celebration', name: 'The Grand Eid Hamper', price: '2,799', tag: 'Premium Gift', items: 'Luxury Medjool dates box · Premium attar (perfume) · Artisan bakery assortment · Sheer khurma kit · Premium mithai collection · Keepsake ribbon box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Grand Eid Hamper (Rs.2,799). Can you share details?" },
    ],
  },
  'Bhai Dooj': {
    emoji: '🪢',
    gradient: 'from-rose-pale via-gold-pale to-cream-200',
    badge: '🪢 Bhai Dooj',
    description: "Bhai Dooj celebrates the sibling bond. Gift your brother something he will actually love — chocolates, gourmet treats, personalised keepsakes — with a handwritten card that says it all.",
    hampers: [
      { key: 'bhaidooj-sweet-love', name: 'The Sweet Love Box', price: '999', tag: 'Best Value', items: 'Premium chocolates · Artisan mithai · Dry fruit pouch · Traditional tika set (kumkum, roli, chawal) · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Sweet Love Box for Bhai Dooj (Rs.999). Can you share details?" },
      { key: 'bhaidooj-premium', name: 'The Bhai Dooj Premium', price: '1,999', tag: 'Most Popular', items: 'Luxury chocolate assortment · Premium dry fruits · Artisan mithai box · Traditional tika thali set · Personalised leather tag · Keepsake box · Personalised card', wa: "Hi Tyoohar Ghar! I'd like to order The Bhai Dooj Premium (Rs.1,999). Can you share details?" },
    ],
  },
};

export default function GenericFestival({ festival, emoji, date }) {
  const meta = festivalMeta[festival] || {
    emoji: emoji || '🎁',
    gradient: 'from-cream-200 to-rose-pale',
    badge: festival,
    description: `Beautiful, curated hampers for ${festival}. Handwritten card included. Free PAN India delivery.`,
    hampers: [],
  };

  const waMsg = encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a " + festival + " hamper. Can you help me choose?");

  return (
    <>
      <SEOHead
        title={festival + " Gift Hampers India — Curated by Tyoohar Ghar"}
        description={festival + " gift hampers by Tyoohar Ghar. " + meta.description + " Starting at Rs.899 with free PAN India delivery."}
        canonical={"/collections/" + festival.toLowerCase().replace(/\s+/g, '-')}
      />

      <section className={"bg-gradient-to-br " + meta.gradient + " py-16 md:py-24"}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-navy-brand text-cream-200 font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            {meta.badge}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            {festival} Gift Hampers
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-3 leading-relaxed">
            {meta.description}
          </p>
          {date && (
            <p className="font-body text-sm text-rose-brand font-semibold mb-8">📅 {date}</p>
          )}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a href={WA_BASE + waMsg} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-3.5">
              Order a {festival} Hamper
            </a>
            {meta.hampers.length > 0 && (
              <a href="#hampers" className="btn-outline text-base px-7 py-3.5">See Hampers</a>
            )}
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            ✍️ Handwritten card included · 🚚 Free PAN India delivery · 📦 Premium packaging
          </p>
        </div>
      </section>

      {meta.hampers.length > 0 && (
        <section id="hampers" className="bg-cream-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Choose Your {festival} Hamper</h2>
            <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
              All hampers include a personalised handwritten card. Tell us what you would like it to say.
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
            {meta.extraCta && (
              <div className="text-center mt-10">
                <a href={meta.extraCta.to} className="btn-outline px-7 py-3">{meta.extraCta.label} →</a>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Tyoohar Ghar?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🎁', 'Every hamper is thoughtfully curated — not a generic gift box'],
                ['✍️', 'Handwritten card included — tell us your message'],
                ['🚚', 'Free delivery anywhere in India'],
                ['📦', 'Beautiful premium packaging — the unboxing is part of the gift'],
                ['💬', 'Order via WhatsApp in minutes — simple and personal'],
                ['💼', 'Bulk orders available for 10+ hampers with custom branding'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Need a Custom Hamper?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Have a specific budget or a list of items? We will build a custom {festival} hamper just for you.
            </p>
            <a
              href={WA_BASE + encodeURIComponent("Hi! I'd like a custom " + festival + " hamper. Can you help?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Hamper
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Explore more celebrations</p>
          <a href="/collections" className="font-display text-xl text-white hover:text-rose-light transition-colors">
            Browse All Gift Collections →
          </a>
        </div>
      </section>
    </>
  );
}
