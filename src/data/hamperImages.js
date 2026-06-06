/**
 * HAMPER PHOTO MANAGEMENT
 * ========================
 * To add photos to any hamper:
 *
 *  1. Save your photo(s) into:
 *     website/public/images/hampers/{hamper-key}/
 *
 *  2. Add the filename(s) to the array below for that hamper key.
 *
 * Example:
 *   'fd-dads-treat': ['front.jpg', 'contents.jpg', 'unboxing.jpg'],
 *
 * Supported formats: .jpg  .jpeg  .png  .webp
 * Multiple photos are supported — they'll show as a swipeable carousel.
 * Leave the array empty ([]) to show the default emoji placeholder.
 */

export const hamperImages = {

  // ── FATHER'S DAY ──────────────────────────────────────────────
  'fd-dads-treat':       ['Hamper.webp', 'Premium mixed nuts.webp', 'Dark chocolates.webp', 'Assorted cookies.webp', 'Personalised card.webp'],
  'fd-cool-dad-box':     ['Hamper.webp', 'Artisan coffee.webp', 'Premium tea.webp', 'Gourmet snacks.webp', 'Scented candle.webp', 'Personalised card.webp'],
  'fd-grand-dad-hamper': ['Hamper.webp', 'Luxury nuts & dates.webp', 'Dark chocolates.webp', 'Premium whiskey glass set.webp', 'Personalised leather tag.webp', 'Keepsake box.webp', 'Personalised card.webp'],

  // ── RAKHI ─────────────────────────────────────────────────────
  'rakhi-sweet-surprise': [],
  'rakhi-premium-treat':  [],
  'rakhi-grand-gesture':  [],

  // ── DIWALI ────────────────────────────────────────────────────
  'diwali-festive-box':        [],
  'diwali-grand-celebration':  [],
  'diwali-luxury-collection':  [],

  // ── HOLI ──────────────────────────────────────────────────────
  'holi-colour-burst':   [],
  'holi-premium-box':    [],
  'holi-grand-festive':  [],

  // ── NAVRATRI ──────────────────────────────────────────────────
  'navratri-devotion':   [],
  'navratri-celebration':[],
  'navratri-grand':      [],

  // ── GANESH CHATURTHI ──────────────────────────────────────────
  'ganesh-blessings':    [],
  'ganesh-celebration':  [],

  // ── LOHRI / MAKAR SANKRANTI ───────────────────────────────────
  'lohri-warmth-box':    [],
  'lohri-harvest-grand': [],

  // ── EID ───────────────────────────────────────────────────────
  'eid-mubarak-box':     [],
  'eid-grand-celebration':[],

  // ── BHAI DOOJ ─────────────────────────────────────────────────
  'bhaidooj-sweet-love': [],
  'bhaidooj-premium':    [],

  // ── KARWA CHAUTH ──────────────────────────────────────────────
  'karwa-glow-box':      [],
  'karwa-premium':       [],

  // ── CHRISTMAS ─────────────────────────────────────────────────
  'christmas-joy-box':   [],
  'christmas-premium':   [],
  'christmas-grand':     [],

  // ── WEDDING / GENERAL ─────────────────────────────────────────
  'wedding-welcome':     [],
  'wedding-grand-gift':  [],

  // ── BABY SHOWER ───────────────────────────────────────────────
  'baby-love-box':       [],
  'baby-grand':          [],

  // ── MEHNDI RITUAL ─────────────────────────────────────────────
  'mehndi-starter':      [],
  'mehndi-celebration':  [],
  'mehndi-grand':        [],

  // ── HALDI RITUAL ──────────────────────────────────────────────
  'haldi-glow-starter':  [],
  'haldi-celebration':   [],
  'haldi-grand-ritual':  [],

  // ── SANGEET ───────────────────────────────────────────────────
  'sangeet-starter':     [],
  'sangeet-party-box':   [],

  // ── TILAK ─────────────────────────────────────────────────────
  'tilak-essentials':    [],
  'tilak-grand':         [],

  // ── BARAAT WELCOME ────────────────────────────────────────────
  'baraat-welcome':      [],
  'baraat-grand-welcome':[],

  // ── VIDAI ─────────────────────────────────────────────────────
  'vidai-memories':      [],
  'vidai-blessings':     [],

  // ── GRIHA PRAVESH (HOUSEWARMING) ──────────────────────────────
  'griha-welcome':       [],
  'griha-premium':       [],

  // ── ANNAPRASHAN (BABY'S FIRST RICE) ───────────────────────────
  'annaprashan-blessing':[],
  'annaprashan-grand':   [],

  // ── MUNDAN CEREMONY ───────────────────────────────────────────
  'mundan-blessings':    [],
  'mundan-grand':        [],
};

/**
 * Returns the image array for a hamper key.
 * Returns [] if no images are configured yet.
 */

export function getImages(hamperKey) {
  return hamperImages[hamperKey] || [];
}

/**
 * Returns the full URL path for a hamper image.
 * e.g. getImagePath('fd-dads-treat', 'front.jpg')
 *   => '/images/hampers/fd-dads-treat/front.jpg'
 */
export function getImagePath(hamperKey, filename) {
  return `/images/hampers/${hamperKey}/${filename}`;
}
