import SEOHead from '../components/SEOHead.jsx';

const WA_GENERAL = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20place%20an%20order.";
const WA_CORPORATE = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27m%20interested%20in%20corporate%20gifting.%20Can%20you%20help%3F";
const WA_CUSTOM = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20a%20custom%20hamper.%20Can%20you%20help%3F";
const WA_QUESTION = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%20have%20a%20question.";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Tyoohar Ghar — Order Hampers via WhatsApp"
        description="Contact Tyoohar Ghar to order a hamper, ask about delivery, or enquire about corporate gifting. We're on WhatsApp — reach us at +91 95990 04265."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 to-cream-100 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-display text-4xl text-navy-brand mb-4">Get in Touch</h1>
          <p className="font-body text-navy-mid leading-relaxed">
            We're a WhatsApp-first brand, which means you'll always reach a real person.
            Pick your reason below and we'll get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-cream-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">

            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
              className="card p-7 hover:border-rose-brand border border-transparent transition-all group">
              <span className="text-4xl block mb-3">🎁</span>
              <h2 className="font-display text-xl text-navy-brand mb-2">Place an Order</h2>
              <p className="font-body text-sm text-navy-mid leading-relaxed mb-4">
                Ready to order a hamper? Tell us which one you'd like (or your budget and we'll suggest one).
                Orders take under 3 minutes on WhatsApp.
              </p>
              <span className="font-body text-sm text-rose-brand font-semibold group-hover:underline">
                Chat on WhatsApp →
              </span>
            </a>

            <a href={WA_CORPORATE} target="_blank" rel="noopener noreferrer"
              className="card p-7 hover:border-rose-brand border border-transparent transition-all group">
              <span className="text-4xl block mb-3">🏢</span>
              <h2 className="font-display text-xl text-navy-brand mb-2">Corporate Order</h2>
              <p className="font-body text-sm text-navy-mid leading-relaxed mb-4">
                Looking to order for your team or clients? Tell us the quantity, occasion, and budget —
                we'll send a proposal in 24 hours.
              </p>
              <span className="font-body text-sm text-rose-brand font-semibold group-hover:underline">
                Chat on WhatsApp →
              </span>
            </a>

            <a href={WA_CUSTOM} target="_blank" rel="noopener noreferrer"
              className="card p-7 hover:border-rose-brand border border-transparent transition-all group">
              <span className="text-4xl block mb-3">✨</span>
              <h2 className="font-display text-xl text-navy-brand mb-2">Custom Hamper</h2>
              <p className="font-body text-sm text-navy-mid leading-relaxed mb-4">
                Have something specific in mind? Tell us who it's for, your budget, and what they love —
                we'll build a hamper just for them.
              </p>
              <span className="font-body text-sm text-rose-brand font-semibold group-hover:underline">
                Chat on WhatsApp →
              </span>
            </a>

            <a href={WA_QUESTION} target="_blank" rel="noopener noreferrer"
              className="card p-7 hover:border-rose-brand border border-transparent transition-all group">
              <span className="text-4xl block mb-3">💬</span>
              <h2 className="font-display text-xl text-navy-brand mb-2">Ask a Question</h2>
              <p className="font-body text-sm text-navy-mid leading-relaxed mb-4">
                Delivery timelines, payment, tracking, returns — just ask. We reply within the hour
                during business hours (9am–9pm, Mon–Sat).
              </p>
              <span className="font-body text-sm text-rose-brand font-semibold group-hover:underline">
                Chat on WhatsApp →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-cream-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-navy-brand mb-6">Our Details</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-body text-2xl mb-2">📱</p>
              <p className="font-display text-navy-brand text-base mb-1">WhatsApp</p>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-rose-brand hover:underline">+91 95990 04265</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-body text-2xl mb-2">📸</p>
              <p className="font-display text-navy-brand text-base mb-1">Instagram</p>
              <a href="https://instagram.com/tyoohar_ghar" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-rose-brand hover:underline">@tyoohar_ghar</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-body text-2xl mb-2">📍</p>
              <p className="font-display text-navy-brand text-base mb-1">Based in</p>
              <p className="font-body text-sm text-navy-mid">Delhi, India</p>
              <p className="font-body text-xs text-navy-light mt-1">Ships across PAN India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
