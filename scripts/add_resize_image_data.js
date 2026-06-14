const fs = require('fs');
let content = fs.readFileSync('src/data/tools.ts', 'utf8');

const newData = `    "resize-image": {
        slug: "resize-image",
        name: "Image Resizer",
        tagline: "Resize images to exact dimensions",
        description: "Resize JPG, PNG, WebP, and other images to exact pixel dimensions or percentages. Perfect for social media profiles, website banners, and printing. Keep aspect ratio or stretch to fit your needs without losing quality.",
        category: "Image Tools",
        howItWorks: [
            { step: 1, title: "Upload Image", desc: "Select or drag and drop the image you want to resize." },
            { step: 2, title: "Set Dimensions", desc: "Enter the exact width and height in pixels, or choose a percentage." },
            { step: 3, title: "Adjust Settings", desc: "Choose whether to maintain the aspect ratio to prevent stretching." },
            { step: 4, title: "Download", desc: "Download your newly resized image instantly." }
        ],
        benefits: [
            { title: "Exact Dimensions", desc: "Resize your images to the precise pixel width and height you need." },
            { title: "Maintain Aspect Ratio", desc: "Lock the aspect ratio to ensure your images don't get stretched or distorted." },
            { title: "Fast and Private", desc: "All resizing happens in your browser. Your images are never uploaded to any server." },
            { title: "Multiple Formats", desc: "Supports JPG, PNG, WebP, and other common web image formats." }
        ],
        faqs: [
            { question: "Can I resize an image without losing quality?", answer: "Downsizing an image generally retains quality, while upsizing can make it pixelated. Our tool uses browser-native canvas scaling to ensure the best possible result." },
            { question: "What formats does the resizer support?", answer: "You can resize JPG, JPEG, PNG, WebP, and BMP images." },
            { question: "How do I avoid stretching my image?", answer: "Keep the 'Maintain Aspect Ratio' option checked. When you change the width, the height will automatically adjust to keep the image proportional." },
            { question: "Is there a limit on file size?", answer: "Because everything runs in your browser, the only limit is your device's memory. Most modern devices can easily handle images up to 50MB." },
            { question: "Is the Image Resizer free?", answer: "Yes, completely free with no limits or watermarks." }
        ]
    },
`;

const insertIndex = content.indexOf('"image-compressor": {');
if (insertIndex !== -1) {
    const nextItemIndex = content.indexOf('    "bio-generator": {', insertIndex);
    if (nextItemIndex !== -1) {
        content = content.slice(0, nextItemIndex) + newData + content.slice(nextItemIndex);
        fs.writeFileSync('src/data/tools.ts', content, 'utf8');
        console.log('Successfully added resize-image to tools.ts');
    }
} else {
    console.log('Could not find insertion point.');
}
