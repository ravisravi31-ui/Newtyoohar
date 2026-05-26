import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { getImages, getImagePath } from '../data/hamperImages.js';

/**
 * HamperModal — global modal rendered once in App.jsx.
 * Opens whenever CartContext.selectedHamper is set.
 * Shows enlarged image carousel + full product details.
 */
export default function HamperModal() {
  const { selectedHamper, closeModal, addToCart, openCart } = useCart();
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded]   = useState(false);
  const [added, setAdded]     = useState(false);

  const hamper = selectedHamper;
  const images = hamper ? getImages(hamper.key) : [];

  /* Reset carousel when a new hamper opens */
  useEffect(() => {
    setCurrent(0);
    setLoaded(false);
    setAdded(false);
  }, [hamper?.key]);

  /* Close on Escape */
  useEffect(() => {
    if (!hamper) return;
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [hamper, closeModal]);

  /* Lock body scroll while open */
  useEffect(() => {
    if (hamper) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [hamper]);

  if (!hamper) return null;

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

  const handleAddToCart = () => {
    addToCart(hamper);
    setAdded(true);
    setTimeout(() => {
      closeModal();
      openCart();
    }, 700);
  };

  const WA_BASE = "https://wa.me/919599004265?text=";

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={closeModal}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row animate-modalIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── Left: Image Gallery ── */}
        <div className="md:w-1/2 flex-shrink-0 bg-cream-200">
          {images.length === 0 ? (
            <div className={`w-full aspect-square md:h-full md:aspect-auto bg-gradient-to-br ${hamper.gradient || 'from-gold-pale to-rose-pale'} flex items-center justify-center`}>
              <div className="text-center">
                <span className="text-8xl">{hamper.emoji || '🎁'}</span>
                <p className="font-body text-sm text-rose-brand/60 mt-3">Photos coming soon</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-square md:h-full md:aspect-auto overflow-hidden group">
              {/* Shimmer */}
              {!loaded && <div className="absolute inset-0 shimmer" />}

              <img
                key={`${hamper.key}-${current}`}
                src={getImagePath(hamper.key, images[current])}
                alt={`${hamper.name} photo ${current + 1}`}
                onLoad={() => setLoaded(true)}
                onError={e => { e.target.src = ''; e.target.style.display = 'none'; }}
                className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Counter */}
              {images.length > 1 && (
                <span className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full font-body">
                  {current + 1} / {images.length}
                </span>
              )}

              {/* Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Previous photo"
                  >
                    <svg className="w-5 h-5 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Next photo"
                  >
                    <svg className="w-5 h-5 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dot thumbnails */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrent(i); setLoaded(false); }}
                        className={`rounded-full transition-all duration-300 ${
                          i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/55 hover:bg-white/80'
                        }`}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* ── Right: Product Details ── */}
        <div className="md:w-1/2 flex flex-col overflow-y-auto">
          <div className="p-6 md:p-8 flex flex-col flex-1">

            {/* Tag + Name */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="font-display text-2xl md:text-3xl text-navy-brand leading-tight">{hamper.name}</h2>
              {hamper.tag && (
                <span className="flex-shrink-0 font-body text-xs bg-gold-pale text-gold-brand px-3 py-1.5 rounded-full font-semibold border border-gold-light">
                  {hamper.tag}
                </span>
              )}
            </div>

            {/* Price */}
            <p className="font-display text-3xl text-rose-brand mb-4">{hamper.price}</p>

            {/* What's inside */}
            <div className="bg-cream-100 rounded-xl p-4 mb-5">
              <p className="font-body text-xs font-semibold text-navy-light uppercase tracking-wider mb-2">What's inside the box</p>
              <ul className="space-y-1.5">
                {hamper.items.split(' · ').map((item, i) => (
                  <li key={i} className="font-body text-sm text-navy-mid flex items-start gap-2">
                    <span className="text-gold-brand mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                ['📦', 'Free PAN India delivery'],
                ['✍️', 'Handwritten card included'],
                ['🎀', 'Premium gift packaging'],
                ['⏱', 'Dispatched in 24–48 hrs'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2 bg-cream-100 rounded-lg px-3 py-2">
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <span className="font-body text-xs text-navy-mid leading-tight">{text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-auto space-y-3">
              <button
                onClick={handleAddToCart}
                className={`w-full inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-navy-brand text-white hover:bg-navy-mid hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {added ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>

              <a
                href={`${WA_BASE}${encodeURIComponent(hamper.wa || `Hi Tyoohar Ghar! I'm interested in ${hamper.name} (${hamper.price}). Can you share order details?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order Directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
