/**
 * Image Optimization Script
 * Converts PNG images to WebP format for better performance
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const blogImagesDir = path.join(publicDir, 'images', 'blog');

async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

        console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB → WebP: ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);

        return { originalSize, newSize, savings };
    } catch (error) {
        console.error(`❌ Error converting ${inputPath}:`, error.message);
        return null;
    }
}

async function optimizeImages() {
    console.log('🚀 Starting image optimization...\n');

    let totalOriginal = 0;
    let totalNew = 0;
    let count = 0;

    // Convert blog images
    if (fs.existsSync(blogImagesDir)) {
        const files = fs.readdirSync(blogImagesDir);
        const pngFiles = files.filter(f => f.endsWith('.png'));

        console.log(`📁 Found ${pngFiles.length} PNG images in blog directory\n`);

        for (const file of pngFiles) {
            const inputPath = path.join(blogImagesDir, file);
            const outputPath = path.join(blogImagesDir, file.replace('.png', '.webp'));

            const result = await convertToWebP(inputPath, outputPath);
            if (result) {
                totalOriginal += result.originalSize;
                totalNew += result.newSize;
                count++;
            }
        }
    }

    // Convert logo.png
    const logoPath = path.join(publicDir, 'logo.png');
    if (fs.existsSync(logoPath)) {
        const logoWebPPath = path.join(publicDir, 'logo.webp');
        const result = await convertToWebP(logoPath, logoWebPPath);
        if (result) {
            totalOriginal += result.originalSize;
            totalNew += result.newSize;
            count++;
        }
    }

    console.log('✨ Optimization complete!\n');
    console.log(`📊 Summary:`);
    console.log(`   Images converted: ${count}`);
    console.log(`   Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total WebP size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total savings: ${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%`);
    console.log(`\n💡 Remember to update image references in your code to use .webp files!`);
}

// Check if sharp is installed
try {
    require.resolve('sharp');
    optimizeImages();
} catch (e) {
    console.log('📦 Installing sharp for image optimization...');
    console.log('Run: npm install sharp --save-dev');
    console.log('Then run this script again.');
}
