import { enableFirebase, firebaseConfig, enquiriesCollection } from './firebase-config.js';

const en = {
  "skipToContent": "Skip to content",
  "announceText": "2025–26 campaign: AC combine enquiry, SMS option, 4×4 option and Nabha support.",
  "announceCall": "Call +91 92161 07700",
  "menu": "Menu",
  "navModels": "Models",
  "navFeatures": "Features",
  "navParts": "Parts",
  "navService": "Service",
  "navGallery": "Posters",
  "navContact": "Contact",
  "whatsapp": "WhatsApp",
  "heroEyebrow": "New Hira Crop Challengers • Nabha",
  "heroTitle": "New Hira 985 AC Combine Harvester",
  "heroLead": "A professional digital showroom for a high performance combine built for paddy, wheat, maize and demanding Indian field conditions.",
  "badgeAC": "AC cabin",
  "badgeBSIV": "BS IV engine",
  "badgeCamera": "LED screen & camera",
  "badgeParts": "Parts support",
  "bookEnquiry": "Book enquiry",
  "openParts": "Search parts",
  "shareSite": "Share website",
  "metricPrice": "₹28,00,000*",
  "metricPriceLabel": "poster starting price",
  "metricWarranty": "1 season / 500 hr",
  "metricWarrantyLabel": "warranty guideline",
  "metricOffer": "₹50,000",
  "metricOfferLabel": "referral reward campaign",
  "floatingTitle": "Field ready",
  "floatingText": "High output • Low grain loss • Strong build",
  "trust1Title": "High performance",
  "trust1Text": "More output and better productivity.",
  "trust2Title": "High saving",
  "trust2Text": "Lower operating cost focus.",
  "trust3Title": "Reliable build",
  "trust3Text": "Made tough for Indian fields.",
  "trust4Title": "Better tomorrow",
  "trust4Text": "Smarter harvesting technology.",
  "companyEyebrow": "Company profile",
  "companyTitle": "A serious combine harvester brand presentation for farmers and dealers.",
  "companyText": "New Hira Crop Challengers is presented here as a professional machinery website with product information, campaign posters, price guidance, parts search, service support and direct enquiry collection.",
  "miniNabha": "Nabha based support",
  "miniFarmer": "Farmer-first enquiry flow",
  "miniDigital": "Digital poster gallery",
  "modelsEyebrow": "Model showcase",
  "modelsTitle": "New Hira 985 Combine Harvester",
  "modelsLead": "Focused specification blocks for buyers who want quick clarity before calling or visiting.",
  "modelPill": "Grain crop cutting harvester",
  "modelTitle": "Built for paddy, wheat, maize and major crops.",
  "modelText": "The website positions the machine around performance, operator comfort, field reliability and practical service support.",
  "specEngine": "Engine",
  "specEngineValue": "BS IV engine",
  "specComfort": "Comfort",
  "specComfortValue": "AC cabin + seat",
  "specSmart": "Smart view",
  "specSmartValue": "LED screen + camera",
  "specCrop": "Crop use",
  "specCropValue": "Paddy / wheat / maize",
  "configurePrice": "Configure price",
  "viewPosters": "View posters",
  "featuresEyebrow": "Core features",
  "featuresTitle": "Premium comfort. Maximum performance.",
  "feature1Title": "Spacious AC cabin",
  "feature1Text": "Comfort-focused cabin for long harvesting hours and better operator focus.",
  "feature2Title": "Comfortable operator seat",
  "feature2Text": "A better seating experience for daily field work and reduced fatigue.",
  "feature3Title": "LED screen & back camera",
  "feature3Text": "Designed for improved visibility, safer operation and smarter farming.",
  "feature4Title": "Low grain loss",
  "feature4Text": "Clear advertising focus on harvest output, grain care and crop productivity.",
  "feature5Title": "Low maintenance",
  "feature5Text": "Service-friendly presentation with direct parts search and support calls.",
  "feature6Title": "Reliable build quality",
  "feature6Text": "Strong build message for Indian fields, tough seasons and long working life.",
  "quoteEyebrow": "Price & options",
  "quoteTitle": "Quick quotation builder for sales calls.",
  "quoteText": "Use this as an indicative website calculator. Final ex-factory price, taxes, transport, availability and finance should be confirmed by New Hira.",
  "quotePoint1": "Base poster price: ₹28,00,000",
  "quotePoint2": "SMS option: ₹1,30,000",
  "quotePoint3": "4×4 hissa complete: ₹3,00,000 extra",
  "baseMachine": "Base machine",
  "smsOption": "Add SMS option",
  "fourOption": "Add 4×4 hissa complete",
  "estimatedTotal": "Estimated total",
  "sendQuoteWhatsapp": "Send selected quote on WhatsApp",
  "partsEyebrow": "Spare parts catalogue",
  "partsTitle": "Search common harvester parts in seconds.",
  "partsText": "A professional buyer journey needs more than posters. This searchable catalogue helps farmers ask for exact items.",
  "openPartsCatalogue": "Open parts catalogue",
  "requestPart": "Request a part",
  "serviceEyebrow": "Service & ownership",
  "serviceTitle": "Everything a harvester website should make easy.",
  "service1Title": "Enquiry and model guidance",
  "service1Text": "Farmers can contact directly by phone, WhatsApp or website form.",
  "service2Title": "Parts and maintenance support",
  "service2Text": "Search tools, bearings, cutter items, chains, seals and common service parts.",
  "service3Title": "Warranty guideline",
  "service3Text": "Warranty / guarantee information shown as 1 season or 500 working hours, whichever is earlier.",
  "service4Title": "Referral campaign",
  "service4Text": "Share New Hira and ask about approved referral rewards after completed booking.",
  "galleryEyebrow": "Posters & media",
  "galleryTitle": "Your advertising posters are built into the website.",
  "galleryLead": "English, Hindi and Punjabi poster versions are included with a clean gallery and zoom viewer.",
  "posterEnglish": "English poster",
  "posterHindi": "Hindi poster",
  "posterPunjabi": "Punjabi poster",
  "poster985": "New Hira 985 poster",
  "posterCustom": "Custom website poster",
  "whyEyebrow": "Why choose New Hira",
  "whyTitle": "A buyer-friendly layout that answers real questions.",
  "why1Title": "For farmers",
  "why1Text": "Clear crop use, comfort, support, price options and contact actions.",
  "why2Title": "For dealers",
  "why2Text": "Poster gallery, shareable website, enquiry capture and product highlights.",
  "why3Title": "For service",
  "why3Text": "Parts search and maintenance enquiry flow reduce confusion.",
  "faqEyebrow": "FAQ",
  "faqTitle": "Questions farmers ask before booking.",
  "faq1Q": "Which crops can the New Hira combine harvest?",
  "faq1A": "The advertising material highlights maize, wheat, paddy and all major crops. Confirm exact configuration for your crop and region before final booking.",
  "faq2Q": "Is the price final?",
  "faq2A": "The displayed price is an advertising reference. Final quotation depends on options, taxes, transport, finance and current availability.",
  "faq3Q": "How do I request spare parts?",
  "faq3A": "Open the parts catalogue, search the part name and submit a message through the contact form or WhatsApp.",
  "faq4Q": "What is the warranty guideline?",
  "faq4A": "The website shows 1 season or 500 working hours, whichever comes earlier. Ask New Hira for the official written policy and exclusions.",
  "contactEyebrow": "Contact New Hira",
  "contactTitle": "Book a combine, ask for parts, or request service.",
  "mobileLabel": "Mobile / WhatsApp",
  "landlineLabel": "Landline",
  "emailLabel": "Email",
  "locationLabel": "Location",
  "locationValue": "Nabha, Punjab",
  "whatsappNow": "WhatsApp now",
  "callNow": "Call now",
  "formEyebrow": "Fast enquiry",
  "formTitle": "Send your requirement",
  "nameLabel": "Name",
  "namePlaceholder": "Your name",
  "phoneLabel": "Phone",
  "districtLabel": "District / city",
  "districtPlaceholder": "Your district",
  "requirementLabel": "Requirement",
  "messageLabel": "Message",
  "messagePlaceholder": "Tell us what you need",
  "submitEnquiry": "Submit enquiry",
  "sendOnWhatsapp": "Send on WhatsApp",
  "formNote": "Your enquiry can be saved to Firebase if configured. Otherwise it is stored locally for testing and can be sent by WhatsApp.",
  "footerText": "Professional combine harvester showroom website with multilingual content, posters, parts, service and enquiries.",
  "footerQuick": "Quick links",
  "footerPrice": "Price options",
  "footerContact": "Contact",
  "printPage": "Print / save brochure",
  "enquire": "Enquire",
  "dialogEyebrow": "New Hira spare parts",
  "dialogTitle": "Parts catalogue",
  "searchPartsLabel": "Search parts",
  "partsSearchPlaceholder": "Search bearing, blade, shaft, grease gun...",
  "downloadPoster": "Download poster",
  "reqCombine": "Combine booking",
  "reqService": "Service support",
  "reqParts": "Spare parts",
  "reqPrice": "Price / finance",
  "reqReferral": "Referral offer",
  "partSmall": "New Hira listed spare part / toolkit item",
  "partsFound": "parts found",
  "submitting": "Submitting...",
  "success": "Enquiry submitted. New Hira will contact you soon.",
  "localSuccess": "Saved locally for testing. Use WhatsApp to send it directly to New Hira.",
  "whatsappPrepared": "WhatsApp message prepared.",
  "error": "Something went wrong. Please call or WhatsApp New Hira.",
  "copied": "Website link copied",
  "quoteMessage": "I want a quotation for New Hira 985",
  "leadMessage": "New Hira website enquiry",
  "selectedOptions": "Selected options",
  "total": "Total"
};
const translations = {
  en,
  hi: { ...en, ...{
  "skipToContent": "सामग्री पर जाएँ",
  "announceText": "2025–26 अभियान: AC कंबाइन पूछताछ, SMS विकल्प, 4×4 विकल्प और नाभा सपोर्ट।",
  "announceCall": "कॉल करें +91 92161 07700",
  "menu": "मेन्यू",
  "navModels": "मॉडल",
  "navFeatures": "फीचर्स",
  "navParts": "पार्ट्स",
  "navService": "सर्विस",
  "navGallery": "पोस्टर",
  "navContact": "संपर्क",
  "heroEyebrow": "न्यू हीरा क्रॉप चैलेंजर्स • नाभा",
  "heroTitle": "न्यू हीरा 985 AC कंबाइन हार्वेस्टर",
  "heroLead": "धान, गेहूँ, मक्का और भारतीय खेतों की कठिन परिस्थितियों के लिए बनाया गया प्रोफेशनल डिजिटल शोरूम।",
  "badgeAC": "AC केबिन",
  "badgeBSIV": "BS IV इंजन",
  "badgeCamera": "LED स्क्रीन और कैमरा",
  "badgeParts": "पार्ट्स सपोर्ट",
  "bookEnquiry": "पूछताछ बुक करें",
  "openParts": "पार्ट्स खोजें",
  "shareSite": "वेबसाइट शेयर करें",
  "metricPriceLabel": "पोस्टर शुरुआती कीमत",
  "metricWarrantyLabel": "वारंटी गाइडलाइन",
  "metricOfferLabel": "रेफरल इनाम अभियान",
  "floatingTitle": "फील्ड तैयार",
  "floatingText": "हाई आउटपुट • कम दाना नुकसान • मजबूत निर्माण",
  "trust1Title": "हाई परफॉर्मेंस",
  "trust1Text": "अधिक आउटपुट और बेहतर उत्पादकता।",
  "trust2Title": "हाई सेविंग",
  "trust2Text": "कम संचालन खर्च पर फोकस।",
  "trust3Title": "भरोसेमंद निर्माण",
  "trust3Text": "भारतीय खेतों के लिए मजबूत।",
  "trust4Title": "बेहतर कल",
  "trust4Text": "स्मार्ट कटाई तकनीक।",
  "companyEyebrow": "कंपनी प्रोफाइल",
  "companyTitle": "किसानों और डीलरों के लिए गंभीर कंबाइन हार्वेस्टर ब्रांड प्रस्तुति।",
  "companyText": "न्यू हीरा क्रॉप चैलेंजर्स को यहाँ प्रोडक्ट जानकारी, अभियान पोस्टर, कीमत गाइड, पार्ट्स सर्च, सर्विस सपोर्ट और सीधी पूछताछ के साथ पेश किया गया है।",
  "miniNabha": "नाभा आधारित सपोर्ट",
  "miniFarmer": "किसान-प्रथम पूछताछ",
  "miniDigital": "डिजिटल पोस्टर गैलरी",
  "modelsEyebrow": "मॉडल शोकेस",
  "modelsTitle": "न्यू हीरा 985 कंबाइन हार्वेस्टर",
  "modelsLead": "खरीदारों के लिए जल्दी समझ आने वाले स्पेसिफिकेशन ब्लॉक।",
  "modelPill": "ग्रेन क्रॉप कटिंग हार्वेस्टर",
  "modelTitle": "धान, गेहूँ, मक्का और प्रमुख फसलों के लिए तैयार।",
  "modelText": "वेबसाइट मशीन को प्रदर्शन, आराम, खेत भरोसे और व्यावहारिक सर्विस सपोर्ट के साथ प्रस्तुत करती है।",
  "specEngine": "इंजन",
  "specEngineValue": "BS IV इंजन",
  "specComfort": "आराम",
  "specComfortValue": "AC केबिन + सीट",
  "specSmart": "स्मार्ट व्यू",
  "specSmartValue": "LED स्क्रीन + कैमरा",
  "specCrop": "फसल उपयोग",
  "specCropValue": "धान / गेहूँ / मक्का",
  "configurePrice": "कीमत देखें",
  "viewPosters": "पोस्टर देखें",
  "featuresEyebrow": "मुख्य फीचर्स",
  "featuresTitle": "प्रीमियम आराम। अधिकतम प्रदर्शन।",
  "feature1Title": "विशाल AC केबिन",
  "feature1Text": "लंबे कटाई घंटों और बेहतर ऑपरेटर फोकस के लिए आरामदायक केबिन।",
  "feature2Title": "आरामदायक ऑपरेटर सीट",
  "feature2Text": "रोज़ाना खेत कार्य के लिए बेहतर सीटिंग अनुभव।",
  "feature3Title": "LED स्क्रीन और बैक कैमरा",
  "feature3Text": "बेहतर दृश्यता, सुरक्षित संचालन और स्मार्ट फार्मिंग के लिए।",
  "feature4Title": "कम दाना नुकसान",
  "feature4Text": "कटाई आउटपुट, अनाज देखभाल और उत्पादकता पर स्पष्ट फोकस।",
  "feature5Title": "कम मेंटेनेंस",
  "feature5Text": "सीधे पार्ट्स सर्च और सपोर्ट कॉल के साथ सर्विस-फ्रेंडली प्रस्तुति।",
  "feature6Title": "भरोसेमंद बिल्ड क्वालिटी",
  "feature6Text": "भारतीय खेतों, कठिन सीज़न और लंबी उम्र के लिए मजबूत निर्माण।",
  "quoteEyebrow": "कीमत और विकल्प",
  "quoteTitle": "सेल्स कॉल के लिए क्विक कोटेशन बिल्डर।",
  "quoteText": "यह वेबसाइट कैलकुलेटर केवल संकेत के लिए है। अंतिम कीमत, टैक्स, ट्रांसपोर्ट और उपलब्धता न्यू हीरा से कन्फर्म करें।",
  "quotePoint1": "बेस पोस्टर कीमत: ₹28,00,000",
  "quotePoint2": "SMS विकल्प: ₹1,30,000",
  "quotePoint3": "4×4 हिस्सा कम्प्लीट: ₹3,00,000 अतिरिक्त",
  "baseMachine": "बेस मशीन",
  "smsOption": "SMS विकल्प जोड़ें",
  "fourOption": "4×4 हिस्सा कम्प्लीट जोड़ें",
  "estimatedTotal": "अनुमानित कुल",
  "sendQuoteWhatsapp": "चुना हुआ कोट WhatsApp करें",
  "partsEyebrow": "स्पेयर पार्ट्स कैटलॉग",
  "partsTitle": "सामान्य हार्वेस्टर पार्ट्स सेकंडों में खोजें।",
  "partsText": "यह सर्च कैटलॉग किसानों को सही पार्ट नाम से पूछताछ करने में मदद करता है।",
  "openPartsCatalogue": "पार्ट्स कैटलॉग खोलें",
  "requestPart": "पार्ट अनुरोध करें",
  "serviceEyebrow": "सर्विस और ओनरशिप",
  "serviceTitle": "हार्वेस्टर वेबसाइट में जरूरी सभी सुविधाएँ।",
  "service1Title": "पूछताछ और मॉडल गाइडेंस",
  "service1Text": "किसान फोन, WhatsApp या वेबसाइट फॉर्म से सीधे संपर्क कर सकते हैं।",
  "service2Title": "पार्ट्स और मेंटेनेंस सपोर्ट",
  "service2Text": "टूल्स, बेयरिंग, कटर आइटम, चेन, सील और सामान्य सर्विस पार्ट्स खोजें।",
  "service3Title": "वारंटी गाइडलाइन",
  "service3Text": "वारंटी / गारंटी: 1 सीज़न या 500 कार्य घंटे, जो पहले हो।",
  "service4Title": "रेफरल अभियान",
  "service4Text": "न्यू हीरा शेयर करें और पूरी बुकिंग पर स्वीकृत रेफरल इनाम के बारे में पूछें।",
  "galleryEyebrow": "पोस्टर और मीडिया",
  "galleryTitle": "आपके विज्ञापन पोस्टर वेबसाइट में जोड़े गए हैं।",
  "galleryLead": "English, Hindi और Punjabi पोस्टर साफ गैलरी और ज़ूम व्यूअर के साथ शामिल हैं।",
  "posterEnglish": "English poster",
  "posterHindi": "Hindi poster",
  "posterPunjabi": "Punjabi poster",
  "poster985": "New Hira 985 poster",
  "posterCustom": "Custom website poster",
  "whyEyebrow": "न्यू हीरा क्यों",
  "whyTitle": "खरीदार के असली सवालों का जवाब देने वाला लेआउट।",
  "why1Title": "किसानों के लिए",
  "why1Text": "फसल उपयोग, आराम, सपोर्ट, कीमत विकल्प और संपर्क स्पष्ट।",
  "why2Title": "डीलरों के लिए",
  "why2Text": "पोस्टर गैलरी, शेयर करने योग्य वेबसाइट, पूछताछ और प्रोडक्ट हाइलाइट।",
  "why3Title": "सर्विस के लिए",
  "why3Text": "पार्ट्स सर्च और मेंटेनेंस पूछताछ से भ्रम कम होता है।",
  "faqEyebrow": "FAQ",
  "faqTitle": "बुकिंग से पहले किसानों के सवाल।",
  "faq1Q": "न्यू हीरा कंबाइन कौन सी फसल काट सकती है?",
  "faq1A": "विज्ञापन सामग्री में मक्का, गेहूँ, धान और प्रमुख फसलें बताई गई हैं। अंतिम बुकिंग से पहले अपनी फसल और क्षेत्र के लिए कॉन्फ़िगरेशन कन्फर्म करें।",
  "faq2Q": "क्या कीमत अंतिम है?",
  "faq2A": "दिखाई गई कीमत विज्ञापन संदर्भ है। अंतिम कोटेशन विकल्प, टैक्स, ट्रांसपोर्ट, फाइनेंस और उपलब्धता पर निर्भर करता है।",
  "faq3Q": "स्पेयर पार्ट कैसे माँगें?",
  "faq3A": "पार्ट्स कैटलॉग खोलें, पार्ट नाम खोजें और फॉर्म या WhatsApp से मैसेज भेजें।",
  "faq4Q": "वारंटी गाइडलाइन क्या है?",
  "faq4A": "वेबसाइट 1 सीज़न या 500 कार्य घंटे दिखाती है। आधिकारिक लिखित पॉलिसी और exclusions न्यू हीरा से पूछें।",
  "contactEyebrow": "न्यू हीरा से संपर्क",
  "contactTitle": "कंबाइन बुक करें, पार्ट्स पूछें या सर्विस माँगें।",
  "mobileLabel": "मोबाइल / WhatsApp",
  "landlineLabel": "लैंडलाइन",
  "emailLabel": "ईमेल",
  "locationLabel": "लोकेशन",
  "locationValue": "नाभा, पंजाब",
  "whatsappNow": "अभी WhatsApp करें",
  "callNow": "अभी कॉल करें",
  "formEyebrow": "फास्ट पूछताछ",
  "formTitle": "अपनी जरूरत भेजें",
  "nameLabel": "नाम",
  "namePlaceholder": "आपका नाम",
  "phoneLabel": "फोन",
  "districtLabel": "जिला / शहर",
  "districtPlaceholder": "आपका जिला",
  "requirementLabel": "जरूरत",
  "messageLabel": "संदेश",
  "messagePlaceholder": "बताइए आपको क्या चाहिए",
  "submitEnquiry": "पूछताछ सबमिट करें",
  "sendOnWhatsapp": "WhatsApp पर भेजें",
  "formNote": "Firebase कॉन्फ़िगर होने पर पूछताछ सेव हो सकती है। वरना टेस्टिंग के लिए लोकल सेव होगी और WhatsApp से भेजी जा सकती है।",
  "footerText": "बहुभाषी कंटेंट, पोस्टर, पार्ट्स, सर्विस और पूछताछ वाला प्रोफेशनल कंबाइन हार्वेस्टर शोरूम।",
  "footerQuick": "क्विक लिंक",
  "footerPrice": "कीमत विकल्प",
  "footerContact": "संपर्क",
  "printPage": "प्रिंट / ब्रोशर सेव करें",
  "enquire": "पूछताछ",
  "dialogEyebrow": "न्यू हीरा स्पेयर पार्ट्स",
  "dialogTitle": "पार्ट्स कैटलॉग",
  "searchPartsLabel": "पार्ट्स खोजें",
  "partsSearchPlaceholder": "बेयरिंग, ब्लेड, शाफ्ट, ग्रीस गन खोजें...",
  "downloadPoster": "पोस्टर डाउनलोड करें",
  "reqCombine": "कंबाइन बुकिंग",
  "reqService": "सर्विस सपोर्ट",
  "reqParts": "स्पेयर पार्ट्स",
  "reqPrice": "कीमत / फाइनेंस",
  "reqReferral": "रेफरल ऑफर",
  "partSmall": "न्यू हीरा सूचीबद्ध स्पेयर पार्ट / टूलकिट आइटम",
  "partsFound": "पार्ट्स मिले",
  "submitting": "सबमिट हो रहा है...",
  "success": "पूछताछ सबमिट हुई। न्यू हीरा आपसे संपर्क करेगा।",
  "localSuccess": "टेस्टिंग के लिए लोकली सेव हुआ। सीधे भेजने के लिए WhatsApp इस्तेमाल करें।",
  "whatsappPrepared": "WhatsApp मैसेज तैयार है।",
  "error": "कुछ गलत हुआ। कृपया कॉल या WhatsApp करें।",
  "copied": "वेबसाइट लिंक कॉपी हो गया",
  "quoteMessage": "मुझे New Hira 985 का कोटेशन चाहिए",
  "leadMessage": "New Hira वेबसाइट पूछताछ",
  "selectedOptions": "चुने गए विकल्प",
  "total": "कुल"
} },
  pa: { ...en, ...{
  "skipToContent": "ਸਮੱਗਰੀ ਤੇ ਜਾਓ",
  "announceText": "2025–26 ਮੁਹਿੰਮ: AC ਕੰਬਾਈਨ ਪੁੱਛਗਿੱਛ, SMS ਵਿਕਲਪ, 4×4 ਵਿਕਲਪ ਅਤੇ ਨਾਭਾ ਸਪੋਰਟ।",
  "announceCall": "ਕਾਲ ਕਰੋ +91 92161 07700",
  "menu": "ਮੇਨੂ",
  "navModels": "ਮਾਡਲ",
  "navFeatures": "ਫੀਚਰ",
  "navParts": "ਪਾਰਟਸ",
  "navService": "ਸਰਵਿਸ",
  "navGallery": "ਪੋਸਟਰ",
  "navContact": "ਸੰਪਰਕ",
  "heroEyebrow": "ਨਿਊ ਹੀਰਾ ਕ੍ਰਾਪ ਚੈਲੰਜਰਜ਼ • ਨਾਭਾ",
  "heroTitle": "ਨਿਊ ਹੀਰਾ 985 AC ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ",
  "heroLead": "ਝੋਨਾ, ਕਣਕ, ਮੱਕੀ ਅਤੇ ਭਾਰਤੀ ਖੇਤਾਂ ਲਈ ਬਣਿਆ ਪ੍ਰੋਫੈਸ਼ਨਲ ਡਿਜ਼ੀਟਲ ਸ਼ੋਰੂਮ।",
  "badgeAC": "AC ਕੈਬਿਨ",
  "badgeBSIV": "BS IV ਇੰਜਨ",
  "badgeCamera": "LED ਸਕਰੀਨ ਅਤੇ ਕੈਮਰਾ",
  "badgeParts": "ਪਾਰਟਸ ਸਪੋਰਟ",
  "bookEnquiry": "ਪੁੱਛਗਿੱਛ ਬੁੱਕ ਕਰੋ",
  "openParts": "ਪਾਰਟਸ ਖੋਜੋ",
  "shareSite": "ਵੈਬਸਾਈਟ ਸ਼ੇਅਰ ਕਰੋ",
  "metricPriceLabel": "ਪੋਸਟਰ ਸ਼ੁਰੂਆਤੀ ਕੀਮਤ",
  "metricWarrantyLabel": "ਵਾਰੰਟੀ ਗਾਈਡਲਾਈਨ",
  "metricOfferLabel": "ਰੈਫਰਲ ਇਨਾਮ ਮੁਹਿੰਮ",
  "floatingTitle": "ਫੀਲਡ ਤਿਆਰ",
  "floatingText": "ਹਾਈ ਆਉਟਪੁੱਟ • ਘੱਟ ਦਾਣਾ ਨੁਕਸਾਨ • ਮਜ਼ਬੂਤ ਬਿਲਡ",
  "trust1Title": "ਹਾਈ ਪਰਫਾਰਮੈਂਸ",
  "trust1Text": "ਵੱਧ ਆਉਟਪੁੱਟ ਅਤੇ ਵਧੀਆ ਉਤਪਾਦਕਤਾ।",
  "trust2Title": "ਹਾਈ ਸੇਵਿੰਗ",
  "trust2Text": "ਘੱਟ ਚੱਲਣ ਵਾਲੇ ਖਰਚ ਤੇ ਫੋਕਸ।",
  "trust3Title": "ਭਰੋਸੇਮੰਦ ਬਿਲਡ",
  "trust3Text": "ਭਾਰਤੀ ਖੇਤਾਂ ਲਈ ਮਜ਼ਬੂਤ।",
  "trust4Title": "ਵਧੀਆ ਕੱਲ੍ਹ",
  "trust4Text": "ਸਮਾਰਟ ਕਟਾਈ ਤਕਨੀਕ।",
  "companyEyebrow": "ਕੰਪਨੀ ਪ੍ਰੋਫਾਈਲ",
  "companyTitle": "ਕਿਸਾਨਾਂ ਅਤੇ ਡੀਲਰਾਂ ਲਈ ਗੰਭੀਰ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਬ੍ਰਾਂਡ ਪ੍ਰਸਤੁਤੀ।",
  "companyText": "ਨਿਊ ਹੀਰਾ ਕ੍ਰਾਪ ਚੈਲੰਜਰਜ਼ ਨੂੰ ਇੱਥੇ ਪ੍ਰੋਡਕਟ ਜਾਣਕਾਰੀ, ਪੋਸਟਰ, ਕੀਮਤ ਗਾਈਡ, ਪਾਰਟਸ ਸਰਚ, ਸਰਵਿਸ ਸਪੋਰਟ ਅਤੇ ਸਿੱਧੀ ਪੁੱਛਗਿੱਛ ਨਾਲ ਪੇਸ਼ ਕੀਤਾ ਗਿਆ ਹੈ।",
  "miniNabha": "ਨਾਭਾ ਅਧਾਰਿਤ ਸਪੋਰਟ",
  "miniFarmer": "ਕਿਸਾਨ-ਪਹਿਲਾਂ ਪੁੱਛਗਿੱਛ",
  "miniDigital": "ਡਿਜ਼ੀਟਲ ਪੋਸਟਰ ਗੈਲਰੀ",
  "modelsEyebrow": "ਮਾਡਲ ਸ਼ੋਕੇਸ",
  "modelsTitle": "ਨਿਊ ਹੀਰਾ 985 ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ",
  "modelsLead": "ਖਰੀਦਦਾਰਾਂ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਸਮਝ ਆਉਣ ਵਾਲੇ ਸਪੈਸੀਫਿਕੇਸ਼ਨ ਬਲਾਕ।",
  "modelPill": "ਗ੍ਰੇਨ ਕ੍ਰਾਪ ਕਟਿੰਗ ਹਾਰਵੇਸਟਰ",
  "modelTitle": "ਝੋਨਾ, ਕਣਕ, ਮੱਕੀ ਅਤੇ ਮੁੱਖ ਫਸਲਾਂ ਲਈ ਤਿਆਰ।",
  "modelText": "ਵੈਬਸਾਈਟ ਮਸ਼ੀਨ ਨੂੰ ਪਰਫਾਰਮੈਂਸ, ਆਰਾਮ, ਫੀਲਡ ਭਰੋਸੇ ਅਤੇ ਸਰਵਿਸ ਸਪੋਰਟ ਨਾਲ ਪੇਸ਼ ਕਰਦੀ ਹੈ।",
  "specEngine": "ਇੰਜਨ",
  "specEngineValue": "BS IV ਇੰਜਨ",
  "specComfort": "ਆਰਾਮ",
  "specComfortValue": "AC ਕੈਬਿਨ + ਸੀਟ",
  "specSmart": "ਸਮਾਰਟ ਵਿਊ",
  "specSmartValue": "LED ਸਕਰੀਨ + ਕੈਮਰਾ",
  "specCrop": "ਫਸਲ ਵਰਤੋਂ",
  "specCropValue": "ਝੋਨਾ / ਕਣਕ / ਮੱਕੀ",
  "configurePrice": "ਕੀਮਤ ਬਣਾਓ",
  "viewPosters": "ਪੋਸਟਰ ਵੇਖੋ",
  "featuresEyebrow": "ਮੁੱਖ ਫੀਚਰ",
  "featuresTitle": "ਪ੍ਰੀਮੀਅਮ ਆਰਾਮ। ਵੱਧ ਤੋਂ ਵੱਧ ਪਰਫਾਰਮੈਂਸ।",
  "feature1Title": "ਵਿਸ਼ਾਲ AC ਕੈਬਿਨ",
  "feature1Text": "ਲੰਮੇ ਕੰਮ ਦੇ ਘੰਟਿਆਂ ਅਤੇ ਵਧੀਆ ਓਪਰੇਟਰ ਫੋਕਸ ਲਈ ਆਰਾਮਦਾਇਕ ਕੈਬਿਨ।",
  "feature2Title": "ਆਰਾਮਦਾਇਕ ਓਪਰੇਟਰ ਸੀਟ",
  "feature2Text": "ਰੋਜ਼ਾਨਾ ਖੇਤ ਕੰਮ ਲਈ ਵਧੀਆ ਸੀਟਿੰਗ ਅਨੁਭਵ।",
  "feature3Title": "LED ਸਕਰੀਨ ਅਤੇ ਬੈਕ ਕੈਮਰਾ",
  "feature3Text": "ਵਧੀਆ ਵਿਜ਼ਿਬਿਲਿਟੀ, ਸੁਰੱਖਿਅਤ ਓਪਰੇਸ਼ਨ ਅਤੇ ਸਮਾਰਟ ਫਾਰਮਿੰਗ ਲਈ।",
  "feature4Title": "ਘੱਟ ਦਾਣਾ ਨੁਕਸਾਨ",
  "feature4Text": "ਕਟਾਈ ਆਉਟਪੁੱਟ, ਅਨਾਜ ਦੇਖਭਾਲ ਅਤੇ ਉਤਪਾਦਕਤਾ ਤੇ ਫੋਕਸ।",
  "feature5Title": "ਘੱਟ ਮੇਂਟੇਨੈਂਸ",
  "feature5Text": "ਸਿੱਧੇ ਪਾਰਟਸ ਸર્ચ ਅਤੇ ਸਪੋਰਟ ਕਾਲ ਨਾਲ ਸਰਵਿਸ-ਫ੍ਰੈਂਡਲੀ ਪ੍ਰਸਤੁਤੀ।",
  "feature6Title": "ਭਰੋਸੇਮੰਦ ਬਿਲਡ ਕੁਆਲਟੀ",
  "feature6Text": "ਭਾਰਤੀ ਖੇਤਾਂ, ਔਖੇ ਸੀਜ਼ਨ ਅਤੇ ਲੰਮੀ ਉਮਰ ਲਈ ਮਜ਼ਬੂਤ ਬਿਲਡ।",
  "quoteEyebrow": "ਕੀਮਤ ਅਤੇ ਵਿਕਲਪ",
  "quoteTitle": "ਸੇਲਜ਼ ਕਾਲ ਲਈ ਕਵਿਕ ਕੋਟੇਸ਼ਨ ਬਿਲਡਰ।",
  "quoteText": "ਇਹ ਕੈਲਕੁਲੇਟਰ ਸਿਰਫ਼ ਅੰਦਾਜ਼ੇ ਲਈ ਹੈ। ਅੰਤਿਮ ਕੀਮਤ, ਟੈਕਸ, ਟਰਾਂਸਪੋਰਟ ਅਤੇ ਉਪਲਬਧਤਾ ਨਿਊ ਹੀਰਾ ਤੋਂ ਕਨਫਰਮ ਕਰੋ।",
  "quotePoint1": "ਬੇਸ ਪੋਸਟਰ ਕੀਮਤ: ₹28,00,000",
  "quotePoint2": "SMS ਵਿਕਲਪ: ₹1,30,000",
  "quotePoint3": "4×4 ਹਿੱਸਾ ਕੰਪਲੀਟ: ₹3,00,000 ਵਾਧੂ",
  "baseMachine": "ਬੇਸ ਮਸ਼ੀਨ",
  "smsOption": "SMS ਵਿਕਲਪ ਜੋੜੋ",
  "fourOption": "4×4 ਹਿੱਸਾ ਕੰਪਲੀਟ ਜੋੜੋ",
  "estimatedTotal": "ਅੰਦਾਜ਼ਾ ਕੁੱਲ",
  "sendQuoteWhatsapp": "ਚੁਣਿਆ ਕੋਟ WhatsApp ਕਰੋ",
  "partsEyebrow": "ਸਪੇਅਰ ਪਾਰਟਸ ਕੈਟਾਲਾਗ",
  "partsTitle": "ਆਮ ਹਾਰਵੇਸਟਰ ਪਾਰਟਸ ਸੈਕਿੰਡਾਂ ਵਿੱਚ ਖੋਜੋ।",
  "partsText": "ਇਹ ਸર્ચ ਕੈਟਾਲਾਗ ਕਿਸਾਨਾਂ ਨੂੰ ਸਹੀ ਪਾਰਟ ਨਾਂ ਨਾਲ ਪੁੱਛਗਿੱਛ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "openPartsCatalogue": "ਪਾਰਟਸ ਕੈਟਾਲਾਗ ਖੋਲ੍ਹੋ",
  "requestPart": "ਪਾਰਟ ਮੰਗੋ",
  "serviceEyebrow": "ਸਰਵਿਸ ਅਤੇ ਓਨਰਸ਼ਿਪ",
  "serviceTitle": "ਹਾਰਵੇਸਟਰ ਵੈਬਸਾਈਟ ਵਿੱਚ ਲੋੜੀਂਦੀਆਂ ਸਭ ਸੁਵਿਧਾਵਾਂ।",
  "service1Title": "ਪੁੱਛਗਿੱਛ ਅਤੇ ਮਾਡਲ ਗਾਈਡੈਂਸ",
  "service1Text": "ਕਿਸਾਨ ਫੋਨ, WhatsApp ਜਾਂ ਫਾਰਮ ਰਾਹੀਂ ਸਿੱਧਾ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹਨ।",
  "service2Title": "ਪਾਰਟਸ ਅਤੇ ਮੇਂਟੇਨੈਂਸ ਸਪੋਰਟ",
  "service2Text": "ਟੂਲ, ਬੇਅਰਿੰਗ, ਕਟਰ ਆਈਟਮ, ਚੇਨ, ਸੀਲ ਅਤੇ ਆਮ ਸਰਵਿਸ ਪਾਰਟਸ ਖੋਜੋ।",
  "service3Title": "ਵਾਰੰਟੀ ਗਾਈਡਲਾਈਨ",
  "service3Text": "ਵਾਰੰਟੀ / ਗਾਰੰਟੀ: 1 ਸੀਜ਼ਨ ਜਾਂ 500 ਕੰਮ ਘੰਟੇ, ਜੋ ਪਹਿਲਾਂ ਹੋਵੇ।",
  "service4Title": "ਰੈਫਰਲ ਮੁਹਿੰਮ",
  "service4Text": "ਨਿਊ ਹੀਰਾ ਸ਼ੇਅਰ ਕਰੋ ਅਤੇ ਪੂਰੀ ਬੁਕਿੰਗ ਤੇ ਮਨਜ਼ੂਰ ਰੈਫਰਲ ਇਨਾਮ ਬਾਰੇ ਪੁੱਛੋ।",
  "galleryEyebrow": "ਪੋਸਟਰ ਅਤੇ ਮੀਡੀਆ",
  "galleryTitle": "ਤੁਹਾਡੇ ਇਸ਼ਤਿਹਾਰ ਪੋਸਟਰ ਵੈਬਸਾਈਟ ਵਿੱਚ ਜੋੜੇ ਗਏ ਹਨ।",
  "galleryLead": "English, Hindi ਅਤੇ Punjabi ਪੋਸਟਰ ਸਾਫ਼ ਗੈਲਰੀ ਅਤੇ ਜ਼ੂਮ ਵਿਊਅਰ ਨਾਲ ਸ਼ਾਮਲ ਹਨ।",
  "whyEyebrow": "ਨਿਊ ਹੀਰਾ ਕਿਉਂ",
  "whyTitle": "ਖਰੀਦਦਾਰ ਦੇ ਅਸਲੀ ਸਵਾਲਾਂ ਦਾ ਜਵਾਬ ਦੇਣ ਵਾਲਾ ਲੇਆਉਟ।",
  "why1Title": "ਕਿਸਾਨਾਂ ਲਈ",
  "why1Text": "ਫਸਲ ਵਰਤੋਂ, ਆਰਾਮ, ਸਪੋਰਟ, ਕੀਮਤ ਵਿਕਲਪ ਅਤੇ ਸੰਪਰਕ ਸਪਸ਼ਟ।",
  "why2Title": "ਡੀਲਰਾਂ ਲਈ",
  "why2Text": "ਪੋਸਟਰ ਗੈਲਰੀ, ਸ਼ੇਅਰਯੋਗ ਵੈਬਸਾਈਟ, ਪੁੱਛਗਿੱਛ ਅਤੇ ਪ੍ਰੋਡਕਟ ਹਾਈਲਾਈਟ।",
  "why3Title": "ਸਰਵਿਸ ਲਈ",
  "why3Text": "ਪਾਰਟਸ ਸರ್ಚ ਅਤੇ ਮੇਂਟੇਨੈਂਸ ਪੁੱਛਗਿੱਛ ਨਾਲ ਗੁੰਝਲ ਘੱਟ ਹੁੰਦੀ ਹੈ।",
  "faqEyebrow": "FAQ",
  "faqTitle": "ਬੁਕਿੰਗ ਤੋਂ ਪਹਿਲਾਂ ਕਿਸਾਨਾਂ ਦੇ ਸਵਾਲ।",
  "faq1Q": "ਨਿਊ ਹੀਰਾ ਕੰਬਾਈਨ ਕਿਹੜੀਆਂ ਫਸਲਾਂ ਕੱਟ ਸਕਦੀ ਹੈ?",
  "faq1A": "ਇਸ਼ਤਿਹਾਰ ਵਿੱਚ ਮੱਕੀ, ਕਣਕ, ਝੋਨਾ ਅਤੇ ਮੁੱਖ ਫਸਲਾਂ ਦਿਖਾਈਆਂ ਗਈਆਂ ਹਨ। ਬੁਕਿੰਗ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਫਸਲ ਅਤੇ ਇਲਾਕੇ ਲਈ ਕਨਫਿਗਰੇਸ਼ਨ ਕਨਫਰਮ ਕਰੋ।",
  "faq2Q": "ਕੀ ਕੀਮਤ ਫਾਈਨਲ ਹੈ?",
  "faq2A": "ਦਿਖਾਈ ਕੀਮਤ ਇਸ਼ਤਿਹਾਰੀ ਸੰਦਰਭ ਹੈ। ਅੰਤਿਮ ਕੋਟ ਵਿਕਲਪ, ਟੈਕਸ, ਟਰਾਂਸਪੋਰਟ, ਫਾਇਨੈਂਸ ਅਤੇ ਉਪਲਬਧਤਾ ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।",
  "faq3Q": "ਸਪੇਅਰ ਪਾਰਟ ਕਿਵੇਂ ਮੰਗੀਏ?",
  "faq3A": "ਪਾਰਟਸ ਕੈਟਾਲਾਗ ਖੋਲ੍ਹੋ, ਪਾਰਟ ਨਾਂ ਖੋਜੋ ਅਤੇ ਫਾਰਮ ਜਾਂ WhatsApp ਰਾਹੀਂ ਮੈਸੇਜ ਭੇਜੋ।",
  "faq4Q": "ਵਾਰੰਟੀ ਗਾਈਡਲਾਈਨ ਕੀ ਹੈ?",
  "faq4A": "ਵੈਬਸਾਈਟ 1 ਸੀਜ਼ਨ ਜਾਂ 500 ਕੰਮ ਘੰਟੇ ਦਿਖਾਉਂਦੀ ਹੈ। ਅਧਿਕਾਰਕ ਲਿਖਤੀ ਪਾਲਿਸੀ ਅਤੇ exclusions ਨਿਊ ਹੀਰਾ ਤੋਂ ਪੁੱਛੋ।",
  "contactEyebrow": "ਨਿਊ ਹੀਰਾ ਨਾਲ ਸੰਪਰਕ",
  "contactTitle": "ਕੰਬਾਈਨ ਬੁੱਕ ਕਰੋ, ਪਾਰਟਸ ਪੁੱਛੋ ਜਾਂ ਸਰਵਿਸ ਮੰਗੋ।",
  "mobileLabel": "ਮੋਬਾਈਲ / WhatsApp",
  "landlineLabel": "ਲੈਂਡਲਾਈਨ",
  "emailLabel": "ਈਮੇਲ",
  "locationLabel": "ਲੋਕੇਸ਼ਨ",
  "locationValue": "ਨਾਭਾ, ਪੰਜਾਬ",
  "whatsappNow": "ਹੁਣ WhatsApp ਕਰੋ",
  "callNow": "ਹੁਣ ਕਾਲ ਕਰੋ",
  "formEyebrow": "ਫਾਸਟ ਪੁੱਛਗਿੱਛ",
  "formTitle": "ਆਪਣੀ ਲੋੜ ਭੇਜੋ",
  "nameLabel": "ਨਾਂ",
  "namePlaceholder": "ਤੁਹਾਡਾ ਨਾਂ",
  "phoneLabel": "ਫੋਨ",
  "districtLabel": "ਜ਼ਿਲ੍ਹਾ / ਸ਼ਹਿਰ",
  "districtPlaceholder": "ਤੁਹਾਡਾ ਜ਼ਿਲ੍ਹਾ",
  "requirementLabel": "ਲੋੜ",
  "messageLabel": "ਸੁਨੇਹਾ",
  "messagePlaceholder": "ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ",
  "submitEnquiry": "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਕਰੋ",
  "sendOnWhatsapp": "WhatsApp ਤੇ ਭੇਜੋ",
  "formNote": "Firebase ਕਨਫਿਗਰ ਹੋਣ ਤੇ ਪੁੱਛਗਿੱਛ ਸੇਵ ਹੋ ਸਕਦੀ ਹੈ। ਨਹੀਂ ਤਾਂ ਟੈਸਟਿੰਗ ਲਈ ਲੋਕਲ ਸੇਵ ਹੋਵੇਗੀ ਅਤੇ WhatsApp ਨਾਲ ਭੇਜੀ ਜਾ ਸਕਦੀ ਹੈ।",
  "footerText": "ਬਹੁਭਾਸ਼ੀ ਕੰਟੈਂਟ, ਪੋਸਟਰ, ਪਾਰਟਸ, ਸਰਵਿਸ ਅਤੇ ਪੁੱਛਗਿੱਛ ਵਾਲੀ ਪ੍ਰੋਫੈਸ਼ਨਲ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਵੈਬਸਾਈਟ।",
  "footerQuick": "ਕਵਿਕ ਲਿੰਕ",
  "footerPrice": "ਕੀਮਤ ਵਿਕਲਪ",
  "footerContact": "ਸੰਪਰਕ",
  "printPage": "ਪ੍ਰਿੰਟ / ਬ੍ਰੋਸ਼ਰ ਸੇਵ ਕਰੋ",
  "enquire": "ਪੁੱਛਗਿੱਛ",
  "dialogEyebrow": "ਨਿਊ ਹੀਰਾ ਸਪੇਅਰ ਪਾਰਟਸ",
  "dialogTitle": "ਪਾਰਟਸ ਕੈਟਾਲਾਗ",
  "searchPartsLabel": "ਪਾਰਟਸ ਖੋਜੋ",
  "partsSearchPlaceholder": "ਬੇਅਰਿੰਗ, ਬਲੇਡ, ਸ਼ਾਫਟ, ਗ੍ਰੀਸ ਗਨ ਖੋਜੋ...",
  "downloadPoster": "ਪੋਸਟਰ ਡਾਊਨਲੋਡ ਕਰੋ",
  "reqCombine": "ਕੰਬਾਈਨ ਬੁਕਿੰਗ",
  "reqService": "ਸਰਵਿਸ ਸਪੋਰਟ",
  "reqParts": "ਸਪੇਅਰ ਪਾਰਟਸ",
  "reqPrice": "ਕੀਮਤ / ਫਾਇਨੈਂਸ",
  "reqReferral": "ਰੈਫਰਲ ਆਫਰ",
  "partSmall": "ਨਿਊ ਹੀਰਾ ਲਿਸਟ ਕੀਤਾ ਸਪੇਅਰ ਪਾਰਟ / ਟੂਲਕਿਟ ਆਈਟਮ",
  "partsFound": "ਪਾਰਟਸ ਮਿਲੇ",
  "submitting": "ਸਬਮਿਟ ਹੋ ਰਿਹਾ ਹੈ...",
  "success": "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਹੋ ਗਈ। ਨਿਊ ਹੀਰਾ ਤੁਹਾਨੂੰ ਸੰਪਰਕ ਕਰੇਗਾ।",
  "localSuccess": "ਟੈਸਟਿੰਗ ਲਈ ਲੋਕਲ ਸੇਵ ਹੋਇਆ। ਸਿੱਧਾ ਭੇਜਣ ਲਈ WhatsApp ਵਰਤੋ।",
  "whatsappPrepared": "WhatsApp ਮੈਸੇਜ ਤਿਆਰ ਹੈ।",
  "error": "ਕੁਝ ਗਲਤ ਹੋਇਆ। ਕਿਰਪਾ ਕਰਕੇ ਕਾਲ ਜਾਂ WhatsApp ਕਰੋ।",
  "copied": "ਵੈਬਸਾਈਟ ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ",
  "quoteMessage": "ਮੈਨੂੰ New Hira 985 ਦਾ ਕੋਟੇਸ਼ਨ ਚਾਹੀਦਾ ਹੈ",
  "leadMessage": "New Hira ਵੈਬਸਾਈਟ ਪੁੱਛਗਿੱਛ",
  "selectedOptions": "ਚੁਣੇ ਵਿਕਲਪ",
  "total": "ਕੁੱਲ"
} }
};

const partsByLang = {
  "en": [
    "Guide Drum Shaft",
    "Bearing 6311",
    "Bearing 6208",
    "Bearing 6205",
    "Bearing UCF 207",
    "Bearing 206 UC",
    "Thresher Pulley Lock",
    "Rubber Seal 45-62-10",
    "Rubber Seal 40-80-10",
    "Rubber Bush Large",
    "Steering Jack Kit",
    "High Low Jack Kit",
    "Distributor / Control Valve Kit",
    "Hydraulic Pipe Steering Jack 24 inch",
    "Axle Couplings",
    "Small Axle",
    "Large Axle",
    "External Lock M-42",
    "Main Housing Puller",
    "Elevator Chain Lock",
    "Feeding Chain Lock",
    "Cutter Bar Fingers",
    "Blade Strip",
    "Blade Class",
    "Reel Tines",
    "Blade Head",
    "Blade Head Bush",
    "Reel Bush",
    "Fish Bush",
    "Blade Rivets",
    "D.E. Spanner Set",
    "Ring Spanner Set",
    "Socket Set",
    "W.P. Plier",
    "Allen Key Set",
    "Centre Punch",
    "Chisel",
    "Wheel Spanner Leyland",
    "Pipe Wrench 18 inch",
    "Bench Vice No.1",
    "Oil Can",
    "Circlip Plier Outer 7 inch",
    "Circlip Plier Inner 7 inch",
    "Hammer 2 lb",
    "Hammer 4 lb",
    "Three Legs Bearing Puller",
    "Round File 10 inch",
    "Flat File 12 inch",
    "Plier 10 inch",
    "Hexa Frame",
    "Hexa Blade",
    "Grease Gun 12 inch",
    "Grease Gun Nipple Kit",
    "Grease Pipe 8MM 12 inch",
    "Grease Pipe 6MM 12 inch",
    "Screw Driver",
    "Mechanical Jack",
    "Mechanical Jack Rod",
    "Nuts Bolts All Sizes",
    "Split Pins All Sizes",
    "Thrasher Spikes",
    "Thrasher Drum Paddy/Wheat",
    "Concave Assembly Paddy/Wheat",
    "Cutter Puller",
    "Water Cool Cage",
    "Tool Box",
    "Array Straw Walker Blade"
  ],
  "hi": [
    "गाइड ड्रम शाफ्ट",
    "बेयरिंग 6311",
    "बेयरिंग 6208",
    "बेयरिंग 6205",
    "बेयरिंग UCF 207",
    "बेयरिंग 206 UC",
    "थ्रेशर पुली लॉक",
    "रबर सील 45-62-10",
    "रबर सील 40-80-10",
    "बड़ा रबर बुश",
    "स्टीयरिंग जैक किट",
    "हाई लो जैक किट",
    "डिस्ट्रिब्यूटर / कंट्रोल वाल्व किट",
    "स्टीयरिंग जैक हाइड्रोलिक पाइप 24 इंच",
    "एक्सल कपलिंग",
    "छोटा एक्सल",
    "बड़ा एक्सल",
    "एक्सटर्नल लॉक M-42",
    "मेन हाउसिंग पुलर",
    "एलीवेटर चेन लॉक",
    "फीडिंग चेन लॉक",
    "कटर बार फिंगर",
    "ब्लेड स्ट्रिप",
    "ब्लेड क्लास",
    "रील टाइन",
    "ब्लेड हेड",
    "ब्लेड हेड बुश",
    "रील बुश",
    "फिश बुश",
    "ब्लेड रिवेट्स",
    "डी.ई. स्पैनर सेट",
    "रिंग स्पैनर सेट",
    "सॉकेट सेट",
    "डब्ल्यू.पी. प्लायर",
    "एलन की सेट",
    "सेंटर पंच",
    "छेनी",
    "लेलैंड व्हील स्पैनर",
    "पाइप रेंच 18 इंच",
    "बेंच वाइस नंबर 1",
    "तेल कैन",
    "सर्क्लिप प्लायर आउटर 7 इंच",
    "सर्क्लिप प्लायर इनर 7 इंच",
    "हथौड़ा 2 पाउंड",
    "हथौड़ा 4 पाउंड",
    "थ्री लेग्स बेयरिंग पुलर",
    "राउंड फाइल 10 इंच",
    "फ्लैट फाइल 12 इंच",
    "प्लायर 10 इंच",
    "हैक्सा फ्रेम",
    "हैक्सा ब्लेड",
    "ग्रीस गन 12 इंच",
    "ग्रीस गन निप्पल किट",
    "ग्रीस पाइप 8MM 12 इंच",
    "ग्रीस पाइप 6MM 12 इंच",
    "स्क्रू ड्राइवर",
    "मैकेनिकल जैक",
    "मैकेनिकल जैक रॉड",
    "सभी साइज नट बोल्ट",
    "सभी साइज स्प्लिट पिन",
    "थ्रेशर स्पाइक्स",
    "थ्रेशर ड्रम धान/गेहूँ",
    "कॉन्केव असेंबली धान/गेहूँ",
    "कटर पुलर",
    "वाटर कूल केज",
    "टूल बॉक्स",
    "अरे स्ट्रॉ वॉकर ब्लेड"
  ],
  "pa": [
    "ਗਾਈਡ ਡਰਮ ਸ਼ਾਫਟ",
    "ਬੇਅਰਿੰਗ 6311",
    "ਬੇਅਰਿੰਗ 6208",
    "ਬੇਅਰਿੰਗ 6205",
    "ਬੇਅਰਿੰਗ UCF 207",
    "ਬੇਅਰਿੰਗ 206 UC",
    "ਥ੍ਰੇਸ਼ਰ ਪੁਲੀ ਲਾਕ",
    "ਰਬਰ ਸੀਲ 45-62-10",
    "ਰਬਰ ਸੀਲ 40-80-10",
    "ਵੱਡਾ ਰਬਰ ਬੁਸ਼",
    "ਸਟੇਅਰਿੰਗ ਜੈਕ ਕਿਟ",
    "ਹਾਈ ਲੋ ਜੈਕ ਕਿਟ",
    "ਡਿਸਟ੍ਰਿਬਿਊਟਰ / ਕੰਟਰੋਲ ਵਾਲਵ ਕਿਟ",
    "ਸਟੇਅਰਿੰਗ ਜੈਕ ਹਾਈਡ੍ਰੌਲਿਕ ਪਾਈਪ 24 ਇੰਚ",
    "ਐਕਸਲ ਕਪਲਿੰਗ",
    "ਛੋਟਾ ਐਕਸਲ",
    "ਵੱਡਾ ਐਕਸਲ",
    "ਐਕਸਟਰਨਲ ਲਾਕ M-42",
    "ਮੇਨ ਹਾਊਸਿੰਗ ਪੁਲਰ",
    "ਐਲੀਵੇਟਰ ਚੇਨ ਲਾਕ",
    "ਫੀਡਿੰਗ ਚੇਨ ਲਾਕ",
    "ਕਟਰ ਬਾਰ ਫਿੰਗਰ",
    "ਬਲੇਡ ਸਟ੍ਰਿਪ",
    "ਬਲੇਡ ਕਲਾਸ",
    "ਰੀਲ ਟਾਈਨ",
    "ਬਲੇਡ ਹੈੱਡ",
    "ਬਲੇਡ ਹੈੱਡ ਬੁਸ਼",
    "ਰੀਲ ਬੁਸ਼",
    "ਫਿਸ਼ ਬੁਸ਼",
    "ਬਲੇਡ ਰਿਵੇਟਸ",
    "ਡੀ.ਈ. ਸਪੈਨਰ ਸੈੱਟ",
    "ਰਿੰਗ ਸਪੈਨਰ ਸੈੱਟ",
    "ਸਾਕਟ ਸੈੱਟ",
    "ਡਬਲਯੂ.ਪੀ. ਪਲਾਇਰ",
    "ਐਲਨ ਕੀ ਸੈੱਟ",
    "ਸੈਂਟਰ ਪੰਚ",
    "ਛੈਣੀ",
    "ਲੇਲੈਂਡ ਵੀਲ ਸਪੈਨਰ",
    "ਪਾਈਪ ਰੈਂਚ 18 ਇੰਚ",
    "ਬੈਂਚ ਵਾਈਸ ਨੰਬਰ 1",
    "ਤੇਲ ਕੈਨ",
    "ਸਰਕਲਿਪ ਪਲਾਇਰ ਆਉਟਰ 7 ਇੰਚ",
    "ਸਰਕਲਿਪ ਪਲਾਇਰ ਇਨਰ 7 ਇੰਚ",
    "ਹਥੌੜਾ 2 ਪੌਂਡ",
    "ਹਥੌੜਾ 4 ਪੌਂਡ",
    "ਥ੍ਰੀ ਲੈਗਸ ਬੇਅਰਿੰਗ ਪੁਲਰ",
    "ਰਾਊਂਡ ਫਾਈਲ 10 ਇੰਚ",
    "ਫਲੈਟ ਫਾਈਲ 12 ਇੰਚ",
    "ਪਲਾਇਰ 10 ਇੰਚ",
    "ਹੈਕਸਾ ਫਰੇਮ",
    "ਹੈਕਸਾ ਬਲੇਡ",
    "ਗ੍ਰੀਸ ਗਨ 12 ਇੰਚ",
    "ਗ੍ਰੀਸ ਗਨ ਨਿੱਪਲ ਕਿਟ",
    "ਗ੍ਰੀਸ ਪਾਈਪ 8MM 12 ਇੰਚ",
    "ਗ੍ਰੀਸ ਪਾਈਪ 6MM 12 ਇੰਚ",
    "ਸਕ੍ਰੂ ਡਰਾਈਵਰ",
    "ਮਕੈਨਿਕਲ ਜੈਕ",
    "ਮਕੈਨਿਕਲ ਜੈਕ ਰਾਡ",
    "ਸਾਰੇ ਸਾਈਜ਼ ਨਟ ਬੋਲਟ",
    "ਸਾਰੇ ਸਾਈਜ਼ ਸਪਲਿਟ ਪਿਨ",
    "ਥ੍ਰੇਸ਼ਰ ਸਪਾਈਕਸ",
    "ਥ੍ਰੇਸ਼ਰ ਡਰਮ ਝੋਨਾ/ਕਣਕ",
    "ਕੌਂਕੇਵ ਅਸੈਂਬਲੀ ਝੋਨਾ/ਕਣਕ",
    "ਕਟਰ ਪੁਲਰ",
    "ਵਾਟਰ ਕੂਲ ਕੇਜ",
    "ਟੂਲ ਬਾਕਸ",
    "ਐਰੇ ਸਟ੍ਰਾ ਵਾਕਰ ਬਲੇਡ"
  ]
};;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const state = {
  lang: localStorage.getItem('newHiraLanguage') || 'en',
  db: null,
  firebase: null,
  quoteTotal: 2800000
};

function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[char]));
}

function applyLanguage(lang) {
  state.lang = translations[lang] ? lang : 'en';
  localStorage.setItem('newHiraLanguage', state.lang);
  document.documentElement.lang = state.lang;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[state.lang]?.[key]) el.textContent = translations[state.lang][key];
  });

  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[state.lang]?.[key]) el.placeholder = translations[state.lang][key];
  });

  const languageSelect = $('#languageSelect');
  if (languageSelect) languageSelect.value = state.lang;
  renderRequirementOptions();
  updateQuote();
  renderParts($('#partsSearch')?.value || '');
}

function renderRequirementOptions() {
  const select = $('#requirementSelect');
  if (!select) return;
  const selected = select.value;
  const options = [
    ['combine', t('reqCombine')],
    ['service', t('reqService')],
    ['parts', t('reqParts')],
    ['price', t('reqPrice')],
    ['referral', t('reqReferral')]
  ];
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${escapeHtml(label)}<\/option>`).join('');
  if (options.some(([value]) => value === selected)) select.value = selected;
}

function setupMenu() {
  const button = $('#menuButton');
  const nav = $('#mainNav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  $$('#mainNav a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
}

function updateQuote() {
  const checkedOptions = $$('[data-price-option]:checked');
  const optionTotal = checkedOptions.reduce((sum, input) => sum + Number(input.value || 0), 0);
  state.quoteTotal = 2800000 + optionTotal;
  const totalNode = $('#quoteTotal');
  if (totalNode) totalNode.textContent = formatINR(state.quoteTotal);

  const selectedLabels = checkedOptions.map(input => input.closest('label')?.querySelector('span')?.textContent?.trim()).filter(Boolean);
  const message = [
    t('quoteMessage'),
    selectedLabels.length ? `${t('selectedOptions')}: ${selectedLabels.join(', ')}` : `${t('selectedOptions')}: Base machine`,
    `${t('total')}: ${formatINR(state.quoteTotal)}`
  ].join('
');
  const link = $('#quoteWhatsApp');
  if (link) link.href = `https://wa.me/919216107700?text=${encodeURIComponent(message)}`;
}

function setupQuote() {
  $$('[data-price-option]').forEach(input => input.addEventListener('change', updateQuote));
  updateQuote();
}

function renderParts(filter = '') {
  const list = $('#partsList');
  const count = $('#partsCount');
  if (!list) return;
  const query = filter.trim().toLowerCase();
  const current = partsByLang[state.lang] || partsByLang.en;
  const english = partsByLang.en;
  const items = current.map((name, index) => ({
    name,
    english: english[index] || name,
    index: index + 1
  })).filter(item => !query || item.name.toLowerCase().includes(query) || item.english.toLowerCase().includes(query));

  if (count) count.textContent = `${items.length} ${t('partsFound')}`;
  list.innerHTML = items.map(item => `
    <button type="button" data-part-name="${escapeHtml(item.name)}">
      <strong>${item.index}. ${escapeHtml(item.name)}<\/strong>
      <small>${escapeHtml(t('partSmall'))}<\/small>
    <\/button>
  `).join('');
}

function openPartsDialog() {
  const dialog = $('#partsDialog');
  renderParts();
  if (dialog?.showModal) dialog.showModal();
  setTimeout(() => $('#partsSearch')?.focus(), 120);
}

function setupPartsDialog() {
  $$('[data-open-parts]').forEach(button => button.addEventListener('click', openPartsDialog));
  $('[data-close-parts]')?.addEventListener('click', () => $('#partsDialog')?.close());
  $('#partsSearch')?.addEventListener('input', event => renderParts(event.target.value));
  $('#partsList')?.addEventListener('click', event => {
    const button = event.target.closest('button[data-part-name]');
    if (!button) return;
    const form = $('#leadForm');
    const message = form?.elements?.message;
    const requirement = form?.elements?.requirement;
    if (requirement) requirement.value = 'parts';
    if (message) message.value = `Need spare part: ${button.dataset.partName}`;
    $('#partsDialog')?.close();
    $('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function setupGallery() {
  const dialog = $('#lightbox');
  const img = $('#lightboxImage');
  const title = $('#lightboxTitle');
  const download = $('#downloadPoster');
  $$('.galleryItem').forEach(item => item.addEventListener('click', () => {
    const src = item.dataset.gallerySrc;
    const label = item.querySelector('span')?.textContent || item.dataset.galleryTitle || 'Poster';
    if (!src || !dialog || !img || !title || !download) return;
    img.src = src;
    img.alt = label;
    title.textContent = label;
    download.href = src;
    const filename = src.split('/').pop() || 'new-hira-poster.jpg';
    download.setAttribute('download', filename);
    if (dialog.showModal) dialog.showModal();
  }));
  $('[data-close-lightbox]')?.addEventListener('click', () => dialog?.close());
}

async function setupFirebase() {
  if (!enableFirebase) return;
  try {
    const [appMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app = appMod.initializeApp(firebaseConfig);
    state.db = dbMod.getFirestore(app);
    state.firebase = dbMod;
  } catch (error) {
    console.info('Firebase unavailable; local fallback active.', error);
  }
}

function collectLeadData() {
  const form = $('#leadForm');
  if (!form) return null;
  const data = Object.fromEntries(new FormData(form).entries());
  data.language = state.lang;
  data.quoteTotal = state.quoteTotal;
  data.createdAtClient = new Date().toISOString();
  data.page = location.href;
  return data;
}

function leadToWhatsappText(data) {
  return [
    t('leadMessage'),
    `Name: ${data.name || ''}`,
    `Phone: ${data.phone || ''}`,
    `Location: ${data.location || ''}`,
    `Requirement: ${data.requirement || ''}`,
    `Message: ${data.message || ''}`,
    `Quote total: ${formatINR(Number(data.quoteTotal || 2800000))}`
  ].join('
');
}

function openLeadWhatsapp() {
  const data = collectLeadData();
  if (!data) return;
  window.open(`https://wa.me/919216107700?text=${encodeURIComponent(leadToWhatsappText(data))}`, '_blank', 'noopener');
  const status = $('#formStatus');
  if (status) {
    status.className = 'formStatus success';
    status.textContent = t('whatsappPrepared');
  }
}

function setupForm() {
  $('#leadForm')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = $('#formStatus');
    const data = collectLeadData();
    if (!data) return;
    if (status) {
      status.className = 'formStatus';
      status.textContent = t('submitting');
    }
    try {
      if (state.db && state.firebase) {
        await state.firebase.addDoc(state.firebase.collection(state.db, enquiriesCollection), {
          ...data,
          createdAt: state.firebase.serverTimestamp()
        });
        if (status) { status.className = 'formStatus success'; status.textContent = t('success'); }
      } else {
        const saved = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        saved.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(saved));
        if (status) { status.className = 'formStatus success'; status.textContent = t('localSuccess'); }
      }
      form.reset();
      renderRequirementOptions();
    } catch (error) {
      console.error(error);
      if (status) { status.className = 'formStatus error'; status.textContent = t('error'); }
    }
  });
  $('#whatsappLead')?.addEventListener('click', openLeadWhatsapp);
}

async function shareSite() {
  const shareData = { title: 'New Hira 985 Combine Harvester', text: 'New Hira combine harvester website', url: location.href };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      alert(t('copied'));
    }
  } catch {}
}

function setupGlobalActions() {
  $('#shareSite')?.addEventListener('click', shareSite);
  $('#printPage')?.addEventListener('click', () => window.print());
  $('#languageSelect')?.addEventListener('change', event => applyLanguage(event.target.value));
  const topButton = $('#toTop');
  const onScroll = () => topButton?.classList.toggle('show', window.scrollY > 650);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#year').textContent = new Date().getFullYear();
}

function setupServiceWorker() {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  setupQuote();
  setupPartsDialog();
  setupGallery();
  setupForm();
  setupGlobalActions();
  setupFirebase();
  setupServiceWorker();
  applyLanguage(state.lang);
});
