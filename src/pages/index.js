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
        <meta name="description" content={`${socialLinksData.name} (${socialLinksData.ticker}) - From the hood to the moon, we made it together! Join our community-driven movement on ${socialLinksData.domain}. Contract: ${socialLinksData.contractAddress}`} />
        <meta name="keywords" content={`${socialLinksData.ticker}, HOODOUT, MAMA WE MADE IT, crypto, meme coin, community token, blockchain, pump.fun, ${socialLinksData.domain}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${socialLinksData.name} - ${socialLinksData.ticker}`} />
        <meta property="og:description" content="From the hood to the moon - we made it together! Join the movement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${socialLinksData.domain}`} />
        <meta property="og:site_name" content={socialLinksData.name} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${socialLinksData.name} - ${socialLinksData.ticker}`} />
        <meta name="twitter:description" content="From the hood to the moon - we made it together!" />
        
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
