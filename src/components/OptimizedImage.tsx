import Image from 'next/image';
import { ComponentProps } from 'react';

/**
 * Optimized Image Component with Lazy Loading
 * Automatically handles WebP format, lazy loading, and responsive sizes
 */

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, 'src'> {
    src: string;
    alt: string;
    priority?: boolean;
}

export function OptimizedImage({ src, alt, priority = false, ...props }: OptimizedImageProps) {
    // Convert PNG to WebP if available
    const webpSrc = src.replace(/\.png$/, '.webp');

    return (
        <Image
            src={webpSrc}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
            {...props}
        />
    );
}

/**
 * Blog Image Component
 * Optimized for blog post images with responsive sizes
 */
export function BlogImage({ src, alt, ...props }: OptimizedImageProps) {
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ width: '100%', height: 'auto' }}
            {...props}
        />
    );
}

/**
 * Logo Component
 * Optimized for logo with priority loading
 */
export function LogoImage({ src = '/logo.webp', alt = 'ToolNova Logo', ...props }: Partial<OptimizedImageProps>) {
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            priority={true}
            {...props}
        />
    );
}
