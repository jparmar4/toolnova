'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { supabase } from '@/lib/supabaseClient';

// Dynamically import HomeDashboard to reduce initial bundle size
const HomeDashboard = dynamic(() => import('@/components/HomeDashboard').then(mod => ({ default: mod.HomeDashboard })), {
  loading: () => (
    <div className="w-full min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-primary/80 via-blue-600/80 to-indigo-700/80 h-[500px] flex items-center justify-center">
        <div className="max-w-[1200px] w-full px-6">
          <div className="h-8 w-48 bg-white/20 rounded-full mb-4" />
          <div className="h-16 w-3/4 bg-white/20 rounded-lg mb-4" />
          <div className="h-6 w-1/2 bg-white/20 rounded-lg" />
        </div>
      </div>
      {/* Tools skeleton */}
      <div className="bg-[#f8f9fb] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="h-8 w-32 bg-slate-200 rounded-full mx-auto mb-4" />
          <div className="h-12 w-64 bg-slate-200 rounded-lg mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white rounded-2xl shadow-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: true
});

// Component to handle auth code exchange
function AuthCodeHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      console.log("Found auth code, exchanging for session...");
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          console.error("Session exchange error:", error);
        } else {
          console.log("Session created successfully!");
          // Reload without the code parameter for clean URL
          window.location.href = "/";
        }
      });
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <AuthCodeHandler />
      </Suspense>
      <HomeDashboard />
    </>
  );
}
