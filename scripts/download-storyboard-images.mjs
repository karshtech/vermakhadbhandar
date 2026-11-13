import fs from 'fs';
import path from 'path';
import https from 'https';

const STAGE_IMAGES = [
  {
    stage: 'stage1-ploughing',
    file: 'stage1-ploughing-tractor.jpg',
    url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'खेत की जुताई (Land Preparation / Ploughing)',
    credit: 'Warren Wong (Unsplash)',
    description: 'Indian agricultural field with tractor ploughing dark soil, visible furrows, natural morning light',
  },
  {
    stage: 'stage2-sowing',
    file: 'stage2-sowing-seeds.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'बीज की बुवाई (Certified Sowing)',
    credit: 'CDC / Unsplash',
    description: 'Close-up of hands and seeds entering prepared rich agricultural soil',
  },
  {
    stage: 'stage3-irrigation',
    file: 'stage3-irrigation-water.jpg',
    url: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'समय पर सिंचाई (Timely Irrigation)',
    credit: 'Efraimstochter (Unsplash)',
    description: 'Irrigation channel with water flowing through agricultural furrows between crop beds',
  },
  {
    stage: 'stage4-germination',
    file: 'stage4-germination-sprout.jpg',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'नन्हा अंकुरण (Seedling Germination)',
    credit: 'Roman Synkevych (Unsplash)',
    description: 'Tender green seedlings emerging fresh from moist agricultural soil with morning light',
  },
  {
    stage: 'stage5-growth',
    file: 'stage5-crop-growth.jpg',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'फसल की वृद्धि (Canopy Growth - Wheat & Paddy)',
    credit: 'Jan Kopřiva (Unsplash)',
    description: 'Vibrant green wheat and paddy field with structured crop rows and lush vegetative canopy',
  },
  {
    stage: 'stage6-harvest',
    file: 'stage6-harvest-golden.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85',
    titleHi: 'लहलहाती पैदावार (Bountiful Harvest)',
    credit: 'Karsten Würth (Unsplash)',
    description: 'Bountiful golden mature wheat and grain field stretching to the sunset horizon with amber glow',
  },
];

const targetDir = path.resolve('public/images/hero/stages');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlinkSync(dest);
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading 6-stage agricultural storyboard photography...');
  for (const img of STAGE_IMAGES) {
    const dest = path.join(targetDir, img.file);
    console.log(`Downloading: [${img.stage}] ${img.titleHi} -> ${img.file}`);
    await download(img.url, dest);
    const stats = fs.statSync(dest);
    console.log(`  -> Saved ${(stats.size / 1024).toFixed(1)} KB to ${dest}`);
  }
  console.log('All 6 storyboard stage images successfully downloaded and stored locally.');
}

run().catch((err) => {
  console.error('Download error:', err);
  process.exit(1);
});
