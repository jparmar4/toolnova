'use client';

import { useEffect } from 'react';
import { initializeVitalsMonitoring } from '@/lib/vitals';

export function VitalsInitializer() {
  useEffect(() => {
    initializeVitalsMonitoring();
  }, []);

  return null;
}
