Tyoohar Ghar - FINAL (React + Vite + Tailwind) with Netlify Forms

Contents:
- Order and Enquiry forms integrated with Netlify Forms and Google reCAPTCHA
- Two thank-you pages: /thank-you-order and /thank-you-enquiry
- netlify.toml configured (forms processing enabled)

How to deploy to Netlify (no terminal required):
1. Create a new GitHub repo and upload all files (commit to main).
2. In Netlify, click 'Add new site' -> 'Import from Git' -> select your repo.
3. Build settings: Build command = `npm run build`, Publish directory = `dist`.
4. Deploy. If you see previous failure due to cache, choose 'Clear cache and deploy'.

Netlify Forms:
- Once deployed, open Netlify dashboard -> Select site -> Forms to see submissions.
- To receive email notifications: Forms -> Notifications -> Add Notification -> Email -> your address.

Replace placeholder images in src/assets with your real images (christmas-room.jpg, hero-hampers.png, small.jpg, medium.jpg, large.jpg, logo.png)
