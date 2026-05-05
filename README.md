# New Hira — Single Page 3D Parts Finder Website

This is a one-page premium website for New Hira.

## Included
- Premium moving intro animation
- About company section
- 360° rotatable combine harvester 3D viewer
- Live dynamic part labels
- Search part by name
- Part location focus in the 3D model
- Working explanation + common issue + removal/replacement guidance
- Login / Sign up prepared with Firebase Auth
- Firebase Firestore enquiry form
- Offer slider
- WhatsApp floating button
- Share website button
- Root-level files only, ready for GitHub upload

## Firebase setup
Your Firebase config is already inserted in `firebase-config.js`.

In Firebase Console:
1. Go to Authentication
2. Enable Email/Password sign-in
3. Go to Firestore Rules
4. Paste the contents of `firestore.rules`
5. Publish

## For true precision 3D model
The current website includes a procedural demonstration model. For exact real-part precision, send:
- Real 3D model: GLB/GLTF preferred, or STEP/STP/IGES/OBJ/FBX/CAD
- Real machine photos: front, back, left, right, top, engine, cabin, cutter, auger, tyres
- Parts list: part names, part numbers, locations, Hindi/Punjabi names
- Repair guide: tools, safety steps, removal order, bolt locations, replacement steps
- Brand data: phone, WhatsApp, address, logo, tagline, warranty, offer terms
- Specs/brochure: engine, tyres, gears, emissions, electrical system, body/steel info

## Replace WhatsApp/Call number
In `index.html`, replace:
`919800000000`
with your real WhatsApp/call number including country code.
