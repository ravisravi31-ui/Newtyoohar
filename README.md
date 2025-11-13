# Tyoohar Ghar — Deploy-ready Website (one-page, festive)

This repository is a complete React + Vite + Tailwind project prepared for deployment to Netlify.
It intentionally includes **placeholder image files**. Please replace the placeholders in `src/assets/` with your actual images using **exact filenames** listed below:

Required image filenames (place your images at `src/assets/`):
- logo.webp             (header logo, horizontal)
- favicon-256.webp      (favicon)
- background.webp       (full-site background)
- hero-hampers.webp     (hero banner)
- og-image.webp         (Open Graph image)

Hamper gallery images (3 per hamper):
- small-1.webp, small-2.webp, small-3.webp
- medium-1.webp, medium-2.webp, medium-3.webp
- large-1.webp, large-2.webp, large-3.webp

## How to use

### 1. Replace images
Upload your optimized `.webp` images into `src/assets/` with the exact filenames above.

### 2. Install & run locally
```bash
npm install
npm run dev
# Open http://localhost:5173
```

### 3. Deploy to Netlify
- Create a new site → Import from GitHub (push this repo)
- Build command: `npm run build`
- Publish directory: `dist`
- (Optional) In Netlify UI, trigger "Clear cache and deploy" after first upload.

### Notes
- Forms use Netlify Forms; ensure `netlify.toml` is present.
- The snowfall is implemented in `src/snow.js`.
- If you change asset filenames, update imports in `src/pages/Home.jsx` and `src/components/Header.jsx` accordingly.
