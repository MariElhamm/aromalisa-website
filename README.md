# AromaLisa — Vercel-ready website

A responsive, image-led luxury storefront concept built with plain HTML, CSS and JavaScript. No build step required.

## Preview locally
Open `index.html`, or run:
```bash
python3 -m http.server 3000
```
Visit http://localhost:3000.

## Deploy to Vercel
1. Upload this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import it.
3. Framework Preset: **Other**.
4. Build Command: leave blank.
5. Output Directory: `.` (project root).
6. Deploy.

Alternatively install the Vercel CLI and run `vercel` from this folder.

## Customize
- Replace images in `assets/` with original AromaLisa product photography.
- Edit titles, product names and links in `index.html`.
- Adjust colors, typography and layout in `styles.css`.
- Edit scroll effects and mobile menu in `script.js`.

## Before going live
This is a front-end visual concept, not a connected Shopify store. Connect real Shopify product data, variant selection, cart, checkout, customer accounts, search and policies. Prices and some actions are intentionally placeholders. The handbag spin is a four-image scroll sequence, not a true 3D model; for a true 360° effect, replace the frames with a 3D GLB model or a larger product-spin image sequence.
