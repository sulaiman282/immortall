import React from 'react';
import NavbarMenu from '@/components/molecules/NavbarMenu';
import SocialIconsGroup from '@/components/molecules/SocialIconsGroup';
import BuyButton from '@/components/atoms/BuyButton';
import socialLinksData from '@/socialLinks.json';

const SideDrawer = ({ isOpen, toggleDrawer, activeSection }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-300 font-bangers font-roboto-mono">
              {socialLinksData.name}
            </h2>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors font-roboto-mono"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-grow">
            <nav className="space-y-4">
              <NavbarMenu activeSection={activeSection} />
            </nav>
          </div>

          {/* Buy Button */}
          <div className="mb-6">
            <BuyButton className="w-full justify-center" />
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 font-roboto-mono">
              Follow Us
            </h3>
            <SocialIconsGroup />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;