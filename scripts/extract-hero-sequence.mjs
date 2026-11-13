import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const videoPath = path.resolve('public/images/hero/hero.mp4');
const altVideoPath = path.resolve('public/images/hero.mp4');

// Ensure alternative video path exists as a copy/link so both work
if (!fs.existsSync(altVideoPath) && fs.existsSync(videoPath)) {
  fs.copyFileSync(videoPath, altVideoPath);
  console.log(`Synced video to alternative path: ${altVideoPath}`);
}

if (!fs.existsSync(videoPath)) {
  console.error(`Source video not found at ${videoPath}`);
  process.exit(1);
}

const outputDir = path.resolve('public/images/hero/sequence');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('1. Probing video metadata...');
const probeJson = execSync(
  `ffprobe -v error -show_entries format=duration,size,bit_rate -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames,display_aspect_ratio -of json "${videoPath}"`,
  { encoding: 'utf-8' }
);
const probeData = JSON.parse(probeJson);
const videoStream = probeData.streams.find((s) => s.codec_name === 'h264' || s.width);
const duration = parseFloat(probeData.format.duration);
const origWidth = videoStream.width;
const origHeight = videoStream.height;
const origFps = eval(videoStream.r_frame_rate);
const origSize = parseInt(probeData.format.size, 10);

console.log(`Original Video: ${origWidth}x${origHeight} @ ${origFps} fps, ${duration.toFixed(2)}s (${(origSize / 1024 / 1024).toFixed(2)} MB)`);

// Extraction settings - Super-resolution 1080p extraction with Lanczos + Unsharp filtering
const extractionFps = 12;
const targetWidth = 1920;
const targetHeight = 1080;
const quality = 92;

console.log(`2. Extracting frames at ${extractionFps} fps (${targetWidth}x${targetHeight}, WebP Q${quality})...`);

// Clean existing frames in sequence directory if any
const existingFiles = fs.readdirSync(outputDir);
for (const file of existingFiles) {
  if (file.startsWith('frame_') && file.endsWith('.webp')) {
    fs.unlinkSync(path.join(outputDir, file));
  }
}

// Execute ffmpeg extraction with libwebp, Lanczos scaling & gentle unsharp filter
const ffmpegCmd = `ffmpeg -y -i "${videoPath}" -vf "fps=${extractionFps},scale=${targetWidth}:${targetHeight}:flags=lanczos,unsharp=5:5:0.7:3:3:0.3" -c:v libwebp -quality ${quality} -compression_level 5 "${path.join(outputDir, 'frame_%04d.webp')}"`;

execSync(ffmpegCmd, { stdio: 'inherit' });

// Verify extracted frames
const frameFiles = fs
  .readdirSync(outputDir)
  .filter((f) => f.startsWith('frame_') && f.endsWith('.webp'))
  .sort();

const totalFrames = frameFiles.length;
console.log(`Extracted ${totalFrames} frames.`);

let totalSequenceBytes = 0;
const framesMetadata = frameFiles.map((file, idx) => {
  const filePath = path.join(outputDir, file);
  const stats = fs.statSync(filePath);
  totalSequenceBytes += stats.size;
  return {
    index: idx,
    frameNumber: idx + 1,
    filename: file,
    path: `/images/hero/sequence/${file}`,
    timestamp: +(idx / extractionFps).toFixed(3),
    sizeBytes: stats.size,
  };
});

const avgSizeBytes = Math.round(totalSequenceBytes / totalFrames);
console.log(`Total sequence size: ${(totalSequenceBytes / 1024 / 1024).toFixed(2)} MB (avg ${(avgSizeBytes / 1024).toFixed(1)} KB/frame)`);

// 3. Generate Contact Sheet (scaled down to thumbnail grid so it fits comfortably within JPEG dimensions)
console.log('3. Generating Contact Sheet...');
const contactSheetPath = path.join(outputDir, 'contact_sheet.jpg');
const cols = 12;
const rows = Math.ceil(totalFrames / cols);

try {
  execSync(
    `ffmpeg -y -i "${path.join(outputDir, 'frame_%04d.webp')}" -filter_complex "scale=240:135,tile=${cols}x${rows}:margin=1:padding=1:color=black" -q:v 3 "${contactSheetPath}"`,
    { stdio: 'inherit' }
  );
  const csStats = fs.statSync(contactSheetPath);
  console.log(`Contact sheet generated: ${contactSheetPath} (${(csStats.size / 1024).toFixed(1)} KB)`);
} catch (err) {
  console.warn('Could not generate tile contact sheet:', err.message);
}

// 4. Create manifest.json
console.log('4. Writing manifest.json...');
const manifest = {
  version: '1.0.0',
  generatedAt: new Date().toISOString(),
  sourceVideo: {
    filename: path.basename(videoPath),
    durationSeconds: +duration.toFixed(3),
    originalWidth: origWidth,
    originalHeight: origHeight,
    originalFps: origFps,
    originalSizeBytes: origSize,
    codec: videoStream.codec_name,
  },
  sequence: {
    extractionFps,
    dimensions: {
      width: targetWidth,
      height: targetHeight,
      aspectRatio: '16:9',
    },
    format: 'webp',
    quality,
    totalFrames,
    durationSeconds: +(totalFrames / extractionFps).toFixed(3),
    totalSizeBytes: totalSequenceBytes,
    averageFrameSizeBytes: avgSizeBytes,
    contactSheet: '/images/hero/sequence/contact_sheet.jpg',
    frames: framesMetadata,
  },
};

const manifestPath = path.join(outputDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
console.log(`Manifest saved to ${manifestPath}`);

console.log('\n--- EXTRACTION COMPLETE ---');
console.log(`Frames: ${totalFrames} frames`);
console.log(`Extraction Rate: ${extractionFps} FPS`);
console.log(`Total Sequence Size: ${(totalSequenceBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Manifest: ${manifestPath}`);
