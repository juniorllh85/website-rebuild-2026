// Converts public PNG images to compressed WebP (max 1600px wide).
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dirs = ['public/images', 'public'];

for (const dir of dirs) {
  for (const file of await readdir(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const src = path.join(dir, file);
    const out = src.replace(/\.(png|jpe?g)$/i, '.webp');
    const isLogo = file.startsWith('logo');
    await sharp(src)
      .resize({ width: isLogo ? 256 : 1600, withoutEnlargement: true })
      .webp({ quality: isLogo ? 85 : 72 })
      .toFile(out);
    const [a, b] = await Promise.all([stat(src), stat(out)]);
    console.log(`${src}: ${(a.size / 1024).toFixed(0)}KB -> ${(b.size / 1024).toFixed(0)}KB`);
  }
}
