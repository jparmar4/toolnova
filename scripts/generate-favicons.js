const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputImagePath = path.join(__dirname, "../public/logo.png");
const publicDir = path.join(__dirname, "../public");

async function generateFavicons() {
    try {
        if (!fs.existsSync(inputImagePath)) {
            console.error("Source logo.png not found!");
            return;
        }

        // Generate 16x16 favicon
        await sharp(inputImagePath)
            .resize(16, 16)
            .toFile(path.join(publicDir, "favicon-16x16.png"));
        console.log("Created favicon-16x16.png");

        // Generate 32x32 favicon
        await sharp(inputImagePath)
            .resize(32, 32)
            .toFile(path.join(publicDir, "favicon-32x32.png"));
        console.log("Created favicon-32x32.png");

        // Generate 180x180 apple touch icon
        await sharp(inputImagePath)
            .resize(180, 180)
            .toFile(path.join(publicDir, "apple-touch-icon.png"));
        console.log("Created apple-touch-icon.png");

        // Generate 192x192 android chrome icon
        await sharp(inputImagePath)
            .resize(192, 192)
            .toFile(path.join(publicDir, "android-chrome-192x192.png"));
        console.log("Created android-chrome-192x192.png");

        // Generate 512x512 android chrome icon
        await sharp(inputImagePath)
            .resize(512, 512)
            .toFile(path.join(publicDir, "android-chrome-512x512.png"));
        console.log("Created android-chrome-512x512.png");

        console.log("All favicons generated successfully!");
    } catch (error) {
        console.error("Error generating favicons:", error);
    }
}

generateFavicons();
