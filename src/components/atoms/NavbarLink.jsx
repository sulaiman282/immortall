import React from 'react';

const NavbarLink = ({ href, children, isActive, onClick }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 font-roboto-mono ${
        isActive
          ? 'bg-gray-700 text-white shadow-lg shadow-gray-500/50'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
      }`}
    >
      {children}
    </a>
  );
};

export default NavbarLink;