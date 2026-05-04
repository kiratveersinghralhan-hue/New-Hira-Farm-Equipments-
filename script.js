import { enableFirebase, firebaseConfig, leadsCollectionName } from "./firebase-config.js";

const translations = {
  en: {
    pageTitle: "New Hira Combine Harvester",
    skipLink: "Skip to content",
    brandSub: "Farm Equipments",
    menuOpen: "Open menu",
    navProduct: "Product",
    navSpecs: "Specs",
    navModels: "2D/3D View",
    navOffers: "Offers",
    navEnquiry: "Enquire",
    languageLabel: "Language",
    themeToggle: "Dark",
    themeToggleLight: "Light",
    heroBadge: "Made in Punjab • Built for Indian fields",
    heroTitle: "New Hira 985 combine harvester for faster, cleaner harvesting.",
    heroLead: "Showcase the machine, explain the specs, collect farmer enquiries, and promote seasonal discounts from one fast landing page.",
    ctaEnquire: "Send enquiry",
    ctaViewModel: "View 3D model",
    draftSpecsNotice: "Draft specs are editable. Confirm exact model details before publishing.",
    liveModelLabel: "Interactive 3D preview",
    pauseRotate: "Pause",
    playRotate: "Play",
    rotateModel: "Rotate model",
    statCutter: "ft cutter bar draft",
    statPower: "HP draft power",
    statWalker: "straw walkers listed",
    statCrops: "crop types supported",
    productEyebrow: "Product showcase",
    productTitle: "A landing page that sells the machine visually.",
    productLead: "Farmers can understand the harvester quickly: engine, cutter bar, tyres, grain handling, gears, spare parts, and service support.",
    specsEyebrow: "Technical details",
    specsTitle: "Editable draft specifications for New Hira 985.",
    specsLead: "Use these as a starting point. Replace anything after your father confirms the latest model, engine, emissions, pricing, and offer terms.",
    tabPower: "Power",
    tabCrop: "Crop",
    tabDrive: "Drive",
    tabService: "Service",
    specPanelTitle: "Power & Engine",
    specSearchPlaceholder: "Search specs",
    noSpecResults: "No matching specs found.",
    brochureTitle: "Brochure ready",
    brochureLead: "This page can become a brochure PDF later. For now, all text is dynamic from one JavaScript file.",
    brochureCta: "Ask for price",
    modelsEyebrow: "2D + 3D model",
    modelsTitle: "Explain the machine with interactive visuals.",
    modelsLead: "The 3D preview is a lightweight canvas model. The 2D diagram highlights important parts without needing heavy files.",
    diagramTitle: "2D part diagram",
    highlightParts: "Highlight parts",
    partsTitle: "Spare parts focus",
    partsLead: "Use this area to promote availability of genuine spare parts, service, and seasonal maintenance kits.",
    callEngine: "Engine",
    callCutter: "Cutter bar",
    callTank: "Grain tank",
    callTyres: "Tyres",
    callAuger: "Unloading auger",
    offersEyebrow: "Seasonal offer",
    offersTitle: "Create discount campaigns without changing the design.",
    offersLead: "When your father confirms the exact amount, update the campaign amount in one place. The enquiry form will capture which offer the farmer selected.",
    offerTag: "Limited booking benefit",
    offerHeadline: "booking discount",
    offerSubline: "Draft campaign text. Confirm before publish.",
    offerPoint1: "Priority delivery discussion",
    offerPoint2: "Service team callback",
    offerPoint3: "Spare parts availability check",
    discountLabel: "Discount amount",
    applyOffer: "Apply this offer to enquiry",
    offerApplied: "Offer added to enquiry form.",
    enquiryEyebrow: "Farmer enquiry",
    enquiryTitle: "Capture leads directly into Firebase.",
    enquiryLead: "Paste your Firebase config later. Until then, submissions are stored locally so you can test the full flow.",
    fieldName: "Full name",
    fieldNamePlaceholder: "Farmer name",
    fieldPhone: "Phone / WhatsApp",
    fieldPhonePlaceholder: "+91 98765 43210",
    fieldDistrict: "District",
    fieldDistrictPlaceholder: "Example: Patiala",
    fieldState: "State",
    fieldCrop: "Main crop",
    fieldOffer: "Selected offer",
    fieldMessage: "Requirement",
    fieldMessagePlaceholder: "Tell us model, crop, location, and buying timeline",
    consentText: "I agree to be contacted by New Hira team about this enquiry.",
    submitEnquiry: "Submit enquiry",
    statePunjab: "Punjab",
    stateHaryana: "Haryana",
    stateRajasthan: "Rajasthan",
    stateUP: "Uttar Pradesh",
    stateOther: "Other",
    cropWheat: "Wheat",
    cropPaddy: "Paddy",
    cropMaize: "Maize",
    cropOther: "Other",
    statusSubmitting: "Submitting enquiry...",
    statusSubmitted: "Enquiry submitted. The team can read it in Firebase.",
    statusSavedLocal: "Firebase is not connected yet, so this enquiry was saved in this browser for testing.",
    statusError: "Something went wrong. Please check Firebase setup or try again.",
    contactTitle: "Talk to sales",
    contactLead: "Replace these placeholder details with your real phone, WhatsApp, email, and address before publishing.",
    contactPhoneLabel: "Phone",
    contactLocationLabel: "Location",
    contactLocation: "Nabha, Punjab",
    contactHoursLabel: "Hours",
    contactHours: "Mon–Sat, 9 AM–6 PM",
    footerText: "Dynamic website draft for combine harvester promotion.",
    backTop: "Back to top",
    specTitles: {
      power: "Power & Engine",
      crop: "Crop & Capacity",
      drive: "Drive & Tyres",
      service: "Service & Parts"
    },
    features: [
      { icon: "⚙️", title: "Engine story", body: "Show power, cylinder count, cooling, emission standard, and fuel details in clean cards." },
      { icon: "🌾", title: "Multi-crop use", body: "Highlight wheat, paddy, barley, maize, sunflower, pulses, and grams support." },
      { icon: "🛞", title: "Tyres & drive", body: "Explain field traction, rear steering tyres, gear ranges, and reverse movement." },
      { icon: "🧰", title: "Spare parts", body: "Promote cutter bar, blades, sieves, belts, filters, walkers, auger, and maintenance kits." }
    ],
    specs: {
      power: [
        ["Model", "New Hira 985 self-propelled combine harvester"],
        ["Engine", "Ashok Leyland 412 turbo charged, TREM III listed publicly; confirm latest BS/TREM version"],
        ["Power", "128 HP @ 2200 RPM listed by one public source; 133 HP appears in another listing"],
        ["Cooling", "Water-cooled diesel engine draft"],
        ["Electrical system", "Starter, battery, lighting and work-lamp layout — confirm battery/alternator ratings"]
      ],
      crop: [
        ["Cutter bar", "4350 mm / 14 ft draft"],
        ["Crops", "Wheat, barley, paddy, sunflower, maize, pulses and grams"],
        ["Grain tank", "1900 kg / around 2 ton appears in public listings; confirm current model"],
        ["Threshing", "Straw-walker style machine; 6 walkers and 2 sieves listed publicly"],
        ["Capacity", "1.5 acres/hour shown in one dealer listing; update after field confirmation"]
      ],
      drive: [
        ["Front tyre", "18.4 / 30 listed publicly"],
        ["Rear tyre", "9.00 x 16 listed publicly"],
        ["1st gear", "1.5 to 3.5 km/h draft range"],
        ["2nd gear", "3.5 to 9.0 km/h draft range"],
        ["3rd gear", "9.0 to 21.0 km/h draft range"],
        ["Reverse", "3.5 to 9.5 km/h draft range"]
      ],
      service: [
        ["Body material", "Mild steel / steel body listed by public dealer sources"],
        ["Spare parts", "Blades, belts, chains, filters, sieves, bearings, auger parts, tyres, hydraulic parts"],
        ["Service", "Add warranty, on-site service radius, and seasonal check-up details"],
        ["Offer", "Discount text is editable; keep legal terms and validity dates clear"],
        ["Documents", "Add brochure, finance papers, registration support and emission compliance documents"]
      ]
    },
    parts: [
      ["Cutter blades", "Harvesting"], ["Sieves", "Cleaning"], ["Straw walkers", "Separation"], ["Belts & chains", "Drive"],
      ["Filters", "Engine"], ["Bearings", "Service"], ["Tyres", "Traction"], ["Auger parts", "Unloading"]
    ]
  },
  hi: {
    pageTitle: "न्यू हीरा कंबाइन हार्वेस्टर",
    skipLink: "मुख्य सामग्री पर जाएँ",
    brandSub: "फार्म इक्विपमेंट्स",
    menuOpen: "मेनू खोलें",
    navProduct: "प्रोडक्ट",
    navSpecs: "स्पेसिफिकेशन",
    navModels: "2D/3D व्यू",
    navOffers: "ऑफर",
    navEnquiry: "पूछताछ",
    languageLabel: "भाषा",
    themeToggle: "डार्क",
    themeToggleLight: "लाइट",
    heroBadge: "पंजाब में निर्मित • भारतीय खेतों के लिए तैयार",
    heroTitle: "तेज़ और साफ कटाई के लिए न्यू हीरा 985 कंबाइन हार्वेस्टर।",
    heroLead: "मशीन दिखाएँ, स्पेसिफिकेशन समझाएँ, किसानों की पूछताछ लें और सीज़नल डिस्काउंट एक तेज़ लैंडिंग पेज से प्रमोट करें।",
    ctaEnquire: "पूछताछ भेजें",
    ctaViewModel: "3D मॉडल देखें",
    draftSpecsNotice: "ड्राफ्ट स्पेसिफिकेशन बदले जा सकते हैं। प्रकाशित करने से पहले सही मॉडल विवरण कन्फर्म करें।",
    liveModelLabel: "इंटरैक्टिव 3D प्रीव्यू",
    pauseRotate: "रोकें",
    playRotate: "चलाएँ",
    rotateModel: "मॉडल घुमाएँ",
    statCutter: "फीट कटर बार ड्राफ्ट",
    statPower: "HP ड्राफ्ट पावर",
    statWalker: "स्ट्रॉ वॉकर सूचीबद्ध",
    statCrops: "फसलों का समर्थन",
    productEyebrow: "प्रोडक्ट शोकेस",
    productTitle: "मशीन को विज़ुअल तरीके से बेचने वाला लैंडिंग पेज।",
    productLead: "किसान इंजन, कटर बार, टायर, अनाज हैंडलिंग, गियर, स्पेयर पार्ट्स और सर्विस सपोर्ट जल्दी समझ सकते हैं।",
    specsEyebrow: "तकनीकी जानकारी",
    specsTitle: "न्यू हीरा 985 के लिए एडिटेबल ड्राफ्ट स्पेसिफिकेशन।",
    specsLead: "इन्हें शुरुआत के तौर पर इस्तेमाल करें। आपके पिता नवीनतम मॉडल, इंजन, उत्सर्जन, कीमत और ऑफर शर्तें कन्फर्म कर दें तो सब बदल दें।",
    tabPower: "पावर",
    tabCrop: "फसल",
    tabDrive: "ड्राइव",
    tabService: "सर्विस",
    specPanelTitle: "पावर और इंजन",
    specSearchPlaceholder: "स्पेक्स खोजें",
    noSpecResults: "मिलते-जुलते स्पेक्स नहीं मिले।",
    brochureTitle: "ब्रोशर के लिए तैयार",
    brochureLead: "यह पेज बाद में ब्रोशर PDF बन सकता है। अभी पूरा टेक्स्ट एक JavaScript फाइल से डायनामिक है।",
    brochureCta: "कीमत पूछें",
    modelsEyebrow: "2D + 3D मॉडल",
    modelsTitle: "इंटरैक्टिव विज़ुअल्स से मशीन समझाएँ।",
    modelsLead: "3D प्रीव्यू हल्का कैनवास मॉडल है। 2D डायग्राम भारी फाइलों के बिना जरूरी पार्ट्स दिखाता है।",
    diagramTitle: "2D पार्ट डायग्राम",
    highlightParts: "पार्ट्स हाईलाइट करें",
    partsTitle: "स्पेयर पार्ट्स फोकस",
    partsLead: "यहाँ असली स्पेयर पार्ट्स, सर्विस और सीज़नल मेंटेनेंस किट की उपलब्धता प्रमोट करें।",
    callEngine: "इंजन",
    callCutter: "कटर बार",
    callTank: "ग्रेन टैंक",
    callTyres: "टायर",
    callAuger: "अनलोडिंग ऑगर",
    offersEyebrow: "सीज़नल ऑफर",
    offersTitle: "डिज़ाइन बदले बिना डिस्काउंट कैंपेन बनाएँ।",
    offersLead: "आपके पिता सही राशि कन्फर्म कर दें तो कैंपेन अमाउंट एक जगह अपडेट करें। पूछताछ फॉर्म किसान द्वारा चुना गया ऑफर सेव करेगा।",
    offerTag: "सीमित बुकिंग लाभ",
    offerHeadline: "बुकिंग डिस्काउंट",
    offerSubline: "ड्राफ्ट कैंपेन टेक्स्ट। प्रकाशित करने से पहले कन्फर्म करें।",
    offerPoint1: "प्राथमिकता डिलीवरी चर्चा",
    offerPoint2: "सर्विस टीम कॉलबैक",
    offerPoint3: "स्पेयर पार्ट्स उपलब्धता चेक",
    discountLabel: "डिस्काउंट राशि",
    applyOffer: "यह ऑफर पूछताछ में लगाएँ",
    offerApplied: "ऑफर पूछताछ फॉर्म में जोड़ दिया गया।",
    enquiryEyebrow: "किसान पूछताछ",
    enquiryTitle: "लीड्स सीधे Firebase में कैप्चर करें।",
    enquiryLead: "बाद में Firebase config पेस्ट करें। तब तक सबमिशन टेस्टिंग के लिए इस ब्राउज़र में सेव होंगे।",
    fieldName: "पूरा नाम",
    fieldNamePlaceholder: "किसान का नाम",
    fieldPhone: "फोन / WhatsApp",
    fieldPhonePlaceholder: "+91 98765 43210",
    fieldDistrict: "जिला",
    fieldDistrictPlaceholder: "उदाहरण: पटियाला",
    fieldState: "राज्य",
    fieldCrop: "मुख्य फसल",
    fieldOffer: "चुना गया ऑफर",
    fieldMessage: "जरूरत",
    fieldMessagePlaceholder: "मॉडल, फसल, लोकेशन और खरीदने का समय बताइए",
    consentText: "मैं सहमत हूँ कि न्यू हीरा टीम इस पूछताछ के बारे में मुझसे संपर्क करे।",
    submitEnquiry: "पूछताछ सबमिट करें",
    statePunjab: "पंजाब",
    stateHaryana: "हरियाणा",
    stateRajasthan: "राजस्थान",
    stateUP: "उत्तर प्रदेश",
    stateOther: "अन्य",
    cropWheat: "गेहूँ",
    cropPaddy: "धान",
    cropMaize: "मक्का",
    cropOther: "अन्य",
    statusSubmitting: "पूछताछ भेजी जा रही है...",
    statusSubmitted: "पूछताछ सबमिट हो गई। टीम इसे Firebase में देख सकती है।",
    statusSavedLocal: "Firebase अभी कनेक्ट नहीं है, इसलिए यह पूछताछ टेस्टिंग के लिए इस ब्राउज़र में सेव हुई है।",
    statusError: "कुछ गलत हुआ। Firebase सेटअप चेक करें या फिर कोशिश करें।",
    contactTitle: "सेल्स से बात करें",
    contactLead: "पब्लिश करने से पहले यहाँ असली फोन, WhatsApp, ईमेल और पता डालें।",
    contactPhoneLabel: "फोन",
    contactLocationLabel: "लोकेशन",
    contactLocation: "नाभा, पंजाब",
    contactHoursLabel: "समय",
    contactHours: "सोम–शनि, सुबह 9–शाम 6",
    footerText: "कंबाइन हार्वेस्टर प्रमोशन के लिए डायनामिक वेबसाइट ड्राफ्ट।",
    backTop: "ऊपर जाएँ",
    specTitles: {
      power: "पावर और इंजन",
      crop: "फसल और क्षमता",
      drive: "ड्राइव और टायर",
      service: "सर्विस और पार्ट्स"
    },
    features: [
      { icon: "⚙️", title: "इंजन जानकारी", body: "पावर, सिलेंडर, कूलिंग, उत्सर्जन मानक और फ्यूल विवरण साफ कार्ड में दिखाएँ।" },
      { icon: "🌾", title: "मल्टी-क्रॉप उपयोग", body: "गेहूँ, धान, जौ, मक्का, सूरजमुखी, दालें और चने का समर्थन दिखाएँ।" },
      { icon: "🛞", title: "टायर और ड्राइव", body: "फील्ड ट्रैक्शन, रियर स्टीयरिंग टायर, गियर रेंज और रिवर्स मूवमेंट समझाएँ।" },
      { icon: "🧰", title: "स्पेयर पार्ट्स", body: "कटर बार, ब्लेड, सिव, बेल्ट, फिल्टर, वॉकर, ऑगर और मेंटेनेंस किट प्रमोट करें।" }
    ],
    specs: {
      power: [
        ["मॉडल", "न्यू हीरा 985 सेल्फ-प्रोपेल्ड कंबाइन हार्वेस्टर"],
        ["इंजन", "Ashok Leyland 412 टर्बो चार्ज्ड, TREM III सार्वजनिक रूप से सूचीबद्ध; नवीनतम BS/TREM वर्जन कन्फर्म करें"],
        ["पावर", "एक सार्वजनिक स्रोत पर 128 HP @ 2200 RPM; दूसरी लिस्टिंग में 133 HP दिखता है"],
        ["कूलिंग", "वॉटर-कूल्ड डीज़ल इंजन ड्राफ्ट"],
        ["इलेक्ट्रिकल सिस्टम", "स्टार्टर, बैटरी, लाइटिंग और वर्क-लैंप लेआउट — बैटरी/अल्टरनेटर रेटिंग कन्फर्म करें"]
      ],
      crop: [
        ["कटर बार", "4350 mm / 14 ft ड्राफ्ट"],
        ["फसलें", "गेहूँ, जौ, धान, सूरजमुखी, मक्का, दालें और चने"],
        ["ग्रेन टैंक", "1900 kg / लगभग 2 टन सार्वजनिक लिस्टिंग में दिखता है; वर्तमान मॉडल कन्फर्म करें"],
        ["थ्रेशिंग", "स्ट्रॉ-वॉकर स्टाइल मशीन; 6 वॉकर और 2 सिव सार्वजनिक रूप से सूचीबद्ध"],
        ["क्षमता", "एक डीलर लिस्टिंग में 1.5 acre/hour; फील्ड कन्फर्मेशन के बाद अपडेट करें"]
      ],
      drive: [
        ["फ्रंट टायर", "18.4 / 30 सार्वजनिक रूप से सूचीबद्ध"],
        ["रियर टायर", "9.00 x 16 सार्वजनिक रूप से सूचीबद्ध"],
        ["पहला गियर", "1.5 से 3.5 km/h ड्राफ्ट रेंज"],
        ["दूसरा गियर", "3.5 से 9.0 km/h ड्राफ्ट रेंज"],
        ["तीसरा गियर", "9.0 से 21.0 km/h ड्राफ्ट रेंज"],
        ["रिवर्स", "3.5 से 9.5 km/h ड्राफ्ट रेंज"]
      ],
      service: [
        ["बॉडी मटेरियल", "पब्लिक डीलर स्रोतों में माइल्ड स्टील / स्टील बॉडी सूचीबद्ध"],
        ["स्पेयर पार्ट्स", "ब्लेड, बेल्ट, चेन, फिल्टर, सिव, बेयरिंग, ऑगर पार्ट्स, टायर, हाइड्रोलिक पार्ट्स"],
        ["सर्विस", "वारंटी, ऑन-साइट सर्विस रेंज और सीज़नल चेक-अप जानकारी जोड़ें"],
        ["ऑफर", "डिस्काउंट टेक्स्ट एडिटेबल है; नियम और वैलिडिटी तारीख साफ रखें"],
        ["दस्तावेज़", "ब्रोशर, फाइनेंस पेपर, रजिस्ट्रेशन सपोर्ट और उत्सर्जन अनुपालन दस्तावेज़ जोड़ें"]
      ]
    },
    parts: [
      ["कटर ब्लेड", "कटाई"], ["सिव", "सफाई"], ["स्ट्रॉ वॉकर", "सेपरेशन"], ["बेल्ट और चेन", "ड्राइव"],
      ["फिल्टर", "इंजन"], ["बेयरिंग", "सर्विस"], ["टायर", "ट्रैक्शन"], ["ऑगर पार्ट्स", "अनलोडिंग"]
    ]
  },
  pa: {
    pageTitle: "ਨਿਊ ਹੀਰਾ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ",
    skipLink: "ਮੁੱਖ ਸਮੱਗਰੀ ਤੇ ਜਾਓ",
    brandSub: "ਫਾਰਮ ਇਕੁਇਪਮੈਂਟਸ",
    menuOpen: "ਮੇਨੂ ਖੋਲ੍ਹੋ",
    navProduct: "ਪ੍ਰੋਡਕਟ",
    navSpecs: "ਸਪੈੱਕਸ",
    navModels: "2D/3D ਵਿਊ",
    navOffers: "ਆਫਰ",
    navEnquiry: "ਪੁੱਛਗਿੱਛ",
    languageLabel: "ਭਾਸ਼ਾ",
    themeToggle: "ਡਾਰਕ",
    themeToggleLight: "ਲਾਈਟ",
    heroBadge: "ਪੰਜਾਬ ਵਿੱਚ ਬਣੀ • ਭਾਰਤੀ ਖੇਤਾਂ ਲਈ ਤਿਆਰ",
    heroTitle: "ਤੇਜ਼ ਅਤੇ ਸਾਫ਼ ਕਟਾਈ ਲਈ ਨਿਊ ਹੀਰਾ 985 ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ।",
    heroLead: "ਮਸ਼ੀਨ ਦਿਖਾਓ, ਸਪੈੱਕਸ ਸਮਝਾਓ, ਕਿਸਾਨਾਂ ਦੀ ਪੁੱਛਗਿੱਛ ਲਵੋ ਅਤੇ ਸੀਜ਼ਨਲ ਡਿਸਕਾਊਂਟ ਇੱਕ ਤੇਜ਼ ਲੈਂਡਿੰਗ ਪੇਜ ਤੋਂ ਪ੍ਰਮੋਟ ਕਰੋ।",
    ctaEnquire: "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
    ctaViewModel: "3D ਮਾਡਲ ਵੇਖੋ",
    draftSpecsNotice: "ਡਰਾਫਟ ਸਪੈੱਕਸ ਬਦਲੇ ਜਾ ਸਕਦੇ ਹਨ। ਪਬਲਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਹੀ ਮਾਡਲ ਵੇਰਵੇ ਕਨਫਰਮ ਕਰੋ।",
    liveModelLabel: "ਇੰਟਰਐਕਟਿਵ 3D ਪ੍ਰੀਵਿਊ",
    pauseRotate: "ਰੋਕੋ",
    playRotate: "ਚਲਾਓ",
    rotateModel: "ਮਾਡਲ ਘੁਮਾਓ",
    statCutter: "ਫੁੱਟ ਕਟਰ ਬਾਰ ਡਰਾਫਟ",
    statPower: "HP ਡਰਾਫਟ ਪਾਵਰ",
    statWalker: "ਸਟ੍ਰਾ ਵਾਕਰ ਲਿਸਟਡ",
    statCrops: "ਫਸਲਾਂ ਸਪੋਰਟਡ",
    productEyebrow: "ਪ੍ਰੋਡਕਟ ਸ਼ੋਕੇਸ",
    productTitle: "ਮਸ਼ੀਨ ਨੂੰ ਵਿਜ਼ੁਅਲ ਤਰੀਕੇ ਨਾਲ ਵੇਚਣ ਵਾਲਾ ਲੈਂਡਿੰਗ ਪੇਜ।",
    productLead: "ਕਿਸਾਨ ਇੰਜਣ, ਕਟਰ ਬਾਰ, ਟਾਇਰ, ਅਨਾਜ ਹੈਂਡਲਿੰਗ, ਗੀਅਰ, ਸਪੇਅਰ ਪਾਰਟਸ ਅਤੇ ਸਰਵਿਸ ਸਪੋਰਟ ਜਲਦੀ ਸਮਝ ਸਕਦੇ ਹਨ।",
    specsEyebrow: "ਤਕਨੀਕੀ ਵੇਰਵੇ",
    specsTitle: "ਨਿਊ ਹੀਰਾ 985 ਲਈ ਐਡਿਟੇਬਲ ਡਰਾਫਟ ਸਪੈੱਕਸ।",
    specsLead: "ਇਨ੍ਹਾਂ ਨੂੰ ਸ਼ੁਰੂਆਤ ਵਜੋਂ ਵਰਤੋ। ਤੁਹਾਡੇ ਪਿਤਾ ਜੀ ਨਵਾਂ ਮਾਡਲ, ਇੰਜਣ, ਐਮਿਸ਼ਨ, ਕੀਮਤ ਅਤੇ ਆਫਰ ਸ਼ਰਤਾਂ ਕਨਫਰਮ ਕਰ ਦੇਣ ਤਾਂ ਅਪਡੇਟ ਕਰ ਦਿਓ।",
    tabPower: "ਪਾਵਰ",
    tabCrop: "ਫਸਲ",
    tabDrive: "ਡਰਾਈਵ",
    tabService: "ਸਰਵਿਸ",
    specPanelTitle: "ਪਾਵਰ ਅਤੇ ਇੰਜਣ",
    specSearchPlaceholder: "ਸਪੈੱਕਸ ਖੋਜੋ",
    noSpecResults: "ਮਿਲਦੇ ਸਪੈੱਕਸ ਨਹੀਂ ਮਿਲੇ।",
    brochureTitle: "ਬਰੋਸ਼ਰ ਲਈ ਤਿਆਰ",
    brochureLead: "ਇਹ ਪੇਜ ਬਾਅਦ ਵਿੱਚ ਬਰੋਸ਼ਰ PDF ਬਣ ਸਕਦਾ ਹੈ। ਹੁਣ ਸਾਰਾ ਟੈਕਸਟ ਇੱਕ JavaScript ਫਾਈਲ ਤੋਂ ਡਾਇਨਾਮਿਕ ਹੈ।",
    brochureCta: "ਕੀਮਤ ਪੁੱਛੋ",
    modelsEyebrow: "2D + 3D ਮਾਡਲ",
    modelsTitle: "ਇੰਟਰਐਕਟਿਵ ਵਿਜ਼ੁਅਲ ਨਾਲ ਮਸ਼ੀਨ ਸਮਝਾਓ।",
    modelsLead: "3D ਪ੍ਰੀਵਿਊ ਹਲਕਾ ਕੈਨਵਸ ਮਾਡਲ ਹੈ। 2D ਡਾਇਗ੍ਰਾਮ ਭਾਰੀ ਫਾਈਲਾਂ ਤੋਂ ਬਿਨਾਂ ਜ਼ਰੂਰੀ ਪਾਰਟਸ ਦਿਖਾਉਂਦਾ ਹੈ।",
    diagramTitle: "2D ਪਾਰਟ ਡਾਇਗ੍ਰਾਮ",
    highlightParts: "ਪਾਰਟਸ ਹਾਈਲਾਈਟ ਕਰੋ",
    partsTitle: "ਸਪੇਅਰ ਪਾਰਟਸ ਫੋਕਸ",
    partsLead: "ਇਥੇ ਅਸਲੀ ਸਪੇਅਰ ਪਾਰਟਸ, ਸਰਵਿਸ ਅਤੇ ਸੀਜ਼ਨਲ ਮੈਨਟੇਨੈਂਸ ਕਿੱਟਾਂ ਦੀ ਉਪਲਬਧਤਾ ਪ੍ਰਮੋਟ ਕਰੋ।",
    callEngine: "ਇੰਜਣ",
    callCutter: "ਕਟਰ ਬਾਰ",
    callTank: "ਗ੍ਰੇਨ ਟੈਂਕ",
    callTyres: "ਟਾਇਰ",
    callAuger: "ਅਨਲੋਡਿੰਗ ਆਗਰ",
    offersEyebrow: "ਸੀਜ਼ਨਲ ਆਫਰ",
    offersTitle: "ਡਿਜ਼ਾਇਨ ਬਦਲੇ ਬਿਨਾਂ ਡਿਸਕਾਊਂਟ ਕੈਂਪੇਨ ਬਣਾਓ।",
    offersLead: "ਤੁਹਾਡੇ ਪਿਤਾ ਜੀ ਸਹੀ ਰਕਮ ਕਨਫਰਮ ਕਰ ਦੇਣ ਤਾਂ ਕੈਂਪੇਨ ਰਕਮ ਇੱਕ ਥਾਂ ਅਪਡੇਟ ਕਰੋ। ਪੁੱਛਗਿੱਛ ਫਾਰਮ ਕਿਸਾਨ ਵੱਲੋਂ ਚੁਣਿਆ ਆਫਰ ਸੇਵ ਕਰੇਗਾ।",
    offerTag: "ਸੀਮਿਤ ਬੁਕਿੰਗ ਲਾਭ",
    offerHeadline: "ਬੁਕਿੰਗ ਡਿਸਕਾਊਂਟ",
    offerSubline: "ਡਰਾਫਟ ਕੈਂਪੇਨ ਟੈਕਸਟ। ਪਬਲਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕਨਫਰਮ ਕਰੋ।",
    offerPoint1: "ਪ੍ਰਾਇਰਟੀ ਡਿਲਿਵਰੀ ਗੱਲਬਾਤ",
    offerPoint2: "ਸਰਵਿਸ ਟੀਮ ਕਾਲਬੈਕ",
    offerPoint3: "ਸਪੇਅਰ ਪਾਰਟਸ ਉਪਲਬਧਤਾ ਚੈਕ",
    discountLabel: "ਡਿਸਕਾਊਂਟ ਰਕਮ",
    applyOffer: "ਇਹ ਆਫਰ ਪੁੱਛਗਿੱਛ ਵਿੱਚ ਲਗਾਓ",
    offerApplied: "ਆਫਰ ਪੁੱਛਗਿੱਛ ਫਾਰਮ ਵਿੱਚ ਜੋੜ ਦਿੱਤਾ ਗਿਆ।",
    enquiryEyebrow: "ਕਿਸਾਨ ਪੁੱਛਗਿੱਛ",
    enquiryTitle: "ਲੀਡਸ ਸਿੱਧਾ Firebase ਵਿੱਚ ਕੈਪਚਰ ਕਰੋ।",
    enquiryLead: "ਬਾਅਦ ਵਿੱਚ Firebase config ਪੇਸਟ ਕਰੋ। ਉਦੋਂ ਤੱਕ ਸਬਮਿਸ਼ਨ ਟੈਸਟਿੰਗ ਲਈ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਹੋਣਗੇ।",
    fieldName: "ਪੂਰਾ ਨਾਮ",
    fieldNamePlaceholder: "ਕਿਸਾਨ ਦਾ ਨਾਮ",
    fieldPhone: "ਫੋਨ / WhatsApp",
    fieldPhonePlaceholder: "+91 98765 43210",
    fieldDistrict: "ਜ਼ਿਲ੍ਹਾ",
    fieldDistrictPlaceholder: "ਉਦਾਹਰਨ: ਪਟਿਆਲਾ",
    fieldState: "ਰਾਜ",
    fieldCrop: "ਮੁੱਖ ਫਸਲ",
    fieldOffer: "ਚੁਣਿਆ ਆਫਰ",
    fieldMessage: "ਲੋੜ",
    fieldMessagePlaceholder: "ਮਾਡਲ, ਫਸਲ, ਲੋਕੇਸ਼ਨ ਅਤੇ ਖਰੀਦਣ ਦਾ ਸਮਾਂ ਦੱਸੋ",
    consentText: "ਮੈਂ ਸਹਿਮਤ ਹਾਂ ਕਿ ਨਿਊ ਹੀਰਾ ਟੀਮ ਇਸ ਪੁੱਛਗਿੱਛ ਬਾਰੇ ਮੇਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇ।",
    submitEnquiry: "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਕਰੋ",
    statePunjab: "ਪੰਜਾਬ",
    stateHaryana: "ਹਰਿਆਣਾ",
    stateRajasthan: "ਰਾਜਸਥਾਨ",
    stateUP: "ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
    stateOther: "ਹੋਰ",
    cropWheat: "ਕਣਕ",
    cropPaddy: "ਝੋਨਾ",
    cropMaize: "ਮੱਕੀ",
    cropOther: "ਹੋਰ",
    statusSubmitting: "ਪੁੱਛਗਿੱਛ ਭੇਜੀ ਜਾ ਰਹੀ ਹੈ...",
    statusSubmitted: "ਪੁੱਛਗਿੱਛ ਸਬਮਿਟ ਹੋ ਗਈ। ਟੀਮ ਇਸਨੂੰ Firebase ਵਿੱਚ ਦੇਖ ਸਕਦੀ ਹੈ।",
    statusSavedLocal: "Firebase ਹਾਲੇ ਕਨੈਕਟ ਨਹੀਂ, ਇਸ ਲਈ ਇਹ ਪੁੱਛਗਿੱਛ ਟੈਸਟਿੰਗ ਲਈ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਹੋਈ ਹੈ।",
    statusError: "ਕੁਝ ਗਲਤ ਹੋਇਆ। Firebase ਸੈੱਟਅੱਪ ਚੈਕ ਕਰੋ ਜਾਂ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    contactTitle: "ਸੇਲਜ਼ ਨਾਲ ਗੱਲ ਕਰੋ",
    contactLead: "ਪਬਲਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਥੇ ਅਸਲੀ ਫੋਨ, WhatsApp, ਈਮੇਲ ਅਤੇ ਪਤਾ ਪਾਓ।",
    contactPhoneLabel: "ਫੋਨ",
    contactLocationLabel: "ਲੋਕੇਸ਼ਨ",
    contactLocation: "ਨਾਭਾ, ਪੰਜਾਬ",
    contactHoursLabel: "ਸਮਾਂ",
    contactHours: "ਸੋਮ–ਸ਼ਨੀ, ਸਵੇਰੇ 9–ਸ਼ਾਮ 6",
    footerText: "ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ ਪ੍ਰਮੋਸ਼ਨ ਲਈ ਡਾਇਨਾਮਿਕ ਵੈੱਬਸਾਈਟ ਡਰਾਫਟ।",
    backTop: "ਉੱਪਰ ਜਾਓ",
    specTitles: {
      power: "ਪਾਵਰ ਅਤੇ ਇੰਜਣ",
      crop: "ਫਸਲ ਅਤੇ ਸਮਰੱਥਾ",
      drive: "ਡਰਾਈਵ ਅਤੇ ਟਾਇਰ",
      service: "ਸਰਵਿਸ ਅਤੇ ਪਾਰਟਸ"
    },
    features: [
      { icon: "⚙️", title: "ਇੰਜਣ ਜਾਣਕਾਰੀ", body: "ਪਾਵਰ, ਸਿਲਿੰਡਰ, ਕੂਲਿੰਗ, ਐਮਿਸ਼ਨ ਸਟੈਂਡਰਡ ਅਤੇ ਫਿਊਲ ਵੇਰਵੇ ਸਾਫ ਕਾਰਡਾਂ ਵਿੱਚ ਦਿਖਾਓ।" },
      { icon: "🌾", title: "ਮਲਟੀ-ਕ੍ਰਾਪ ਵਰਤੋਂ", body: "ਕਣਕ, ਝੋਨਾ, ਜੌ, ਮੱਕੀ, ਸੂਰਜਮੁਖੀ, ਦਾਲਾਂ ਅਤੇ ਚਣਿਆਂ ਦਾ ਸਪੋਰਟ ਦਿਖਾਓ।" },
      { icon: "🛞", title: "ਟਾਇਰ ਅਤੇ ਡਰਾਈਵ", body: "ਫੀਲਡ ਟ੍ਰੈਕਸ਼ਨ, ਰੀਅਰ ਸਟੀਅਰਿੰਗ ਟਾਇਰ, ਗੀਅਰ ਰੇਂਜ ਅਤੇ ਰਿਵਰਸ ਮੂਵਮੈਂਟ ਸਮਝਾਓ।" },
      { icon: "🧰", title: "ਸਪੇਅਰ ਪਾਰਟਸ", body: "ਕਟਰ ਬਾਰ, ਬਲੇਡ, ਸਿਵ, ਬੈਲਟ, ਫਿਲਟਰ, ਵਾਕਰ, ਆਗਰ ਅਤੇ ਮੈਨਟੇਨੈਂਸ ਕਿੱਟ ਪ੍ਰਮੋਟ ਕਰੋ।" }
    ],
    specs: {
      power: [
        ["ਮਾਡਲ", "ਨਿਊ ਹੀਰਾ 985 ਸੈਲਫ-ਪ੍ਰੋਪੈਲਡ ਕੰਬਾਈਨ ਹਾਰਵੇਸਟਰ"],
        ["ਇੰਜਣ", "Ashok Leyland 412 ਟਰਬੋ ਚਾਰਜਡ, TREM III ਪਬਲਿਕ ਤੌਰ ਤੇ ਲਿਸਟਡ; ਨਵਾਂ BS/TREM ਵਰਜਨ ਕਨਫਰਮ ਕਰੋ"],
        ["ਪਾਵਰ", "ਇੱਕ ਪਬਲਿਕ ਸਰੋਤ ਤੇ 128 HP @ 2200 RPM; ਦੂਜੀ ਲਿਸਟਿੰਗ ਵਿੱਚ 133 HP ਦਿਖਦਾ ਹੈ"],
        ["ਕੂਲਿੰਗ", "ਵਾਟਰ-ਕੂਲਡ ਡੀਜ਼ਲ ਇੰਜਣ ਡਰਾਫਟ"],
        ["ਇਲੈਕਟ੍ਰਿਕ ਸਿਸਟਮ", "ਸਟਾਰਟਰ, ਬੈਟਰੀ, ਲਾਈਟਿੰਗ ਅਤੇ ਵਰਕ-ਲੈਂਪ ਲੇਆਉਟ — ਬੈਟਰੀ/ਅਲਟਰਨੇਟਰ ਰੇਟਿੰਗ ਕਨਫਰਮ ਕਰੋ"]
      ],
      crop: [
        ["ਕਟਰ ਬਾਰ", "4350 mm / 14 ft ਡਰਾਫਟ"],
        ["ਫਸਲਾਂ", "ਕਣਕ, ਜੌ, ਝੋਨਾ, ਸੂਰਜਮੁਖੀ, ਮੱਕੀ, ਦਾਲਾਂ ਅਤੇ ਚਣੇ"],
        ["ਗ੍ਰੇਨ ਟੈਂਕ", "1900 kg / ਲਗਭਗ 2 ਟਨ ਪਬਲਿਕ ਲਿਸਟਿੰਗ ਵਿੱਚ ਦਿਖਦਾ ਹੈ; ਮੌਜੂਦਾ ਮਾਡਲ ਕਨਫਰਮ ਕਰੋ"],
        ["ਥ੍ਰੈਸ਼ਿੰਗ", "ਸਟ੍ਰਾ-ਵਾਕਰ ਸਟਾਈਲ ਮਸ਼ੀਨ; 6 ਵਾਕਰ ਅਤੇ 2 ਸਿਵ ਪਬਲਿਕ ਤੌਰ ਤੇ ਲਿਸਟਡ"],
        ["ਸਮਰੱਥਾ", "ਇੱਕ ਡੀਲਰ ਲਿਸਟਿੰਗ ਵਿੱਚ 1.5 acre/hour; ਫੀਲਡ ਕਨਫਰਮੇਸ਼ਨ ਤੋਂ ਬਾਅਦ ਅਪਡੇਟ ਕਰੋ"]
      ],
      drive: [
        ["ਫਰੰਟ ਟਾਇਰ", "18.4 / 30 ਪਬਲਿਕ ਤੌਰ ਤੇ ਲਿਸਟਡ"],
        ["ਰੀਅਰ ਟਾਇਰ", "9.00 x 16 ਪਬਲਿਕ ਤੌਰ ਤੇ ਲਿਸਟਡ"],
        ["ਪਹਿਲਾ ਗੀਅਰ", "1.5 ਤੋਂ 3.5 km/h ਡਰਾਫਟ ਰੇਂਜ"],
        ["ਦੂਜਾ ਗੀਅਰ", "3.5 ਤੋਂ 9.0 km/h ਡਰਾਫਟ ਰੇਂਜ"],
        ["ਤੀਜਾ ਗੀਅਰ", "9.0 ਤੋਂ 21.0 km/h ਡਰਾਫਟ ਰੇਂਜ"],
        ["ਰਿਵਰਸ", "3.5 ਤੋਂ 9.5 km/h ਡਰਾਫਟ ਰੇਂਜ"]
      ],
      service: [
        ["ਬਾਡੀ ਮਟੀਰੀਅਲ", "ਪਬਲਿਕ ਡੀਲਰ ਸਰੋਤਾਂ ਵਿੱਚ ਮਾਈਲਡ ਸਟੀਲ / ਸਟੀਲ ਬਾਡੀ ਲਿਸਟਡ"],
        ["ਸਪੇਅਰ ਪਾਰਟਸ", "ਬਲੇਡ, ਬੈਲਟ, ਚੇਨ, ਫਿਲਟਰ, ਸਿਵ, ਬੇਅਰਿੰਗ, ਆਗਰ ਪਾਰਟਸ, ਟਾਇਰ, ਹਾਈਡਰੌਲਿਕ ਪਾਰਟਸ"],
        ["ਸਰਵਿਸ", "ਵਾਰੰਟੀ, ਔਨ-ਸਾਈਟ ਸਰਵਿਸ ਰੇਂਜ ਅਤੇ ਸੀਜ਼ਨਲ ਚੈਕ-ਅੱਪ ਵੇਰਵੇ ਜੋੜੋ"],
        ["ਆਫਰ", "ਡਿਸਕਾਊਂਟ ਟੈਕਸਟ ਐਡਿਟੇਬਲ ਹੈ; ਨਿਯਮ ਅਤੇ ਵੈਲਿਡਿਟੀ ਤਾਰੀਖ ਸਾਫ ਰੱਖੋ"],
        ["ਦਸਤਾਵੇਜ਼", "ਬਰੋਸ਼ਰ, ਫਾਇਨੈਂਸ ਪੇਪਰ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਪੋਰਟ ਅਤੇ ਐਮਿਸ਼ਨ ਕੰਪਲਾਇੰਸ ਦਸਤਾਵੇਜ਼ ਜੋੜੋ"]
      ]
    },
    parts: [
      ["ਕਟਰ ਬਲੇਡ", "ਕਟਾਈ"], ["ਸਿਵ", "ਸਫਾਈ"], ["ਸਟ੍ਰਾ ਵਾਕਰ", "ਵੱਖਰਾ ਕਰਨਾ"], ["ਬੈਲਟ ਅਤੇ ਚੇਨ", "ਡਰਾਈਵ"],
      ["ਫਿਲਟਰ", "ਇੰਜਣ"], ["ਬੇਅਰਿੰਗ", "ਸਰਵਿਸ"], ["ਟਾਇਰ", "ਟ੍ਰੈਕਸ਼ਨ"], ["ਆਗਰ ਪਾਰਟਸ", "ਅਨਲੋਡਿੰਗ"]
    ]
  }
};

let lang = localStorage.getItem("nh-language") || "en";
let activeSpecTab = "power";
let firebaseDb = null;
let addDocRef = null;
let collectionRef = null;
let serverTimestampRef = null;
let firebaseReady = false;
let autoRotate = true;
let modelAngle = 25;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const t = (key) => translations[lang][key] ?? translations.en[key] ?? key;
const current = () => translations[lang] || translations.en;

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(amount));
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.title = t("pageTitle");

  $$('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    node.textContent = t(key);
  });

  $$('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    node.setAttribute('placeholder', t(key));
  });

  $$('[data-i18n-aria]').forEach((node) => {
    const key = node.getAttribute('data-i18n-aria');
    node.setAttribute('aria-label', t(key));
  });

  $$('[data-svg-i18n]').forEach((node) => {
    const key = node.getAttribute('data-svg-i18n');
    node.textContent = t(key);
  });

  $('#themeToggle').textContent = document.documentElement.dataset.theme === 'dark' ? t('themeToggleLight') : t('themeToggle');
  $('#autoRotateBtn').textContent = autoRotate ? t('pauseRotate') : t('playRotate');
  renderFeatures();
  renderSpecs();
  renderParts();
  updateOfferText();
}

function renderFeatures() {
  const grid = $('#featureGrid');
  grid.innerHTML = current().features.map((feature) => `
    <article class="feature-card reveal in-view">
      <span class="feature-icon" aria-hidden="true">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p>${feature.body}</p>
    </article>
  `).join('');
}

function renderSpecs() {
  const table = $('#specTable');
  const query = ($('#specSearch').value || '').trim().toLowerCase();
  $('#specPanelTitle').textContent = current().specTitles[activeSpecTab];
  const rows = current().specs[activeSpecTab]
    .filter(([label, value]) => `${label} ${value}`.toLowerCase().includes(query));

  if (!rows.length) {
    table.innerHTML = `<p class="form-status">${t('noSpecResults')}</p>`;
    return;
  }

  table.innerHTML = rows.map(([label, value]) => `
    <div class="spec-row">
      <strong>${label}</strong>
      <span>${value}</span>
    </div>
  `).join('');
}

function renderParts() {
  $('#partsList').innerHTML = current().parts.map(([name, type]) => `
    <div class="part-pill">
      <strong>${name}</strong>
      <small>${type}</small>
    </div>
  `).join('');
}

function updateOfferText() {
  const amount = Number($('#discountAmount').value || 100000);
  const formatted = formatINR(amount);
  $('#discountOutput').textContent = formatted;
  $('#offerHeadline').textContent = `${formatted} ${t('offerHeadline')}`;
  $('#offerInput').value = formatted;
}

function wireLanguage() {
  const select = $('#languageSelect');
  select.value = lang;
  select.addEventListener('change', () => {
    lang = select.value;
    localStorage.setItem('nh-language', lang);
    applyTranslations();
  });
}

function wireTheme() {
  const saved = localStorage.getItem('nh-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('nh-theme', next);
    applyTranslations();
  });
}

function wireMenu() {
  const btn = $('.menu-toggle');
  const nav = $('#primaryNav');
  btn.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

function wireSpecs() {
  $$('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeSpecTab = tab.dataset.specTab;
      $$('.tab').forEach((item) => {
        item.classList.toggle('active', item === tab);
        item.setAttribute('aria-selected', String(item === tab));
      });
      renderSpecs();
    });
  });
  $('#specSearch').addEventListener('input', renderSpecs);
}

function wireOffer() {
  $('#discountAmount').addEventListener('input', updateOfferText);
  $('#applyOfferBtn').addEventListener('click', () => {
    updateOfferText();
    $('#formStatus').textContent = t('offerApplied');
    $('#enquiry').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function wireDiagram() {
  $('#highlightPartsBtn').addEventListener('click', () => {
    $('.harvester-diagram').classList.toggle('highlight');
  });
}

function wireRevealAndCounters() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.14 });
  $$('.reveal').forEach((node) => revealObserver.observe(node));

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = 'true';
      const target = Number(entry.target.dataset.counter);
      const start = performance.now();
      const duration = 950;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        entry.target.textContent = Math.round(target * progress).toString();
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  $$('[data-counter]').forEach((node) => counterObserver.observe(node));
}

async function initFirebase() {
  const configured = enableFirebase && firebaseConfig?.projectId && !firebaseConfig.projectId.includes('PASTE');
  if (!configured) return;
  try {
    const appModule = await import('https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js');
    const firestoreModule = await import('https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js');
    const app = appModule.initializeApp(firebaseConfig);
    firebaseDb = firestoreModule.getFirestore(app);
    addDocRef = firestoreModule.addDoc;
    collectionRef = firestoreModule.collection;
    serverTimestampRef = firestoreModule.serverTimestamp;
    firebaseReady = true;
  } catch (error) {
    console.warn('Firebase could not initialize. Falling back to localStorage.', error);
  }
}

function getLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem('nh-leads') || '[]');
  } catch {
    return [];
  }
}

async function submitLead(lead) {
  if (firebaseReady) {
    await addDocRef(collectionRef(firebaseDb, leadsCollectionName), {
      ...lead,
      createdAt: serverTimestampRef()
    });
    return 'firebase';
  }
  const leads = getLocalLeads();
  leads.push({ ...lead, createdAt: new Date().toISOString() });
  localStorage.setItem('nh-leads', JSON.stringify(leads));
  return 'local';
}

function wireForm() {
  $('#enquiryForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    const lead = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      district: (data.district || '').trim(),
      state: data.state || '',
      crop: data.crop || '',
      offer: data.offer || '',
      message: (data.message || '').trim().slice(0, 800),
      language: lang,
      source: 'new-hira-landing-page',
      userAgent: navigator.userAgent.slice(0, 180)
    };

    $('#formStatus').textContent = t('statusSubmitting');
    try {
      const mode = await submitLead(lead);
      $('#formStatus').textContent = mode === 'firebase' ? t('statusSubmitted') : t('statusSavedLocal');
      form.reset();
      updateOfferText();
    } catch (error) {
      console.error(error);
      $('#formStatus').textContent = t('statusError');
    }
  });
}

function drawHarvester() {
  const canvas = $('#harvesterCanvas');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
  }
  const w = canvas.width;
  const h = canvas.height;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const cx = rect.width / 2;
  const cy = rect.height / 2 + 30;
  const s = Math.min(rect.width / 760, rect.height / 430);
  const rad = modelAngle * Math.PI / 180;
  const depth = Math.sin(rad) * 40 * s;
  const lean = Math.cos(rad) * 18 * s;

  function poly(points, fill, stroke = 'rgba(0,0,0,.18)') {
    ctx.beginPath();
    points.forEach(([x, y], i) => i ? ctx.lineTo(cx + x * s + depth, cy + y * s + lean) : ctx.moveTo(cx + x * s + depth, cy + y * s + lean));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function rectRound(x, y, width, height, radius, fill) {
    ctx.beginPath();
    ctx.roundRect(cx + x * s + depth, cy + y * s + lean, width * s, height * s, radius * s);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.15)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function wheel(x, y, r) {
    ctx.save();
    ctx.translate(cx + x * s + depth, cy + y * s + lean);
    ctx.scale(1 + Math.abs(Math.sin(rad)) * 0.08, 0.95);
    ctx.beginPath();
    ctx.arc(0, 0, r * s, 0, Math.PI * 2);
    ctx.fillStyle = '#191c19';
    ctx.fill();
    ctx.lineWidth = 7 * s;
    ctx.strokeStyle = '#3d443d';
    ctx.stroke();
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6);
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.75 * s);
      ctx.lineTo(0, -r * 0.98 * s);
      ctx.strokeStyle = '#6a756a';
      ctx.lineWidth = 3 * s;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.38 * s, 0, Math.PI * 2);
    ctx.fillStyle = '#f5f7ef';
    ctx.fill();
    ctx.strokeStyle = '#555';
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.beginPath();
  ctx.ellipse(cx + depth, cy + 112 * s, 315 * s, 28 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#0f381f';
  ctx.fill();
  ctx.restore();

  poly([[-310, 10], [-190, -88], [105, -86], [260, 6], [224, 82], [-272, 84]], '#178a49');
  poly([[-205, -84], [-82, -138], [78, -136], [104, -86]], '#31aa60');
  rectRound([-65][0], -128, 136, 62, 16, 'rgba(255,255,255,.82)');
  rectRound(95, -72, 136, 62, 14, '#2d352c');
  rectRound(225, -36, 80, 44, 12, '#f2b434');
  poly([[-386, 54], [-288, 6], [-270, 28], [-352, 78]], '#d94b32');
  rectRound(-404, 68, 142, 18, 8, '#d94b32');

  ctx.save();
  ctx.translate(cx + (270 * s) + depth, cy + (-30 * s) + lean);
  ctx.rotate((-12 + Math.sin(rad) * 8) * Math.PI / 180);
  ctx.strokeStyle = '#765a3b';
  ctx.lineWidth = 13 * s;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(158 * s, 30 * s);
  ctx.stroke();
  ctx.strokeStyle = '#a77b47';
  ctx.lineWidth = 4 * s;
  ctx.beginPath();
  ctx.moveTo(18 * s, -4 * s);
  ctx.lineTo(150 * s, 20 * s);
  ctx.stroke();
  ctx.restore();

  wheel(-200, 96, 58);
  wheel(172, 96, 40);

  ctx.fillStyle = '#ffffff';
  ctx.font = `900 ${26 * s}px Inter, system-ui, sans-serif`;
  ctx.fillText('NEW HIRA 985', cx - 78 * s + depth, cy + 2 * s + lean);

  if (autoRotate) {
    modelAngle = (modelAngle + 0.35) % 360;
    $('#rotationRange').value = Math.round(modelAngle);
  }
  requestAnimationFrame(drawHarvester);
}

function wireModelControls() {
  $('#rotationRange').addEventListener('input', (event) => {
    modelAngle = Number(event.target.value);
    autoRotate = false;
    $('#autoRotateBtn').textContent = t('playRotate');
  });
  $('#autoRotateBtn').addEventListener('click', () => {
    autoRotate = !autoRotate;
    $('#autoRotateBtn').textContent = autoRotate ? t('pauseRotate') : t('playRotate');
  });
}

async function init() {
  wireLanguage();
  wireTheme();
  wireMenu();
  wireSpecs();
  wireOffer();
  wireDiagram();
  wireRevealAndCounters();
  wireForm();
  wireModelControls();
  applyTranslations();
  await initFirebase();
  requestAnimationFrame(drawHarvester);
}

init();
