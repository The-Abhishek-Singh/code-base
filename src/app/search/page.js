"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SearchModal from '@/component/UI/search/SearchModal';

// Create a client-side only wrapper component
const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  return <>{children}</>;
};

// Dynamically import SearchResults with SSR disabled
const SearchResults = dynamic(
  () => import('@/component/search/SearchResults'),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="container mx-auto pt-24 pb-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      <div className="mb-6">
        <SearchModal />
      </div>
      <div className="mt-8">
        <ClientOnly>
          <SearchResults />
        </ClientOnly>
      </div>
    </div>
  );
}

export default Page;