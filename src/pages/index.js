import React from 'react'
import Head from 'next/head';
import Home from "@/components/organisms/Home";
import MusicPlayer from "@/components/atoms/MusicPlayer";
import socialLinksData from "@/socialLinks.json";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>{`${socialLinksData.name} - ${socialLinksData.ticker} | Official Landing Page`}</title>
        <meta name="description" content={`${socialLinksData.name} (${socialLinksData.ticker}) - ${socialLinksData.description} Join our community-driven movement on ${socialLinksData.domain}. View on DEX: ${socialLinksData.dexUrl}. Contract: ${socialLinksData.contractAddress}`} />
        <meta name="keywords" content={`${socialLinksData.ticker}, Immortal, crypto, meme coin, community token, blockchain, pump.fun, dex, ${socialLinksData.domain}`} />
        
        {/* Google Fonts Import for Roboto Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${socialLinksData.name} - ${socialLinksData.ticker}`} />
        <meta property="og:description" content={socialLinksData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${socialLinksData.domain}`} />
        <meta property="og:site_name" content={socialLinksData.name} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${socialLinksData.name} - ${socialLinksData.ticker}`} />
        <meta name="twitter:description" content={socialLinksData.description} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content={socialLinksData.name} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#10B981" />
        <link rel="canonical" href={`https://${socialLinksData.domain}`} />
      </Head>
      <Home />
      <MusicPlayer />
    </main>
  )
}