import { enableFirebase, firebaseConfig, enquiriesCollection } from './firebase-config.js';

const translations = {
  "en": {
    "introEyebrow": "Professional agricultural machinery",
    "introTitle": "New Hira",
    "introText": "A focused business presentation for combine harvesters, service and enquiries.",
    "skipIntro": "Enter site",
    "brandName": "New Hira",
    "navProduct": "Product",
    "navParts": "Parts",
    "navWarranty": "Warranty",
    "navService": "Service",
    "navEnquiry": "Enquiry",
    "call": "Call",
    "heroEyebrow": "New Hira • Nabha",
    "heroTitle": "Built for harvesting confidence.",
    "heroLead": "A professional advertisement page for New Hira combine harvesters, seasonal support, spare parts and direct farmer enquiries.",
    "bookEnquiry": "Book enquiry",
    "searchParts": "Search parts",
    "statWarrantyValue": "1 Season",
    "statWarrantyLabel": "Warranty / guarantee",
    "statHoursValue": "500 Hrs",
    "statHoursLabel": "Whichever is earlier",
    "statOfferValue": "₹1 Lakh",
    "statOfferLabel": "2025–26 paddy offer",
    "companyEyebrow": "Company",
    "companyTitle": "A practical machinery business with direct customer connection.",
    "companyText": "New Hira, Nabha is presented as a focused agricultural machinery business led by Jatinder Singh. This page is made for advertisement: clear product message, direct contact, warranty policy, offer campaign and service support.",
    "productEyebrow": "Combine harvester",
    "productTitle": "Made for demanding harvest seasons.",
    "feature1Title": "Field Presence",
    "feature1Text": "Strong machine identity for paddy and wheat harvesting campaigns.",
    "feature2Title": "Service Support",
    "feature2Text": "Direct Nabha contact for machine and maintenance enquiries.",
    "feature3Title": "Business Offer",
    "feature3Text": "Personal combine paddy offer up to ₹1,00,000 for 2025–26.",
    "feature4Title": "Referral Growth",
    "feature4Text": "Up to ₹50,000 reward on completed referral booking.",
    "partsEyebrow": "Spare parts",
    "partsTitle": "Search the New Hira parts list in one clean panel.",
    "partsText": "The catalogue opens in a simple search panel, so the main page stays short and professional.",
    "openCatalogue": "Open parts catalogue",
    "warrantyEyebrow": "Warranty / guarantee",
    "warrantyTitle": "1 season or 500 hours",
    "warrantyText": "Warranty and guarantee policy: one season or 500 working hours, whichever is earlier. Final exclusions and conditions can be added after confirmation.",
    "offerEyebrow": "Marketing offer",
    "offerTitle": "Earn through referrals",
    "offerText": "Share New Hira information. If the enquiry is completed and the combine is booked, earn up to ₹50,000 as cash or approved reward.",
    "serviceEyebrow": "Service support",
    "serviceTitle": "Maintenance support, presented simply.",
    "serviceText": "This section keeps service practical: direct contact, parts search, enquiry support and machine assistance from New Hira.",
    "support1Title": "Direct Guidance",
    "support1Text": "Call or WhatsApp New Hira for inspection, maintenance and replacement guidance.",
    "support2Title": "Parts Search",
    "support2Text": "Use the catalogue panel to quickly search listed items without scrolling a long page.",
    "support3Title": "Future Upgrade",
    "support3Text": "A precision 3D repair system can be added later when the real model is available.",
    "contactEyebrow": "Contact",
    "contactTitle": "New Hira, Nabha",
    "phoneLabel": "Phone / WhatsApp:",
    "emailLabel": "Email:",
    "ownerLabel": "Owner:",
    "whatsapp": "WhatsApp",
    "callNow": "Call now",
    "enquiryEyebrow": "Enquiry",
    "enquiryTitle": "Send a message",
    "nameLabel": "Name",
    "namePlaceholder": "Your name",
    "phoneInputLabel": "Phone",
    "requirementLabel": "Requirement",
    "messageLabel": "Message",
    "messagePlaceholder": "Tell us what you need",
    "submitEnquiry": "Submit enquiry",
    "shareWebsite": "Share website",
    "enquiryShort": "Enquire",
    "dialogEyebrow": "New Hira parts",
    "dialogTitle": "Spare parts catalogue",
    "partsSearchPlaceholder": "Search bearing, cutter, shaft, grease gun...",
    "reqCombine": "Combine enquiry",
    "reqService": "Service support",
    "reqReferral": "Referral offer",
    "partSmall": "New Hira listed spare part / toolkit item",
    "submitting": "Submitting...",
    "success": "Enquiry submitted. New Hira will contact you soon.",
    "localSuccess": "Saved locally for testing. New Hira can receive it when Firebase is connected.",
    "copied": "Website link copied"
  },
  "hi": {
    "introEyebrow": "पेशेवर कृषि मशीनरी",
    "introTitle": "न्यू हीरा",
    "introText": "कंबाइन हार्वेस्टर, सर्विस और पूछताछ के लिए साफ व्यवसायिक प्रस्तुति।",
    "skipIntro": "वेबसाइट खोलें",
    "brandName": "न्यू हीरा",
    "navProduct": "प्रोडक्ट",
    "navParts": "पार्ट्स",
    "navWarranty": "वारंटी",
    "navService": "सर्विस",
    "navEnquiry": "पूछताछ",
    "call": "कॉल",
    "heroEyebrow": "न्यू हीरा • नाभा",
    "heroTitle": "कटाई के भरोसे के लिए बनाया गया।",
    "heroLead": "न्यू हीरा कंबाइन हार्वेस्टर, सीज़नल सपोर्ट, स्पेयर पार्ट्स और सीधी किसान पूछताछ के लिए पेशेवर विज्ञापन पेज।",
    "bookEnquiry": "पूछताछ बुक करें",
    "searchParts": "पार्ट्स खोजें",
    "statWarrantyValue": "1 सीज़न",
    "statWarrantyLabel": "वारंटी / गारंटी",
    "statHoursValue": "500 घंटे",
    "statHoursLabel": "जो पहले हो",
    "statOfferValue": "₹1 लाख",
    "statOfferLabel": "2025–26 धान ऑफर",
    "companyEyebrow": "कंपनी",
    "companyTitle": "सीधे ग्राहक संपर्क वाला व्यावहारिक मशीनरी व्यवसाय।",
    "companyText": "न्यू हीरा, नाभा को जतिंदर सिंह द्वारा संचालित एक केंद्रित कृषि मशीनरी व्यवसाय के रूप में प्रस्तुत किया गया है। यह पेज विज्ञापन के लिए बनाया गया है: स्पष्ट प्रोडक्ट संदेश, सीधा संपर्क, वारंटी नीति, ऑफर अभियान और सर्विस सपोर्ट।",
    "productEyebrow": "कंबाइन हार्वेस्टर",
    "productTitle": "कठिन कटाई सीज़न के लिए तैयार।",
    "feature1Title": "फील्ड उपस्थिति",
    "feature1Text": "धान और गेहूँ कटाई अभियानों के लिए मजबूत मशीन पहचान।",
    "feature2Title": "सर्विस सपोर्ट",
    "feature2Text": "मशीन और मेंटेनेंस पूछताछ के लिए सीधा नाभा संपर्क।",
    "feature3Title": "बिज़नेस ऑफर",
    "feature3Text": "2025–26 के लिए पर्सनल कंबाइन धान ऑफर ₹1,00,000 तक।",
    "feature4Title": "रेफरल ग्रोथ",
    "feature4Text": "पूर्ण रेफरल बुकिंग पर ₹50,000 तक इनाम।",
    "partsEyebrow": "स्पेयर पार्ट्स",
    "partsTitle": "न्यू हीरा पार्ट्स सूची को एक साफ पैनल में खोजें।",
    "partsText": "कैटलॉग एक आसान सर्च पैनल में खुलता है, इसलिए मुख्य पेज छोटा और प्रोफेशनल रहता है।",
    "openCatalogue": "पार्ट्स कैटलॉग खोलें",
    "warrantyEyebrow": "वारंटी / गारंटी",
    "warrantyTitle": "1 सीज़न या 500 घंटे",
    "warrantyText": "वारंटी और गारंटी नीति: एक सीज़न या 500 कामकाजी घंटे, जो पहले हो। अंतिम शर्तें और exclusions कन्फर्मेशन के बाद जोड़े जा सकते हैं।",
    "offerEyebrow": "मार्केटिंग ऑफर",
    "offerTitle": "रेफरल से कमाएँ",
    "offerText": "न्यू हीरा की जानकारी शेयर करें। यदि पूछताछ पूरी होती है और कंबाइन बुक होता है, तो ₹50,000 तक नकद या अनुमोदित इनाम मिल सकता है।",
    "serviceEyebrow": "सर्विस सपोर्ट",
    "serviceTitle": "मेंटेनेंस सपोर्ट, सरल तरीके से।",
    "serviceText": "यह सेक्शन सर्विस को व्यावहारिक रखता है: सीधा संपर्क, पार्ट्स सर्च, पूछताछ सपोर्ट और न्यू हीरा से मशीन सहायता।",
    "support1Title": "सीधी गाइडेंस",
    "support1Text": "निरीक्षण, मेंटेनेंस और रिप्लेसमेंट गाइडेंस के लिए न्यू हीरा को कॉल या WhatsApp करें।",
    "support2Title": "पार्ट्स सर्च",
    "support2Text": "लंबे पेज को स्क्रॉल किए बिना सूचीबद्ध आइटम जल्दी खोजने के लिए कैटलॉग पैनल का उपयोग करें।",
    "support3Title": "भविष्य अपग्रेड",
    "support3Text": "असली मॉडल उपलब्ध होने पर बाद में प्रिसिजन 3D रिपेयर सिस्टम जोड़ा जा सकता है।",
    "contactEyebrow": "संपर्क",
    "contactTitle": "न्यू हीरा, नाभा",
    "phoneLabel": "फोन / WhatsApp:",
    "emailLabel": "ईमेल:",
    "ownerLabel": "Owner:",
    "whatsapp": "WhatsApp",
    "callNow": "अभी कॉल करें",
    "enquiryEyebrow": "पूछताछ",
    "enquiryTitle": "संदेश भेजें",
    "nameLabel": "नाम",
    "namePlaceholder": "आपका नाम",
    "phoneInputLabel": "फोन",
    "requirementLabel": "जरूरत",
    "messageLabel": "संदेश",
    "messagePlaceholder": "बताइए आपको क्या चाहिए",
    "submitEnquiry": "पूछताछ सबमिट करें",
    "shareWebsite": "वेबसाइट शेयर करें",
    "enquiryShort": "पूछताछ",
    "dialogEyebrow": "न्यू हीरा पार्ट्स",
    "dialogTitle": "स्पेयर पार्ट्स कैटलॉग",
    "partsSearchPlaceholder": "बेयरिंग, कटर, शाफ्ट, ग्रीस गन खोजें...",
    "reqCombine": "कंबाइन पूछताछ",
    "reqService": "सर्विस सपोर्ट",
    "reqReferral": "रेफरल ऑफर",
    "partSmall": "न्यू हीरा सूचीबद्ध स्पेयर पार्ट / टूलकिट आइटम",
    "submitting": "सबमिट हो रहा है...",
    "success": "पूछताछ सबमिट हुई। न्यू हीरा आपसे संपर्क करेगा।",
    "localSuccess": "टेस्टिंग के लिए लोकली सेव हुआ। Firebase जुड़ने पर न्यू हीरा इसे प्राप्त कर सकता है।",
    "copied": "वेबसाइट लिंक कॉपी हो गया"
  },
  "pa": {
    "introEyebrow": "ਪੇਸ਼ੇਵਰ ਖੇਤੀਬਾੜੀ ਮਸ਼ੀਨਰੀ",
    "introTitle": "ਨਿਊ ਹੀਰਾ",
    "introText": "ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ, ਸਰਵਿਸ ਅਤੇ ਪੁੱਛਗਿੱਛ ਲਈ ਸਾਫ਼ ਬਿਜ਼ਨਸ ਪ੍ਰਸਤੁਤੀ।",
    "skipIntro": "ਵੈਬਸਾਈਟ ਖੋਲ੍ਹੋ",
    "brandName": "ਨਿਊ ਹੀਰਾ",
    "navProduct": "ਪ੍ਰੋਡਕਟ",
    "navParts": "ਪਾਰਟਸ",
    "navWarranty": "ਵਾਰੰਟੀ",
    "navService": "ਸਰਵਿਸ",
    "navEnquiry": "ਪੁੱਛਗਿੱਛ",
    "call": "ਕਾਲ",
    "heroEyebrow": "ਨਿਊ ਹੀਰਾ • ਨਾਭਾ",
    "heroTitle": "ਕਟਾਈ ਦੇ ਭਰੋਸੇ ਲਈ ਤਿਆਰ।",
    "heroLead": "ਨਿਊ ਹੀਰਾ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ, ਸੀਜ਼ਨਲ ਸਹਾਇਤਾ, ਸਪੇਅਰ ਪਾਰਟਸ ਅਤੇ ਸਿੱਧੀ ਕਿਸਾਨ ਪੁੱਛਗਿੱਛ ਲਈ ਪੇਸ਼ੇਵਰ ਇਸ਼ਤਿਹਾਰ ਪੇਜ।",
    "bookEnquiry": "ਪੁੱਛਗਿੱਛ ਬੁੱਕ ਕਰੋ",
    "searchParts": "ਪਾਰਟਸ ਖੋਜੋ",
    "statWarrantyValue": "1 ਸੀਜ਼ਨ",
    "statWarrantyLabel": "ਵਾਰੰਟੀ / ਗਾਰੰਟੀ",
    "statHoursValue": "500 ਘੰਟੇ",
    "statHoursLabel": "ਜੋ ਪਹਿਲਾਂ ਹੋਵੇ",
    "statOfferValue": "₹1 ਲੱਖ",
    "statOfferLabel": "2025–26 ਝੋਨਾ ਆਫਰ",
    "companyEyebrow": "ਕੰਪਨੀ",
    "companyTitle": "ਸਿੱਧੇ ਗਾਹਕ ਸੰਪਰਕ ਵਾਲਾ ਵਿਹਾਰਕ ਮਸ਼ੀਨਰੀ ਕਾਰੋਬਾਰ।",
    "companyText": "ਨਿਊ ਹੀਰਾ, ਨਾਭਾ ਨੂੰ ਜਤਿੰਦਰ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਹੇਠ ਇੱਕ ਕੇਂਦਰਿਤ ਖੇਤੀਬਾੜੀ ਮਸ਼ੀਨਰੀ ਕਾਰੋਬਾਰ ਵਜੋਂ ਪੇਸ਼ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਹ ਪੇਜ ਇਸ਼ਤਿਹਾਰ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ: ਸਾਫ਼ ਪ੍ਰੋਡਕਟ ਸੁਨੇਹਾ, ਸਿੱਧਾ ਸੰਪਰਕ, ਵਾਰੰਟੀ ਨੀਤੀ, ਆਫਰ ਕੈਂਪੇਨ ਅਤੇ ਸਰਵਿਸ ਸਹਾਇਤਾ।",
    "productEyebrow": "ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ",
    "productTitle": "ਮੁਸ਼ਕਲ ਕਟਾਈ ਸੀਜ਼ਨ ਲਈ ਤਿਆਰ।",
    "feature1Title": "ਫੀਲਡ ਮੌਜੂਦਗੀ",
    "feature1Text": "ਝੋਨੇ ਅਤੇ ਕਣਕ ਕਟਾਈ ਮੁਹਿੰਮਾਂ ਲਈ ਮਜ਼ਬੂਤ ਮਸ਼ੀਨ ਪਹਿਚਾਣ।",
    "feature2Title": "ਸਰਵਿਸ ਸਹਾਇਤਾ",
    "feature2Text": "ਮਸ਼ੀਨ ਅਤੇ ਮੈਂਟੇਨੈਂਸ ਪੁੱਛਗਿੱਛ ਲਈ ਸਿੱਧਾ ਨਾਭਾ ਸੰਪਰਕ।",
    "feature3Title": "ਬਿਜ਼ਨਸ ਆਫਰ",
    "feature3Text": "2025–26 ਲਈ ਪੁਰਸਨਲ ਕੰਬਾਈਨ ਝੋਨਾ ਆਫਰ ₹1,00,000 ਤੱਕ।",
    "feature4Title": "ਰੇਫਰਲ ਗ੍ਰੋਥ",
    "feature4Text": "ਪੂਰੀ ਹੋਈ ਰੇਫਰਲ ਬੁਕਿੰਗ ਤੇ ₹50,000 ਤੱਕ ਇਨਾਮ।",
    "partsEyebrow": "ਸਪੇਅਰ ਪਾਰਟਸ",
    "partsTitle": "ਨਿਊ ਹੀਰਾ ਪਾਰਟਸ ਲਿਸਟ ਨੂੰ ਇੱਕ ਸਾਫ਼ ਪੈਨਲ ਵਿੱਚ ਖੋਜੋ।",
    "partsText": "ਕੈਟਾਲਾਗ ਇੱਕ ਆਸਾਨ ਸਰਚ ਪੈਨਲ ਵਿੱਚ ਖੁੱਲਦਾ ਹੈ, ਇਸ ਲਈ ਮੁੱਖ ਪੇਜ ਛੋਟਾ ਅਤੇ ਪ੍ਰੋਫੈਸ਼ਨਲ ਰਹਿੰਦਾ ਹੈ।",
    "openCatalogue": "ਪਾਰਟਸ ਕੈਟਾਲਾਗ ਖੋਲ੍ਹੋ",
    "warrantyEyebrow": "ਵਾਰੰਟੀ / ਗਾਰੰਟੀ",
    "warrantyTitle": "1 ਸੀਜ਼ਨ ਜਾਂ 500 ਘੰਟੇ",
    "warrantyText": "ਵਾਰੰਟੀ ਅਤੇ ਗਾਰੰਟੀ ਨੀਤੀ: ਇੱਕ ਸੀਜ਼ਨ ਜਾਂ 500 ਕੰਮਕਾਜੀ ਘੰਟੇ, ਜੋ ਪਹਿਲਾਂ ਹੋਵੇ। ਅੰਤਿਮ ਸ਼ਰਤਾਂ ਕਨਫਰਮੇਸ਼ਨ ਤੋਂ ਬਾਅਦ ਜੋੜੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ।",
    "offerEyebrow": "ਮਾਰਕੀਟਿੰਗ ਆਫਰ",
    "offerTitle": "ਰੇਫਰਲ ਨਾਲ ਕਮਾਓ",
    "offerText": "ਨਿਊ ਹੀਰਾ ਦੀ ਜਾਣਕਾਰੀ ਸ਼ੇਅਰ ਕਰੋ। ਜੇ ਪੁੱਛਗਿੱਛ ਪੂਰੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਕੰਬਾਈਨ ਬੁੱਕ ਹੁੰਦੀ ਹੈ, ਤਾਂ ₹50,000 ਤੱਕ ਨਕਦ ਜਾਂ ਮਨਜ਼ੂਰ ਇਨਾਮ ਮਿਲ ਸਕਦਾ ਹੈ।",
    "serviceEyebrow": "ਸਰਵਿਸ ਸਹਾਇਤਾ",
    "serviceTitle": "ਮੈਂਟੇਨੈਂਸ ਸਹਾਇਤਾ, ਸਿੱਧੇ ਤਰੀਕੇ ਨਾਲ।",
    "serviceText": "ਇਹ ਸੈਕਸ਼ਨ ਸਰਵਿਸ ਨੂੰ ਵਿਹਾਰਕ ਰੱਖਦਾ ਹੈ: ਸਿੱਧਾ ਸੰਪਰਕ, ਪਾਰਟਸ ਸਰਚ, ਪੁੱਛਗਿੱਛ ਸਹਾਇਤਾ ਅਤੇ ਨਿਊ ਹੀਰਾ ਵੱਲੋਂ ਮਸ਼ੀਨ ਮਦਦ।",
    "support1Title": "ਸਿੱਧੀ ਗਾਈਡੈਂਸ",
    "support1Text": "ਇੰਸਪੈਕਸ਼ਨ, ਮੈਂਟੇਨੈਂਸ ਅਤੇ ਰਿਪਲੇਸਮੈਂਟ ਗਾਈਡੈਂਸ ਲਈ ਨਿਊ ਹੀਰਾ ਨੂੰ ਕਾਲ ਜਾਂ WhatsApp ਕਰੋ।",
    "support2Title": "ਪਾਰਟਸ ਸਰਚ",
    "support2Text": "ਲੰਮਾ ਪੇਜ ਸਕ੍ਰੋਲ ਕੀਤੇ ਬਿਨਾ ਲਿਸਟ ਕੀਤੇ ਆਈਟਮ ਜਲਦੀ ਖੋਜਣ ਲਈ ਕੈਟਾਲਾਗ ਪੈਨਲ ਵਰਤੋ।",
    "support3Title": "ਭਵਿੱਖ ਅਪਗ੍ਰੇਡ",
    "support3Text": "ਅਸਲੀ ਮਾਡਲ ਮਿਲਣ ਤੋਂ ਬਾਅਦ ਪ੍ਰਿਸੀਜ਼ਨ 3D ਰਿਪੇਅਰ ਸਿਸਟਮ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।",
    "contactEyebrow": "ਸੰਪਰਕ",
    "contactTitle": "ਨਿਊ ਹੀਰਾ, ਨਾਭਾ",
    "phoneLabel": "ਫੋਨ / WhatsApp:",
    "emailLabel": "ਈਮੇਲ:",
    "ownerLabel": "Owner:",
    "whatsapp": "WhatsApp",
    "callNow": "ਹੁਣ ਕਾਲ ਕਰੋ",
    "enquiryEyebrow": "ਪੁੱਛਗਿੱਛ",
    "enquiryTitle": "ਸੁਨੇਹਾ ਭੇਜੋ",
    "nameLabel": "ਨਾਮ",
    "namePlaceholder": "ਤੁਹਾਡਾ ਨਾਮ",
    "phoneInputLabel": "ਫੋਨ",
    "requirementLabel": "ਲੋੜ",
    "messageLabel": "ਸੁਨੇਹਾ",
    "messagePlaceholder": "ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ",
    "submitEnquiry": "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਕਰੋ",
    "shareWebsite": "ਵੈਬਸਾਈਟ ਸ਼ੇਅਰ ਕਰੋ",
    "enquiryShort": "ਪੁੱਛਗਿੱਛ",
    "dialogEyebrow": "ਨਿਊ ਹੀਰਾ ਪਾਰਟਸ",
    "dialogTitle": "ਸਪੇਅਰ ਪਾਰਟਸ ਕੈਟਾਲਾਗ",
    "partsSearchPlaceholder": "ਬੇਅਰਿੰਗ, ਕਟਰ, ਸ਼ਾਫਟ, ਗ੍ਰੀਸ ਗਨ ਖੋਜੋ...",
    "reqCombine": "ਕੰਬਾਈਨ ਪੁੱਛਗਿੱਛ",
    "reqService": "ਸਰਵਿਸ ਸਹਾਇਤਾ",
    "reqReferral": "ਰੇਫਰਲ ਆਫਰ",
    "partSmall": "ਨਿਊ ਹੀਰਾ ਲਿਸਟ ਕੀਤਾ ਸਪੇਅਰ ਪਾਰਟ / ਟੂਲਕਿਟ ਆਈਟਮ",
    "submitting": "ਸਬਮਿਟ ਹੋ ਰਿਹਾ ਹੈ...",
    "success": "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਹੋ ਗਈ। ਨਿਊ ਹੀਰਾ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗਾ।",
    "localSuccess": "ਟੈਸਟਿੰਗ ਲਈ ਲੋਕਲ ਸੇਵ ਹੋਇਆ। Firebase ਜੁੜਨ ਤੇ ਨਿਊ ਹੀਰਾ ਇਸਨੂੰ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹੈ।",
    "copied": "ਵੈਬਸਾਈਟ ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ"
  }
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
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const state = {
  lang: localStorage.getItem('newHiraLanguage') || 'en',
  db:null,
  firebase:null
};

function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('newHiraLanguage', lang);
  document.documentElement.lang = lang;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });

  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
  });

  $('#languageSelect').value = lang;
  renderRequirementOptions();
  renderParts($('#partsSearch')?.value || '');
}

function renderRequirementOptions() {
  const select = $('#requirementSelect');
  if (!select) return;
  const current = select.value;
  const items = [
    ['combine', t('reqCombine')],
    ['service', t('reqService')],
    ['referral', t('reqReferral')]
  ];
  select.innerHTML = items.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
  if (items.some(([value]) => value === current)) select.value = current;
}

function renderParts(filter='') {
  const q = filter.toLowerCase().trim();
  const list = $('#partsList');
  if (!list) return;
  const langParts = partsByLang[state.lang] || partsByLang.en;
  const enParts = partsByLang.en;
  const shown = langParts
    .map((name, index) => ({ name, en: enParts[index] || name }))
    .filter(p => !q || p.name.toLowerCase().includes(q) || p.en.toLowerCase().includes(q));
  list.innerHTML = shown.map((p) => `
    <button type="button">
      <strong>${p.name}</strong>
      <small>${t('partSmall')}</small>
    </button>
  `).join('');
}

function openParts() {
  renderParts();
  $('#partsDialog')?.showModal();
  setTimeout(() => $('#partsSearch')?.focus(), 120);
}

function setupPartsDialog() {
  $('#openParts')?.addEventListener('click', openParts);
  $('#openPartsHero')?.addEventListener('click', openParts);
  $('#closeParts')?.addEventListener('click', () => $('#partsDialog')?.close());
  $('#partsSearch')?.addEventListener('input', e => renderParts(e.target.value));
}

function setupMenu() {
  $('#menuBtn')?.addEventListener('click', () => $('#nav')?.classList.toggle('open'));
  $$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav')?.classList.remove('open')));
}

function closeIntro() {
  const intro = $('#introOverlay');
  if (!intro || intro.classList.contains('hide')) return;
  intro.classList.add('hide');
  document.body.classList.remove('intro-lock');
}

function setupIntro() {
  $('#introSkip')?.addEventListener('click', closeIntro);
  setTimeout(closeIntro, 2200);
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
  } catch (e) {
    console.warn(e);
  }
}

function setupForm() {
  $('#enquiryForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.createdAtClient = new Date().toISOString();
    data.language = state.lang;
    const status = $('#status');
    status.className = 'status';
    status.textContent = t('submitting');
    try {
      if (state.db && state.firebase) {
        await state.firebase.addDoc(state.firebase.collection(state.db, enquiriesCollection), {
          ...data,
          createdAt: state.firebase.serverTimestamp()
        });
        status.classList.add('success');
        status.textContent = t('success');
      } else {
        const saved = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        saved.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(saved));
        status.classList.add('success');
        status.textContent = t('localSuccess');
      }
      e.currentTarget.reset();
      renderRequirementOptions();
    } catch (err) {
      status.classList.add('error');
      status.textContent = err.message;
    }
  });
}

async function shareSite() {
  try {
    if (navigator.share) {
      await navigator.share({
        title:'New Hira',
        text:'New Hira combine harvester advertisement website',
        url:location.href
      });
    } else {
      await navigator.clipboard.writeText(location.href);
      alert(t('copied'));
    }
  } catch {}
}

function setupActions() {
  const top = $('#toTop');
  const onScroll = () => top?.classList.toggle('show', window.scrollY > 520);
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
  top?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  $('#shareBtn')?.addEventListener('click', shareSite);
  $('#languageSelect')?.addEventListener('change', e => applyLanguage(e.target.value));
}

document.addEventListener('DOMContentLoaded', () => {
  setupIntro();
  setupMenu();
  setupPartsDialog();
  setupForm();
  setupActions();
  setupFirebase();
  applyLanguage(state.lang);
});
