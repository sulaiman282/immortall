import React from 'react';
import NavbarLink from '@/components/atoms/NavbarLink';

const NavbarMenu = ({ activeSection }) => {
  const menuItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#community', label: 'Community', id: 'community' },
  ];

  return (
    <nav className="flex items-center space-x-2 font-roboto-mono">
      {menuItems.map((item) => (
        <NavbarLink
          key={item.id}
          href={item.href}
          isActive={activeSection === item.id}
        >
          {item.label}
        </NavbarLink>
      ))}
    </nav>
  );
};

export default NavbarMenu;