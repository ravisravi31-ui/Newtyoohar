import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found — Tyoohar Ghar"
        description="The page you're looking for doesn't exist. Browse our festive hamper collections or WhatsApp us to place an order."
        canonical="/404"
      />

      <section className="bg-gradient-to-br from-cream-200 to-cream-100 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-7xl mb-6">🎁</p>
          <h1 className="font-display text-4xl text-navy-brand mb-4">Page Not Found</h1>
          <p className="font-body text-navy-mid leading-relaxed mb-8">
            This page seems to have gone missing — like a hamper that never arrived.
            Head back to our collections and we'll make sure the real one gets to you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary px-7 py-3.5 text-base">Back to Home</Link>
            <Link to="/collections" className="btn-outline px-7 py-3.5 text-base">See All Collections</Link>
          </div>
          <div className="mt-8">
            <a
              href="https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20place%20an%20order."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp px-7 py-3 text-sm inline-flex"
            >
              Or just WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
