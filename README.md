# New Hira Farm Equipments — Final Production Website

Static production-ready landing page for a premium agricultural combine harvester brand.

## Included
- Premium luxury-inspired homepage
- Animated intro with combine harvester
- Animated hero machine showcase
- Lightweight 3D-style model viewer
- 2D annotated part diagram
- Gallery storytelling section
- Finance / buying support section
- Dealer and service network section
- FAQ section
- Floating Call / WhatsApp / Enquiry buttons
- English, Hindi and Punjabi full-page translations
- Firebase Firestore lead capture
- SEO basics, favicon, manifest and robots.txt
- No npm, no build step, no subfolder required

## Files
Upload all files directly into your GitHub repository root:

- `index.html`
- `styles.css`
- `script.js`
- `firebase-config.js`
- `firestore.rules`
- `logo.svg`
- `site.webmanifest`
- `robots.txt`
- `.gitignore`
- `README.md`

## Firebase
Your Firebase config is already in `firebase-config.js`.

Firestore collection used by the enquiry form:

```txt
harvester_enquiries
```

Publish the included `firestore.rules` in Firebase Console → Firestore Database → Rules.

## Before publishing officially
Replace these draft items:
- real phone number and WhatsApp number in `index.html`
- real company address and working hours
- confirmed harvester specs in `script.js`
- confirmed offer amount and terms
- final warranty, finance and dealer details
- real machine photos/videos if available

## GitHub Pages
1. Create or open your GitHub repository.
2. Upload all files from this ZIP directly to the repository root.
3. Go to Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: `main`, folder: `/root`.
6. Save and wait a few minutes.
