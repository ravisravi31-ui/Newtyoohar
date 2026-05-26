import { useState } from 'react';
import { getImages, getImagePath } from '../data/hamperImages';

/**
 * HamperGallery
 * Renders product images for a hamper with a carousel if multiple photos exist.
 * Falls back to a branded gradient + emoji placeholder when no photos are configured.
 *
 * Props:
 *   hamperKey  (string)  — key from hamperImages.js, e.g. 'fd-dads-treat'
 *   emoji      (string)  — fallback emoji shown when no photos
 *   gradient   (string)  — Tailwind gradient classes for the placeholder bg
 *   square     (bool)    — if true (default) uses aspect-square; pass false to use fill mode in modal
 *   className  (string)  — extra classes for the container
 */
export default function HamperGallery({
  hamperKey,
  emoji = '🎁',
  gradient = 'from-rose-pale to-gold-pale',
  square = true,
  className = '',
}) {
  const images = getImages(hamperKey);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded]   = useState(false);

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

  const sizeClass = square ? 'aspect-square w-full' : 'w-full h-full';

  /* ── No photos configured yet ── */
  if (images.length === 0) {
    return (
      <div className={`bg-gradient-to-br ${gradient} ${sizeClass} flex items-center justify-center rounded-t-2xl ${className}`}>
        <div className="text-center">
          <span className="text-5xl">{emoji}</span>
          <p className="font-body text-xs text-rose-brand/60 mt-2">Photo coming soon</p>
        </div>
      </div>
    );
  }

  /* ── Photos available ── */
  return (
    <div className={`relative ${sizeClass} overflow-hidden rounded-t-2xl bg-cream-200 group ${className}`}>
      {/* Shimmer while loading */}
      {!loaded && (
        <div className="absolute inset-0 shimmer" />
      )}

      <img
        key={images[current]}
        src={getImagePath(hamperKey, images[current])}
        alt={`Hamper photo ${current + 1}`}
        onLoad={() => setLoaded(true)}
        onError={e => { e.target.src = ''; e.target.style.display = 'none'; }}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Counter badge */}
      {images.length > 1 && (
        <span className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full font-body">
          {current + 1}/{images.length}
        </span>
      )}

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.preventDefault(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous photo"
          >
            <svg className="w-4 h-4 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={e => { e.preventDefault(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next photo"
          >
            <svg className="w-4 h-4 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.preventDefault(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
