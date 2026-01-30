'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Upload, Download, Trash2, Image as ImageIcon, Loader2, ArrowLeft, Shield, Zap, Sparkles, Layers, Star, FileText, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

const relatedTools = [
    { name: 'PNG to JPG', slug: 'png-to-jpg', icon: ImageIcon, color: 'from-amber-500 to-orange-500' },
    { name: 'Image Compressor', slug: 'image-compressor', icon: Zap, color: 'from-orange-500 to-red-500' },
    { name: 'Image to PDF', slug: 'image-to-pdf', icon: FileText, color: 'from-green-500 to-teal-500' },
    { name: 'Merge PDF', slug: 'merge-pdf', icon: Layers, color: 'from-red-500 to-orange-500' },
];

export default function JPGtoPNGClient() {
    const router = useRouter();
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');
    const [converting, setConverting] = useState(false);
    const [convertedUrl, setConvertedUrl] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];
        if (!file.type.startsWith('image/')) {
            toast.error('Please select an image file');
            return;
        }
        setImage(file);
        setConvertedUrl('');
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target?.result as string);
        reader.readAsDataURL(file);
    };

    const convertToPNG = async () => {
        if (!image) return;
        setConverting(true);

        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new window.Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setConvertedUrl(url);
                            toast.success('Converted to PNG!');
                        }
                        setConverting(false);
                    },
                    'image/png'
                );
            };
            img.src = preview;
        } catch (error) {
            toast.error('Failed to convert image');
            setConverting(false);
        }
    };

    const downloadConverted = () => {
        if (!convertedUrl) return;
        const a = document.createElement('a');
        a.href = convertedUrl;
        a.download = `${image?.name.replace(/\.[^/.]+$/, '')}.png`;
        a.click();
    };

    return (
        <div className="flex-1 w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0f1419] dark:via-background dark:to-[#0f1419]">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 mb-4 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Back</span>
                </button>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools/image-pdf-tools" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Image & PDF Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">JPG to PNG</span>
                </div>

                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-5">
                        <ArrowRight className="h-4 w-4" />
                        Free Converter
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">JPG to PNG Converter</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Convert JPG/JPEG images to PNG format with transparency support</p>
                </div>

                <div className="bg-white/80 dark:bg-[#1a1f2e]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 md:p-8">
                        <input type="file" ref={fileInputRef} onChange={(e) => handleFileSelect(e.target.files)} accept="image/jpeg,image/jpg" className="hidden" />

                        {!image ? (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all"
                            >
                                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                <p className="text-lg font-semibold text-foreground mb-2">Drop JPG image here or click to upload</p>
                                <p className="text-sm text-muted-foreground">Select a JPG/JPEG file to convert</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                    <img src={preview} alt="Preview" className="h-16 w-16 object-cover rounded-lg" />
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground truncate">{image.name}</p>
                                        <p className="text-sm text-muted-foreground">Ready to convert</p>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => { setImage(null); setPreview(''); setConvertedUrl(''); }} className="text-red-500">
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>

                                <Button onClick={convertToPNG} disabled={converting} className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-cyan-500/30">
                                    {converting ? <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Converting...</> : <><Sparkles className="h-5 w-5 mr-2" /> Convert to PNG</>}
                                </Button>

                                {convertedUrl && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-green-700 dark:text-green-400">Converted!</p>
                                                <p className="text-sm text-green-600 dark:text-green-500">PNG file ready to download</p>
                                            </div>
                                            <Button onClick={downloadConverted} className="bg-green-600 hover:bg-green-700">
                                                <Download className="h-4 w-4 mr-2" /> Download PNG
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* How It Works */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-foreground text-center mb-8">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: 1, title: 'Upload JPG', desc: 'Select your image', icon: Upload, color: 'from-cyan-500 to-blue-600' },
                            { step: 2, title: 'Convert', desc: 'Click convert', icon: Sparkles, color: 'from-blue-500 to-indigo-600' },
                            { step: 3, title: 'Download', desc: 'Get PNG file', icon: Download, color: 'from-green-500 to-emerald-600' },
                        ].map((item) => (
                            <div key={item.step} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <item.icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-xs font-bold text-muted-foreground mb-1">STEP {item.step}</div>
                                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-100 dark:border-green-800/30">
                        <Shield className="h-8 w-8 text-green-600 mb-3" />
                        <h3 className="font-bold text-foreground mb-2">100% Private</h3>
                        <p className="text-sm text-muted-foreground">Processed locally in browser</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50/50 dark:from-cyan-900/20 dark:to-blue-900/10 border border-cyan-100 dark:border-cyan-800/30">
                        <ImageIcon className="h-8 w-8 text-cyan-600 mb-3" />
                        <h3 className="font-bold text-foreground mb-2">Transparency</h3>
                        <p className="text-sm text-muted-foreground">PNG supports transparent backgrounds</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/10 border border-purple-100 dark:border-purple-800/30">
                        <Zap className="h-8 w-8 text-purple-600 mb-3" />
                        <h3 className="font-bold text-foreground mb-2">Lossless Quality</h3>
                        <p className="text-sm text-muted-foreground">PNG preserves image quality</p>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 border border-cyan-200/50 dark:border-cyan-800/30">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <p className="text-lg italic text-foreground/80 max-w-2xl mb-4">
                            "Perfect for converting product photos to PNG with transparent backgrounds!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-foreground">Alex Chen</p>
                                <p className="text-sm text-muted-foreground">E-commerce Seller</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Tools */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-foreground text-center mb-6">Related Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedTools.map((tool) => (
                            <Link
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="group p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-lg transition-all text-center"
                            >
                                <div className={`h-10 w-10 mx-auto rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                    <tool.icon className="h-5 w-5 text-white" />
                                </div>
                                <p className="font-medium text-sm text-foreground">{tool.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
