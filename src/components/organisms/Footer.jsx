import React from 'react';
import socialLinksData from "@/socialLinks.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-black via-gray-900 to-black border-t border-gray-700 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left: Brand and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center border border-gray-600">
                <span className="text-white font-bold text-sm font-roboto-mono">M</span>
              </div>
              <span className="text-xl font-bold text-gray-300 font-bangers font-roboto-mono">{socialLinksData.name}</span>
            </div>
            <p className="text-sm text-gray-400 font-roboto-mono">
              &copy; {currentYear} {socialLinksData.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1 font-roboto-mono">
              Domain: {socialLinksData.domain}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-6">
              <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors font-roboto-mono">
                Home
              </a>
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors font-roboto-mono">
                About
              </a>
              <a href="#community" className="text-sm text-gray-400 hover:text-white transition-colors font-roboto-mono">
                Community
              </a>
            </div>
            <div className="text-xs text-gray-500 font-roboto-mono">
              CA: {socialLinksData.contractAddress.slice(0, 8)}...{socialLinksData.contractAddress.slice(-8)}
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="text-sm text-gray-400 mb-2 font-roboto-mono">Follow Us</div>
            <div className="flex space-x-3">
              {socialLinksData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 font-roboto-mono"
                  aria-label={link.name}
                >
                  {link.icon ? (
                    <img
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="w-4 h-4 object-cover object-center rounded-full"
                    />
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-500 font-roboto-mono">
            Built with 💜 by the community, for the community. 
            <span className="block md:inline md:ml-2">MAMA, WE MADE IT! 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;