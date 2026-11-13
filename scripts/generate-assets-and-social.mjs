import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('=== VERMA KHAD BHANDAR ASSET OPTIMIZATION & SOCIAL IMAGE GENERATOR ===\n');

// 1. WEBP CONVERSION INVENTORY
const imagesToConvert = [
  { src: 'public/images/shop-exterior.jpg', dest: 'public/images/shop-exterior.webp', quality: 90, type: 'Storefront' },
  { src: 'public/images/hero/hero-crop-rows-soil.jpg', dest: 'public/images/hero/hero-crop-rows-soil.webp', quality: 90, type: 'Hero/Agricultural' },
  { src: 'public/images/hero/hero-crops-close-up.png', dest: 'public/images/hero/hero-crops-close-up.webp', quality: 90, type: 'Hero/Agricultural' },
  { src: 'public/images/hero/hero-landscape-golden-hour.jpg', dest: 'public/images/hero/hero-landscape-golden-hour.webp', quality: 90, type: 'Hero/Landscape' },
  { src: 'public/images/hero/hero-sky-golden-hour.jpg', dest: 'public/images/hero/hero-sky-golden-hour.webp', quality: 90, type: 'Hero/Atmosphere' },
  { src: 'public/images/hero/hero-tractor-field.jpg', dest: 'public/images/hero/hero-tractor-field.webp', quality: 90, type: 'Hero/Field' },
  { src: 'public/images/hero/stages/stage1-ploughing-tractor.jpg', dest: 'public/images/hero/stages/stage1-ploughing-tractor.webp', quality: 88, type: 'Farming Stage' },
  { src: 'public/images/hero/stages/stage2-sowing-seeds.jpg', dest: 'public/images/hero/stages/stage2-sowing-seeds.webp', quality: 88, type: 'Farming Stage' },
  { src: 'public/images/hero/stages/stage3-irrigation-water.jpg', dest: 'public/images/hero/stages/stage3-irrigation-water.webp', quality: 88, type: 'Farming Stage' },
  { src: 'public/images/hero/stages/stage4-germination-sprout.jpg', dest: 'public/images/hero/stages/stage4-germination-sprout.webp', quality: 88, type: 'Farming Stage' },
  { src: 'public/images/hero/stages/stage5-crop-growth.jpg', dest: 'public/images/hero/stages/stage5-crop-growth.webp', quality: 88, type: 'Farming Stage' },
  { src: 'public/images/hero/stages/stage6-harvest-golden.jpg', dest: 'public/images/hero/stages/stage6-harvest-golden.webp', quality: 88, type: 'Farming Stage' },
];

console.log('--- PHASE 1: CONVERTING ELIGIBLE RASTER IMAGES TO OPTIMIZED WEBP ---');
let totalOriginalBytes = 0;
let totalWebpBytes = 0;
const conversionStats = [];

for (const item of imagesToConvert) {
  const srcPath = path.resolve(item.src);
  const destPath = path.resolve(item.dest);

  if (!fs.existsSync(srcPath)) {
    console.error(`❌ Source image missing: ${item.src}`);
    continue;
  }

  const origSize = fs.statSync(srcPath).size;
  totalOriginalBytes += origSize;

  // Convert via ffmpeg
  const cmd = `ffmpeg -y -i "${srcPath}" -c:v libwebp -quality ${item.quality} "${destPath}"`;
  execSync(cmd, { stdio: 'pipe' });

  const webpSize = fs.statSync(destPath).size;
  totalWebpBytes += webpSize;

  const reduction = Math.round(((origSize - webpSize) / origSize) * 100);
  console.log(`✅ Converted [${item.type}] ${path.basename(item.src)} (${Math.round(origSize / 1024)} KB) -> ${path.basename(item.dest)} (${Math.round(webpSize / 1024)} KB) [${reduction}% smaller]`);

  conversionStats.push({
    file: path.basename(item.src),
    type: item.type,
    origKb: Math.round(origSize / 1024),
    webpKb: Math.round(webpSize / 1024),
    reduction: `${reduction}%`,
  });
}

const totalReduction = Math.round(((totalOriginalBytes - totalWebpBytes) / totalOriginalBytes) * 100);
console.log(`\n🎉 WebP Conversion Summary:`);
console.log(`  Total Original Size: ${Math.round(totalOriginalBytes / 1024)} KB`);
console.log(`  Total WebP Size:     ${Math.round(totalWebpBytes / 1024)} KB`);
console.log(`  Net Size Savings:    ${Math.round((totalOriginalBytes - totalWebpBytes) / 1024)} KB (${totalReduction}% reduction!)\n`);

// 2. SOCIAL PREVIEW IMAGES GENERATION (1200 x 630 JPEG)
console.log('--- PHASE 2: GENERATING DEDICATED SOCIAL PREVIEW IMAGES (1200x630 JPEG) ---');

const socialDir = path.resolve('public/images/social');
if (!fs.existsSync(socialDir)) {
  fs.mkdirSync(socialDir, { recursive: true });
}

const socialPreviews = [
  {
    route: '/',
    filename: 'og-home.jpg',
    bg: 'public/images/hero/hero-landscape-golden-hour.jpg',
    badge: 'VERIFIED AGRICULTURAL CENTER • RASRA & BALLIA',
    badgeHi: 'प्रमाणित कृषि केंद्र • रसड़ा, कुरेम एवं बलिया',
    title: 'VERMA KHAD BHANDAR',
    titleHi: 'वर्मा खाद भंडार',
    subtitle: 'Fertilizers, Certified Seeds & Crop Protection Products',
    tagline: 'हर खेत की तरक्की, हमारी जिम्मेदारी • Quality Inputs & Farm Support',
  },
  {
    route: '/about',
    filename: 'og-about.jpg',
    bg: 'public/images/hero/hero-crop-rows-soil.jpg',
    badge: 'ABOUT OUR MISSION • हमारे बारे में',
    badgeHi: 'विश्वसनीय कृषि साथी',
    title: 'Your Trusted Agricultural Partner',
    titleHi: 'किसान के परिश्रम का सच्चा सम्मान',
    subtitle: 'Dedicated to genuine supplies, soil health & farmer trust.',
    tagline: 'Supporting your farming journey from soil prep to abundant harvest.',
  },
  {
    route: '/products',
    filename: 'og-products.jpg',
    bg: 'public/images/hero/stages/stage2-sowing-seeds.jpg',
    badge: 'AGRICULTURAL CATALOG • उत्पाद कैटलॉग',
    badgeHi: 'खाद, उन्नत बीज, कीटनाशक एवं पौध पोषण',
    title: 'Fertilizers, Seeds & Crop Protection',
    titleHi: 'प्रामाणिक खाद एवं बीज भंडार',
    subtitle: 'Urea, DAP, NPK complexes, Potash, Certified Seeds & Bio-stimulants.',
    tagline: 'Dependable inputs tailored for maximum crop emergence & vigor.',
  },
  {
    route: '/agriculture',
    filename: 'og-agriculture.jpg',
    bg: 'public/images/hero/stages/stage3-irrigation-water.jpg',
    badge: 'AGRONOMIC GUIDANCE • कृषि जानकारी',
    badgeHi: 'रसड़ा व बलिया फसल सलाह',
    title: 'Seasonal Crop Advice & Soil Health',
    titleHi: 'मौसमी फसल सलाह एवं मृदा पोषण',
    subtitle: 'Crop calendars for Rabi, Kharif & Zaid seasons in eastern UP.',
    tagline: 'Scientific NPK balance, irrigation schedules & pest management.',
  },
  {
    route: '/why-choose-us',
    filename: 'og-why-choose-us.jpg',
    bg: 'public/images/hero/hero-tractor-field.jpg',
    badge: 'FARMER TRUST • किसान विश्वास',
    badgeHi: 'प्रामाणिकता, विश्वास एवं सहयोग',
    title: 'Why Farmers Trust Verma Khad Bhandar',
    titleHi: 'चार मजबूत स्तंभों पर टिका भरोसा',
    subtitle: '100% authentic sealed supplies, honest advice & fair dealings.',
    tagline: 'Dedicated partnership across every sowing and irrigation window.',
  },
  {
    route: '/visit',
    filename: 'og-visit.jpg',
    bg: 'public/images/shop-exterior.jpg',
    badge: 'STORE LOCATION • दुकान स्थिति',
    badgeHi: 'बाधुबांध मार्केट, रसड़ा-कासिमाबाद रोड',
    title: 'Visit Our Physical Storefront',
    titleHi: 'हमारी दुकान पर पधारें (Verma Khad Bhandar)',
    subtitle: 'Monday to Sunday: 8:00 AM – 7:30 PM (All 7 Days).',
    tagline: 'Convenient roadfront parking and direct tractor-trolley loading.',
  },
  {
    route: '/contact',
    filename: 'og-contact.jpg',
    bg: 'public/images/shop-exterior.jpg',
    badge: 'CONTACT & INQUIRIES • संपर्क करें',
    badgeHi: 'फोन एवं व्हाट्सएप सहायता',
    title: 'Call or WhatsApp: +91 87262 48752',
    titleHi: 'वर्मा खाद भंडार से संपर्क करें',
    subtitle: 'Confirm seed availability, fertilizer batches & crop advice.',
    tagline: 'Serving farmers of Rasra, Kurem, Dulahpah & Ballia district.',
  },
  {
    route: '/fertilizer-shop-rasra',
    filename: 'og-fertilizer-shop-rasra.jpg',
    bg: 'public/images/hero/hero-crop-rows-soil.jpg',
    badge: 'LOCAL HUB • RASRA & KUREM',
    badgeHi: 'रसड़ा एवं कुरेम स्थानीय कृषि केंद्र',
    title: 'Fertilizer & Seed Center for Rasra & Kurem',
    titleHi: 'रसड़ा एवं कुरेम क्षेत्र के लिए प्रामाणिक खाद-बीज केंद्र',
    subtitle: 'Single physical store at Badhubandh Market, Dulahpah (6–8 km from Rasra).',
    tagline: 'Trusted agricultural fertilizers, certified seeds & crop protection.',
  },
];

for (const p of socialPreviews) {
  const bgAbsPath = path.resolve(p.bg).replace(/\\/g, '/');
  const destPath = path.resolve(socialDir, p.filename);

  const esc = (str) => (str ? str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '');

  // Create SVG composite
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#082B1C" stop-opacity="0.88"/>
      <stop offset="45%" stop-color="#082B1C" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#04180F" stop-opacity="0.94"/>
    </linearGradient>
    <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#83B83D"/>
      <stop offset="50%" stop-color="#B5D957"/>
      <stop offset="100%" stop-color="#E8B94F"/>
    </linearGradient>
  </defs>

  <!-- Background Photographic Asset -->
  <image href="file:///${bgAbsPath}" width="1200" height="630" preserveAspectRatio="xMidYMid slice"/>

  <!-- Cinematic Brand Overlay -->
  <rect width="1200" height="630" fill="url(#overlayGrad)"/>

  <!-- Decorative Border -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#83B83D" stroke-width="2" stroke-opacity="0.3"/>

  <!-- Content Container (Safe Zone: 80px left/right, 60px top/bottom) -->
  <g transform="translate(80, 70)">
    <!-- Brand Badge -->
    <rect x="0" y="0" width="480" height="38" rx="19" fill="#103D28" stroke="#83B83D" stroke-width="1.5" stroke-opacity="0.5"/>
    <circle cx="20" cy="19" r="6" fill="#83B83D"/>
    <text x="36" y="24" fill="#B5D957" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">
      ${esc(p.badge)}
    </text>

    <!-- Brand Header -->
    <text x="0" y="100" fill="#FFFFFF" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" letter-spacing="-0.5">
      VERMA <tspan fill="#FDB813">KHAD BHANDAR</tspan>
      <tspan fill="#B5D957" font-size="22" font-weight="700"> • वर्मा खाद भंडार</tspan>
    </text>

    <!-- Main Headline (English & Hindi) -->
    <text x="0" y="180" fill="#FFFFFF" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" letter-spacing="-0.5">
      ${esc(p.title)}
    </text>
    <text x="0" y="235" fill="#E8B94F" font-family="'Noto Sans Devanagari', 'Segoe UI', system-ui, sans-serif" font-size="26" font-weight="700">
      ${esc(p.titleHi)}
    </text>

    <!-- Subtitle & Key Value Proposition -->
    <text x="0" y="305" fill="#F7F6EF" fill-opacity="0.92" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="22" font-weight="500">
      ${esc(p.subtitle)}
    </text>
    <text x="0" y="345" fill="#B5D957" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="18" font-weight="600">
      ${esc(p.tagline)}
    </text>

    <!-- Bottom Verified Location & Contact Strip -->
    <line x1="0" y1="410" x2="1040" y2="410" stroke="#83B83D" stroke-opacity="0.3" stroke-width="1"/>

    <text x="0" y="445" fill="#FFFFFF" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="16" font-weight="600">
      📍 Rasra Kasimabad Road, Badhubandh Market, Dulahpah (PIN 221712)
    </text>
    <text x="750" y="445" fill="#E8B94F" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="16" font-weight="700">
      📞 Phone / WA: +91 87262 48752
    </text>
  </g>
</svg>
`.trim();

  const tempSvg = path.resolve(`temp-${p.filename}.svg`);
  fs.writeFileSync(tempSvg, svgContent, 'utf-8');

  try {
    // Render to 1200x630 JPEG with ffmpeg at high quality (qscale:v 2)
    execSync(`ffmpeg -y -i "${tempSvg}" -qscale:v 2 "${destPath}"`, { stdio: 'pipe' });
    const stat = fs.statSync(destPath);
    console.log(`✅ Generated social preview: ${p.filename} (1200x630, ${Math.round(stat.size / 1024)} KB) for route [${p.route}]`);
  } finally {
    if (fs.existsSync(tempSvg)) {
      fs.unlinkSync(tempSvg);
    }
  }
}

console.log('\n🎉 ALL 8 DEDICATED SOCIAL PREVIEWS GENERATED IN public/images/social/!\n');
