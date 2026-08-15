import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const baseDir = path.resolve('public/images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await processDirectory(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);

    try {
      const metadata = await sharp(filePath).metadata();
      let pipeline = sharp(filePath);

      let targetWidth = 800;
      if (file.startsWith('cat_')) {
        targetWidth = 800;
      } else if (dir.includes('brands')) {
        targetWidth = 350;
      } else {
        targetWidth = 600;
      }

      if (metadata.width && metadata.width > targetWidth) {
        pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true });
      }

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9, effort: 7 });
      } else if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
      }

      const tempPath = filePath + '.tmp';
      await pipeline.toFile(tempPath);
      
      const newStat = fs.statSync(tempPath);
      const newSizeMb = (newStat.size / (1024 * 1024)).toFixed(2);
      
      fs.renameSync(tempPath, filePath);
      console.log(`[OK] ${path.relative(baseDir, filePath)}: ${sizeMb}MB -> ${newSizeMb}MB (${Math.round((1 - newStat.size / stat.size) * 100)}% saved)`);
    } catch (err) {
      console.error(`[ERR] ${file}:`, err.message);
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await processDirectory(baseDir);
  console.log('Image optimization complete!');
}

main();
