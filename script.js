import { enableFirebase, leadsCollectionName, firebaseConfig } from './firebase-config.js';

const appState = {
  lang: localStorage.getItem('newHiraLang') || 'en',
  specTab: 'power',
  offerAmount: Number(localStorage.getItem('newHiraOffer') || 100000),
  autoRotate: true,
  modelAngle: 30,
  firestore: null,
  addDoc: null,
  collection: null,
  serverTimestamp: null
};

const content = {
  en: {
    pageTitle: 'New Hira Farm Equipments | Premium Harvester Website',
    introKicker: 'Punjab Crafted • Field Ready',
    introBrandA: 'New Hira',
    introBrandB: 'Farm Equipments',
    introCaption: 'Premium combine harvester experience',
    skipIntro: 'Skip intro',
    skipLink: 'Skip to content',
    brandSub: 'Farm Equipments',
    languageLabel: 'Language',
    navOverview: 'Overview',
    navMachine: 'Machine',
    navSpecs: 'Specifications',
    navService: 'Parts & Service',
    navGallery: 'Gallery',
    navFinance: 'Finance',
    navDealers: 'Dealers',
    navEnquire: 'Enquire',
    navCta: 'Get offer',
    heroEyebrow: 'Agricultural harvester experience',
    heroTitle: 'A premium website concept for a powerful New Hira combine harvester.',
    heroLead: 'Inspired by high-end automotive storytelling and modern product pages, this design presents New Hira as a trusted manufacturer with dynamic visuals, multilingual content and direct farmer enquiries.',
    heroCtaPrimary: 'Enquire now',
    heroCtaSecondary: 'Explore machine',
    heroStageLabel: 'Animated machine showcase',
    heroStageStatus: 'Dynamic visual active',
    heroFooterLabelA: 'Story style',
    heroFooterValueA: 'Premium / cinematic',
    heroFooterLabelB: 'Language mode',
    heroFooterLabelC: 'Lead backend',
    heroPoints: [
      ['Premium first impression', 'Luxury style layout adapted for an agricultural brand'],
      ['Multilingual experience', 'English, Hindi and Punjabi switch the full page'],
      ['Interactive visuals', 'Animated hero, 3D style model and part diagram'],
      ['Direct lead capture', 'Firebase-ready enquiry form for real customer data']
    ],
    metrics: [
      ['128 HP', 'Draft engine power'],
      ['14 ft', 'Draft cutter width'],
      ['7+', 'Crop types listed'],
      ['24/7', 'Enquiry collection']
    ],
    storyEyebrow: 'Manufacturer story',
    storyTitle: 'Built for demanding fields, presented with a modern premium identity.',
    storyLead: 'This layout mixes the elegance of luxury landing pages with practical agricultural communication — so farmers see strength, reliability, service support and value.',
    storyCardTag: 'New Hira 985 • Draft showcase',
    storyCardMini: 'Editable after final model confirmation',
    storyCardTitle: 'One machine. One premium message. Multiple crops.',
    storyCardBody: 'Use this space to communicate manufacturing confidence, crop compatibility, operator comfort, and the availability of genuine service and spare parts.',
    storyItems: [
      ['Manufacturer-led branding', 'Show your father’s company as the maker, not just a seller.'],
      ['Visual storytelling', 'Hero motion, dramatic lighting and bold headlines improve trust.'],
      ['Product clarity', 'Explain engine, tyres, gears, grain system, electrics and service.'],
      ['Conversion focus', 'Push visitors toward calling, messaging or filling the enquiry form.']
    ],
    panelKicker: 'Machine highlights',
    panelTitle: 'Designed to convert attention into enquiries.',
    highlights: [
      ['Powerful presence', 'Strong visual surfaces and contrast inspired by premium product sites.'],
      ['Farmer-friendly details', 'Core specs and service information are shown in practical sections.'],
      ['Future-ready backend', 'Firebase can capture and store all enquiries for follow-up.']
    ],
    experienceEyebrow: '2D + 3D product experience',
    experienceTitle: 'Interactive visuals that explain the machine better than a plain brochure.',
    experienceLead: 'A lightweight 3D model preview and an annotated 2D diagram help visitors understand the machine quickly on mobile or desktop.',
    threeDLabel: 'Interactive 3D view',
    threeDTitle: 'Rotate the combine harvester',
    pauseRotate: 'Pause',
    playRotate: 'Play',
    rotationLabel: 'Rotation',
    specLabel: 'Machine data',
    specDefaultTitle: 'Power & engine',
    tabPower: 'Power',
    tabHarvesting: 'Harvesting',
    tabDrive: 'Drive',
    tabServiceSpecs: 'Service',
    specNote: 'Draft technical information from public listings. Confirm final values before publishing.',
    diagramKicker: '2D annotated diagram',
    diagramTitle: 'Important parts at a glance',
    diagramButton: 'Highlight parts',
    callEngine: 'Engine',
    callCutter: 'Cutter bar',
    callGrain: 'Grain tank',
    callTyres: 'Tyres / wheels',
    callAuger: 'Unloading auger',
    partsKicker: 'Parts & support',
    partsTitle: 'Promote genuine spare parts and after-sales service.',
    partsLead: 'This section is useful for convincing farmers that service backup is strong, spare parts are available, and seasonal maintenance will be easy.',
    parts: [
      ['Cutter blades', 'Harvesting edge and cutting efficiency'],
      ['Belts & chains', 'Smooth drive and transmission support'],
      ['Sieves', 'Cleaning and grain separation'],
      ['Straw walkers', 'Crop separation performance'],
      ['Filters', 'Engine protection and service kits'],
      ['Bearings', 'Low downtime maintenance support'],
      ['Tyres / wheels', 'Field movement and traction'],
      ['Auger parts', 'Reliable unloading operation']
    ],
    galleryEyebrow: 'Premium gallery presentation',
    galleryTitle: 'A more luxurious product story for an agricultural machine.',
    galleryLead: 'This section is inspired by premium automotive storytelling: bold words, focused highlights and immersive product moments adapted for the combine harvester market.',
    galleryCard1Kicker: 'Commanding front profile',
    galleryCard1Title: 'Presence that looks engineered for serious harvesting.',
    galleryCard1Body: 'Use real harvester photography later here. The layout is already ready for bold image-led storytelling.',
    galleryCard2Kicker: 'Operator perspective',
    galleryCard2Title: 'Clear controls, confident visibility and field-focused comfort.',
    galleryCard2Body: 'Talk about operator ease, control access, maintenance visibility and harvesting confidence in this block.',
    galleryCard3Kicker: 'Built to support business',
    galleryCard3Title: 'Spare parts, service backup and seasonal support make the difference.',
    galleryCard3Body: 'Use this to show why farmers should trust New Hira not only for the machine, but also for support after purchase.',
    offerEyebrow: 'Seasonal campaign',
    offerTitle: 'Offer-driven landing pages can increase calls and form enquiries.',
    offerLead: 'Use the offer amount your father confirms later. Right now the slider is interactive so the website feels alive and the offer value gets pushed into the enquiry form automatically.',
    offerValueLabel: 'Current promotional offer',
    offerValueCaption: 'Discount / exchange / booking benefit — edit later',
    offerSliderLabel: 'Adjust offer amount',
    applyOffer: 'Apply this offer to enquiry',
    offerBoxTag: 'Campaign message',
    offerBoxTitle: 'Smart booking benefits for serious buyers.',
    offerList: [
      ['Booking discount', 'Show a strong visible amount such as ₹1 lakh to attract attention.'],
      ['Priority callback', 'Let your sales team contact serious buyers quickly.'],
      ['Service support message', 'Mention spare parts support, field visit and guidance.']
    ],
    formEyebrow: 'Direct farmer enquiries',
    formTitle: 'Connect the website to Firebase and capture every lead.',
    formLead: 'This form is already prepared for Firebase. If Firebase is unavailable, enquiries are stored locally for testing so nothing feels broken.',
    fieldName: 'Full name',
    fieldNamePlaceholder: 'Farmer name',
    fieldPhone: 'Phone / WhatsApp',
    fieldPhonePlaceholder: '+91 98765 43210',
    fieldDistrict: 'District',
    fieldDistrictPlaceholder: 'e.g. Patiala',
    fieldState: 'State',
    fieldCrop: 'Main crop',
    fieldOffer: 'Selected offer',
    fieldMessage: 'Requirement',
    fieldMessagePlaceholder: 'Tell us about crop, location and purchase timeline',
    consentText: 'I agree that New Hira team can contact me regarding this enquiry.',
    submitLabel: 'Submit enquiry',
    statusSubmitting: 'Submitting enquiry...',
    statusSuccess: 'Enquiry submitted successfully. It should now appear in Firebase.',
    statusLocal: 'Firebase is not available, so the enquiry was saved locally in this browser for testing.',
    statusError: 'Something went wrong. Please check Firebase setup and try again.',
    contactKicker: 'Contact block',
    contactTitle: 'Publish real sales details here.',
    contactLead: 'Replace this draft contact information with the exact phone number, WhatsApp number, address and working hours of New Hira Farm Equipments.',
    contactPhoneLabel: 'Sales phone',
    contactWhatsappLabel: 'WhatsApp',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Punjab, India',
    contactHoursLabel: 'Working hours',
    contactHoursValue: 'Mon - Sat • 9 AM to 6 PM',
    contactNote: 'Tip: once you confirm pricing, warranty, finance and discount details, update them in the JavaScript content file and the whole site will change everywhere.',
    financeEyebrow: 'Finance and buying support',
    financeTitle: 'Make the next step simple for farmers.',
    financeLead: 'Add real bank, finance, subsidy, exchange and booking terms after confirmation. The section is ready to explain the complete purchase journey clearly.',
    financeBadge: 'Production ready block',
    financeBadgeText: 'Update values once pricing and documents are final.',
    financeSteps: [
      ['Booking', 'Capture buyer details, crop, location and selected discount offer.'],
      ['Finance help', 'Add bank, EMI, subsidy or exchange guidance once confirmed.'],
      ['Document check', 'Mention ID, address, land, GST or finance documents as required.'],
      ['Delivery follow-up', 'Sales team can call, confirm stock and schedule delivery discussion.']
    ],
    dealerEyebrow: 'Dealer and service network',
    dealerTitle: 'Show where buyers can get help, service and spare parts.',
    dealerLead: 'Use this area for factory address, dealers, service vans, technicians, spare-part availability and seasonal check-up camps.',
    dealers: [
      ['Factory / Head office', 'Add exact New Hira Farm Equipments address, phone number and visiting hours.'],
      ['Field service', 'Explain technician support, service radius and seasonal check-up availability.'],
      ['Spare parts counter', 'Show genuine spare parts, filters, belts, blades, chains, bearings and auger parts.']
    ],
    faqEyebrow: 'Buyer questions',
    faqTitle: 'Answer common questions before the farmer calls.',
    faqLead: 'This FAQ makes the site feel complete and reduces confusion about offers, service, documents and model specifications.',
    faqs: [
      ['Are the specifications final?', 'No. The current values are draft public listing values. Confirm the latest model details before publishing.'],
      ['Can the discount be changed?', 'Yes. The offer slider and text can be changed after your father confirms the final campaign amount.'],
      ['Where do enquiries go?', 'The form sends enquiries to Firebase Firestore when Firebase is enabled and rules are published.'],
      ['Can real harvester photos be added?', 'Yes. Replace the gallery placeholders with real photos or videos of the machine, factory and parts.']
    ],
    floatCall: 'Call',
    floatWhatsapp: 'WhatsApp',
    floatEnquiry: 'Enquire',
    footerText: 'Dynamic agricultural harvester landing page with English, Hindi and Punjabi translation support.',
    footerBackTop: 'Back to top',
    states: ['Punjab', 'Haryana', 'Rajasthan', 'Uttar Pradesh', 'Other'],
    crops: ['Wheat', 'Paddy', 'Maize', 'Barley', 'Other'],
    specTitles: {
      power: 'Power & engine',
      harvesting: 'Harvesting & grain',
      drive: 'Drive, gears & tyres',
      service: 'Service & support'
    },
    specs: {
      power: [
        ['Model', 'New Hira 985 self-propelled combine harvester'],
        ['Engine', 'Ashok Leyland 412 turbocharged diesel (draft public listing; confirm latest)'],
        ['Power', '128 HP @ 2200 RPM shown by one public source; another listing shows 133 HP'],
        ['Electrical system', 'Starter, battery, work lamps and switches — confirm exact ratings'],
        ['Emission', 'Public listings mention TREM III; update after confirming latest compliance']
      ],
      harvesting: [
        ['Cutter bar', '4350 mm / 14 ft draft listing'],
        ['Crop support', 'Wheat, paddy, barley, maize, sunflower, pulses and gram'],
        ['Grain tank', 'Around 1900 kg / 2 ton listed publicly — confirm final model'],
        ['Threshing', '6 straw walkers and 2 sieve style layout in public listings'],
        ['Output', 'Approx. 1.5 acre/hour shown by one listing — verify with actual field performance']
      ],
      drive: [
        ['Front tyres', '18.4 / 30 listed publicly'],
        ['Rear tyres', '9.00 x 16 listed publicly'],
        ['Gears', '1st: 1.5–3.5 km/h • 2nd: 3.5–9 km/h • 3rd: 9–21 km/h'],
        ['Reverse', 'Approx. 3.5–9.5 km/h draft range'],
        ['Construction', 'Steel body and durable field-focused structure']
      ],
      service: [
        ['Spare parts', 'Blades, sieves, filters, belts, chains, bearings, auger and wheel parts'],
        ['Hydraulics', 'Add pump and hose service support details if available'],
        ['Warranty', 'Add actual warranty after confirmation'],
        ['On-site service', 'Add service radius, timing and availability'],
        ['Documents', 'Add brochure, finance support and compliance papers later']
      ]
    }
  },
  hi: {
    pageTitle: 'न्यू हीरा फार्म इक्विपमेंट्स | प्रीमियम हार्वेस्टर वेबसाइट',
    introKicker: 'पंजाब में निर्मित • खेतों के लिए तैयार',
    introBrandA: 'न्यू हीरा',
    introBrandB: 'फार्म इक्विपमेंट्स',
    introCaption: 'प्रीमियम कंबाइन हार्वेस्टर अनुभव',
    skipIntro: 'इंट्रो छोड़ें',
    skipLink: 'मुख्य सामग्री पर जाएँ',
    brandSub: 'फार्म इक्विपमेंट्स',
    languageLabel: 'भाषा',
    navOverview: 'ओवरव्यू',
    navMachine: 'मशीन',
    navSpecs: 'स्पेसिफिकेशन',
    navService: 'पार्ट्स और सर्विस',
    navGallery: 'गैलरी',
    navFinance: 'फाइनेंस',
    navDealers: 'डीलर',
    navEnquire: 'पूछताछ',
    navCta: 'ऑफर लें',
    heroEyebrow: 'एग्रीकल्चरल हार्वेस्टर अनुभव',
    heroTitle: 'एक शक्तिशाली न्यू हीरा कंबाइन हार्वेस्टर के लिए प्रीमियम वेबसाइट कॉन्सेप्ट।',
    heroLead: 'हाई-एंड ऑटोमोबाइल और मॉडर्न प्रोडक्ट वेबसाइट्स से प्रेरित यह डिज़ाइन न्यू हीरा को एक भरोसेमंद निर्माता के रूप में दिखाता है, जिसमें डायनेमिक विज़ुअल्स, बहुभाषी कंटेंट और सीधी किसान पूछताछ शामिल है।',
    heroCtaPrimary: 'अभी पूछताछ करें',
    heroCtaSecondary: 'मशीन देखें',
    heroStageLabel: 'एनिमेटेड मशीन शोकेस',
    heroStageStatus: 'डायनेमिक विज़ुअल चालू है',
    heroFooterLabelA: 'स्टोरी स्टाइल',
    heroFooterValueA: 'प्रीमियम / सिनेमैटिक',
    heroFooterLabelB: 'भाषा मोड',
    heroFooterLabelC: 'लीड बैकएंड',
    heroPoints: [
      ['प्रीमियम पहली छाप', 'लक्ज़री स्टाइल लेआउट जिसे एग्रीकल्चर ब्रांड के लिए अपनाया गया है'],
      ['पूरी बहुभाषी साइट', 'English, Hindi और Punjabi पूरी वेबसाइट बदलते हैं'],
      ['इंटरैक्टिव विज़ुअल्स', 'एनिमेटेड हीरो, 3D स्टाइल मॉडल और पार्ट डायग्राम'],
      ['सीधी लीड कैप्चर', 'Firebase-ready फॉर्म असली ग्राहक डेटा के लिए']
    ],
    metrics: [
      ['128 HP', 'ड्राफ्ट इंजन पावर'],
      ['14 ft', 'ड्राफ्ट कटर चौड़ाई'],
      ['7+', 'सूचीबद्ध फसलें'],
      ['24/7', 'पूछताछ संग्रह']
    ],
    storyEyebrow: 'निर्माता की कहानी',
    storyTitle: 'कठिन खेतों के लिए बनी मशीन, आधुनिक प्रीमियम पहचान के साथ प्रस्तुत।',
    storyLead: 'यह लेआउट लक्ज़री लैंडिंग पेज की खूबसूरती और व्यावहारिक कृषि जानकारी को जोड़ता है — ताकि किसान ताकत, भरोसा, सर्विस सपोर्ट और वैल्यू देखें।',
    storyCardTag: 'न्यू हीरा 985 • ड्राफ्ट शोकेस',
    storyCardMini: 'अंतिम मॉडल कन्फर्म होने के बाद एडिट करें',
    storyCardTitle: 'एक मशीन। एक प्रीमियम संदेश। कई फसलें।',
    storyCardBody: 'इस भाग में निर्माण क्षमता, फसल संगतता, ऑपरेटर आराम और असली सर्विस/स्पेयर पार्ट्स उपलब्धता को दिखाएँ।',
    storyItems: [
      ['निर्माता आधारित ब्रांडिंग', 'आपके पिता की कंपनी को निर्माता के रूप में दिखाएँ, सिर्फ विक्रेता नहीं।'],
      ['विज़ुअल स्टोरीटेलिंग', 'हीरो मोशन, ड्रामेटिक लाइटिंग और बोल्ड हेडलाइन भरोसा बढ़ाती हैं।'],
      ['स्पष्ट प्रोडक्ट जानकारी', 'इंजन, टायर, गियर, ग्रेन सिस्टम, इलेक्ट्रिक्स और सर्विस समझाएँ।'],
      ['कन्वर्ज़न फोकस', 'विज़िटर को कॉल, मैसेज या फॉर्म की ओर पुश करें।']
    ],
    panelKicker: 'मशीन हाइलाइट्स',
    panelTitle: 'ध्यान को पूछताछ में बदलने के लिए डिज़ाइन किया गया।',
    highlights: [
      ['शक्तिशाली प्रेज़ेन्स', 'प्रीमियम प्रोडक्ट साइट्स से प्रेरित मजबूत विज़ुअल सरफेस और कॉन्ट्रास्ट।'],
      ['किसान-हितैषी जानकारी', 'मुख्य स्पेक्स और सर्विस जानकारी आसान सेक्शन में दिखाई जाती है।'],
      ['भविष्य के लिए तैयार', 'Firebase सभी पूछताछ सेव कर सकता है और फॉलो-अप आसान बनाता है।']
    ],
    experienceEyebrow: '2D + 3D प्रोडक्ट अनुभव',
    experienceTitle: 'इंटरैक्टिव विज़ुअल्स मशीन को साधारण ब्रोशर से बेहतर समझाते हैं।',
    experienceLead: 'हल्का 3D मॉडल प्रीव्यू और एनोटेटेड 2D डायग्राम मोबाइल और डेस्कटॉप दोनों पर मशीन को जल्दी समझने में मदद करता है।',
    threeDLabel: 'इंटरैक्टिव 3D व्यू',
    threeDTitle: 'कंबाइन हार्वेस्टर घुमाएँ',
    pauseRotate: 'रोकें',
    playRotate: 'चलाएँ',
    rotationLabel: 'रोटेशन',
    specLabel: 'मशीन डेटा',
    specDefaultTitle: 'पावर और इंजन',
    tabPower: 'पावर',
    tabHarvesting: 'कटाई',
    tabDrive: 'ड्राइव',
    tabServiceSpecs: 'सर्विस',
    specNote: 'तकनीकी जानकारी सार्वजनिक लिस्टिंग से ड्राफ्ट रूप में है। प्रकाशित करने से पहले अंतिम वैल्यू कन्फर्म करें।',
    diagramKicker: '2D एनोटेटेड डायग्राम',
    diagramTitle: 'महत्वपूर्ण पार्ट्स एक नज़र में',
    diagramButton: 'पार्ट्स हाईलाइट करें',
    callEngine: 'इंजन',
    callCutter: 'कटर बार',
    callGrain: 'ग्रेन टैंक',
    callTyres: 'टायर / व्हील',
    callAuger: 'अनलोडिंग ऑगर',
    partsKicker: 'पार्ट्स और सपोर्ट',
    partsTitle: 'असली स्पेयर पार्ट्स और आफ्टर-सेल्स सर्विस को प्रमोट करें।',
    partsLead: 'यह सेक्शन किसानों को भरोसा दिलाने के लिए उपयोगी है कि सर्विस बैकअप मजबूत है, पार्ट्स उपलब्ध हैं और मेंटेनेंस आसान रहेगा।',
    parts: [
      ['कटर ब्लेड', 'कटाई की धार और कटिंग दक्षता'],
      ['बेल्ट और चेन', 'स्मूद ड्राइव और ट्रांसमिशन सपोर्ट'],
      ['सिव', 'सफाई और ग्रेन सेपरेशन'],
      ['स्ट्रॉ वॉकर', 'फसल सेपरेशन प्रदर्शन'],
      ['फिल्टर', 'इंजन सुरक्षा और सर्विस किट'],
      ['बेयरिंग', 'कम डाउनटाइम मेंटेनेंस सपोर्ट'],
      ['टायर / व्हील', 'फील्ड मूवमेंट और ट्रैक्शन'],
      ['ऑगर पार्ट्स', 'विश्वसनीय अनलोडिंग ऑपरेशन']
    ],
    galleryEyebrow: 'प्रीमियम गैलरी प्रेज़ेंटेशन',
    galleryTitle: 'एक कृषि मशीन के लिए और भी शानदार प्रोडक्ट स्टोरी।',
    galleryLead: 'यह सेक्शन प्रीमियम ऑटोमोबाइल स्टोरीटेलिंग से प्रेरित है: बोल्ड टेक्स्ट, फोकस्ड हाइलाइट्स और इमर्सिव प्रोडक्ट मोमेंट्स जिन्हें कंबाइन हार्वेस्टर मार्केट के लिए अपनाया गया है।',
    galleryCard1Kicker: 'प्रभावशाली फ्रंट प्रोफाइल',
    galleryCard1Title: 'ऐसी मौजूदगी जो गंभीर हार्वेस्टिंग के लिए इंजीनियर्ड लगे।',
    galleryCard1Body: 'बाद में यहाँ असली हार्वेस्टर फोटोग्राफी लगाएँ। यह लेआउट पहले से बोल्ड इमेज-लीड स्टोरीटेलिंग के लिए तैयार है।',
    galleryCard2Kicker: 'ऑपरेटर पर्सपेक्टिव',
    galleryCard2Title: 'साफ कंट्रोल, बेहतर विज़िबिलिटी और फील्ड-फोकस्ड आराम।',
    galleryCard2Body: 'इस ब्लॉक में ऑपरेटर सुविधा, कंट्रोल एक्सेस, मेंटेनेंस विज़िबिलिटी और हार्वेस्टिंग कॉन्फिडेंस के बारे में लिखें।',
    galleryCard3Kicker: 'व्यवसाय को सपोर्ट करने के लिए बना',
    galleryCard3Title: 'स्पेयर पार्ट्स, सर्विस बैकअप और सीज़नल सपोर्ट फर्क पैदा करते हैं।',
    galleryCard3Body: 'यह दिखाने के लिए उपयोग करें कि किसानों को सिर्फ मशीन ही नहीं, खरीद के बाद सपोर्ट के लिए भी न्यू हीरा पर भरोसा करना चाहिए।',
    offerEyebrow: 'सीज़नल कैंपेन',
    offerTitle: 'ऑफर-आधारित लैंडिंग पेज कॉल और फॉर्म पूछताछ बढ़ा सकता है।',
    offerLead: 'बाद में आपके पिता जो राशि कन्फर्म करें उसे रखें। अभी स्लाइडर इंटरैक्टिव है ताकि वेबसाइट जीवंत लगे और ऑफर वैल्यू अपने-आप फॉर्म में चली जाए।',
    offerValueLabel: 'वर्तमान प्रचार ऑफर',
    offerValueCaption: 'डिस्काउंट / एक्सचेंज / बुकिंग लाभ — बाद में एडिट करें',
    offerSliderLabel: 'ऑफर राशि बदलें',
    applyOffer: 'इस ऑफर को पूछताछ में लगाएँ',
    offerBoxTag: 'कैंपेन संदेश',
    offerBoxTitle: 'गंभीर खरीदारों के लिए स्मार्ट बुकिंग लाभ।',
    offerList: [
      ['बुकिंग डिस्काउंट', 'ध्यान खींचने के लिए ₹1 लाख जैसी मजबूत राशि दिखाएँ।'],
      ['प्राथमिकता कॉलबैक', 'गंभीर खरीदारों से आपकी सेल्स टीम जल्दी संपर्क कर सके।'],
      ['सर्विस सपोर्ट संदेश', 'स्पेयर पार्ट्स, फील्ड विज़िट और मार्गदर्शन का उल्लेख करें।']
    ],
    formEyebrow: 'सीधी किसान पूछताछ',
    formTitle: 'वेबसाइट को Firebase से जोड़ें और हर लीड कैप्चर करें।',
    formLead: 'यह फॉर्म Firebase के लिए तैयार है। यदि Firebase उपलब्ध न हो, तो टेस्टिंग के लिए पूछताछ इस ब्राउज़र में सेव होगी।',
    fieldName: 'पूरा नाम',
    fieldNamePlaceholder: 'किसान का नाम',
    fieldPhone: 'फोन / WhatsApp',
    fieldPhonePlaceholder: '+91 98765 43210',
    fieldDistrict: 'जिला',
    fieldDistrictPlaceholder: 'जैसे पटियाला',
    fieldState: 'राज्य',
    fieldCrop: 'मुख्य फसल',
    fieldOffer: 'चुना गया ऑफर',
    fieldMessage: 'जरूरत',
    fieldMessagePlaceholder: 'फसल, लोकेशन और खरीदने का समय बताइए',
    consentText: 'मैं सहमत हूँ कि न्यू हीरा टीम इस पूछताछ के संबंध में मुझसे संपर्क कर सकती है।',
    submitLabel: 'पूछताछ सबमिट करें',
    statusSubmitting: 'पूछताछ भेजी जा रही है...',
    statusSuccess: 'पूछताछ सफलतापूर्वक सबमिट हुई। अब यह Firebase में दिखाई देनी चाहिए।',
    statusLocal: 'Firebase उपलब्ध नहीं है, इसलिए पूछताछ टेस्टिंग के लिए इस ब्राउज़र में सेव कर दी गई।',
    statusError: 'कुछ गलत हुआ। कृपया Firebase सेटअप जाँचें और फिर कोशिश करें।',
    contactKicker: 'कॉन्टैक्ट ब्लॉक',
    contactTitle: 'यहाँ असली बिक्री विवरण प्रकाशित करें।',
    contactLead: 'इस ड्राफ्ट जानकारी की जगह न्यू हीरा फार्म इक्विपमेंट्स का सही फोन, WhatsApp, पता और समय डालें।',
    contactPhoneLabel: 'सेल्स फोन',
    contactWhatsappLabel: 'WhatsApp',
    contactLocationLabel: 'लोकेशन',
    contactLocationValue: 'पंजाब, भारत',
    contactHoursLabel: 'कार्य समय',
    contactHoursValue: 'सोम - शनि • सुबह 9 से शाम 6 बजे',
    contactNote: 'टिप: जैसे ही आप कीमत, वारंटी, फाइनेंस और डिस्काउंट कन्फर्म करें, JavaScript कंटेंट फाइल में बदल दें और पूरी साइट अपने-आप हर जगह बदल जाएगी।',
    financeEyebrow: 'फाइनेंस और खरीद सहायता',
    financeTitle: 'किसानों के लिए अगला कदम आसान बनाइए।',
    financeLead: 'कन्फर्मेशन के बाद असली बैंक, फाइनेंस, सब्सिडी, एक्सचेंज और बुकिंग शर्तें जोड़ें। यह सेक्शन पूरी खरीद यात्रा साफ समझाने के लिए तैयार है।',
    financeBadge: 'प्रोडक्शन रेडी ब्लॉक',
    financeBadgeText: 'कीमत और दस्तावेज़ फाइनल होने पर वैल्यू अपडेट करें।',
    financeSteps: [
      ['बुकिंग', 'खरीदार की जानकारी, फसल, लोकेशन और चुना गया डिस्काउंट ऑफर कैप्चर करें।'],
      ['फाइनेंस सहायता', 'कन्फर्म होने पर बैंक, EMI, सब्सिडी या एक्सचेंज गाइडेंस जोड़ें।'],
      ['दस्तावेज़ जाँच', 'जरूरत अनुसार ID, एड्रेस, जमीन, GST या फाइनेंस दस्तावेज़ बताएं।'],
      ['डिलीवरी फॉलो-अप', 'सेल्स टीम कॉल करके स्टॉक और डिलीवरी चर्चा कन्फर्म कर सकती है।']
    ],
    dealerEyebrow: 'डीलर और सर्विस नेटवर्क',
    dealerTitle: 'दिखाएँ कि खरीदार को मदद, सर्विस और स्पेयर पार्ट्स कहाँ मिलेंगे।',
    dealerLead: 'इस क्षेत्र का उपयोग फैक्टरी पता, डीलर, सर्विस वैन, तकनीशियन, स्पेयर पार्ट उपलब्धता और सीज़नल चेक-अप कैंप के लिए करें।',
    dealers: [
      ['फैक्टरी / हेड ऑफिस', 'न्यू हीरा फार्म इक्विपमेंट्स का सही पता, फोन नंबर और विज़िटिंग समय जोड़ें।'],
      ['फील्ड सर्विस', 'तकनीशियन सपोर्ट, सर्विस रेंज और सीज़नल चेक-अप उपलब्धता समझाएँ।'],
      ['स्पेयर पार्ट्स काउंटर', 'असली स्पेयर पार्ट्स, फिल्टर, बेल्ट, ब्लेड, चेन, बेयरिंग और ऑगर पार्ट्स दिखाएँ।']
    ],
    faqEyebrow: 'खरीदारों के सवाल',
    faqTitle: 'किसान के कॉल करने से पहले आम सवालों का जवाब दें।',
    faqLead: 'यह FAQ साइट को पूरा महसूस कराता है और ऑफर, सर्विस, दस्तावेज़ और मॉडल स्पेसिफिकेशन की कन्फ्यूजन कम करता है।',
    faqs: [
      ['क्या स्पेसिफिकेशन फाइनल हैं?', 'नहीं। अभी वैल्यू ड्राफ्ट सार्वजनिक लिस्टिंग से हैं। प्रकाशित करने से पहले नवीनतम मॉडल डिटेल कन्फर्म करें।'],
      ['क्या डिस्काउंट बदला जा सकता है?', 'हाँ। आपके पिता फाइनल कैंपेन राशि कन्फर्म करें तो ऑफर स्लाइडर और टेक्स्ट बदल सकते हैं।'],
      ['पूछताछ कहाँ जाएगी?', 'Firebase enabled होने और rules publish होने पर फॉर्म enquiry Firebase Firestore में भेजता है।'],
      ['क्या असली हार्वेस्टर फोटो जोड़ी जा सकती हैं?', 'हाँ। गैलरी placeholders को मशीन, फैक्टरी और पार्ट्स की असली फोटो या वीडियो से बदलें।']
    ],
    floatCall: 'कॉल',
    floatWhatsapp: 'WhatsApp',
    floatEnquiry: 'पूछताछ',
    footerText: 'English, Hindi और Punjabi सपोर्ट वाली डायनेमिक एग्रीकल्चरल हार्वेस्टर लैंडिंग पेज।',
    footerBackTop: 'ऊपर जाएँ',
    states: ['पंजाब', 'हरियाणा', 'राजस्थान', 'उत्तर प्रदेश', 'अन्य'],
    crops: ['गेहूँ', 'धान', 'मक्का', 'जौ', 'अन्य'],
    specTitles: {
      power: 'पावर और इंजन',
      harvesting: 'कटाई और अनाज',
      drive: 'ड्राइव, गियर और टायर',
      service: 'सर्विस और सपोर्ट'
    },
    specs: {
      power: [
        ['मॉडल', 'न्यू हीरा 985 सेल्फ-प्रोपेल्ड कंबाइन हार्वेस्टर'],
        ['इंजन', 'Ashok Leyland 412 टर्बोचार्ज्ड डीज़ल (ड्राफ्ट सार्वजनिक लिस्टिंग; नवीनतम कन्फर्म करें)'],
        ['पावर', 'एक सार्वजनिक स्रोत पर 128 HP @ 2200 RPM; दूसरी लिस्टिंग में 133 HP'],
        ['इलेक्ट्रिकल सिस्टम', 'स्टार्टर, बैटरी, वर्क लैंप और स्विच — सटीक रेटिंग कन्फर्म करें'],
        ['उत्सर्जन', 'पब्लिक लिस्टिंग में TREM III; नवीनतम अनुपालन बाद में अपडेट करें']
      ],
      harvesting: [
        ['कटर बार', '4350 mm / 14 ft ड्राफ्ट लिस्टिंग'],
        ['फसल सपोर्ट', 'गेहूँ, धान, जौ, मक्का, सूरजमुखी, दालें और चना'],
        ['ग्रेन टैंक', 'लगभग 1900 kg / 2 टन सार्वजनिक लिस्टिंग — अंतिम मॉडल कन्फर्म करें'],
        ['थ्रेशिंग', 'पब्लिक लिस्टिंग में 6 स्ट्रॉ वॉकर और 2 सिव लेआउट'],
        ['आउटपुट', 'एक लिस्टिंग में लगभग 1.5 acre/hour — असली फील्ड परफॉर्मेंस से जाँचें']
      ],
      drive: [
        ['फ्रंट टायर', '18.4 / 30 सार्वजनिक रूप से सूचीबद्ध'],
        ['रियर टायर', '9.00 x 16 सार्वजनिक रूप से सूचीबद्ध'],
        ['गियर', '1st: 1.5–3.5 km/h • 2nd: 3.5–9 km/h • 3rd: 9–21 km/h'],
        ['रिवर्स', 'लगभग 3.5–9.5 km/h ड्राफ्ट रेंज'],
        ['निर्माण', 'स्टील बॉडी और मजबूत फील्ड-फोकस्ड स्ट्रक्चर']
      ],
      service: [
        ['स्पेयर पार्ट्स', 'ब्लेड, सिव, फिल्टर, बेल्ट, चेन, बेयरिंग, ऑगर और व्हील पार्ट्स'],
        ['हाइड्रोलिक्स', 'यदि उपलब्ध हो तो पंप और होज़ सर्विस डिटेल्स जोड़ें'],
        ['वारंटी', 'कन्फर्म होने के बाद असली वारंटी जोड़ें'],
        ['ऑन-साइट सर्विस', 'सर्विस रेंज, समय और उपलब्धता जोड़ें'],
        ['दस्तावेज़', 'बाद में ब्रोशर, फाइनेंस सपोर्ट और अनुपालन पेपर जोड़ें']
      ]
    }
  },
  pa: {
    pageTitle: 'ਨਿਊ ਹੀਰਾ ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ | ਪ੍ਰੀਮੀਅਮ ਹਾਰਵੇਸਟਰ ਵੈਬਸਾਈਟ',
    introKicker: 'ਪੰਜਾਬ ਵਿੱਚ ਤਿਆਰ • ਖੇਤਾਂ ਲਈ ਰੈਡੀ',
    introBrandA: 'ਨਿਊ ਹੀਰਾ',
    introBrandB: 'ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ',
    introCaption: 'ਪ੍ਰੀਮੀਅਮ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਅਨੁਭਵ',
    skipIntro: 'ਇੰਟਰੋ ਛੱਡੋ',
    skipLink: 'ਮੁੱਖ ਸਮੱਗਰੀ ਤੇ ਜਾਓ',
    brandSub: 'ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ',
    languageLabel: 'ਭਾਸ਼ਾ',
    navOverview: 'ਓਵਰਵਿਊ',
    navMachine: 'ਮਸ਼ੀਨ',
    navSpecs: 'ਸਪੈਸਿਫਿਕੇਸ਼ਨ',
    navService: 'ਪਾਰਟਸ ਅਤੇ ਸਰਵਿਸ',
    navGallery: 'ਗੈਲਰੀ',
    navFinance: 'ਫਾਇਨੈਂਸ',
    navDealers: 'ਡੀਲਰ',
    navEnquire: 'ਪੁੱਛਗਿੱਛ',
    navCta: 'ਆਫਰ ਲਓ',
    heroEyebrow: 'ਐਗਰੀਕਲਚਰਲ ਹਾਰਵੇਸਟਰ ਅਨੁਭਵ',
    heroTitle: 'ਇੱਕ ਤਾਕਤਵਰ ਨਿਊ ਹੀਰਾ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਲਈ ਪ੍ਰੀਮੀਅਮ ਵੈਬਸਾਈਟ ਕਾਂਸੈਪਟ।',
    heroLead: 'ਹਾਈ-ਐਂਡ ਆਟੋਮੋਟਿਵ ਅਤੇ ਮਾਡਰਨ ਪ੍ਰੋਡਕਟ ਵੈਬਸਾਈਟਾਂ ਤੋਂ ਪ੍ਰੇਰਿਤ ਇਹ ਡਿਜ਼ਾਇਨ ਨਿਊ ਹੀਰਾ ਨੂੰ ਇੱਕ ਭਰੋਸੇਯੋਗ ਨਿਰਮਾਤਾ ਵਜੋਂ ਪੇਸ਼ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਡਾਇਨਾਮਿਕ ਵਿਜ਼ੂਅਲ, ਬਹੁਭਾਸ਼ੀ ਸਮੱਗਰੀ ਅਤੇ ਸਿੱਧੀਆਂ ਕਿਸਾਨ ਪੁੱਛਗਿੱਛ ਸ਼ਾਮਲ ਹਨ।',
    heroCtaPrimary: 'ਹੁਣ ਪੁੱਛਗਿੱਛ ਕਰੋ',
    heroCtaSecondary: 'ਮਸ਼ੀਨ ਵੇਖੋ',
    heroStageLabel: 'ਐਨੀਮੇਟਡ ਮਸ਼ੀਨ ਸ਼ੋਕੇਸ',
    heroStageStatus: 'ਡਾਇਨਾਮਿਕ ਵਿਜ਼ੂਅਲ ਚਾਲੂ ਹੈ',
    heroFooterLabelA: 'ਸਟੋਰੀ ਸਟਾਈਲ',
    heroFooterValueA: 'ਪ੍ਰੀਮੀਅਮ / ਸਿਨੇਮੈਟਿਕ',
    heroFooterLabelB: 'ਭਾਸ਼ਾ ਮੋਡ',
    heroFooterLabelC: 'ਲੀਡ ਬੈਕਐਂਡ',
    heroPoints: [
      ['ਪ੍ਰੀਮੀਅਮ ਪਹਿਲੀ ਛਾਪ', 'ਲਗਜ਼ਰੀ ਸਟਾਈਲ ਲੇਆਉਟ ਜੋ ਐਗਰੀਕਲਚਰ ਬ੍ਰਾਂਡ ਲਈ ਅਨੁਕੂਲ ਹੈ'],
      ['ਪੂਰਾ ਬਹੁਭਾਸ਼ੀ ਅਨੁਭਵ', 'English, Hindi ਅਤੇ Punjabi ਪੂਰਾ ਪੇਜ ਬਦਲ ਦਿੰਦੇ ਹਨ'],
      ['ਇੰਟਰਐਕਟਿਵ ਵਿਜ਼ੂਅਲ', 'ਐਨੀਮੇਟਡ ਹੀਰੋ, 3D ਸਟਾਈਲ ਮਾਡਲ ਅਤੇ ਪਾਰਟ ਡਾਇਗ੍ਰਾਮ'],
      ['ਸਿੱਧੀ ਲੀਡ ਕੈਪਚਰ', 'Firebase-ready ਫਾਰਮ ਅਸਲੀ ਗਾਹਕ ਡਾਟਾ ਲਈ']
    ],
    metrics: [
      ['128 HP', 'ਡਰਾਫਟ ਇੰਜਨ ਪਾਵਰ'],
      ['14 ft', 'ਡਰਾਫਟ ਕਟਰ ਚੌੜਾਈ'],
      ['7+', 'ਲਿਸਟ ਕੀਤੀਆਂ ਫਸਲਾਂ'],
      ['24/7', 'ਪੁੱਛਗਿੱਛ ਇਕੱਠੀ ਹੋਣੀ']
    ],
    storyEyebrow: 'ਨਿਰਮਾਤਾ ਦੀ ਕਹਾਣੀ',
    storyTitle: 'ਮੁਸ਼ਕਲ ਖੇਤਾਂ ਲਈ ਬਣੀ ਮਸ਼ੀਨ, ਮਾਡਰਨ ਪ੍ਰੀਮੀਅਮ ਪਹਿਚਾਣ ਨਾਲ ਪੇਸ਼।',
    storyLead: 'ਇਹ ਲੇਆਉਟ ਲਗਜ਼ਰੀ ਲੈਂਡਿੰਗ ਪੇਜਾਂ ਦੀ ਖੂਬਸੂਰਤੀ ਅਤੇ ਵਿਹਾਰਕ ਖੇਤੀ ਸੰਚਾਰ ਨੂੰ ਜੋੜਦਾ ਹੈ — ਤਾਂ ਕਿ ਕਿਸਾਨ ਤਾਕਤ, ਭਰੋਸਾ, ਸਰਵਿਸ ਸਹਾਇਤਾ ਅਤੇ ਵੈਲਯੂ ਵੇਖਣ।',
    storyCardTag: 'ਨਿਊ ਹੀਰਾ 985 • ਡਰਾਫਟ ਸ਼ੋਕੇਸ',
    storyCardMini: 'ਫਾਈਨਲ ਮਾਡਲ ਕਨਫਰਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਐਡਿਟ ਕਰੋ',
    storyCardTitle: 'ਇੱਕ ਮਸ਼ੀਨ। ਇੱਕ ਪ੍ਰੀਮੀਅਮ ਸੰਦੇਸ਼। ਕਈ ਫਸਲਾਂ।',
    storyCardBody: 'ਇਸ ਭਾਗ ਵਿੱਚ ਨਿਰਮਾਣ ਸਮਰੱਥਾ, ਫਸਲ ਅਨੁਕੂਲਤਾ, ਓਪਰੇਟਰ ਆਰਾਮ ਅਤੇ ਅਸਲੀ ਸਰਵਿਸ/ਸਪੇਅਰ ਪਾਰਟਸ ਦੀ ਉਪਲਬਧਤਾ ਦਿਖਾਓ।',
    storyItems: [
      ['ਨਿਰਮਾਤਾ-ਆਧਾਰਿਤ ਬ੍ਰਾਂਡਿੰਗ', 'ਤੁਹਾਡੇ ਪਿਤਾ ਦੀ ਕੰਪਨੀ ਨੂੰ ਨਿਰਮਾਤਾ ਵਜੋਂ ਦਿਖਾਓ, ਕੇਵਲ ਵੇਚਣ ਵਾਲੇ ਵਜੋਂ ਨਹੀਂ।'],
      ['ਵਿਜ਼ੂਅਲ ਸਟੋਰੀਟੈਲਿੰਗ', 'ਹੀਰੋ ਮੋਸ਼ਨ, ਡਰਾਮੈਟਿਕ ਲਾਈਟਿੰਗ ਅਤੇ ਬੋਲਡ ਹੈਡਲਾਈਨ ਭਰੋਸਾ ਵਧਾਉਂਦੇ ਹਨ।'],
      ['ਸਪੱਸ਼ਟ ਪ੍ਰੋਡਕਟ ਜਾਣਕਾਰੀ', 'ਇੰਜਨ, ਟਾਇਰ, ਗੀਅਰ, ਗ੍ਰੇਨ ਸਿਸਟਮ, ਇਲੈਕਟ੍ਰਿਕਸ ਅਤੇ ਸਰਵਿਸ ਸਮਝਾਓ।'],
      ['ਕਨਵਰਜ਼ਨ ਫੋਕਸ', 'ਵਿਜ਼ਿਟਰ ਨੂੰ ਕਾਲ, ਮੈਸੇਜ ਜਾਂ ਫਾਰਮ ਭਰਨ ਵੱਲ ਧੱਕੋ।']
    ],
    panelKicker: 'ਮਸ਼ੀਨ ਹਾਈਲਾਈਟਸ',
    panelTitle: 'ਧਿਆਨ ਨੂੰ ਪੁੱਛਗਿੱਛ ਵਿੱਚ ਬਦਲਣ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੀ ਗਈ।',
    highlights: [
      ['ਤਾਕਤਵਰ ਮੌਜੂਦਗੀ', 'ਪ੍ਰੀਮੀਅਮ ਪ੍ਰੋਡਕਟ ਸਾਈਟਾਂ ਤੋਂ ਪ੍ਰੇਰਿਤ ਮਜ਼ਬੂਤ ਵਿਜ਼ੂਅਲ ਸਰਫੇਸ ਅਤੇ ਕਨਟ੍ਰਾਸਟ।'],
      ['ਕਿਸਾਨ-ਦੋਸਤ ਜਾਣਕਾਰੀ', 'ਮੁੱਖ ਸਪੈਕਸ ਅਤੇ ਸਰਵਿਸ ਜਾਣਕਾਰੀ ਸੌਖੇ ਸੈਕਸ਼ਨਾਂ ਵਿੱਚ ਦਿਖਾਈ ਜਾਂਦੀ ਹੈ।'],
      ['ਭਵਿੱਖ ਲਈ ਤਿਆਰ', 'Firebase ਸਾਰੀਆਂ ਪੁੱਛਗਿੱਛਾਂ ਨੂੰ ਸੇਵ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਫਾਲੋ-ਅੱਪ ਆਸਾਨ ਬਣਾਂਦਾ ਹੈ।']
    ],
    experienceEyebrow: '2D + 3D ਪ੍ਰੋਡਕਟ ਅਨੁਭਵ',
    experienceTitle: 'ਇੰਟਰਐਕਟਿਵ ਵਿਜ਼ੂਅਲ ਮਸ਼ੀਨ ਨੂੰ ਸਧਾਰਣ ਬ੍ਰੋਸ਼ਰ ਤੋਂ ਵਧੀਆ ਸਮਝਾਉਂਦੇ ਹਨ।',
    experienceLead: 'ਹਲਕਾ 3D ਮਾਡਲ ਪ੍ਰੀਵਿਊ ਅਤੇ ਐਨੋਟੇਟ ਕੀਤੀ 2D ਡਾਇਗ੍ਰਾਮ ਮੋਬਾਈਲ ਅਤੇ ਡੈਸਕਟਾਪ ਦੋਵੇਂ ਤੇ ਮਸ਼ੀਨ ਨੂੰ ਜ਼ਲਦੀ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।',
    threeDLabel: 'ਇੰਟਰਐਕਟਿਵ 3D ਵਿਊ',
    threeDTitle: 'ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਘੁਮਾਓ',
    pauseRotate: 'ਰੋਕੋ',
    playRotate: 'ਚਲਾਓ',
    rotationLabel: 'ਰੋਟੇਸ਼ਨ',
    specLabel: 'ਮਸ਼ੀਨ ਡਾਟਾ',
    specDefaultTitle: 'ਪਾਵਰ ਅਤੇ ਇੰਜਨ',
    tabPower: 'ਪਾਵਰ',
    tabHarvesting: 'ਕਟਾਈ',
    tabDrive: 'ਡਰਾਈਵ',
    tabServiceSpecs: 'ਸਰਵਿਸ',
    specNote: 'ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ ਪਬਲਿਕ ਲਿਸਟਿੰਗਾਂ ਤੋਂ ਡਰਾਫਟ ਰੂਪ ਵਿੱਚ ਹੈ। ਪਬਲਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਫਾਈਨਲ ਵੈਲਯੂਜ਼ ਕਨਫਰਮ ਕਰੋ।',
    diagramKicker: '2D ਐਨੋਟੇਟ ਕੀਤੀ ਡਾਇਗ੍ਰਾਮ',
    diagramTitle: 'ਮਹੱਤਵਪੂਰਣ ਪਾਰਟਸ ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ',
    diagramButton: 'ਪਾਰਟਸ ਹਾਈਲਾਈਟ ਕਰੋ',
    callEngine: 'ਇੰਜਨ',
    callCutter: 'ਕਟਰ ਬਾਰ',
    callGrain: 'ਗ੍ਰੇਨ ਟੈਂਕ',
    callTyres: 'ਟਾਇਰ / ਵੀਲ',
    callAuger: 'ਅਨਲੋਡਿੰਗ ਆਗਰ',
    partsKicker: 'ਪਾਰਟਸ ਅਤੇ ਸਹਾਇਤਾ',
    partsTitle: 'ਅਸਲੀ ਸਪੇਅਰ ਪਾਰਟਸ ਅਤੇ ਆਫ਼ਟਰ-ਸੇਲਜ਼ ਸਰਵਿਸ ਨੂੰ ਪ੍ਰੋਮੋਟ ਕਰੋ।',
    partsLead: 'ਇਹ ਭਾਗ ਕਿਸਾਨਾਂ ਨੂੰ ਇਹ ਭਰੋਸਾ ਦੇਣ ਲਈ ਬਹੁਤ ਉਪਯੋਗੀ ਹੈ ਕਿ ਸਰਵਿਸ ਬੈਕਅੱਪ ਮਜ਼ਬੂਤ ਹੈ, ਪਾਰਟਸ ਉਪਲਬਧ ਹਨ ਅਤੇ ਮੈਨਟੇਨੈਂਸ ਆਸਾਨ ਰਹੇਗਾ।',
    parts: [
      ['ਕਟਰ ਬਲੇਡ', 'ਕਟਾਈ ਦੀ ਧਾਰ ਅਤੇ ਕਟਿੰਗ ਕੁਸ਼ਲਤਾ'],
      ['ਬੈਲਟ ਅਤੇ ਚੇਨ', 'ਸਮੂਥ ਡਰਾਈਵ ਅਤੇ ਟ੍ਰਾਂਸਮਿਸ਼ਨ ਸਹਾਇਤਾ'],
      ['ਸੀਵ', 'ਸਫਾਈ ਅਤੇ ਗ੍ਰੇਨ ਸੈਪਰੇਸ਼ਨ'],
      ['ਸਟ੍ਰਾ ਵਾਕਰ', 'ਫਸਲ ਵੱਖ ਕਰਨ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ'],
      ['ਫਿਲਟਰ', 'ਇੰਜਨ ਸੁਰੱਖਿਆ ਅਤੇ ਸਰਵਿਸ ਕਿਟ'],
      ['ਬੇਅਰਿੰਗ', 'ਘੱਟ ਡਾਊਨਟਾਈਮ ਮੈਨਟੇਨੈਂਸ ਸਹਾਇਤਾ'],
      ['ਟਾਇਰ / ਵੀਲ', 'ਫੀਲਡ ਮੂਵਮੈਂਟ ਅਤੇ ਟ੍ਰੈਕਸ਼ਨ'],
      ['ਆਗਰ ਪਾਰਟਸ', 'ਭਰੋਸੇਯੋਗ ਅਨਲੋਡਿੰਗ ਓਪਰੇਸ਼ਨ']
    ],
    galleryEyebrow: 'ਪ੍ਰੀਮੀਅਮ ਗੈਲਰੀ ਪ੍ਰੇਜ਼ੈਂਟੇਸ਼ਨ',
    galleryTitle: 'ਇੱਕ ਖੇਤੀ ਮਸ਼ੀਨ ਲਈ ਹੋਰ ਵੀ ਸ਼ਾਨਦਾਰ ਪ੍ਰੋਡਕਟ ਕਹਾਣੀ।',
    galleryLead: 'ਇਹ ਸੈਕਸ਼ਨ ਪ੍ਰੀਮੀਅਮ ਆਟੋਮੋਟਿਵ ਸਟੋਰੀਟੈਲਿੰਗ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੈ: ਬੋਲਡ ਸ਼ਬਦ, ਫੋਕਸ ਹਾਈਲਾਈਟਸ ਅਤੇ ਇਮਰਸਿਵ ਪ੍ਰੋਡਕਟ ਮੋਮੈਂਟਸ ਜੋ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਮਾਰਕੀਟ ਲਈ ਅਨੁਕੂਲ ਕੀਤੇ ਗਏ ਹਨ।',
    galleryCard1Kicker: 'ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਫਰੰਟ ਪ੍ਰੋਫਾਈਲ',
    galleryCard1Title: 'ਐਸੀ ਮੌਜੂਦਗੀ ਜੋ ਗੰਭੀਰ ਹਾਰਵੇਸਟਿੰਗ ਲਈ ਇੰਜੀਨੀਅਰਡ ਲੱਗੇ।',
    galleryCard1Body: 'ਬਾਅਦ ਵਿੱਚ ਇੱਥੇ ਅਸਲੀ ਹਾਰਵੇਸਟਰ ਫੋਟੋਗ੍ਰਾਫੀ ਲਗਾਓ। ਇਹ ਲੇਆਉਟ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਬੋਲਡ ਇਮੇਜ-ਲੀਡ ਸਟੋਰੀਟੈਲਿੰਗ ਲਈ ਤਿਆਰ ਹੈ।',
    galleryCard2Kicker: 'ਓਪਰੇਟਰ ਪਰਸਪੈਕਟਿਵ',
    galleryCard2Title: 'ਸਾਫ ਕੰਟਰੋਲ, ਵਧੀਆ ਵਿਜ਼ਿਬਿਲਟੀ ਅਤੇ ਫੀਲਡ-ਫੋਕਸਡ ਆਰਾਮ।',
    galleryCard2Body: 'ਇਸ ਬਲਾਕ ਵਿੱਚ ਓਪਰੇਟਰ ਸੁਵਿਧਾ, ਕੰਟਰੋਲ ਐਕਸੈੱਸ, ਮੈਨਟੇਨੈਂਸ ਵਿਜ਼ਿਬਿਲਟੀ ਅਤੇ ਹਾਰਵੇਸਟਿੰਗ ਕਾਨਫਿਡੈਂਸ ਬਾਰੇ ਦੱਸੋ।',
    galleryCard3Kicker: 'ਕਾਰੋਬਾਰ ਨੂੰ ਸਹਾਇਤਾ ਦੇਣ ਲਈ ਬਣਿਆ',
    galleryCard3Title: 'ਸਪੇਅਰ ਪਾਰਟਸ, ਸਰਵਿਸ ਬੈਕਅਪ ਅਤੇ ਸੀਜ਼ਨਲ ਸਹਾਇਤਾ ਵੱਡਾ ਫਰਕ ਪੈਦਾ ਕਰਦੇ ਹਨ।',
    galleryCard3Body: 'ਇਸ ਨਾਲ ਦਿਖਾਓ ਕਿ ਕਿਸਾਨਾਂ ਨੂੰ ਸਿਰਫ਼ ਮਸ਼ੀਨ ਲਈ ਹੀ ਨਹੀਂ, ਖਰੀਦ ਤੋਂ ਬਾਅਦ ਦੀ ਸਹਾਇਤਾ ਲਈ ਵੀ ਨਿਊ ਹੀਰਾ ਤੇ ਭਰੋਸਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।',
    offerEyebrow: 'ਸੀਜ਼ਨਲ ਕੈਂਪੇਨ',
    offerTitle: 'ਆਫਰ ਵਾਲਾ ਲੈਂਡਿੰਗ ਪੇਜ ਕਾਲਾਂ ਅਤੇ ਫਾਰਮ ਪੁੱਛਗਿੱਛ ਨੂੰ ਵਧਾ ਸਕਦਾ ਹੈ।',
    offerLead: 'ਬਾਅਦ ਵਿੱਚ ਤੁਹਾਡੇ ਪਿਤਾ ਜੋ ਰਕਮ ਕਨਫਰਮ ਕਰਨ, ਉਹ ਲਗਾਓ। ਇਸ ਵੇਲੇ ਸਲਾਈਡਰ ਇੰਟਰਐਕਟਿਵ ਹੈ ਤਾਂ ਕਿ ਵੈਬਸਾਈਟ ਜ਼ਿੰਦਾ ਮਹਿਸੂਸ ਹੋਵੇ ਅਤੇ ਆਫਰ ਦੀ ਵੈਲਯੂ ਆਪਣੇ-ਆਪ ਫਾਰਮ ਵਿੱਚ ਭਰ ਜਾਵੇ।',
    offerValueLabel: 'ਮੌਜੂਦਾ ਪ੍ਰਮੋਸ਼ਨਲ ਆਫਰ',
    offerValueCaption: 'ਡਿਸਕਾਉਂਟ / ਐਕਸਚੇਂਜ / ਬੁਕਿੰਗ ਲਾਭ — ਬਾਅਦ ਵਿੱਚ ਐਡਿਟ ਕਰੋ',
    offerSliderLabel: 'ਆਫਰ ਰਕਮ ਬਦਲੋ',
    applyOffer: 'ਇਹ ਆਫਰ ਪੁੱਛਗਿੱਛ ਵਿੱਚ ਲਗਾਓ',
    offerBoxTag: 'ਕੈਂਪੇਨ ਮੈਸੇਜ',
    offerBoxTitle: 'ਗੰਭੀਰ ਖਰੀਦਦਾਰਾਂ ਲਈ ਸਮਾਰਟ ਬੁਕਿੰਗ ਫਾਇਦੇ।',
    offerList: [
      ['ਬੁਕਿੰਗ ਡਿਸਕਾਉਂਟ', 'ਧਿਆਨ ਖਿੱਚਣ ਲਈ ₹1 ਲੱਖ ਵਰਗੀ ਮਜ਼ਬੂਤ ਰਕਮ ਦਿਖਾਓ।'],
      ['ਪ੍ਰਾਥਮਿਕਤਾ ਕਾਲਬੈਕ', 'ਤੁਹਾਡੀ ਸੇਲਜ਼ ਟੀਮ ਗੰਭੀਰ ਖਰੀਦਦਾਰਾਂ ਨਾਲ ਜਲਦੀ ਸੰਪਰਕ ਕਰ ਸਕਦੀ ਹੈ।'],
      ['ਸਰਵਿਸ ਸਹਾਇਤਾ ਸੰਦੇਸ਼', 'ਸਪੇਅਰ ਪਾਰਟਸ, ਫੀਲਡ ਵਿਜ਼ਿਟ ਅਤੇ ਗਾਈਡੈਂਸ ਦਾ ਜ਼ਿਕਰ ਕਰੋ।']
    ],
    formEyebrow: 'ਸਿੱਧੀਆਂ ਕਿਸਾਨ ਪੁੱਛਗਿੱਛਾਂ',
    formTitle: 'ਵੈਬਸਾਈਟ ਨੂੰ Firebase ਨਾਲ ਜੋੜੋ ਅਤੇ ਹਰ ਲੀਡ ਕੈਪਚਰ ਕਰੋ।',
    formLead: 'ਇਹ ਫਾਰਮ Firebase ਲਈ ਤਿਆਰ ਹੈ। ਜੇ Firebase ਉਪਲਬਧ ਨਾ ਹੋਵੇ, ਤਾਂ ਟੈਸਟਿੰਗ ਲਈ ਪੁੱਛਗਿੱਛ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਹੋ ਜਾਵੇਗੀ।',
    fieldName: 'ਪੂਰਾ ਨਾਮ',
    fieldNamePlaceholder: 'ਕਿਸਾਨ ਦਾ ਨਾਮ',
    fieldPhone: 'ਫੋਨ / WhatsApp',
    fieldPhonePlaceholder: '+91 98765 43210',
    fieldDistrict: 'ਜ਼ਿਲ੍ਹਾ',
    fieldDistrictPlaceholder: 'ਜਿਵੇਂ ਪਟਿਆਲਾ',
    fieldState: 'ਰਾਜ',
    fieldCrop: 'ਮੁੱਖ ਫਸਲ',
    fieldOffer: 'ਚੁਣਿਆ ਗਿਆ ਆਫਰ',
    fieldMessage: 'ਜ਼ਰੂਰਤ',
    fieldMessagePlaceholder: 'ਫਸਲ, ਲੋਕੇਸ਼ਨ ਅਤੇ ਖਰੀਦਣ ਦਾ ਸਮਾਂ ਦੱਸੋ',
    consentText: 'ਮੈਂ ਸਹਿਮਤ ਹਾਂ ਕਿ ਨਿਊ ਹੀਰਾ ਟੀਮ ਇਸ ਪੁੱਛਗਿੱਛ ਬਾਰੇ ਮੈਨੂੰ ਸੰਪਰਕ ਕਰ ਸਕਦੀ ਹੈ।',
    submitLabel: 'ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਕਰੋ',
    statusSubmitting: 'ਪੁੱਛਗਿੱਛ ਭੇਜੀ ਜਾ ਰਹੀ ਹੈ...',
    statusSuccess: 'ਪੁੱਛਗਿੱਛ ਸਫਲਤਾਪੂਰਵਕ ਸਬਮਿਟ ਹੋ ਗਈ। ਹੁਣ ਇਹ Firebase ਵਿੱਚ ਦਿਖਣੀ ਚਾਹੀਦੀ ਹੈ।',
    statusLocal: 'Firebase ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਇਸ ਲਈ ਟੈਸਟਿੰਗ ਲਈ ਪੁੱਛਗਿੱਛ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਕੀਤੀ ਗਈ।',
    statusError: 'ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ Firebase ਸੈਟਅੱਪ ਚੈੱਕ ਕਰੋ ਅਤੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    contactKicker: 'ਸੰਪਰਕ ਬਲਾਕ',
    contactTitle: 'ਇੱਥੇ ਅਸਲੀ ਸੇਲਜ਼ ਵੇਰਵਾ ਪਬਲਿਸ਼ ਕਰੋ।',
    contactLead: 'ਇਸ ਡਰਾਫਟ ਜਾਣਕਾਰੀ ਦੀ ਥਾਂ ਨਿਊ ਹੀਰਾ ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ ਦਾ ਸਹੀ ਫੋਨ, WhatsApp, ਪਤਾ ਅਤੇ ਕੰਮ ਦੇ ਘੰਟੇ ਪਾਓ।',
    contactPhoneLabel: 'ਸੇਲਜ਼ ਫੋਨ',
    contactWhatsappLabel: 'WhatsApp',
    contactLocationLabel: 'ਲੋਕੇਸ਼ਨ',
    contactLocationValue: 'ਪੰਜਾਬ, ਭਾਰਤ',
    contactHoursLabel: 'ਕੰਮ ਦੇ ਘੰਟੇ',
    contactHoursValue: 'ਸੋਮ - ਸ਼ਨੀ • ਸਵੇਰੇ 9 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 6 ਵਜੇ ਤੱਕ',
    contactNote: 'ਟਿਪ: ਜਿਵੇਂ ਹੀ ਤੁਸੀਂ ਕੀਮਤ, ਵਾਰੰਟੀ, ਫਾਇਨੈਂਸ ਅਤੇ ਡਿਸਕਾਉਂਟ ਕਨਫਰਮ ਕਰੋ, JavaScript ਸਮੱਗਰੀ ਫਾਈਲ ਵਿੱਚ ਅੱਪਡੇਟ ਕਰੋ ਅਤੇ ਪੂਰੀ ਸਾਈਟ ਆਪੇ ਹੀ ਹਰ ਜਗ੍ਹਾ ਬਦਲ ਜਾਵੇਗੀ।',
    financeEyebrow: 'ਫਾਇਨੈਂਸ ਅਤੇ ਖਰੀਦ ਸਹਾਇਤਾ',
    financeTitle: 'ਕਿਸਾਨਾਂ ਲਈ ਅਗਲਾ ਕਦਮ ਆਸਾਨ ਬਣਾਓ।',
    financeLead: 'ਕਨਫਰਮ ਕਰਨ ਤੋਂ ਬਾਅਦ ਅਸਲੀ ਬੈਂਕ, ਫਾਇਨੈਂਸ, ਸਬਸਿਡੀ, ਐਕਸਚੇਂਜ ਅਤੇ ਬੁਕਿੰਗ ਸ਼ਰਤਾਂ ਜੋੜੋ। ਇਹ ਸੈਕਸ਼ਨ ਪੂਰੀ ਖਰੀਦ ਯਾਤਰਾ ਸਾਫ਼ ਸਮਝਾਉਣ ਲਈ ਤਿਆਰ ਹੈ।',
    financeBadge: 'ਪ੍ਰੋਡਕਸ਼ਨ ਰੈਡੀ ਬਲਾਕ',
    financeBadgeText: 'ਕੀਮਤ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਫਾਈਨਲ ਹੋਣ ਤੇ ਵੈਲਯੂ ਅੱਪਡੇਟ ਕਰੋ।',
    financeSteps: [
      ['ਬੁਕਿੰਗ', 'ਖਰੀਦਦਾਰ ਦੀ ਜਾਣਕਾਰੀ, ਫਸਲ, ਲੋਕੇਸ਼ਨ ਅਤੇ ਚੁਣਿਆ ਡਿਸਕਾਉਂਟ ਆਫਰ ਕੈਪਚਰ ਕਰੋ।'],
      ['ਫਾਇਨੈਂਸ ਮਦਦ', 'ਕਨਫਰਮ ਹੋਣ ਤੇ ਬੈਂਕ, EMI, ਸਬਸਿਡੀ ਜਾਂ ਐਕਸਚੇਂਜ ਗਾਈਡੈਂਸ ਜੋੜੋ।'],
      ['ਦਸਤਾਵੇਜ਼ ਜਾਂਚ', 'ਲੋੜ ਅਨੁਸਾਰ ID, ਐਡਰੈੱਸ, ਜ਼ਮੀਨ, GST ਜਾਂ ਫਾਇਨੈਂਸ ਦਸਤਾਵੇਜ਼ ਦੱਸੋ।'],
      ['ਡਿਲਿਵਰੀ ਫਾਲੋ-ਅੱਪ', 'ਸੇਲਜ਼ ਟੀਮ ਕਾਲ ਕਰਕੇ ਸਟਾਕ ਅਤੇ ਡਿਲਿਵਰੀ ਚਰਚਾ ਕਨਫਰਮ ਕਰ ਸਕਦੀ ਹੈ।']
    ],
    dealerEyebrow: 'ਡੀਲਰ ਅਤੇ ਸਰਵਿਸ ਨੈੱਟਵਰਕ',
    dealerTitle: 'ਦਿਖਾਓ ਕਿ ਖਰੀਦਦਾਰ ਨੂੰ ਮਦਦ, ਸਰਵਿਸ ਅਤੇ ਸਪੇਅਰ ਪਾਰਟਸ ਕਿੱਥੇ ਮਿਲਣਗੇ।',
    dealerLead: 'ਇਸ ਖੇਤਰ ਨੂੰ ਫੈਕਟਰੀ ਪਤਾ, ਡੀਲਰ, ਸਰਵਿਸ ਵੈਨ, ਟੈਕਨੀਸ਼ਨ, ਸਪੇਅਰ ਪਾਰਟ ਉਪਲਬਧਤਾ ਅਤੇ ਸੀਜ਼ਨਲ ਚੈਕਅੱਪ ਕੈਂਪ ਲਈ ਵਰਤੋ।',
    dealers: [
      ['ਫੈਕਟਰੀ / ਹੈੱਡ ਆਫਿਸ', 'ਨਿਊ ਹੀਰਾ ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ ਦਾ ਸਹੀ ਪਤਾ, ਫੋਨ ਨੰਬਰ ਅਤੇ ਵਿਜ਼ਿਟਿੰਗ ਸਮਾਂ ਜੋੜੋ।'],
      ['ਫੀਲਡ ਸਰਵਿਸ', 'ਟੈਕਨੀਸ਼ਨ ਸਹਾਇਤਾ, ਸਰਵਿਸ ਰੇਡੀਅਸ ਅਤੇ ਸੀਜ਼ਨਲ ਚੈਕਅੱਪ ਉਪਲਬਧਤਾ ਸਮਝਾਓ।'],
      ['ਸਪੇਅਰ ਪਾਰਟਸ ਕਾਊਂਟਰ', 'ਅਸਲੀ ਸਪੇਅਰ ਪਾਰਟਸ, ਫਿਲਟਰ, ਬੈਲਟ, ਬਲੇਡ, ਚੇਨ, ਬੇਅਰਿੰਗ ਅਤੇ ਆਗਰ ਪਾਰਟਸ ਦਿਖਾਓ।']
    ],
    faqEyebrow: 'ਖਰੀਦਦਾਰਾਂ ਦੇ ਸਵਾਲ',
    faqTitle: 'ਕਿਸਾਨ ਦੇ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਆਮ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ।',
    faqLead: 'ਇਹ FAQ ਸਾਈਟ ਨੂੰ ਪੂਰਾ ਮਹਿਸੂਸ ਕਰਵਾਉਂਦਾ ਹੈ ਅਤੇ ਆਫਰ, ਸਰਵਿਸ, ਦਸਤਾਵੇਜ਼ ਅਤੇ ਮਾਡਲ ਸਪੈਸਿਫਿਕੇਸ਼ਨ ਬਾਰੇ ਗਲਤਫਹਿਮੀ ਘਟਾਉਂਦਾ ਹੈ।',
    faqs: [
      ['ਕੀ ਸਪੈਸਿਫਿਕੇਸ਼ਨ ਫਾਈਨਲ ਹਨ?', 'ਨਹੀਂ। ਮੌਜੂਦਾ ਵੈਲਯੂਜ਼ ਡਰਾਫਟ ਪਬਲਿਕ ਲਿਸਟਿੰਗ ਤੋਂ ਹਨ। ਪਬਲਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨਵੀਂ ਮਾਡਲ ਡੀਟੇਲ ਕਨਫਰਮ ਕਰੋ।'],
      ['ਕੀ ਡਿਸਕਾਉਂਟ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ?', 'ਹਾਂ। ਤੁਹਾਡੇ ਪਿਤਾ ਫਾਈਨਲ ਕੈਂਪੇਨ ਰਕਮ ਕਨਫਰਮ ਕਰਨ ਤੋਂ ਬਾਅਦ ਆਫਰ ਸਲਾਈਡਰ ਅਤੇ ਟੈਕਸਟ ਬਦਲ ਸਕਦੇ ਹੋ।'],
      ['ਪੁੱਛਗਿੱਛ ਕਿੱਥੇ ਜਾਵੇਗੀ?', 'Firebase enabled ਹੋਣ ਅਤੇ rules publish ਹੋਣ ਤੇ ਫਾਰਮ enquiry Firebase Firestore ਵਿੱਚ ਭੇਜਦਾ ਹੈ।'],
      ['ਕੀ ਅਸਲੀ ਹਾਰਵੇਸਟਰ ਫੋਟੋ ਜੋੜੀ ਜਾ ਸਕਦੀ ਹੈ?', 'ਹਾਂ। ਗੈਲਰੀ placeholders ਨੂੰ ਮਸ਼ੀਨ, ਫੈਕਟਰੀ ਅਤੇ ਪਾਰਟਸ ਦੀਆਂ ਅਸਲੀ ਫੋਟੋ ਜਾਂ ਵੀਡੀਓ ਨਾਲ ਬਦਲੋ।']
    ],
    floatCall: 'ਕਾਲ',
    floatWhatsapp: 'WhatsApp',
    floatEnquiry: 'ਪੁੱਛਗਿੱਛ',
    footerText: 'English, Hindi ਅਤੇ Punjabi ਸਹਾਇਤਾ ਨਾਲ ਡਾਇਨਾਮਿਕ ਐਗਰੀਕਲਚਰਲ ਹਾਰਵੇਸਟਰ ਲੈਂਡਿੰਗ ਪੇਜ।',
    footerBackTop: 'ਉੱਪਰ ਜਾਓ',
    states: ['ਪੰਜਾਬ', 'ਹਰਿਆਣਾ', 'ਰਾਜਸਥਾਨ', 'ਉੱਤਰ ਪ੍ਰਦੇਸ਼', 'ਹੋਰ'],
    crops: ['ਗੇਹੂੰ', 'ਧਾਨ', 'ਮੱਕੀ', 'ਜੌ', 'ਹੋਰ'],
    specTitles: {
      power: 'ਪਾਵਰ ਅਤੇ ਇੰਜਨ',
      harvesting: 'ਕਟਾਈ ਅਤੇ ਅਨਾਜ',
      drive: 'ਡਰਾਈਵ, ਗੀਅਰ ਅਤੇ ਟਾਇਰ',
      service: 'ਸਰਵਿਸ ਅਤੇ ਸਹਾਇਤਾ'
    },
    specs: {
      power: [
        ['ਮਾਡਲ', 'ਨਿਊ ਹੀਰਾ 985 ਸੈਲਫ-ਪ੍ਰੋਪੈਲਡ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ'],
        ['ਇੰਜਨ', 'Ashok Leyland 412 ਟਰਬੋਚਾਰਜਡ ਡੀਜ਼ਲ (ਡਰਾਫਟ ਪਬਲਿਕ ਲਿਸਟਿੰਗ; ਨਵਾਂ ਵਰਜਨ ਕਨਫਰਮ ਕਰੋ)'],
        ['ਪਾਵਰ', 'ਇੱਕ ਪਬਲਿਕ ਸਰੋਤ ਵਿੱਚ 128 HP @ 2200 RPM; ਦੂਜੇ ਵਿੱਚ 133 HP'],
        ['ਇਲੈਕਟ੍ਰਿਕਲ ਸਿਸਟਮ', 'ਸਟਾਰਟਰ, ਬੈਟਰੀ, ਵਰਕ ਲੈਂਪ ਅਤੇ ਸਵਿਚ — ਸਹੀ ਰੇਟਿੰਗ ਕਨਫਰਮ ਕਰੋ'],
        ['ਇਮੀਸ਼ਨ', 'ਪਬਲਿਕ ਲਿਸਟਿੰਗ ਵਿੱਚ TREM III; ਨਵਾਂ ਕੰਪਲਾਇੰਸ ਬਾਅਦ ਵਿੱਚ ਅੱਪਡੇਟ ਕਰੋ']
      ],
      harvesting: [
        ['ਕਟਰ ਬਾਰ', '4350 mm / 14 ft ਡਰਾਫਟ ਲਿਸਟਿੰਗ'],
        ['ਫਸਲ ਸਹਾਇਤਾ', 'ਗੇਹੂੰ, ਧਾਨ, ਜੌ, ਮੱਕੀ, ਸੂਰਜਮੁਖੀ, ਦਾਲਾਂ ਅਤੇ ਚਣਾ'],
        ['ਗ੍ਰੇਨ ਟੈਂਕ', 'ਲਗਭਗ 1900 kg / 2 ਟਨ ਪਬਲਿਕ ਲਿਸਟਿੰਗ — ਫਾਈਨਲ ਮਾਡਲ ਕਨਫਰਮ ਕਰੋ'],
        ['ਥ੍ਰੈਸ਼ਿੰਗ', 'ਪਬਲਿਕ ਲਿਸਟਿੰਗ ਵਿੱਚ 6 ਸਟ੍ਰਾ ਵਾਕਰ ਅਤੇ 2 ਸੀਵ ਲੇਆਉਟ'],
        ['ਆਉਟਪੁੱਟ', 'ਇੱਕ ਲਿਸਟਿੰਗ ਵਿੱਚ ਲਗਭਗ 1.5 acre/hour — ਅਸਲੀ ਫੀਲਡ ਪਰਫਾਰਮੈਂਸ ਨਾਲ ਜਾਂਚੋ']
      ],
      drive: [
        ['ਫਰੰਟ ਟਾਇਰ', '18.4 / 30 ਪਬਲਿਕਲੀ ਲਿਸਟ ਕੀਤੇ ਗਏ'],
        ['ਰੀਅਰ ਟਾਇਰ', '9.00 x 16 ਪਬਲਿਕਲੀ ਲਿਸਟ ਕੀਤੇ ਗਏ'],
        ['ਗੀਅਰ', '1st: 1.5–3.5 km/h • 2nd: 3.5–9 km/h • 3rd: 9–21 km/h'],
        ['ਰਿਵਰਸ', 'ਲਗਭਗ 3.5–9.5 km/h ਡਰਾਫਟ ਰੇਂਜ'],
        ['ਨਿਰਮਾਣ', 'ਸਟਿਲ ਬਾਡੀ ਅਤੇ ਮਜ਼ਬੂਤ ਫੀਲਡ-ਫੋਕਸਡ ਸਟਰਕਚਰ']
      ],
      service: [
        ['ਸਪੇਅਰ ਪਾਰਟਸ', 'ਬਲੇਡ, ਸੀਵ, ਫਿਲਟਰ, ਬੈਲਟ, ਚੇਨ, ਬੇਅਰਿੰਗ, ਆਗਰ ਅਤੇ ਵੀਲ ਪਾਰਟਸ'],
        ['ਹਾਈਡ੍ਰੌਲਿਕਸ', 'ਜੇ ਉਪਲਬਧ ਹੋਵੇ ਤਾਂ ਪੰਪ ਅਤੇ ਹੋਜ਼ ਸਰਵਿਸ ਡੀਟੇਲ ਜੋੜੋ'],
        ['ਵਾਰੰਟੀ', 'ਕਨਫਰਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਅਸਲੀ ਵਾਰੰਟੀ ਜੋੜੋ'],
        ['ਆਨ-ਸਾਈਟ ਸਰਵਿਸ', 'ਸਰਵਿਸ ਰੇਡੀਅਸ, ਟਾਈਮਿੰਗ ਅਤੇ ਉਪਲਬਧਤਾ ਜੋੜੋ'],
        ['ਦਸਤਾਵੇਜ਼', 'ਬਾਅਦ ਵਿੱਚ ਬ੍ਰੋਸ਼ਰ, ਫਾਇਨੈਂਸ ਸਹਾਇਤਾ ਅਤੇ ਕੰਪਲਾਇੰਸ ਪੇਪਰ ਜੋੜੋ']
      ]
    }
  }
};

const els = {
  introOverlay: document.getElementById('introOverlay'),
  introCanvas: document.getElementById('introCanvas'),
  skipIntro: document.getElementById('skipIntro'),
  navToggle: document.getElementById('navToggle'),
  navLinks: document.getElementById('navLinks'),
  languageSelect: document.getElementById('languageSelect'),
  currentLanguageLabel: document.getElementById('currentLanguageLabel'),
  heroPoints: document.getElementById('heroPoints'),
  metricsGrid: document.getElementById('metricsGrid'),
  storyList: document.getElementById('storyList'),
  highlightStack: document.getElementById('highlightStack'),
  modelCanvas: document.getElementById('modelCanvas'),
  heroCanvas: document.getElementById('heroCanvas'),
  rotateToggle: document.getElementById('rotateToggle'),
  rotationRange: document.getElementById('rotationRange'),
  specTabs: [...document.querySelectorAll('.spec-tab')],
  specTitle: document.getElementById('specTitle'),
  specTable: document.getElementById('specTable'),
  flashParts: document.getElementById('flashParts'),
  diagram: document.querySelector('.harvester-diagram'),
  partsGrid: document.getElementById('partsGrid'),
  offerRange: document.getElementById('offerRange'),
  offerAmountDisplay: document.getElementById('offerAmountDisplay'),
  applyOfferBtn: document.getElementById('applyOfferBtn'),
  offerList: document.getElementById('offerList'),
  financeSteps: document.getElementById('financeSteps'),
  dealerGrid: document.getElementById('dealerGrid'),
  faqList: document.getElementById('faqList'),
  enquiryForm: document.getElementById('enquiryForm'),
  stateSelect: document.getElementById('stateSelect'),
  cropSelect: document.getElementById('cropSelect'),
  offerInput: document.getElementById('offerInput'),
  formStatus: document.getElementById('formStatus')
};

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function setText(el, value) {
  if (el) el.textContent = value;
}

function applyStaticTranslations() {
  const t = content[appState.lang];
  document.documentElement.lang = appState.lang;
  document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  document.querySelectorAll('[data-svg-i18n]').forEach((el) => {
    const key = el.dataset.svgI18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  const selectedOption = els.languageSelect.querySelector(`option[value="${appState.lang}"]`);
  setText(els.currentLanguageLabel, selectedOption ? selectedOption.textContent : 'English');
  setText(els.rotateToggle, appState.autoRotate ? t.pauseRotate : t.playRotate);
}

function renderHeroPoints() {
  const t = content[appState.lang];
  els.heroPoints.innerHTML = t.heroPoints.map(([title, body]) => `
    <article class="hero-point">
      <strong>${title}</strong>
      <small>${body}</small>
    </article>
  `).join('');
}

function renderMetrics() {
  const t = content[appState.lang];
  els.metricsGrid.innerHTML = t.metrics.map(([value, label]) => `
    <article class="metric-card reveal-child">
      <strong>${value}</strong>
      <small>${label}</small>
    </article>
  `).join('');
}

function renderStory() {
  const t = content[appState.lang];
  els.storyList.innerHTML = t.storyItems.map(([title, body]) => `
    <div class="story-item">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join('');

  els.highlightStack.innerHTML = t.highlights.map(([title, body], index) => `
    <div class="highlight-item">
      <span class="highlight-number">0${index + 1}</span>
      <div>
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
    </div>
  `).join('');
}

function renderParts() {
  const t = content[appState.lang];
  els.partsGrid.innerHTML = t.parts.map(([title, body]) => `
    <article class="part-item">
      <strong>${title}</strong>
      <small>${body}</small>
    </article>
  `).join('');
}

function renderOfferList() {
  const t = content[appState.lang];
  els.offerList.innerHTML = t.offerList.map(([title, body]) => `
    <li><strong>${title}</strong><span>${body}</span></li>
  `).join('');
}


function renderProductionSections() {
  const t = content[appState.lang];
  if (els.financeSteps) {
    els.financeSteps.innerHTML = t.financeSteps.map(([title, body], index) => `
      <article class="finance-step">
        <span>${index + 1}</span>
        <strong>${title}</strong>
        <small>${body}</small>
      </article>
    `).join('');
  }
  if (els.dealerGrid) {
    els.dealerGrid.innerHTML = t.dealers.map(([title, body]) => `
      <article class="dealer-card reveal visible">
        <div class="pin">⌖</div>
        <h3>${title}</h3>
        <p>${body}</p>
      </article>
    `).join('');
  }
  if (els.faqList) {
    els.faqList.innerHTML = t.faqs.map(([question, answer]) => `
      <details class="faq-item">
        <summary>${question}</summary>
        <p>${answer}</p>
      </details>
    `).join('');
  }
}

function renderSpecTable() {
  const t = content[appState.lang];
  setText(els.specTitle, t.specTitles[appState.specTab]);
  const rows = t.specs[appState.specTab];
  els.specTable.innerHTML = rows.map(([label, value]) => `
    <div class="spec-row">
      <strong>${label}</strong>
      <span>${value}</span>
    </div>
  `).join('');
}

function renderFormOptions() {
  const t = content[appState.lang];
  els.stateSelect.innerHTML = t.states.map((state) => `<option value="${state}">${state}</option>`).join('');
  els.cropSelect.innerHTML = t.crops.map((crop) => `<option value="${crop}">${crop}</option>`).join('');
  els.offerInput.value = formatCurrency(appState.offerAmount);
}

function applyLanguage(lang) {
  appState.lang = lang;
  localStorage.setItem('newHiraLang', lang);
  els.languageSelect.value = lang;
  applyStaticTranslations();
  renderHeroPoints();
  renderMetrics();
  renderStory();
  renderParts();
  renderOfferList();
  renderProductionSections();
  renderSpecTable();
  renderFormOptions();
}

function bindInteractions() {
  els.languageSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
  els.navToggle.addEventListener('click', () => {
    const open = els.navLinks.classList.toggle('open');
    els.navToggle.setAttribute('aria-expanded', String(open));
  });
  els.navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => els.navLinks.classList.remove('open'));
  });

  els.rotateToggle.addEventListener('click', () => {
    appState.autoRotate = !appState.autoRotate;
    setText(els.rotateToggle, appState.autoRotate ? content[appState.lang].pauseRotate : content[appState.lang].playRotate);
  });

  els.rotationRange.addEventListener('input', (e) => {
    appState.modelAngle = Number(e.target.value);
  });

  els.specTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      appState.specTab = tab.dataset.tab;
      els.specTabs.forEach((button) => {
        button.classList.toggle('active', button === tab);
        button.setAttribute('aria-selected', String(button === tab));
      });
      renderSpecTable();
    });
  });

  els.flashParts.addEventListener('click', () => {
    els.diagram.classList.add('flash');
    setTimeout(() => els.diagram.classList.remove('flash'), 700);
  });

  els.offerRange.value = String(appState.offerAmount);
  els.offerRange.addEventListener('input', (e) => {
    appState.offerAmount = Number(e.target.value);
    localStorage.setItem('newHiraOffer', String(appState.offerAmount));
    updateOfferDisplay();
  });

  els.applyOfferBtn.addEventListener('click', () => {
    els.offerInput.value = formatCurrency(appState.offerAmount);
    els.offerInput.focus();
  });

  els.skipIntro.addEventListener('click', hideIntro);
}

function updateOfferDisplay() {
  const text = formatCurrency(appState.offerAmount);
  els.offerAmountDisplay.textContent = text;
  els.offerInput.value = text;
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupCanvases() {
  [els.introCanvas, els.heroCanvas, els.modelCanvas].forEach((canvas) => {
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(300, Math.floor(rect.width * dpr));
    canvas.height = Math.max(180, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  });
}

function drawCombineSide(ctx, x, y, scale, wheelSpin = 0, glow = false) {
  const bodyW = 190 * scale;
  const bodyH = 70 * scale;
  const cabinW = 72 * scale;
  const cabinH = 52 * scale;
  const orange = ctx.createLinearGradient(x, y, x + bodyW, y + bodyH);
  orange.addColorStop(0, '#f0a53a');
  orange.addColorStop(1, '#ff6b1c');

  ctx.save();
  if (glow) {
    ctx.shadowColor = 'rgba(240,165,58,0.35)';
    ctx.shadowBlur = 30;
  }
  ctx.beginPath();
  ctx.moveTo(x + 26 * scale, y + bodyH);
  ctx.lineTo(x + 56 * scale, y + 18 * scale);
  ctx.lineTo(x + bodyW - 54 * scale, y + 18 * scale);
  ctx.lineTo(x + bodyW, y + bodyH - 10 * scale);
  ctx.lineTo(x + bodyW - 16 * scale, y + bodyH);
  ctx.closePath();
  ctx.fillStyle = orange;
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = '#d9ddd9';
  ctx.beginPath();
  ctx.moveTo(x + 62 * scale, y + 18 * scale);
  ctx.lineTo(x + 128 * scale, y + 18 * scale);
  ctx.lineTo(x + 144 * scale, y + 54 * scale);
  ctx.lineTo(x + 32 * scale, y + 54 * scale);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(18,24,31,0.75)';
  ctx.fillRect(x + 74 * scale, y + 24 * scale, cabinW, cabinH);

  ctx.fillStyle = 'rgba(255,255,255,0.12)';
  ctx.fillRect(x + 132 * scale, y + 24 * scale, 42 * scale, 34 * scale);
  ctx.fillRect(x + 178 * scale, y + 40 * scale, 40 * scale, 24 * scale);

  ctx.save();
  ctx.translate(x - 2 * scale, y + bodyH - 6 * scale);
  ctx.beginPath();
  ctx.moveTo(-42 * scale, 16 * scale);
  ctx.lineTo(18 * scale, -8 * scale);
  ctx.lineTo(40 * scale, 6 * scale);
  ctx.lineTo(-10 * scale, 28 * scale);
  ctx.closePath();
  ctx.fillStyle = '#ec8a2e';
  ctx.fill();
  ctx.fillStyle = 'rgba(235,235,235,0.18)';
  ctx.fillRect(-48 * scale, 14 * scale, 70 * scale, 10 * scale);
  ctx.restore();

  ctx.strokeStyle = 'rgba(255,255,255,0.28)';
  ctx.lineWidth = 5 * scale;
  ctx.beginPath();
  ctx.moveTo(x + bodyW - 6 * scale, y + 48 * scale);
  ctx.quadraticCurveTo(x + bodyW + 42 * scale, y + 40 * scale, x + bodyW + 78 * scale, y + 72 * scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + bodyW + 14 * scale, y + 50 * scale);
  ctx.lineTo(x + bodyW + 80 * scale, y + 72 * scale);
  ctx.stroke();

  drawWheel(ctx, x + 56 * scale, y + bodyH + 10 * scale, 28 * scale, wheelSpin);
  drawWheel(ctx, x + bodyW - 44 * scale, y + bodyH + 10 * scale, 20 * scale, wheelSpin);
}

function drawWheel(ctx, cx, cy, r, spin) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = 'rgba(12,14,18,0.95)';
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = Math.max(2, r * 0.14);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.stroke();
  ctx.rotate(spin);
  ctx.strokeStyle = 'rgba(255,255,255,0.30)';
  ctx.lineWidth = Math.max(1.4, r * 0.08);
  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(r * 0.72, 0);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255,255,255,0.20)';
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function animateIntro() {
  const ctx = els.introCanvas.getContext('2d');
  const start = performance.now();
  let stopped = false;

  function frame(now) {
    if (stopped) return;
    const elapsed = now - start;
    const progress = Math.min(elapsed / 3200, 1);
    const w = els.introCanvas.clientWidth;
    const h = els.introCanvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#090b10');
    sky.addColorStop(0.45, '#10161d');
    sky.addColorStop(1, '#25160d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    const sunX = w * 0.75;
    const sunY = h * 0.28;
    const sunRadius = 90 + progress * 15;
    const glow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, sunRadius * 2.4);
    glow.addColorStop(0, 'rgba(255,196,106,0.9)');
    glow.addColorStop(0.35, 'rgba(255,134,56,0.40)');
    glow.addColorStop(1, 'rgba(255,134,56,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunRadius * 2.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1f2316';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.76);
    for (let i = 0; i <= 10; i++) {
      const px = (i / 10) * w;
      const py = h * 0.72 + Math.sin(i * 0.65 + progress * 5) * 18;
      ctx.lineTo(px, py);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,201,135,0.16)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
      ctx.beginPath();
      ctx.moveTo((i / 16) * w, h * 0.76);
      ctx.lineTo(w / 2, h);
      ctx.stroke();
    }

    const machineX = -220 + progress * (w * 0.72);
    const machineY = h * 0.64;
    drawCombineSide(ctx, machineX, machineY, Math.max(0.85, w / 1280), progress * 10, true);

    if (progress < 1) requestAnimationFrame(frame);
    else setTimeout(hideIntro, 350);
  }

  requestAnimationFrame(frame);
  return () => { stopped = true; };
}

function hideIntro() {
  if (!els.introOverlay) return;
  els.introOverlay.classList.add('hidden');
  els.introOverlay.style.opacity = '0';
  els.introOverlay.style.visibility = 'hidden';
  els.introOverlay.style.pointerEvents = 'none';
  els.introOverlay.setAttribute('aria-hidden', 'true');
}

// Safety net for slow mobile browsers: close intro even if canvas animation stalls.
setTimeout(hideIntro, 5500);

function animateHero() {
  const ctx = els.heroCanvas.getContext('2d');
  function loop(now) {
    const w = els.heroCanvas.clientWidth;
    const h = els.heroCanvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#11161d');
    bg.addColorStop(0.55, '#0b0f14');
    bg.addColorStop(1, '#0a0d12');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const glow = ctx.createRadialGradient(w * 0.72, h * 0.24, 20, w * 0.72, h * 0.24, w * 0.28);
    glow.addColorStop(0, 'rgba(255,177,94,0.52)');
    glow.addColorStop(0.35, 'rgba(255,107,28,0.18)');
    glow.addColorStop(1, 'rgba(255,107,28,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(245,165,58,0.16)';
    ctx.fillRect(0, h * 0.7, w, h * 0.3);
    ctx.fillStyle = 'rgba(0,0,0,0.14)';
    for (let i = 0; i < 22; i++) {
      const x = (i / 21) * w;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.68);
      ctx.lineTo(w * 0.55, h);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const bob = Math.sin(now * 0.0014) * 5;
    drawCombineSide(ctx, w * 0.18, h * 0.44 + bob, Math.min(w / 620, 1.12), now * 0.006);

    ctx.fillStyle = 'rgba(255,255,255,0.10)';
    ctx.font = '600 14px Inter';
    ctx.fillText('NEW HIRA 985', w * 0.07, h * 0.12);
    ctx.font = '800 36px Manrope';
    ctx.fillStyle = 'rgba(255,255,255,0.94)';
    ctx.fillText('FIELD-READY', w * 0.07, h * 0.19);
    ctx.fillStyle = 'rgba(255,255,255,0.58)';
    ctx.font = '500 14px Inter';
    ctx.fillText('Animated combine harvester showcase', w * 0.07, h * 0.235);

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

function shadeColor(color, amount) {
  const usePound = color[0] === '#';
  const col = usePound ? color.slice(1) : color;
  const num = parseInt(col, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  return `${usePound ? '#' : ''}${(b | (g << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
}

function drawPrism(ctx, x, y, w, h, depth, angleDeg, fill) {
  const rad = angleDeg * Math.PI / 180;
  const dx = Math.cos(rad) * depth;
  const dy = Math.sin(rad) * depth * 0.42;
  const front = [{x, y}, {x + w, y}, {x + w, y + h}, {x, y + h}];
  const back = front.map((p) => ({ x: p.x + dx, y: p.y - dy }));

  const sideIsRight = dx >= 0;
  const side = sideIsRight ? [front[1], back[1], back[2], front[2]] : [front[0], back[0], back[3], front[3]];
  const top = [front[0], front[1], back[1], back[0]];

  ctx.fillStyle = fill;
  drawPolygon(ctx, front);
  ctx.fillStyle = shadeColor(fill, 28);
  drawPolygon(ctx, top);
  ctx.fillStyle = shadeColor(fill, -28);
  drawPolygon(ctx, side);
}

function drawPolygon(ctx, points) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
  ctx.closePath();
  ctx.fill();
}

function animateModel() {
  const ctx = els.modelCanvas.getContext('2d');
  function loop() {
    if (appState.autoRotate) {
      appState.modelAngle = (appState.modelAngle + 0.35) % 360;
      els.rotationRange.value = String(Math.round(appState.modelAngle));
    }

    const w = els.modelCanvas.clientWidth;
    const h = els.modelCanvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#0f1319');
    bg.addColorStop(1, '#090c11');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const halo = ctx.createRadialGradient(w * 0.5, h * 0.2, 30, w * 0.5, h * 0.2, w * 0.3);
    halo.addColorStop(0, 'rgba(255,165,58,0.26)');
    halo.addColorStop(1, 'rgba(255,165,58,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(w * 0.12, h * 0.80, w * 0.74, 8);

    const cx = w * 0.48;
    const baseY = h * 0.40;
    const s = Math.min(w / 900, 1);
    const angle = appState.modelAngle;

    drawPrism(ctx, cx - 150 * s, baseY, 260 * s, 92 * s, 60 * s, angle, '#f0a53a');
    drawPrism(ctx, cx - 95 * s, baseY - 74 * s, 108 * s, 70 * s, 42 * s, angle, '#d7ddda');
    drawPrism(ctx, cx + 20 * s, baseY - 46 * s, 88 * s, 56 * s, 32 * s, angle, '#8f989a');
    drawPrism(ctx, cx + 110 * s, baseY - 24 * s, 100 * s, 40 * s, 30 * s, angle, '#6c7277');
    drawPrism(ctx, cx - 250 * s, baseY + 30 * s, 120 * s, 18 * s, 36 * s, angle, '#e79433');

    ctx.strokeStyle = 'rgba(255,255,255,0.45)';
    ctx.lineWidth = 6 * s;
    const rad = angle * Math.PI / 180;
    const dx = Math.cos(rad) * 90 * s;
    const dy = Math.sin(rad) * 90 * s * 0.42;
    ctx.beginPath();
    ctx.moveTo(cx + 150 * s, baseY - 2 * s);
    ctx.quadraticCurveTo(cx + 210 * s + dx * 0.1, baseY - 22 * s - dy * 0.1, cx + 260 * s + dx * 0.16, baseY + 24 * s - dy * 0.16);
    ctx.stroke();

    drawWheel(ctx, cx - 68 * s, baseY + 112 * s, 42 * s, 0.2);
    drawWheel(ctx, cx + 124 * s, baseY + 108 * s, 28 * s, 0.2);

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

async function initFirebase() {
  if (!enableFirebase) return;
  try {
    const [{ initializeApp }, { getFirestore, collection, addDoc, serverTimestamp }] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);

    const app = initializeApp(firebaseConfig);
    appState.firestore = getFirestore(app);
    appState.collection = collection;
    appState.addDoc = addDoc;
    appState.serverTimestamp = serverTimestamp;
  } catch (error) {
    console.error('Firebase init error:', error);
  }
}

async function submitEnquiry(event) {
  event.preventDefault();
  const t = content[appState.lang];
  const form = event.currentTarget;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.offer = els.offerInput.value;
  payload.createdAt = new Date().toISOString();
  payload.language = appState.lang;

  els.formStatus.className = 'form-status';
  setText(els.formStatus, t.statusSubmitting);

  try {
    if (appState.firestore && appState.addDoc && appState.collection) {
      await appState.addDoc(appState.collection(appState.firestore, leadsCollectionName), {
        ...payload,
        createdAt: appState.serverTimestamp ? appState.serverTimestamp() : new Date()
      });
      els.formStatus.classList.add('success');
      setText(els.formStatus, t.statusSuccess);
    } else {
      const existing = JSON.parse(localStorage.getItem('newHiraLocalEnquiries') || '[]');
      existing.push(payload);
      localStorage.setItem('newHiraLocalEnquiries', JSON.stringify(existing));
      els.formStatus.classList.add('success');
      setText(els.formStatus, t.statusLocal);
    }
    form.reset();
    renderFormOptions();
  } catch (error) {
    console.error(error);
    els.formStatus.classList.add('error');
    setText(els.formStatus, t.statusError);
  }
}

function initForm() {
  els.enquiryForm.addEventListener('submit', submitEnquiry);
  updateOfferDisplay();
}

function init() {
  bindInteractions();
  setupReveal();
  setupCanvases();
  applyLanguage(appState.lang);
  initForm();
  animateHero();
  animateModel();
  animateIntro();
  initFirebase();
}

window.addEventListener('resize', setupCanvases);
window.addEventListener('DOMContentLoaded', init);
