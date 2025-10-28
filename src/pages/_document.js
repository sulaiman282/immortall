import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="MAMA, WE MADE IT! - From the hood to the moon, celebrating success together. Join the $HOODOUT community and be part of the movement." />
        <meta name="keywords" content="HOODOUT, MAMA WE MADE IT, crypto, meme coin, community, blockchain, success" />
        <meta property="og:title" content="MAMA, WE MADE IT! - $HOODOUT" />
        <meta property="og:description" content="From the hood to the moon - we made it together! Join the movement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoodout.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAMA, WE MADE IT! - $HOODOUT" />
        <meta name="twitter:description" content="From the hood to the moon - we made it together!" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Bangers&family=Luckiest+Guy&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
