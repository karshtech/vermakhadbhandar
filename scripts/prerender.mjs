import fs from 'fs';
import path from 'path';

console.log('--- VERMA KHAD BHANDAR STATIC PRERENDERING ENGINE ---');

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌ dist/index.html not found! Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const SITE_URL = 'https://vermakhadbhandar.com';

export const PRERENDER_ROUTES = [
  {
    path: '/',
    outputPath: 'index.html',
    theme: 'dark',
    title: 'Verma Khad Bhandar | Fertilizer, Seeds & Agricultural Shop in Rasra',
    description:
      'वर्मा खाद भंडार, रसड़ा-कासिमाबाद रोड (बाधुबांध मार्केट, दुलहपाह) - उच्च गुणवत्ता वाली खाद (यूरिया, डीएपी, एनपीके, पोटाश), प्रमाणित बीज, कीटनाशक एवं पौध पोषण का विश्वसनीय केंद्र। रसड़ा एवं कुरेम क्षेत्र के किसानों की सेवा में।',
    keywords:
      'Fertilizer shop in Rasra, Fertilizer shop in Kurem, Fertilizer dealer in Rasra, Khad beej ki dukan Rasra, खाद की दुकान रसड़ा, खाद बीज भंडार रसड़ा, उर्वरक की दुकान रसड़ा, बीज की दुकान रसड़ा, कीटनाशक की दुकान रसड़ा, वर्मा खाद भंडार',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/images/social/og-home.jpg`,
    imageAlt: 'Verma Khad Bhandar - Fertilizer, Seeds & Agricultural Shop in Rasra',
    eyebrow: 'विश्वसनीय कृषि केंद्र • रसड़ा, कुरेम एवं बलिया',
    headingHi: 'वर्मा खाद भंडार — हर खेत की तरक्की, हमारी जिम्मेदारी',
    headingEn: 'Verma Khad Bhandar — Fertilizer, Seeds & Agricultural Supplies in Rasra',
    introHi:
      'रसड़ा-कासिमाबाद रोड पर बाधुबांध मार्केट (दुलहपाह, उत्तर प्रदेश 221712) में स्थित वर्मा खाद भंडार किसानों को उच्च गुणवत्ता वाली खाद (यूरिया, डीएपी, एनपीके, पोटाश, जिंक), प्रमाणित बीज, कीटनाशक एवं पौध पोषक तत्व उपलब्ध कराने वाला प्रामाणिक केंद्र है। रसड़ा, कुरेम और आसपास के किसान भाइयों का भरोसेमंद साथी।',
    introEn:
      'Located on Rasra-Kasimabad Road at Badhubandh Market, Dulahpah, Uttar Pradesh 221712, Verma Khad Bhandar provides certified fertilizers (Urea, DAP, NPK, Potash, Zinc), quality seeds, crop protection, and plant nutrition. Serving farmers across Rasra, Kurem, and neighboring agricultural villages.',
    breadcrumbs: [{ name: 'Home', url: `${SITE_URL}/` }],
  },
  {
    path: '/about',
    outputPath: 'about/index.html',
    theme: 'light',
    title: 'About Verma Khad Bhandar | Agricultural Supplies in Rasra & Ballia',
    description:
      'वर्मा खाद भंडार के बारे में जानें। रसड़ा-कासिमाबाद रोड पर स्थित हमारा केंद्र किसानों को प्रामाणिक उर्वरक, उन्नत बीज और व्यावहारिक कृषि परामर्श उपलब्ध कराने के लिए समर्पित है।',
    keywords:
      'About Verma Khad Bhandar, agricultural store Rasra, fertilizer dealer Ballia, farm supplies Dulahpah, हमारे बारे में, वर्मा खाद भंडार',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/images/social/og-about.jpg`,
    imageAlt: 'About Verma Khad Bhandar - Agricultural Supplies and Farmer Guidance in Rasra & Ballia',
    eyebrow: 'हमारे बारे में • ABOUT VERMA KHAD BHANDAR',
    headingHi: 'किसान के परिश्रम का सच्चा सम्मान — वर्मा खाद भंडार',
    headingEn: 'About Verma Khad Bhandar — Your Trusted Agricultural Partner',
    introHi:
      'वर्मा खाद भंडार का प्राथमिक उद्देश्य किसानों तक प्रामाणिक एवं गुणवत्तापूर्ण कृषि उत्पाद पहुँचाना है। हम केवल उत्पाद नहीं बेचते, बल्कि मिट्टी के स्वास्थ्य, संतुलित उर्वरक प्रबंधन और सही फसल चक्र के लिए व्यावहारिक मार्गदर्शन भी प्रदान करते हैं।',
    introEn:
      'Verma Khad Bhandar is dedicated to supplying authentic agricultural inputs and reliable agronomic guidance. We partner with farmers to optimize soil nutrition, ensure certified seed viability, and support sustainable harvests.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About Us', url: `${SITE_URL}/about` },
    ],
  },
  {
    path: '/products',
    outputPath: 'products/index.html',
    theme: 'light',
    title: 'Fertilizers, Seeds & Pesticides | Verma Khad Bhandar Rasra',
    description:
      'वर्मा खाद भंडार पर उपलब्ध कृषि उत्पाद: रासायनिक एवं जैविक खाद (यूरिया, DAP, NPK), प्रमाणित उन्नत बीज, कीटनाशक, फफूंदनाशक और पौध पोषक टॉनिक।',
    keywords:
      'Fertilizers Rasra, Urea DAP NPK shop, certified seeds Ballia, agricultural pesticides Rasra, crop protection Kurem, खाद, बीज, कीटनाशक',
    canonical: `${SITE_URL}/products`,
    ogImage: `${SITE_URL}/images/social/og-products.jpg`,
    imageAlt: 'Agricultural Product Categories - Fertilizers, Seeds and Pesticides at Verma Khad Bhandar',
    eyebrow: 'कृषि उत्पाद कैटलॉग • PRODUCT CATALOG',
    headingHi: 'खाद, उन्नत बीज, कीटनाशक एवं पौध पोषक उत्पाद',
    headingEn: 'Agricultural Product Categories — Fertilizers, Seeds & Crop Protection',
    introHi:
      'हमारी दुकान पर खेती के लिए आवश्यक चारों प्रमुख श्रेणियाँ उपलब्ध हैं: 1. खाद एवं उर्वरक (यूरिया, डीएपी, एनपीके, पोटाश, जिंक), 2. प्रमाणित उन्नत बीज (गेहूं, धान, सरसों, मक्का, सब्जी बीज), 3. फसल सुरक्षा (कीटनाशक, फफूंदनाशक, खरपतवारनाशक), 4. पौध पोषक एवं टॉनिक।',
    introEn:
      'Explore our comprehensive agricultural catalog across 4 essential categories: Fertilizers (Urea, DAP, NPK complexes, Potash, Zinc), Certified Crop Seeds, Crop Protection (Insecticides, Fungicides, Weedicides), and Plant Growth Regulators & Tonics.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/products` },
    ],
  },
  {
    path: '/agriculture',
    outputPath: 'agriculture/index.html',
    theme: 'dark',
    title: 'Agriculture Information & Crop Guidance | Verma Khad Bhandar',
    description:
      'रसड़ा और बलिया क्षेत्र के लिए उपयोगी कृषि जानकारी, रबी, खरीफ और जायद फसलों की मौसमी सलाह, संतुलित उर्वरक प्रबंधन और फसल सुरक्षा मार्गदर्शन।',
    keywords:
      'Agricultural advisory Rasra, crop guidance Ballia, wheat fertilizer schedule, paddy farming tips, Rabi Kharif crop advisory, कृषि सलाह, फसल कैलेंडर',
    canonical: `${SITE_URL}/agriculture`,
    ogImage: `${SITE_URL}/images/social/og-agriculture.jpg`,
    imageAlt: 'Agricultural Knowledge & Seasonal Crop Guidance - Verma Khad Bhandar Rasra',
    eyebrow: 'कृषि मार्गदर्शन • AGRONOMIC GUIDANCE',
    headingHi: 'रसड़ा व बलिया क्षेत्र के लिए मौसमी फसल सलाह एवं मृदा पोषण',
    headingEn: 'Agricultural Knowledge & Seasonal Crop Guidance — Verma Khad Bhandar',
    introHi:
      'पूर्वी उत्तर प्रदेश (बलिया/रसड़ा) के गंगा-घाघरा दोआब की मिट्टी के अनुसार फसलों का वैज्ञानिक प्रबंधन। रबी (गेहूं, सरसों, आलू, चना), खरीफ (धान, मक्का, गन्ना) और जायद (मूंग, उड़द, सब्जियां) के लिए बुवाई, संतुलित NPK अनुपात और रोग नियंत्रण की संपूर्ण जानकारी।',
    introEn:
      'Practical agronomic advisory tailored for the alluvial soils of Ballia and Rasra. Access seasonal crop calendars for Rabi, Kharif, and Zaid seasons with recommended nutrient schedules and integrated pest management.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Agriculture Guidance', url: `${SITE_URL}/agriculture` },
    ],
  },
  {
    path: '/why-choose-us',
    outputPath: 'why-choose-us/index.html',
    theme: 'dark',
    title: 'Why Choose Verma Khad Bhandar | Agricultural Supplies Rasra',
    description:
      'जानें किसान वर्मा खाद भंडार पर क्यों भरोसा करते हैं: प्रामाणिक उत्पाद, उचित परामर्श, किसानों के प्रति निष्ठा और हर मौसम में समय पर कृषि सामग्री की उपलब्धता।',
    keywords:
      'Trusted fertilizer shop Rasra, genuine seeds dealer Ballia, authentic agricultural supplies, farmer trust, हमें क्यों चुनें',
    canonical: `${SITE_URL}/why-choose-us`,
    ogImage: `${SITE_URL}/images/social/og-why-choose-us.jpg`,
    imageAlt: 'Why Choose Verma Khad Bhandar - Authenticity, Farmer Trust & Support',
    eyebrow: 'किसान विश्वास • FARMER TRUST',
    headingHi: 'प्रामाणिकता, विश्वास एवं किसान सेवा का अटूट संकल्प',
    headingEn: 'Why Choose Verma Khad Bhandar — Authenticity, Farmer Trust & Support',
    introHi:
      'वर्मा खाद भंडार पर किसान भाइयों का भरोसा चार मजबूत स्तंभों पर टिका है: 1. प्रामाणिक एवं सीलबंद सामग्री, 2. फसल अवस्था अनुसार व्यावहारिक परामर्श, 3. पारदर्शी और सम्मानजनक व्यवहार, 4. बुवाई से कटाई तक निरंतर सहयोग।',
    introEn:
      'Discover the core pillars that earn farmer trust: Sealed and verifiable manufacturer supplies, crop-specific advisory, fair transparent dealings, and dependable availability throughout planting and irrigation windows.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Why Choose Us', url: `${SITE_URL}/why-choose-us` },
    ],
  },
  {
    path: '/visit',
    outputPath: 'visit/index.html',
    theme: 'light',
    title: 'Visit Verma Khad Bhandar | Shop Location & Directions from Rasra & Kurem',
    description:
      'वर्मा खाद भंडार का सही पता, दुकान खुलने का समय और रसड़ा व कुरेम से पहुँचने के दिशा-निर्देश। बाधुबांध मार्केट, दुलहपाह, रसड़ा-कासिमाबाद रोड, उत्तर प्रदेश 221712।',
    keywords:
      'Verma Khad Bhandar location, Rasra Kasimabad road fertilizer shop, Badhubandh market shop, directions to fertilizer store Rasra, दुकान का पता',
    canonical: `${SITE_URL}/visit`,
    ogImage: `${SITE_URL}/images/social/og-visit.jpg`,
    imageAlt: 'Visit Verma Khad Bhandar - Physical Store Location & Travel Directions',
    eyebrow: 'दुकान स्थिति • STORE LOCATION & HOURS',
    headingHi: 'हमारी दुकान पर पधारें — बाधुबांध मार्केट, रसड़ा-कासिमाबाद रोड',
    headingEn: 'Visit Verma Khad Bhandar — Physical Store Location & Travel Directions',
    introHi:
      'दुकान का प्रमाणित पता: रसड़ा कासिमाबाद रोड, बाधुबांध मार्केट, रसड़ा, दुलहपाह, उत्तर प्रदेश 221712। दुकान खुलने का समय: सोमवार से रविवार प्रातः 8:00 बजे से सायं 7:30 बजे तक। सड़क किनारे बेसमेंट स्तर पर स्थित हमारी दुकान पर आप स्वयं आकर बोरियों व पैकेटों का प्रत्यक्ष निरीक्षण कर सकते हैं।',
    introEn:
      'Physical Store Address: Rasra Kasimabad Road, Badhubandh Market, Rasra, Dulahpah, Uttar Pradesh 221712, India. Opening Hours: Monday to Sunday: 8:00 AM – 7:30 PM (All 7 Days). Convenient roadfront loading for tractor trolleys and vehicles.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Visit Store', url: `${SITE_URL}/visit` },
    ],
  },
  {
    path: '/contact',
    outputPath: 'contact/index.html',
    theme: 'light',
    title: 'Contact Verma Khad Bhandar | Phone & WhatsApp (+91 87262 48752)',
    description:
      'उत्पाद की उपलब्धता, खाद-बीज की जानकारी और कृषि परामर्श के लिए वर्मा खाद भंडार से फोन या व्हाट्सएप (+91 87262 48752) पर सीधे संपर्क करें।',
    keywords:
      'Contact Verma Khad Bhandar, phone number fertilizer shop Rasra, WhatsApp agricultural store, संपर्क करें, फोन नंबर',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/images/social/og-contact.jpg`,
    imageAlt: 'Contact Verma Khad Bhandar - Phone and WhatsApp (+91 87262 48752)',
    eyebrow: 'सीधा संपर्क • CONTACT & INQUIRIES',
    headingHi: 'सीधे संपर्क करें — फोन, व्हाट्सएप एवं सलाह सहायता',
    headingEn: 'Contact Verma Khad Bhandar — Phone, WhatsApp & Store Inquiries',
    introHi:
      'खाद, बीज या कीटनाशक की उपलब्धता जानने हेतु आप सीधे फोन कॉल या व्हाट्सएप पर +91 87262 48752 पर संपर्क कर सकते हैं। हमारा स्टाफ किसान भाइयों की सहायता के लिए तत्पर रहता है।',
    introEn:
      'Connect with Verma Khad Bhandar for product availability, agronomic inquiries, and order planning. Direct Calling & WhatsApp: +91 87262 48752. Physical store open 7 days a week (8:00 AM – 7:30 PM).',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact', url: `${SITE_URL}/contact` },
    ],
  },
  {
    path: '/fertilizer-shop-rasra',
    outputPath: 'fertilizer-shop-rasra/index.html',
    theme: 'dark',
    title: 'Fertilizer & Seed Shop in Rasra & Kurem | Verma Khad Bhandar',
    description:
      'रसड़ा या कुरेम के पास खाद एवं बीज की विश्वसनीय दुकान खोज रहे हैं? वर्मा खाद भंडार, बाधुबांध मार्केट, दुलहपाह (रसड़ा-कासिमाबाद रोड) पर आएं। यूरिया, डीएपी, एनपीके, प्रमाणित बीज और फसल सुरक्षा उत्पाद।',
    keywords:
      'Fertilizer shop in Rasra, Fertilizer shop in Kurem, Khad beej ki dukan Rasra, Fertilizer dealer near Rasra, खाद की दुकान रसड़ा, खाद बीज भंडार रसड़ा, उर्वरक की दुकान रसड़ा',
    canonical: `${SITE_URL}/fertilizer-shop-rasra`,
    ogImage: `${SITE_URL}/images/social/og-fertilizer-shop-rasra.jpg`,
    imageAlt: 'Fertilizer & Seed Center for Rasra, Kurem & Surrounding Farming Communities',
    eyebrow: 'स्थानीय कृषि केंद्र • RASRA & KUREM LOCAL HUB',
    headingHi: 'रसड़ा एवं कुरेम क्षेत्र के लिए प्रामाणिक खाद-बीज केंद्र (Verma Khad Bhandar)',
    headingEn: 'Fertilizer & Seed Center for Rasra, Kurem & Surrounding Farming Communities',
    introHi:
      'वर्मा खाद भंडार, रसड़ा-कासिमाबाद रोड स्थित बाधुबांध मार्केट (दुलहपाह) में अपनी एकमात्र प्रमाणित दुकान से सेवारत है। रसड़ा गल्ला मंडी से लगभग 6-8 किमी और कुरेम से मात्र 1.5-3 किमी की दूरी पर मुख्य मार्ग पर स्थित। कृपया ध्यान दें: हमारी एकमात्र भौतिक दुकान बाधुबांध मार्केट में है; कुरेम या रसड़ा शहर में हमारी कोई अन्य शाखा नहीं है।',
    introEn:
      'Verma Khad Bhandar operates exclusively from its single physical location at Badhubandh Market, Dulahpah on the Rasra-Kasimabad Road (PIN 221712). Serving visiting farmers from Kurem (1.5–3 km) and Rasra town (6–8 km). Note: We do not operate separate branch stores in Kurem or Rasra town.',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Rasra & Kurem Local Hub', url: `${SITE_URL}/fertilizer-shop-rasra` },
    ],
  },
];

// Generate static prerendered HTML for each route
PRERENDER_ROUTES.forEach((route) => {
  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Replace Meta Keywords
  html = html.replace(
    /<meta name="keywords" content=".*?" \/>/i,
    `<meta name="keywords" content="${route.keywords}" />`
  );

  // 4. Replace Canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // 5. Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/i,
    `<meta property="og:image" content="${route.ogImage}" />`
  );
  html = html.replace(
    /<meta property="og:image:secure_url" content=".*?" \/>/i,
    `<meta property="og:image:secure_url" content="${route.ogImage}" />`
  );
  html = html.replace(
    /<meta property="og:image:alt" content=".*?" \/>/i,
    `<meta property="og:image:alt" content="${route.imageAlt}" />`
  );

  // 6. Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:url" content=".*?" \/>/i,
    `<meta name="twitter:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/i,
    `<meta name="twitter:image" content="${route.ogImage}" />`
  );
  html = html.replace(
    /<meta name="twitter:image:alt" content=".*?" \/>/i,
    `<meta name="twitter:image:alt" content="${route.imageAlt}" />`
  );

  // 7. Inject Breadcrumbs Schema if route has breadcrumbs
  if (route.breadcrumbs && route.breadcrumbs.length > 1) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url,
      })),
    };
    const breadcrumbScript = `\n    <!-- Route Breadcrumb Schema -->\n    <script type="application/ld+json">\n    ${JSON.stringify(breadcrumbSchema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace('</head>', breadcrumbScript);
  }

  // 8. Generate Branded Prerendered Semantic Layout
  // Beautifully styled with the website's exact colors to eliminate visual flashes while providing search bots with full HTML.
  const isDark = route.theme === 'dark';
  const bgStyle = isDark
    ? 'background-color: #082B1C; color: #FFFFFF;'
    : 'background-color: #F7F6EF; color: #14251A;';
  const cardBgStyle = isDark
    ? 'background-color: rgba(255, 255, 255, 0.06); border: 1px solid rgba(131, 184, 61, 0.25); color: #F7F6EF;'
    : 'background-color: #FFFFFF; border: 1px solid rgba(16, 61, 40, 0.12); color: #14251A;';
  const brandPillStyle = isDark
    ? 'background-color: rgba(255, 255, 255, 0.1); color: #B5D957; border: 1px solid rgba(131, 184, 61, 0.3);'
    : 'background-color: rgba(16, 61, 40, 0.08); color: #103D28; border: 1px solid rgba(16, 61, 40, 0.15);';

  const brandedPrerender = `
    <div id="root">
      <div class="min-h-screen flex flex-col font-sans" style="${bgStyle}">
        <!-- Static Brand Header Bar -->
        <header style="padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(131, 184, 61, 0.15); max-width: 1280px; margin: 0 auto; width: 100%;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div>
              <span style="font-weight: 800; font-size: 1.15rem; letter-spacing: -0.02em;">VERMA <span style="color: #FDB813;">KHAD BHANDAR</span></span>
              <span style="display: block; font-size: 0.75rem; color: #83B83D; font-weight: 600;">वर्मा खाद भंडार</span>
            </div>
          </div>
          <div style="font-size: 0.85rem; font-weight: 600;">
            <a href="tel:+918726248752" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
              <span>📞 +91 87262 48752</span>
            </a>
          </div>
        </header>

        <!-- Main Prerendered Hero & Article Content -->
        <main style="max-width: 1280px; margin: 0 auto; width: 100%; padding: 3rem 1.5rem 4rem;">
          <div style="max-width: 960px;">
            <div style="display: inline-block; padding: 0.35rem 0.85rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; margin-bottom: 1.25rem; ${brandPillStyle}">
              ${route.eyebrow}
            </div>

            <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.25; margin-bottom: 1rem; letter-spacing: -0.02em;">
              ${route.headingHi}
            </h1>

            <h2 style="font-size: 1.25rem; font-weight: 600; opacity: 0.9; margin-bottom: 1.5rem; line-height: 1.4;">
              ${route.headingEn}
            </h2>

            <p style="font-size: 1.05rem; line-height: 1.7; opacity: 0.92; margin-bottom: 1.25rem; max-width: 820px;">
              ${route.introHi}
            </p>

            <p style="font-size: 0.95rem; line-height: 1.65; opacity: 0.85; max-width: 820px; margin-bottom: 2.5rem;">
              ${route.introEn}
            </p>
          </div>

          <!-- Verified Store Information Card -->
          <div style="border-radius: 1rem; padding: 1.75rem; max-width: 820px; margin-top: 1rem; ${cardBgStyle}">
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem; color: #83B83D;">
              📍 प्रमाणित दुकान संपर्क एवं पता (Store Address & Navigation)
            </h3>
            <p style="margin: 0.35rem 0; font-size: 0.95rem; line-height: 1.5;">
              <strong>दुकान का पता:</strong> रसड़ा कासिमाबाद रोड, बाधुबांध मार्केट, रसड़ा, दुलहपाह, उत्तर प्रदेश 221712
            </p>
            <p style="margin: 0.35rem 0; font-size: 0.9rem; line-height: 1.5; opacity: 0.9;">
              <strong>Address:</strong> Rasra Kasimabad Road, Badhubandh Market, Rasra, Dulahpah, Uttar Pradesh 221712, India
            </p>
            <p style="margin: 0.35rem 0; font-size: 0.9rem; line-height: 1.5;">
              <strong>फोन एवं WhatsApp:</strong> <a href="tel:+918726248752" style="color: #83B83D; font-weight: 700; text-decoration: none;">+91 87262 48752</a>
            </p>
            <p style="margin: 0.35rem 0; font-size: 0.9rem; line-height: 1.5;">
              <strong>दुकान का समय:</strong> सोमवार से रविवार: प्रातः 8:00 बजे से सायं 7:30 बजे तक
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.9rem;">
              <strong>Google Maps नेविगेशन:</strong> <a href="https://maps.app.goo.gl/oWXYbJfeAPS23hrL9" target="_blank" rel="noopener noreferrer" style="color: #E8B94F; text-decoration: underline;">https://maps.app.goo.gl/oWXYbJfeAPS23hrL9</a>
            </p>
          </div>
        </main>

        <!-- Static Footer -->
        <footer style="margin-top: auto; padding: 2rem 1.5rem; border-top: 1px solid rgba(131, 184, 61, 0.15); text-align: center; font-size: 0.8rem; opacity: 0.75;">
          <p>© 2026 VERMA KHAD BHANDAR (वर्मा खाद भंडार). सर्वाधिकार सुरक्षित। • Rasra, Ballia, UP</p>
        </footer>
      </div>
    </div>
  `;

  html = html.replace('<div id="root"></div>', brandedPrerender.trim());

  // Write file
  const targetFile = path.join(distDir, route.outputPath);
  const targetSubDir = path.dirname(targetFile);
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true });
  }

  fs.writeFileSync(targetFile, html, 'utf-8');
  console.log(`✅ Prerendered [${route.path}] (${route.theme}) -> dist/${route.outputPath}`);
});

// Also create dist/404.html for static hosts
const notFoundHtml = template
  .replace(/<title>.*?<\/title>/i, '<title>404 — पृष्ठ उपलब्ध नहीं | Verma Khad Bhandar</title>')
  .replace(/<link rel="canonical" href=".*?" \/>/i, '');
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');
console.log('✅ Created dist/404.html for static host client fallback.');

console.log('🎉 Static prerendering completed successfully for all 8 canonical routes!\n');
