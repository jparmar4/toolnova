import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface VitalsMetric {
  name: string;
  value: number;
  id: string;
  rating: string;
}

const vitals: VitalsMetric[] = [];

function handleMetric(metric: any) {
  const vitalsMetric: VitalsMetric = {
    name: metric.name,
    value: Math.round(metric.value),
    id: metric.id,
    rating: metric.rating || 'good',
  };

  vitals.push(vitalsMetric);

  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag?.('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      rating: metric.rating,
      event_label: metric.id,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 ${metric.name}:`, {
      value: Math.round(metric.value),
      rating: metric.rating,
    });
  }
}

export function initializeVitalsMonitoring() {
  if (typeof window === 'undefined') return;

  onCLS(handleMetric);
  onINP(handleMetric);
  onFCP(handleMetric);
  onLCP(handleMetric);
  onTTFB(handleMetric);
}

export function getVitalsMetrics(): VitalsMetric[] {
  return vitals;
}

export function reportVitals() {
  if (vitals.length === 0) return;

  // Calculate average ratings
  const goodCount = vitals.filter(v => v.rating === 'good').length;
  const totalCount = vitals.length;
  const healthScore = Math.round((goodCount / totalCount) * 100);

  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 Core Web Vitals Health Score:', healthScore + '%');
  }

  return {
    metrics: vitals,
    healthScore,
  };
}

// Extend window type for TypeScript
declare global {
  interface Window {
    gtag?: any;
  }
}

