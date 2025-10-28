import React from 'react';
import NavbarMenu from '@/components/molecules/NavbarMenu';
import SocialIconsGroup from '@/components/molecules/SocialIconsGroup';
import BuyButton from '@/components/atoms/BuyButton';

const SideDrawer = ({ isOpen, toggleDrawer, activeSection }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-dark-2 to-dark-1 border-l border-purple-500/30 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-purple-400 font-bangers">
              MAMA, WE MADE IT!
            </h2>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-full text-purple-400 hover:text-purple-300 hover:bg-purple-600/20 transition-colors"
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
          <div className="border-t border-purple-500/30 pt-6">
            <h3 className="text-sm font-semibold text-purple-300 mb-4">
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