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
        background: '#10B981',
        color: '#fff',
        borderRadius: '10px',
        padding: '16px',
        fontWeight: 'bold',
      },
    });
  };

  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden">
      {/* Background Video with Fade Effect */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
          <source src="/bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen lg:h-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto w-full">
          
          {/* Logo/Icon */}
          <div className="mb-6 lg:mb-8">
            <div className="w-28 h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl p-4">
              <img 
                src="/logo.png" 
                alt="MAMA, WE MADE IT! Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bangers uppercase mb-3 lg:mb-4 tracking-wider leading-tight lg:leading-none">
            {socialLinksData.name}
          </h1>
          
          {/* Ticker */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 font-bangers uppercase mb-4 lg:mb-6 leading-tight">
            {socialLinksData.ticker}
          </h2>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed lg:leading-normal px-2">
          He won $1.3 million at the casino and immediately called his mom to tell her theyre getting out of the hood 😭
          </p>

          {/* Contract Address */}
          <div className="mb-6 lg:mb-8 px-2">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium mb-2">Contract Address:</p>
            <div className="bg-black/30 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-3 sm:p-4 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4 space-y-3 sm:space-y-0">
                <code className="text-emerald-400 font-mono text-xs sm:text-sm md:text-base break-all flex-1 leading-relaxed">
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
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 flex-shrink-0 w-full sm:w-auto"
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
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>🚀</span>
              <span>Buy {socialLinksData.ticker}</span>
            </a>
            <a
              href={socialLinksData.socialLinks[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 border-2 border-gray-300 font-bold px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
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
            <p className="text-sm lg:text-base text-gray-300 font-medium">
              Visit us at: <span className="font-bold text-emerald-400">{socialLinksData.domain}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;