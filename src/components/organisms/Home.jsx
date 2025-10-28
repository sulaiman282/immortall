import React, { useEffect } from "react";
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
        background: '#333333',
        color: '#fff',
        borderRadius: '10px',
        padding: '16px',
        fontWeight: 'bold',
      },
    });
  };

  // Create floating particles and shooting stars for background animation
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.animated-background');
      if (!container) return;
      
      // Clear existing particles
      const existingParticles = container.querySelectorAll('.particle, .shooting-star');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 6}s`;
        
        container.appendChild(particle);
      }
      
      // Create shooting stars
      for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Random position
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        shootingStar.style.animationDelay = `${Math.random() * 15}s`;
        
        container.appendChild(shootingStar);
      }
    };
    
    // Create particles and shooting stars on mount
    createParticles();
    
    // Recreate on resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden">
      {/* Animated Background */}
      <div className="animated-background absolute inset-0 z-0"></div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen lg:h-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto w-full">
          
          {/* Logo/Icon */}
          <div className="mb-6 lg:mb-8">
            <div className="lg:w-[400px] mx-auto w-[320px] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl p-4 border border-gray-600">
              <img 
                src="/home.png" 
                alt="Immortal Coin Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bangers uppercase mb-3 lg:mb-4 tracking-wider leading-tight lg:leading-none font-roboto-mono">
            {socialLinksData.name}
          </h1>
          
          {/* Ticker */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 font-bangers uppercase mb-4 lg:mb-6 leading-tight font-roboto-mono">
            {socialLinksData.ticker}
          </h2>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-semibold mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed lg:leading-normal px-2 font-roboto-mono">
          {socialLinksData.description}
          </p>

          {/* Contract Address */}
          <div className="mb-6 lg:mb-8 px-2">
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium mb-2 font-roboto-mono">Contract Address:</p>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 sm:p-4 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4 space-y-3 sm:space-y-0">
                <code className="text-gray-300 font-mono text-xs sm:text-sm md:text-base break-all flex-1 leading-relaxed font-roboto-mono">
                  <span className="block sm:hidden">
                    {/* Mobile: Show truncated version with ellipsis */}
                    {socialLinksData.contractAddress.slice(0, 8)}...{socialLinksData.contractAddress.slice(-8)}
                  </span>
                  <span className="hidden sm:block">
                    {/* Desktop: Show full address */}
                    {socialLinksData.contractAddress}
                  </span>
                </code>
                <button
                  onClick={handleCopy}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 flex-shrink-0 w-full sm:w-auto font-roboto-mono border border-gray-600"
                  title="Copy Contract Address"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Full Address</span>
                </button>
              </div>
            </div>
          </div>



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 lg:mb-8 px-2">
            <a
              href={socialLinksData.buyButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center font-roboto-mono border border-gray-600"
            >
              <span>🚀</span>
              <span>Buy {socialLinksData.ticker}</span>
            </a>
            <a
              href={socialLinksData.dexUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center font-roboto-mono border border-gray-600"
            >
              <span>📊</span>
              <span>View on DEX</span>
            </a>
            <a
              href={socialLinksData.socialLinks[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-gray-300 border-2 border-gray-700 font-bold px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center font-roboto-mono"
            >
              <span>👥</span>
              <span>Join Community</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialIconsGroup className="justify-center" />
          </div>

          {/* Domain Info */}
          <div className="mt-6 lg:mt-8">
            <p className="text-sm lg:text-base text-gray-400 font-medium font-roboto-mono">
              Visit us at: <span className="font-bold text-gray-300">{socialLinksData.domain}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;