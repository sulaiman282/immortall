import React from 'react';
import socialLinksData from "@/socialLinks.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-black via-purple-900/20 to-black border-t border-purple-500/30 text-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left: Brand and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-purple-400 font-bangers">{socialLinksData.name}</span>
            </div>
            <p className="text-sm text-purple-300">
              &copy; {currentYear} {socialLinksData.name}. All rights reserved.
            </p>
            <p className="text-xs text-purple-400 mt-1">
              Domain: {socialLinksData.domain}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-6">
              <a href="#home" className="text-sm text-purple-300 hover:text-purple-100 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-purple-300 hover:text-purple-100 transition-colors">
                About
              </a>
              <a href="#community" className="text-sm text-purple-300 hover:text-purple-100 transition-colors">
                Community
              </a>
            </div>
            <div className="text-xs text-purple-400">
              CA: {socialLinksData.contractAddress.slice(0, 8)}...{socialLinksData.contractAddress.slice(-8)}
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="text-sm text-purple-300 mb-2">Follow Us</div>
            <div className="flex space-x-3">
              {socialLinksData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:text-purple-100 hover:bg-purple-600/40 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon ? (
                    <img
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="w-4 h-4 object-cover object-center rounded-full filter brightness-0 invert"
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
        <div className="border-t border-purple-500/20 mt-6 pt-6 text-center">
          <p className="text-xs text-purple-400">
            Built with 💜 by the community, for the community. 
            <span className="block md:inline md:ml-2">MAMA, WE MADE IT! 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;