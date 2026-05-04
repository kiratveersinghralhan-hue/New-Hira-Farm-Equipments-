# New Hira Combine Harvester Landing Page

A static, GitHub-Pages-ready landing page for promoting a New Hira combine harvester business.

## What is included

- `index.html` — full landing page structure
- `styles.css` — responsive design, dark mode, cards, forms, 2D diagram styling
- `script.js` — language switching, 3D canvas model, specs tabs, discount slider, Firebase/local lead saving
- `firebase-config.js` — paste your Firebase web config here
- `firestore.rules` — starter rules for anonymous enquiry creation only
- `.gitignore` — basic Git ignore file

There are no folders inside this ZIP. You can upload these files directly to the root of a GitHub repository.

## Important before publishing

The specs in the page are draft placeholders based on public listings and should be confirmed by the manufacturer before publishing. Update engine, power, emissions, grain tank, capacity, tyres, gear ranges, price, offer amount, contact details, and warranty/service text.

## Firebase setup

1. Open Firebase Console.
2. Create a project.
3. Add a Web app.
4. Copy the Firebase config object.
5. Open `firebase-config.js` and replace the placeholder values.
6. Change `enableFirebase` from `false` to `true`.
7. Create Cloud Firestore in production mode.
8. Open Firestore Database > Rules and paste the contents of `firestore.rules`.
9. Publish the rules.
10. Deploy this site to GitHub Pages.

The enquiry collection name is:

```txt
harvester_enquiries
```

When Firebase is disabled, the form still works for testing by saving leads to browser `localStorage`.

## How to edit language text

All English, Hindi, and Punjabi text is inside the `translations` object in `script.js`.

To change wording:

1. Open `script.js`.
2. Search for the English text.
3. Update the matching Hindi and Punjabi text too.
4. Save and refresh the page.

## How to edit the discount

The default discount is set in `index.html` here:

```html
<input id="discountAmount" type="range" min="25000" max="150000" step="5000" value="100000" />
```

Change `value`, `min`, and `max` as needed after the offer is confirmed.

## How to edit contact details

Search in `index.html` for:

```txt
+91-XXXXXXXXXX
```

Replace phone, WhatsApp, location, hours, and any other placeholder details.

## Public spec sources used for draft values

- AllBiz listing for `NEW HIRA 985 Self Propelled Combine Harvester`: model, 14 ft / 4350 mm cutter width, straw walker, sieves, Ashok Leyland 412 turbo charged TREM III, 128 HP @ 2200 RPM, front/rear tyres, and supported crops.
- Dangi Agro listing for `Hira 985 / 985zx`: 133 HP, 14 ft cutter bar, mild steel body, multicrop/capacity, rotor speed range, and grain tank around 1900 kg.
- ExportersIndia Hira Agro listing: ALU-400 Ashok Leyland, 105 HP listing, gear speeds, fuel tank, water cooling, drum/sieve/straw-walker details.

Because these public sources differ, the page intentionally says “draft” and “confirm before publish” in the specs.
