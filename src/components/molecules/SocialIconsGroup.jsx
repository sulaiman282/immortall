import React from 'react';
import SocialIcon from '@/components/atoms/SocialIcon';
import socialLinksData from '@/socialLinks.json';

const SocialIconsGroup = ({ className = "" }) => {
  const { socialLinks } = socialLinksData;

  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.name}
          href={link.url}
          icon={link.icon}
          name={link.name}
        />
      ))}
    </div>
  );
};

export default SocialIconsGroup;