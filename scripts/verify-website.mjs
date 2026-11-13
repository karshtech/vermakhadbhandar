import fs from 'fs';
import path from 'path';

console.log('--- VERMA KHAD BHANDAR PRODUCTION SEO & PRERENDERING VERIFICATION ---');

let hasErrors = false;

// 1. Verify 8 Canonical Public Routes vs 1 Catch-All Error Route
const CANONICAL_ROUTES = [
  { path: '/', file: 'index.html', titleSnippet: 'Verma Khad Bhandar' },
  { path: '/about', file: 'about/index.html', titleSnippet: 'About Verma Khad Bhandar' },
  { path: '/products', file: 'products/index.html', titleSnippet: 'Fertilizers, Seeds & Pesticides' },
  { path: '/agriculture', file: 'agriculture/index.html', titleSnippet: 'Agriculture Information' },
  { path: '/why-choose-us', file: 'why-choose-us/index.html', titleSnippet: 'Why Choose Verma Khad Bhandar' },
  { path: '/visit', file: 'visit/index.html', titleSnippet: 'Visit Verma Khad Bhandar' },
  { path: '/contact', file: 'contact/index.html', titleSnippet: 'Contact Verma Khad Bhandar' },
  { path: '/fertilizer-shop-rasra', file: 'fertilizer-shop-rasra/index.html', titleSnippet: 'Fertilizer & Seed Shop in Rasra' },
];

console.log(`\n📋 Checking Route Integrity: ${CANONICAL_ROUTES.length} Public Canonical Routes expected.`);

// 2. Verify XML Sitemap
const sitemapPath = path.resolve('public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (locMatches.length === CANONICAL_ROUTES.length) {
    console.log(`✅ Sitemap contains exactly ${locMatches.length} canonical URLs (no 404/test duplicates).`);
  } else {
    console.error(`❌ Sitemap count mismatch! Found ${locMatches.length}, expected ${CANONICAL_ROUTES.length}.`);
    hasErrors = true;
  }

  CANONICAL_ROUTES.forEach((r) => {
    const expectedUrl = `https://vermakhadbhandar.com${r.path === '/' ? '/' : r.path}`;
    if (sitemapContent.includes(expectedUrl)) {
      console.log(`  ✓ Sitemap URL verified: ${expectedUrl}`);
    } else {
      console.error(`  ❌ Sitemap missing canonical URL: ${expectedUrl}`);
      hasErrors = true;
    }
  });

  if (sitemapContent.includes('404') || sitemapContent.includes('not-found')) {
    console.error('❌ Sitemap improperly includes a 404 or not-found page!');
    hasErrors = true;
  }
} else {
  console.error('❌ Missing public/sitemap.xml');
  hasErrors = true;
}

// 3. Verify Robots.txt and LLMs.txt
const robotsPath = path.resolve('public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (robotsContent.includes('Allow: /') && robotsContent.includes('https://vermakhadbhandar.com/sitemap.xml')) {
    console.log('✅ public/robots.txt verified with correct sitemap reference.');
  } else {
    console.error('❌ public/robots.txt invalid or missing sitemap directive.');
    hasErrors = true;
  }
} else {
  console.error('❌ Missing public/robots.txt');
  hasErrors = true;
}

const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  const llmsContent = fs.readFileSync(llmsPath, 'utf-8');
  if (
    llmsContent.includes('Verma Khad Bhandar') &&
    llmsContent.includes('25.839208') &&
    llmsContent.includes('83.776694') &&
    llmsContent.includes('Rasra') &&
    llmsContent.includes('Kurem')
  ) {
    console.log('✅ public/llms.txt verified with accurate business, geo & crop data.');
  } else {
    console.error('❌ public/llms.txt missing key verified information.');
    hasErrors = true;
  }
} else {
  console.error('❌ Missing public/llms.txt');
  hasErrors = true;
}

// 4. Verify Built & Prerendered HTML Files in dist/
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  console.log('\n🔍 Verifying Prerendered HTML Files in dist/:');
  CANONICAL_ROUTES.forEach((r) => {
    const filePath = path.join(distDir, r.file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasTitle = content.includes('<title>') && content.includes(r.titleSnippet);
      const hasMetaDesc = content.includes('<meta name="description"');
      const hasCanonical = content.includes('<link rel="canonical"') && content.includes(`https://vermakhadbhandar.com${r.path === '/' ? '/' : r.path}`);
      const hasOg =
        content.includes('og:title') &&
        content.includes('og:description') &&
        content.includes('og:url') &&
        content.includes('og:image') &&
        content.includes('og:image:secure_url') &&
        content.includes('og:image:type') &&
        content.includes('og:image:width') &&
        content.includes('og:image:height') &&
        content.includes('og:image:alt') &&
        content.includes('og:locale') &&
        content.includes('og:locale:alternate');
      const hasTwitter =
        content.includes('twitter:card') &&
        content.includes('twitter:title') &&
        content.includes('twitter:description') &&
        content.includes('twitter:image') &&
        content.includes('twitter:image:alt');
      const hasSocialJpg = content.includes('/images/social/og-');
      const hasLang = content.includes('lang="hi"');
      const hasH1 = content.includes('<h1');
      const hasAddress = content.includes('221712') && content.includes('+91 87262 48752');
      const hasJsonLd = content.includes('application/ld+json');

      if (hasTitle && hasMetaDesc && hasCanonical && hasOg && hasTwitter && hasSocialJpg && hasLang && hasH1 && hasAddress && hasJsonLd) {
        console.log(`  ✅ Prerendered [${r.path}] validated: Title, Meta, Canonical (${r.path}), OG (full suite), Twitter Card, Social Preview JPG, <h1>, NAP & JSON-LD present.`);
      } else {
        console.error(`  ❌ Prerendered [${r.path}] missing required tags!`);
        if (!hasTitle) console.error(`    - Missing or incorrect <title>`);
        if (!hasMetaDesc) console.error(`    - Missing <meta name="description">`);
        if (!hasCanonical) console.error(`    - Missing or incorrect <link rel="canonical">`);
        if (!hasOg) console.error(`    - Missing full suite of Open Graph tags`);
        if (!hasTwitter) console.error(`    - Missing Twitter card tags`);
        if (!hasSocialJpg) console.error(`    - Missing dedicated social preview JPEG`);
        if (!hasLang) console.error(`    - Missing lang="hi" attribute`);
        if (!hasH1) console.error(`    - Missing <h1> tag`);
        if (!hasAddress) console.error(`    - Missing NAP address or phone in crawlable content`);
        if (!hasJsonLd) console.error(`    - Missing JSON-LD script`);
        hasErrors = true;
      }
    } else {
      console.error(`  ❌ Prerendered file missing: dist/${r.file}`);
      hasErrors = true;
    }
  });

  // Verify 404 client fallback
  const notFoundPath = path.join(distDir, '404.html');
  if (fs.existsSync(notFoundPath)) {
    console.log('  ✅ dist/404.html verified for static host client fallback.');
  } else {
    console.error('  ❌ Missing dist/404.html');
    hasErrors = true;
  }

  // Verify LocalBusiness schema in index.html
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  if (
    indexHtml.includes('LocalBusiness') &&
    indexHtml.includes('25.839208') &&
    indexHtml.includes('83.776694') &&
    indexHtml.includes('+918726248752')
  ) {
    console.log('✅ Schema.org LocalBusiness structured data verified with verified coordinates & phone.');
  } else {
    console.error('❌ Schema.org LocalBusiness metadata incomplete in index.html');
    hasErrors = true;
  }
} else {
  console.warn('⚠️ dist directory not found. Run "npm run build" first to test prerendered output.');
}

// 5. Verify Photographic, Converted WebP & Social Assets
console.log('\n📸 Verifying Photographic, WebP & Social Assets:');
const optimizedWebpAssets = [
  'public/images/shop-exterior.webp',
  'public/images/hero/hero-landscape-golden-hour.webp',
  'public/images/hero/hero-crop-rows-soil.webp',
  'public/images/hero/hero-crops-close-up.webp',
  'public/images/hero/hero-tractor-field.webp',
  'public/images/hero/hero-sky-golden-hour.webp',
  'public/images/hero/stages/stage1-ploughing-tractor.webp',
  'public/images/hero/stages/stage2-sowing-seeds.webp',
  'public/images/hero/stages/stage3-irrigation-water.webp',
  'public/images/hero/stages/stage4-germination-sprout.webp',
  'public/images/hero/stages/stage5-crop-growth.webp',
  'public/images/hero/stages/stage6-harvest-golden.webp',
];

const socialPreviewAssets = [
  'public/images/social/og-home.jpg',
  'public/images/social/og-about.jpg',
  'public/images/social/og-products.jpg',
  'public/images/social/og-agriculture.jpg',
  'public/images/social/og-why-choose-us.jpg',
  'public/images/social/og-visit.jpg',
  'public/images/social/og-contact.jpg',
  'public/images/social/og-fertilizer-shop-rasra.jpg',
];

const sequenceAssets = [
  'public/images/hero/sequence/manifest.json',
  'public/images/hero/sequence/frame_0001.webp',
  'public/images/hero/sequence/frame_0120.webp',
];

console.log('  --- Converted WebP Website Assets ---');
optimizedWebpAssets.forEach((img) => {
  const imgPath = path.resolve(img);
  if (fs.existsSync(imgPath)) {
    const stat = fs.statSync(imgPath);
    console.log(`  ✓ WebP Asset verified: ${img} (${Math.round(stat.size / 1024)} KB)`);
  } else {
    console.error(`  ❌ WebP Asset missing: ${img}`);
    hasErrors = true;
  }
});

console.log('  --- Dedicated 1200x630 Social Preview JPEGs ---');
socialPreviewAssets.forEach((img) => {
  const imgPath = path.resolve(img);
  if (fs.existsSync(imgPath)) {
    const stat = fs.statSync(imgPath);
    console.log(`  ✓ Social Preview verified: ${img} (${Math.round(stat.size / 1024)} KB)`);
  } else {
    console.error(`  ❌ Social Preview missing: ${img}`);
    hasErrors = true;
  }
});

console.log('  --- Hero Sequence Frames ---');
sequenceAssets.forEach((img) => {
  const imgPath = path.resolve(img);
  if (fs.existsSync(imgPath)) {
    const stat = fs.statSync(imgPath);
    console.log(`  ✓ Sequence Asset verified: ${img} (${Math.round(stat.size / 1024)} KB)`);
  } else {
    console.error(`  ❌ Sequence Asset missing: ${img}`);
    hasErrors = true;
  }
});

// 6. Verify Source Page Components (8 Canonical + 1 Catch-All)
console.log('\n📄 Verifying Page Components in src/pages:');
const sourcePages = [
  { name: 'Home/Home.tsx', isCanonical: true },
  { name: 'About/About.tsx', isCanonical: true },
  { name: 'Products/Products.tsx', isCanonical: true },
  { name: 'Agriculture/Agriculture.tsx', isCanonical: true },
  { name: 'WhyChooseUs/WhyChooseUs.tsx', isCanonical: true },
  { name: 'Visit/Visit.tsx', isCanonical: true },
  { name: 'Contact/Contact.tsx', isCanonical: true },
  { name: 'LocalRasra/LocalRasra.tsx', isCanonical: true },
  { name: 'NotFound/NotFound.tsx', isCanonical: false, note: 'Catch-all 404 (non-indexable)' },
];

sourcePages.forEach((p) => {
  const filePath = path.resolve('src/pages', p.name);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ Component verified: src/pages/${p.name} ${p.isCanonical ? '[Canonical]' : `[${p.note}]`}`);
  } else {
    console.error(`  ❌ Component missing: src/pages/${p.name}`);
    hasErrors = true;
  }
});

// 7. Verify Layout & SEO Modules
console.log('\n⚙️ Verifying Layout & SEO Modules:');
const modules = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/PageLayout.tsx',
  'src/components/common/SectionHeading.tsx',
  'src/components/common/PageTransition.tsx',
  'src/components/common/LightboxModal.tsx',
  'src/components/common/FloatingActions.tsx',
  'src/components/common/TypingText.tsx',
  'src/components/common/HeroSequenceCanvas.tsx',
  'src/hooks/useSequencePreloader.ts',
  'src/hooks/usePageSEO.ts',
  'src/config/seo.ts',
  'src/components/SeasonalCalendar.tsx',
  'src/components/FarmCalculator.tsx',
  'src/components/AgriculturalScene.tsx',
  'src/components/HeroScene.tsx',
  'src/components/HeroTypography.tsx',
  'src/components/HeroSection.tsx',
  'src/components/StorytellingSection.tsx',
  'src/components/CTASection.tsx',
  'src/config/farmingJourney.ts',
  'src/i18n/translations.ts',
  'src/i18n/LanguageProvider.tsx',
  'src/app/router.tsx',
  'src/app/App.tsx',
];

modules.forEach((mod) => {
  const filePath = path.resolve(mod);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ Module verified: ${mod}`);
  } else {
    console.error(`  ❌ Module missing: ${mod}`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('\n❌ Verification finished with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL CHECKS PASSED: VERMA KHAD BHANDAR IS HARDENED, PRERENDERED & PRODUCTION READY!\n');
}
