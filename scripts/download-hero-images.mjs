import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = [
  {
    name: 'hero-landscape-golden-hour.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85',
    credit: 'Karsten Würth (Unsplash)',
    description: 'Vast golden hour agricultural landscape with rolling hills and distant warm horizon',
  },
  {
    name: 'hero-crop-rows-soil.jpg',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=85',
    credit: 'Jan Kopřiva (Unsplash)',
    description: 'Rich fertile agricultural soil and structured green crop furrow rows stretching to the horizon',
  },
  {
    name: 'hero-crops-close-up.png',
    url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=85',
    credit: 'Melissa Askew (Unsplash)',
    description: 'Close-up healthy green wheat and crop blades catching warm sun rays',
  },
  {
    name: 'hero-tractor-field.jpg',
    url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1800&q=85',
    credit: 'Warren Wong (Unsplash)',
    description: 'Tractor working along agricultural crop furrows under vast open sky',
  },
  {
    name: 'hero-sky-golden-hour.jpg',
    url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=2000&q=85',
    credit: 'Dawid Zawiła (Unsplash)',
    description: 'Cinematic golden hour sky with warm atmospheric haze and amber sunlight',
  },
];

const targetDir = path.resolve('public/images/hero');
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
  console.log('Downloading high-resolution agricultural photographs...');
  for (const img of IMAGES) {
    const dest = path.join(targetDir, img.name);
    console.log(`Downloading: ${img.name} (${img.description})`);
    await download(img.url, dest);
    const stats = fs.statSync(dest);
    console.log(`  -> Saved ${(stats.size / 1024).toFixed(1)} KB to ${dest}`);
  }
  console.log('All hero images successfully downloaded and stored locally.');
}

run().catch((err) => {
  console.error('Download error:', err);
  process.exit(1);
});
