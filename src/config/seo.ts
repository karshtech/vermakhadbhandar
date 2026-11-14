/**
 * VERMA KHAD BHANDAR — SEO, Local GEO, AEO & Schema Configuration
 * Central source of truth for metadata, canonical routes, Schema.org JSON-LD,
 * and authentic local geographical data for Rasra, Kurem, Dulahpah, and Ballia district.
 */

export const SITE_URL = 'https://vermakhadbhandar.onrender.com';

export interface RouteMetadata {
  path: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  keywordsEn: string;
  keywordsHi: string;
  ogImage: string;
  ogImageSecureUrl?: string;
  ogImageType?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAltEn?: string;
  ogImageAltHi?: string;
  schemaType?: 'Store' | 'AboutPage' | 'CollectionPage' | 'ItemPage' | 'ContactPage' | 'FAQPage';
}

export const ROUTE_SEO: Record<string, RouteMetadata> = {
  '/': {
    path: '/',
    titleEn: 'Verma Khad Bhandar | Fertilizer, Seeds & Agricultural Shop in Rasra',
    titleHi: 'वर्मा खाद भंडार | रसड़ा में खाद, बीज एवं कृषि उत्पाद केंद्र',
    descEn:
      'Explore fertilizers, quality seeds, crop protection products and plant nutrients at Verma Khad Bhandar. Visit our agricultural supplies shop in its verified location on Rasra-Kasimabad Road, Badhubandh Market near Rasra & Kurem.',
    descHi:
      'वर्मा खाद भंडार, रसड़ा-कासिमाबाद रोड (बाधुबांध मार्केट, दुलहपाह) - उच्च गुणवत्ता वाली खाद (यूरिया, डीएपी, एनपीके, पोटाश), प्रमाणित बीज, कीटनाशक एवं पौध पोषण का विश्वसनीय केंद्र। रसड़ा एवं कुरेम क्षेत्र के किसानों की सेवा में।',
    keywordsEn:
      'Fertilizer shop in Rasra, Fertilizer shop in Kurem, Fertilizer dealer in Rasra, Khad beej ki dukan Rasra, Agricultural products shop near Rasra, Seed shop near Rasra, Verma Khad Bhandar',
    keywordsHi:
      'खाद की दुकान रसड़ा, खाद बीज भंडार रसड़ा, उर्वरक की दुकान रसड़ा, बीज की दुकान रसड़ा, कीटनाशक की दुकान रसड़ा, खाद की दुकान कुरेम, बीज भंडार कुरेम, वर्मा खाद भंडार',
    ogImage: `${SITE_URL}/images/social/og-home.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-home.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Verma Khad Bhandar - Fertilizer, Seeds & Agricultural Shop in Rasra',
    ogImageAltHi: 'वर्मा खाद भंडार - रसड़ा में खाद, बीज एवं कृषि उत्पाद केंद्र',
    schemaType: 'Store',
  },
  '/about': {
    path: '/about',
    titleEn: 'About Verma Khad Bhandar | Agricultural Supplies in Rasra & Ballia',
    titleHi: 'हमारे बारे में | वर्मा खाद भंडार — विश्वसनीय कृषि साथी रसड़ा',
    descEn:
      'Learn about Verma Khad Bhandar and its range of agricultural supplies, fertilizers, certified seeds and crop protection products supporting farmers across Rasra, Kurem and Ballia.',
    descHi:
      'वर्मा खाद भंडार के बारे में जानें। रसड़ा-कासिमाबाद रोड पर स्थित हमारा केंद्र किसानों को प्रामाणिक उर्वरक, उन्नत बीज और व्यावहारिक कृषि परामर्श उपलब्ध कराने के लिए समर्पित है।',
    keywordsEn: 'About Verma Khad Bhandar, agricultural store Rasra, fertilizer dealer Ballia, farm supplies Dulahpah',
    keywordsHi: 'वर्मा खाद भंडार परिचय, रसड़ा कृषि स्टोर, खाद विक्रेता बलिया, किसान सहायता केंद्र',
    ogImage: `${SITE_URL}/images/social/og-about.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-about.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'About Verma Khad Bhandar - Agricultural Supplies and Farmer Guidance in Rasra & Ballia',
    ogImageAltHi: 'हमारे बारे में - वर्मा खाद भंडार रसड़ा एवं बलिया',
    schemaType: 'AboutPage',
  },
  '/products': {
    path: '/products',
    titleEn: 'Fertilizers, Seeds & Agricultural Products | Verma Khad Bhandar',
    titleHi: 'खाद, बीज एवं कृषि उत्पाद | वर्मा खाद भंडार',
    descEn:
      'Explore agricultural product categories including fertilizers (Urea, DAP, NPK, Potash), certified crop seeds, crop protection pesticides and plant nutrients at Verma Khad Bhandar.',
    descHi:
      'वर्मा खाद भंडार पर उपलब्ध कृषि उत्पाद: रासायनिक एवं जैविक खाद (यूरिया, DAP, NPK), प्रमाणित उन्नत बीज, कीटनाशक, फफूंदनाशक और पौध पोषक टॉनिक।',
    keywordsEn:
      'Fertilizers Rasra, Urea DAP NPK shop, certified seeds Ballia, agricultural pesticides Rasra, crop protection Kurem',
    keywordsHi: 'खाद रसड़ा, यूरिया डीएपी एनपीके दुकान, प्रमाणित बीज बलिया, कीटनाशक दवाइयां रसड़ा, फसल सुरक्षा कुरेम',
    ogImage: `${SITE_URL}/images/social/og-products.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-products.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Agricultural Product Categories - Fertilizers, Seeds and Pesticides at Verma Khad Bhandar',
    ogImageAltHi: 'कृषि उत्पाद कैटलॉग - खाद, उन्नत बीज एवं कीटनाशक',
    schemaType: 'CollectionPage',
  },
  '/agriculture': {
    path: '/agriculture',
    titleEn: 'Agriculture Information & Crop Guidance | Verma Khad Bhandar',
    titleHi: 'कृषि जानकारी एवं फसल सलाह | वर्मा खाद भंडार',
    descEn:
      'Explore useful agricultural information, seasonal crop guidance (Rabi, Kharif, Zaid), soil fertility balance and crop protection resources from Verma Khad Bhandar.',
    descHi:
      'रसड़ा और बलिया क्षेत्र के लिए उपयोगी कृषि जानकारी, रबी, खरीफ और जायद फसलों की मौसमी सलाह, संतुलित उर्वरक प्रबंधन और फसल सुरक्षा मार्गदर्शन।',
    keywordsEn:
      'Agricultural advisory Rasra, crop guidance Ballia, wheat fertilizer schedule, paddy farming tips, Rabi Kharif crop advisory',
    keywordsHi: 'कृषि सलाह रसड़ा, फसल प्रबंधन बलिया, गेहूं में खाद का समय, धान की खेती टिप्स, मौसमी फसल कैलेंडर',
    ogImage: `${SITE_URL}/images/social/og-agriculture.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-agriculture.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Agricultural Knowledge & Seasonal Crop Guidance - Verma Khad Bhandar Rasra',
    ogImageAltHi: 'कृषि जानकारी एवं मौसमी फसल सलाह - वर्मा खाद भंडार',
    schemaType: 'ItemPage',
  },
  '/why-choose-us': {
    path: '/why-choose-us',
    titleEn: 'Why Choose Verma Khad Bhandar | Agricultural Supplies Rasra',
    titleHi: 'हमें क्यों चुनें | वर्मा खाद भंडार — गुणवत्ता एवं किसान विश्वास',
    descEn:
      'Discover the agricultural product quality, authentic store guidance, farmer trust, and reliable customer support available at Verma Khad Bhandar.',
    descHi:
      'जानें किसान वर्मा खाद भंडार पर क्यों भरोसा करते हैं: प्रामाणिक उत्पाद, उचित परामर्श, किसानों के प्रति निष्ठा और हर मौसम में समय पर कृषि सामग्री की उपलब्धता।',
    keywordsEn:
      'Trusted fertilizer shop Rasra, genuine seeds dealer Ballia, authentic agricultural supplies, farmer trust',
    keywordsHi: 'भरोसेमंद खाद भंडार रसड़ा, असली बीज विक्रेता बलिया, विश्वसनीय कृषि दुकान',
    ogImage: `${SITE_URL}/images/social/og-why-choose-us.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-why-choose-us.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Why Choose Verma Khad Bhandar - Authenticity, Farmer Trust & Support',
    ogImageAltHi: 'हमें क्यों चुनें - वर्मा खाद भंडार गुणवत्ता एवं किसान विश्वास',
    schemaType: 'AboutPage',
  },
  '/visit': {
    path: '/visit',
    titleEn: 'Visit Our Agricultural Shop | Verma Khad Bhandar Rasra',
    titleHi: 'हमारी दुकान पर आएं | वर्मा खाद भंडार — पता एवं दिशा-निर्देश',
    descEn:
      'Find the physical shop location, opening hours and directions to Verma Khad Bhandar on Rasra-Kasimabad Road, Badhubandh Market, Dulahpah near Rasra and Kurem.',
    descHi:
      'वर्मा खाद भंडार का सही पता, दुकान खुलने का समय और रसड़ा व कुरेम से पहुँचने के दिशा-निर्देश। बाधुबांध मार्केट, दुलहपाह, रसड़ा-कासिमाबाद रोड, उत्तर प्रदेश 221712।',
    keywordsEn:
      'Verma Khad Bhandar location, Rasra Kasimabad road fertilizer shop, Badhubandh market shop, directions to fertilizer store Rasra',
    keywordsHi: 'वर्मा खाद भंडार पता, रसड़ा कासिमाबाद रोड खाद दुकान, बाधुबांध मार्केट दुकान, दुकान तक पहुँचने का रास्ता',
    ogImage: `${SITE_URL}/images/social/og-visit.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-visit.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Visit Verma Khad Bhandar - Physical Store Location & Travel Directions',
    ogImageAltHi: 'दुकान पर आएं - वर्मा खाद भंडार पता एवं दिशा-निर्देश',
    schemaType: 'ContactPage',
  },
  '/contact': {
    path: '/contact',
    titleEn: 'Contact Verma Khad Bhandar | Phone & WhatsApp (+91 87262 48752)',
    titleHi: 'संपर्क करें | वर्मा खाद भंडार — फोन एवं व्हाट्सएप (+91 87262 48752)',
    descEn:
      'Contact Verma Khad Bhandar via phone or WhatsApp for product availability, agricultural supplies inquiries, store timings and farmer support in Rasra.',
    descHi:
      'उत्पाद की उपलब्धता, खाद-बीज की जानकारी और कृषि परामर्श के लिए वर्मा खाद भंडार से फोन या व्हाट्सएप (+91 87262 48752) पर सीधे संपर्क करें।',
    keywordsEn: 'Contact Verma Khad Bhandar, phone number fertilizer shop Rasra, WhatsApp agricultural store',
    keywordsHi: 'वर्मा खाद भंडार फोन नंबर, खाद दुकान संपर्क रसड़ा, व्हाट्सएप कृषि दुकान',
    ogImage: `${SITE_URL}/images/social/og-contact.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-contact.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Contact Verma Khad Bhandar - Phone and WhatsApp (+91 87262 48752)',
    ogImageAltHi: 'संपर्क करें - वर्मा खाद भंडार फोन एवं व्हाट्सएप',
    schemaType: 'ContactPage',
  },
  '/fertilizer-shop-rasra': {
    path: '/fertilizer-shop-rasra',
    titleEn: 'Fertilizer & Seed Shop in Rasra & Kurem | Verma Khad Bhandar',
    titleHi: 'रसड़ा एवं कुरेम में खाद-बीज की दुकान | वर्मा खाद भंडार',
    descEn:
      'Looking for a reliable fertilizer and seed shop in Rasra or near Kurem? Visit Verma Khad Bhandar on Rasra-Kasimabad Road, Badhubandh Market, Dulahpah. Urea, DAP, NPK, certified seeds & pesticides.',
    descHi:
      'रसड़ा या कुरेम के पास खाद एवं बीज की विश्वसनीय दुकान खोज रहे हैं? वर्मा खाद भंडार, बाधुबांध मार्केट, दुलहपाह (रसड़ा-कासिमाबाद रोड) पर आएं। यूरिया, डीएपी, एनपीके, प्रमाणित बीज और फसल सुरक्षा उत्पाद।',
    keywordsEn:
      'Fertilizer shop in Rasra, Fertilizer shop in Kurem, Khad beej ki dukan Rasra, Fertilizer dealer near Rasra, खाद की दुकान रसड़ा, खाद बीज भंडार रसड़ा, उर्वरक की दुकान रसड़ा',
    keywordsHi:
      'खाद की दुकान रसड़ा, खाद बीज भंडार रसड़ा, उर्वरक की दुकान रसड़ा, खाद की दुकान कुरेम, बीज भंडार कुरेम, कृषि उत्पाद की दुकान आसपास, खाद बीज की दुकान मेरे पास',
    ogImage: `${SITE_URL}/images/social/og-fertilizer-shop-rasra.jpg`,
    ogImageSecureUrl: `${SITE_URL}/images/social/og-fertilizer-shop-rasra.jpg`,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAltEn: 'Fertilizer & Seed Center for Rasra, Kurem & Surrounding Farming Communities',
    ogImageAltHi: 'रसड़ा एवं कुरेम क्षेत्र के लिए प्रामाणिक खाद-बीज केंद्र',
    schemaType: 'Store',
  },
};

/**
 * Verified Local Geographic & Agricultural Service Data
 */
export const LOCAL_GEO_DATA = {
  storeNameEn: 'VERMA KHAD BHANDAR',
  storeNameHi: 'वर्मा खाद भंडार',
  telephone: '+918726248752',
  phoneDisplay: '+91 87262 48752',
  whatsappDisplay: '+91 87262 48752',
  whatsappNumberRaw: '918726248752',
  address: {
    street: 'Rasra Kasimabad Road, Badhubandh Market, Dulahpah',
    locality: 'Rasra',
    subLocality: 'Dulahpah',
    district: 'Ballia',
    state: 'Uttar Pradesh',
    postalCode: '221712',
    country: 'IN',
    hindi: 'रसड़ा कासिमाबाद रोड, बाधुबांध मार्केट, रसड़ा, दुलहपाह, उत्तर प्रदेश 221712',
  },
  geo: {
    latitude: 25.839208,
    longitude: 83.776694,
  },
  openingHours: 'Mo-Su 08:00-19:30',
  googleMapsUrl: 'https://maps.app.goo.gl/oWXYbJfeAPS23hrL9',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4259.540861977715!2d83.77669437594514!3d25.839208005397676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399217effafe6cb3%3A0xa24d727151f3e6d5!2sVerma%20Khad%20Bhandar!5e1!3m2!1sen!2sin!4v1794536153510!5m2!1sen!2sin',
  verifiedNearbyLocalities: [
    {
      nameEn: 'Rasra Town & Mandi',
      nameHi: 'रसड़ा नगर एवं गल्ला मंडी',
      distanceKm: '6–8 km',
      travelTime: '10–12 min',
      routeDescriptionEn: 'Head southwest along the main Rasra-Kasimabad Road directly to Badhubandh Market.',
      routeDescriptionHi: 'रसड़ा से कासिमाबाद रोड पर सीधे बाधुबांध मार्केट (दुलहपाह) की तरफ आएं।',
    },
    {
      nameEn: 'Kurem Village & Panchayat',
      nameHi: 'कुरेम ग्राम एवं पंचायत',
      distanceKm: '1.5–3 km',
      travelTime: '3–5 min',
      routeDescriptionEn: 'Located just adjacent along the Rasra-Kasimabad rural corridor.',
      routeDescriptionHi: 'कासिमाबाद-रसड़ा मुख्य मार्ग से सटा हुआ, मात्र कुछ मिनट की दूरी पर।',
    },
    {
      nameEn: 'Dulahpah / Badhubandh',
      nameHi: 'दुलहपाह / बाधुबांध',
      distanceKm: '0 km',
      travelTime: '0 min',
      routeDescriptionEn: 'Immediate local village market where the physical storefront is situated.',
      routeDescriptionHi: 'यहीं बाधुबांध मार्केट में मुख्य सड़क पर दुकान स्थित है।',
    },
    {
      nameEn: 'Kasimabad Direction',
      nameHi: 'कासिमाबाद दिशा',
      distanceKm: '14–16 km',
      travelTime: '20–25 min',
      routeDescriptionEn: 'Head northeast on Kasimabad-Rasra Road toward Badhubandh Market.',
      routeDescriptionHi: 'कासिमाबाद से रसड़ा की ओर आते समय बाधुबांध मार्केट पर स्थित।',
    },
    {
      nameEn: 'Chilkahar Area',
      nameHi: 'चिल्कहर क्षेत्र',
      distanceKm: '12–15 km',
      travelTime: '20 min',
      routeDescriptionEn: 'Connected via Rasra connecting arteries to Rasra-Kasimabad Road.',
      routeDescriptionHi: 'रसड़ा मुख्य मार्ग के माध्यम से सीधे जुड़ा हुआ।',
    },
  ],
  regionalCrops: [
    {
      seasonEn: 'Rabi (Winter)',
      seasonHi: 'रबी सीजन (शीतकालीन)',
      cropsEn: 'Wheat (गेहूं), Mustard (सरसों), Potato (आलू), Chickpea/Gram (चना), Green Peas (मटर)',
      cropsHi: 'गेहूं, सरसों, आलू, चना, मटर',
      keyInputs: 'Urea, DAP, NPK 12:32:16, MOP (Potash), Zinc Sulphate, Certified Wheat Seeds',
    },
    {
      seasonEn: 'Kharif (Monsoon)',
      seasonHi: 'खरीफ सीजन (मानसूनी)',
      cropsEn: 'Paddy/Rice (धान), Maize (मक्का), Sugarcane (गन्ना), Bajra, Jowar',
      cropsHi: 'धान, मक्का, गन्ना, बाजरा, ज्वार',
      keyInputs: 'DAP, Urea, Zinc, Weedicides (Pre & Post emergence), Fungicides for Blast/Blight',
    },
    {
      seasonEn: 'Zaid (Summer)',
      seasonHi: 'जायद सीजन (ग्रीष्मकालीन)',
      cropsEn: 'Moong (मूंग), Urad (उड़द), Vegetables (सब्जियां: लौकी, तोरई, भिंडी, ककड़ी)',
      cropsHi: 'मूंग दाल, उड़द, सब्जियां (लौकी, ककड़ी, भिंडी, तोरई)',
      keyInputs: 'Bio-stimulants, Micronutrients, Vegetable Seeds, Sucking Pest Insecticides',
    },
  ],
};

/**
 * 9 Primary AEO (Answer Engine Optimization) Direct Questions & Answers
 */
export const AEO_FAQS = [
  {
    id: 'faq-1',
    questionEn: 'Where can I buy fertilizers and seeds in Rasra?',
    questionHi: 'रसड़ा में खाद और बीज की विश्वसनीय दुकान कहाँ है?',
    answerEn:
      'Verma Khad Bhandar provides genuine fertilizers (Urea, DAP, NPK, Potash), certified seeds, and crop protection products. The shop is located on Rasra-Kasimabad Road at Badhubandh Market, Dulahpah, approximately 6–8 km from Rasra town center (Pin: 221712).',
    answerHi:
      'वर्मा खाद भंडार रसड़ा-कासिमाबाद रोड पर बाधुबांध मार्केट (दुलहपाह, पिन: 221712) में स्थित है। यहाँ किसानों को यूरिया, डीएपी, एनपीके, पोटाश, प्रमाणित बीज और फसल सुरक्षा उत्पाद विश्वसनीय गुणवत्ता के साथ मिलते हैं। रसड़ा शहर से यह लगभग 6-8 किलोमीटर की दूरी पर मुख्य मार्ग पर स्थित है।',
  },
  {
    id: 'faq-2',
    questionEn: 'Is there a fertilizer and seed shop near Kurem?',
    questionHi: 'क्या कुरेम के पास खाद और बीज की दुकान उपलब्ध है?',
    answerEn:
      'Yes, Verma Khad Bhandar is situated just 1.5 to 3 km from Kurem along the Rasra-Kasimabad Road at Badhubandh Market, Dulahpah. Farmers from Kurem can reach the shop in about 3 to 5 minutes by two-wheeler, tractor, or auto.',
    answerHi:
      'हाँ, कुरेम से मात्र 1.5 से 3 किलोमीटर की दूरी पर रसड़ा-कासिमाबाद रोड स्थित बाधुबांध मार्केट (दुलहपाह) में वर्मा खाद भंडार स्थित है। कुरेम के किसान भाई बाइक, ट्रैक्टर या किसी भी वाहन से 3-5 मिनट में आसानी से दुकान पर पहुँच सकते हैं।',
  },
  {
    id: 'faq-3',
    questionEn: 'What types of fertilizers are available at Verma Khad Bhandar?',
    questionHi: 'वर्मा खाद भंडार पर कौन-कौन से खाद (उर्वरक) मिलते हैं?',
    answerEn:
      'Verma Khad Bhandar provides major agricultural fertilizers including Urea, DAP (Di-Ammonium Phosphate), NPK balanced complexes (like 12:32:16 and 20:20:0:13), MOP (Muriate of Potash), Zinc Sulphate (33% and 21%), organic manure, and micronutrient mixtures suitable for regional crops.',
    answerHi:
      'वर्मा खाद भंडार पर खेती के लिए आवश्यक प्रमुख उर्वरक उपलब्ध हैं, जैसे यूरिया, डीएपी (DAP), एनपीके संतुलित मिश्रण (12:32:16, 20:20:0:13), एमओपी (पोटाश), जिंक सल्फेट (33% व 21%), जैविक खाद और सूक्ष्म पोषक तत्व।',
  },
  {
    id: 'faq-4',
    questionEn: 'Where can I find certified seeds for wheat, paddy, and seasonal crops?',
    questionHi: 'गेहूं, धान और मौसमी फसलों के प्रमाणित बीज कहाँ मिलेंगे?',
    answerEn:
      'Verma Khad Bhandar supplies certified and high-germination seeds for wheat (Rabi season), paddy/rice (Kharif season), mustard, maize, chickpea, pulses, and seasonal vegetable crops, sourced to perform reliably in local Ballia and Rasra soil conditions.',
    answerHi:
      'वर्मा खाद भंडार पर रबी सीजन के लिए गेहूं और सरसों, खरीफ सीजन के लिए धान और मक्का, तथा जायद व मौसमी सब्जियों के उच्च अंकुरण क्षमता वाले प्रमाणित बीज उपलब्ध कराए जाते हैं।',
  },
  {
    id: 'faq-5',
    questionEn: 'Does Verma Khad Bhandar offer crop protection pesticides and plant tonics?',
    questionHi: 'क्या यहाँ फसल सुरक्षा के लिए कीटनाशक और पौध टॉनिक उपलब्ध हैं?',
    answerEn:
      'Yes. The shop supplies quality insecticides, fungicides, weedicides (herbicides for weed management in wheat and paddy), bio-stimulants, and plant growth tonics to protect crops from local pests, blights, and stresses.',
    answerHi:
      'हाँ, फसलों को कीटों, खरपतवारों और रोगों से बचाने के लिए प्रमाणित कीटनाशक (Insecticides), फफूंदनाशक (Fungicides), खरपतवारनाशक (Weedicides) और फसलों की वृद्धि के लिए पौध टॉनिक व जाइम उपलब्ध हैं।',
  },
  {
    id: 'faq-6',
    questionEn: 'What is the exact physical address of Verma Khad Bhandar?',
    questionHi: 'वर्मा खाद भंडार का सही पता क्या है?',
    answerEn:
      'The verified physical address is: Rasra Kasimabad Road, Badhubandh Market, Rasra, Dulahpah, Uttar Pradesh 221712, India.',
    answerHi:
      'दुकान का प्रमाणित पता: रसड़ा कासिमाबाद रोड, बाधुबांध मार्केट, रसड़ा, दुलहपाह, उत्तर प्रदेश 221712 (भारत)।',
  },
  {
    id: 'faq-7',
    questionEn: 'What are the opening and closing hours of the shop?',
    questionHi: 'दुकान खुलने और बंद होने का समय क्या है?',
    answerEn:
      'Verma Khad Bhandar is open Monday to Sunday from 8:00 AM to 7:30 PM. The shop remains open throughout the week to ensure farmers have access to vital agricultural supplies during crucial sowing and irrigation windows.',
    answerHi:
      'वर्मा खाद भंडार सोमवार से रविवार (सप्ताह के सातों दिन) प्रातः 8:00 बजे से सायं 7:30 बजे तक खुला रहता है, ताकि बुवाई और सिंचाई के महत्वपूर्ण समय में किसान भाइयों को समय पर सामग्री मिल सके।',
  },
  {
    id: 'faq-8',
    questionEn: 'How can I contact Verma Khad Bhandar for product availability?',
    questionHi: 'उत्पाद की उपलब्धता जानने के लिए दुकान से संपर्क कैसे करें?',
    answerEn:
      'You can call directly or send a WhatsApp message to +91 87262 48752. The shop staff helps farmers confirm product availability, fertilizer types, and seed varieties before traveling.',
    answerHi:
      'आप सीधे फोन या व्हाट्सएप पर +91 87262 48752 पर संपर्क कर सकते हैं। दुकान पर आने से पहले आप खाद, बीज या कीटनाशक की उपलब्धता और सलाह के लिए बात कर सकते हैं।',
  },
  {
    id: 'faq-9',
    questionEn: 'How can I get directions to Verma Khad Bhandar from Rasra or nearby areas?',
    questionHi: 'रसड़ा या आसपास से दुकान तक पहुँचने के लिए रास्ता क्या है?',
    answerEn:
      'From Rasra town, take the Rasra-Kasimabad Road southwest for approximately 6–8 km until you reach Badhubandh Market in Dulahpah. The store has a prominent green signboard on the main road. Direct Google Maps navigation is available at: https://maps.app.goo.gl/oWXYbJfeAPS23hrL9',
    answerHi:
      'रसड़ा नगर से कासिमाबाद रोड पकड़ें और लगभग 6-8 किलोमीटर दक्षिण-पश्चिम चलें। बाधुबांध मार्केट (दुलहपाह) में सड़क पर ही मुख्य बोर्ड के साथ दुकान स्थित है। गूगल मैप्स नेविगेशन लिंक: https://maps.app.goo.gl/oWXYbJfeAPS23hrL9',
  },
];

/**
 * Generate Schema.org LocalBusiness / Store JSON-LD
 */
export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Store', 'LocalBusiness'],
        '@id': `${SITE_URL}/#store`,
        name: LOCAL_GEO_DATA.storeNameEn,
        alternateName: [
          LOCAL_GEO_DATA.storeNameHi,
          'Verma Khad & Beej Bhandar',
          'Verma Fertilizers Rasra',
          'वर्मा खाद एवं बीज भंडार',
        ],
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        image: `${SITE_URL}/images/shop-exterior.webp`,
        description:
          'Verma Khad Bhandar is a premier fertilizer and agricultural supplies shop located on Rasra-Kasimabad Road, Badhubandh Market, Dulahpah near Rasra and Kurem, Uttar Pradesh. Providing high-grade fertilizers, certified seeds, crop protection products, and essential plant nutrition.',
        telephone: LOCAL_GEO_DATA.telephone,
        hasMap: LOCAL_GEO_DATA.googleMapsUrl,
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI',
        address: {
          '@type': 'PostalAddress',
          streetAddress: LOCAL_GEO_DATA.address.street,
          addressLocality: LOCAL_GEO_DATA.address.locality,
          addressRegion: LOCAL_GEO_DATA.address.state,
          postalCode: LOCAL_GEO_DATA.address.postalCode,
          addressCountry: LOCAL_GEO_DATA.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: LOCAL_GEO_DATA.geo.latitude,
          longitude: LOCAL_GEO_DATA.geo.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '08:00',
            closes: '19:30',
          },
        ],
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Rasra',
          },
          {
            '@type': 'Place',
            name: 'Kurem',
          },
          {
            '@type': 'Place',
            name: 'Dulahpah',
          },
          {
            '@type': 'Place',
            name: 'Badhubandh Market',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Kasimabad',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Chilkahar',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Ballia District',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agricultural Supplies Catalog',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Fertilizers (खाद एवं उर्वरक)',
              description: 'Urea, DAP, NPK complexes (12:32:16), MOP (Potash), Zinc Sulphate',
            },
            {
              '@type': 'OfferCatalog',
              name: 'Certified Seeds (उन्नत बीज)',
              description: 'Wheat, Paddy, Mustard, Potato, Maize, and Vegetable Seeds',
            },
            {
              '@type': 'OfferCatalog',
              name: 'Crop Protection (कीटनाशक एवं फसल सुरक्षा)',
              description: 'Insecticides, Fungicides, and Weedicides for agricultural crops',
            },
            {
              '@type': 'OfferCatalog',
              name: 'Plant Nutrients & Tonics (पौध पोषक एवं टॉनिक)',
              description: 'Micronutrient mixtures, Bio-stimulants, and growth promoters',
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Verma Khad Bhandar',
        alternateName: [
          'वर्मा खाद भंडार',
          'Verma Khad Bhandar',
        ],
        inLanguage: ['hi', 'en'],
        publisher: {
          '@id': `${SITE_URL}/#store`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: AEO_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.questionEn,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answerEn,
          },
        })),
      },
    ],
  };
}
