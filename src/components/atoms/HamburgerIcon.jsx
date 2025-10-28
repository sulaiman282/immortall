import React from 'react';

const HamburgerIcon = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 transform ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 transform ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerIcon;