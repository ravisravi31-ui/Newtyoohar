import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%20have%20a%20question%20about%20my%20order.";

const faqs = [
  {
    q: "How do I place an order?",
    a: "All orders are placed via WhatsApp. Just click any 'Order on WhatsApp' button on the site, tell us which hamper you'd like, share the delivery address and card message, and confirm payment. It takes under 3 minutes.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (GPay, PhonePe, Paytm), NEFT/IMPS bank transfer, and for corporate orders, we issue a GST invoice for bank transfer. We do not currently accept credit/debit cards directly.",
  },
  {
    q: "Is delivery really free?",
    a: "Yes — free PAN India delivery on all orders, no minimum. This includes Tier 1, Tier 2, and Tier 3 cities across India.",
  },
  {
    q: "How long does delivery take?",
    a: "We dispatch within 24–48 hours of payment confirmation. Transit time varies by location: Delhi NCR typically receives orders in 1–2 days, other metros in 2–4 days, and Tier 2/3 cities in 4–7 days.",
  },
  {
    q: "Is every order accompanied by a handwritten card?",
    a: "Yes — every single order, without exception. When you place your order on WhatsApp, share the message you'd like on the card and we'll write it by hand before packing.",
  },
  {
    q: "Can I customise what's inside the hamper?",
    a: "Yes. WhatsApp us with your budget and preferences — or swap an item you don't want for something else. We're flexible because we curate each hamper individually.",
  },
  {
    q: "Can I send a hamper directly to someone (as a gift)?",
    a: "Absolutely. Most of our orders are sent directly to the recipient. Just share the delivery address and we'll make sure the hamper arrives without any pricing visible.",
  },
  {
    q: "I need hampers for Father's Day urgently. What's the latest I can order?",
    a: "Father's Day 2026 is June 21. Place your order by June 18 for guaranteed on-time delivery. If you're in Delhi NCR, we may be able to accommodate last-minute orders after that — WhatsApp us to check.",
  },
  {
    q: "Do you do bulk/corporate orders?",
    a: "Yes. We handle corporate orders from 10 to 1,000+ hampers. Volume discounts apply, and we offer custom branding at 100+ units. WhatsApp us or see our Corporate Gifting page for details.",
  },
  {
    q: "Do you issue a GST invoice?",
    a: "Yes, GST invoices are available for all corporate orders. Share your GSTIN when placing the order.",
  },
  {
    q: "What if the hamper arrives damaged?",
    a: "Reach out to us on WhatsApp within 24 hours of delivery with a photo. We'll arrange a replacement or refund promptly — no questions asked.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not currently. We ship across PAN India only. If you're sending to an NRI family member in India, we can deliver to their Indian address.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-300 last:border-0">
      <button
        className="w-full text-left py-5 flex justify-between items-start gap-4 focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="font-display text-navy-brand text-base leading-snug">{q}</span>
        <span className={`text-rose-brand text-xl flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="font-body text-navy-mid text-sm leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ — Tyoohar Ghar Gift Hampers India"
        description="Frequently asked questions about Tyoohar Ghar hampers — delivery, payment, customisation, corporate orders, and more."
        canonical="/faq"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 to-cream-100 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-display text-4xl text-navy-brand mb-4">Frequently Asked Questions</h1>
          <p className="font-body text-navy-mid leading-relaxed">
            Everything you need to know about ordering, delivery, and customising your hamper.
            Can't find an answer? WhatsApp us — we respond fast.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-cream-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-navy-brand py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl text-white mb-3">Still have a question?</h2>
          <p className="font-body text-cream-300 mb-6">We typically reply in under an hour on WhatsApp.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
              WhatsApp Us
            </a>
            <Link to="/contact" className="btn-outline px-7 py-3.5 text-base border-white text-white hover:bg-white hover:text-navy-brand">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
