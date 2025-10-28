import React from "react";
import SocialIconsGroup from "@/components/molecules/SocialIconsGroup";
import socialLinksData from "@/socialLinks.json";
import toast from 'react-hot-toast';

const Home = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(socialLinksData.contractAddress);
    toast.success('Contract Address Copied!', {
      duration: 2000,
      position: 'bottom-center',
      style: {
        background: '#A855F7',
        color: '#fff',
        borderRadius: '10px',
        padding: '16px',
        fontWeight: 'bold',
      },
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-1 via-purple-900/20 to-dark-2 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <section id="home" className="relative z-20 mx-auto px-4 py-16 md:py-24 lg:py-60 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mt-10 mb-12">
          <h1 className="tracking-wider text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text font-bangers uppercase mb-6 drop-shadow-2xl animate-glow-pulse">
            {socialLinksData.name}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 font-bangers uppercase mb-4 animate-neon-flicker">
            {socialLinksData.ticker}
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 font-semibold drop-shadow-lg mb-8 max-w-2xl mx-auto">
            From the hood to the moon - we made it together! 🚀
          </p>
        </div>

        {/* Contract Address Card */}
        <div className="relative w-full max-w-4xl mb-12">
          <div className="relative flex flex-col md:flex-row items-center gap-4 z-10 bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            
            {/* Logo/Icon placeholder */}
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-4xl font-bold text-white">💎</span>
            </div>
            
            <div className="w-full">
              <div className="bg-black/40 backdrop-blur-sm rounded-full p-1 shadow-xl border border-purple-500/50">
                <div className="flex items-center w-full">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold px-6 py-3 rounded-full text-sm md:text-base whitespace-nowrap">
                    Contract Address:
                  </span>
                  <p className="flex-grow text-purple-100 text-sm md:text-base px-4 py-2 overflow-hidden truncate font-mono">
                    {socialLinksData.contractAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-200 mr-2 group"
                    aria-label="Copy to clipboard"
                  >
                    <svg
                      className="w-6 h-6 text-purple-300 group-hover:text-purple-100 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 0h-2M10 12h.01M14 12h.01M18 12h.01"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Glowing effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl opacity-20 blur-xl -z-0 animate-pulse"></div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={socialLinksData.buyButtonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2"
          >
            <span>🚀</span>
            <span>Buy {socialLinksData.ticker}</span>
          </a>
          <a
            href={socialLinksData.socialLinks[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-purple-500 text-purple-400 font-bold px-8 py-4 rounded-full text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>👥</span>
            <span>Join Community</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">🔥</div>
            <div className="text-xl font-bold text-purple-300">Hood Vibes</div>
            <div className="text-purple-200">Authentic Culture</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">🌟</div>
            <div className="text-xl font-bold text-purple-300">Community</div>
            <div className="text-purple-200">We Made It Together</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">💎</div>
            <div className="text-xl font-bold text-purple-300">Diamond Hands</div>
            <div className="text-purple-200">HODL Strong</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-black/80 via-purple-900/10 to-black/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 font-bangers uppercase mb-8 animate-glow-pulse">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              From the streets to the blockchain, MAMA, WE MADE IT! represents the journey of 
              countless dreamers who refused to give up. This isn&apos;t just a token - it&apos;s a 
              celebration of perseverance, community, and the belief that we can all make it together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">🎯 Our Mission</h3>
                <p className="text-purple-200">
                  To create a community-driven ecosystem that empowers everyone to achieve 
                  financial freedom and celebrate their victories together.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">🚀 Our Vision</h3>
                <p className="text-purple-200">
                  A world where success is shared, where communities thrive, and where 
                  every holder can proudly say &quot;MAMA, WE MADE IT!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-20 bg-gradient-to-b from-black/80 via-purple-900/10 to-black/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 font-bangers uppercase mb-8 animate-glow-pulse">
            Join The Movement
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Be part of a community that celebrates every win, supports through every challenge, 
            and believes that together, we can all make it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <SocialIconsGroup className="justify-center" />
            <a
              href={socialLinksData.buyButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Start Your Journey 🚀
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;