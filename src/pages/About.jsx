import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20place%20an%20order.";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Tyoohar Ghar — Premium Festive Hampers India"
        description="Tyoohar Ghar creates premium curated gift hampers for every Indian festival. Founded in Delhi, we ship free across India. Our mission: make gifting feel personal again."
        canonical="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 via-cream-100 to-rose-pale py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Gifting Should Feel Like the Festival Itself
          </h1>
          <p className="font-body text-lg text-navy-mid leading-relaxed">
            Tyoohar Ghar was built on one simple belief: that a gift should feel as special as the moment it marks.
            Not a last-minute Amazon delivery. Not a generic box of sweets. Something that says — <em>I thought about you.</em>
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-brand">
            <h2>Our Story</h2>
            <p>
              Tyoohar Ghar started in Delhi with a straightforward frustration: the gifting options available
              during Indian festivals felt impersonal, rushed, or just expensive for what they were. A tin of
              cookies in generic packaging. A box of mithai that looked like it came off a factory line.
            </p>
            <p>
              We believed India's festivals deserved better. Tyoohar — the word itself captures joy, warmth,
              gathering. Our hampers try to live up to that word. Every product is chosen with care. Every card
              is handwritten. Every box is packed the way you'd pack something you're proud to give.
            </p>

            <h2>What Makes Us Different</h2>
            <p>
              We don't run a catalogue of 200 products. We curate. That means for every festival, we think
              hard about what makes a genuinely good gift for that occasion — not just what sells. A Father's
              Day hamper should reflect what dads actually love. A Rakhi hamper should feel like the affection
              behind the gesture.
            </p>
            <p>
              We're also a WhatsApp-first brand, which is a deliberate choice. It means you're talking to a
              person, not filling out a form. If you want to swap one item for something else, or add a line to
              the card, or send it to a strange address across India — just say so. We make it work.
            </p>

            <h2>The Handwritten Card</h2>
            <p>
              Every single Tyoohar Ghar order includes a handwritten card with your message. We've heard from
              customers that their family members kept the card for months. That's the detail that makes the
              difference. In a world of printed-to-scale messages, a handwritten one stands out.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-10">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ['🎁', 'Curation over quantity', "We'd rather offer five great hampers than fifty mediocre ones."],
              ['✍️', 'Personal at every scale', 'Handwritten cards, even on 500-unit corporate orders.'],
              ['🚚', 'Reach everywhere', 'Free shipping across PAN India. Your family is everywhere; we deliver everywhere.'],
              ['💚', 'Honest quality', "No filler products. Every item in every hamper is something we'd want to receive ourselves."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card p-6 text-center">
                <span className="text-4xl mb-3 block">{icon}</span>
                <h3 className="font-display text-navy-brand text-base mb-2">{title}</h3>
                <p className="font-body text-sm text-navy-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-brand py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl text-white mb-3">Ready to send something beautiful?</h2>
          <p className="font-body text-cream-300 mb-6">Browse our collections or WhatsApp us — we'll find the right hamper together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
              Order on WhatsApp
            </a>
            <Link to="/collections" className="btn-outline px-7 py-3.5 text-base border-white text-white hover:bg-white hover:text-navy-brand">
              See All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
