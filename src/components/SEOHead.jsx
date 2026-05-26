import { useEffect } from 'react';

/**
 * Updates document <title> and key <meta> tags for each route.
 * Simple, no extra dependencies needed.
 */
export default function SEOHead({ title, description, canonical, ogImage }) {
  const BASE = 'https://tyooharghar.netlify.app';
  const fullTitle = title
    ? `${title} | Tyoohar Ghar`
    : 'Tyoohar Ghar — Premium Festive Gift Hampers | PAN India Delivery';
  const fullDesc = description ||
    "Tyoohar Ghar curates premium festive gift hampers for Diwali, Rakhi, Father's Day and every Indian celebration. Free PAN India delivery.";
  const fullCanonical = canonical ? `${BASE}${canonical}` : BASE;
  const image = ogImage || `${BASE}/og-image.jpg`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property')) el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1]);
        if (selector.includes('name'))     el.setAttribute('name',     selector.match(/name="([^"]+)"/)?.[1]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',         'content', fullDesc);
    setMeta('meta[property="og:title"]',         'content', fullTitle);
    setMeta('meta[property="og:description"]',   'content', fullDesc);
    setMeta('meta[property="og:url"]',           'content', fullCanonical);
    setMeta('meta[property="og:image"]',         'content', image);
    setMeta('meta[name="twitter:title"]',        'content', fullTitle);
    setMeta('meta[name="twitter:description"]',  'content', fullDesc);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = fullCanonical;
  }, [fullTitle, fullDesc, fullCanonical, image]);

  return null;
}
