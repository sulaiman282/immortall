import React from 'react';

const SocialIcon = ({ href, icon, name, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-200 hover:border-emerald-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 ${className}`}
      aria-label={name}
    >
      {icon ? (
        <img
          src={icon}
          alt={`${name} icon`}
          className="w-6 h-6 object-cover object-center rounded-full"
        />
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )}
    </a>
  );
};

export default SocialIcon;