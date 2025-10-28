import React, { useState, useEffect } from "react";
import NavbarMenu from "@/components/molecules/NavbarMenu";
import SocialIconsGroup from "@/components/molecules/SocialIconsGroup";
import BuyButton from "@/components/atoms/BuyButton";
import HamburgerIcon from "@/components/atoms/HamburgerIcon";
import SideDrawer from "@/components/molecules/SideDrawer";
import socialLinksData from "@/socialLinks.json";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      // Clean up in case component unmounts while drawer is open
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isDrawerOpen, scrollPosition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 w-full flex justify-center py-4 z-50 bg-transparent">
      <div className="relative flex items-center justify-between bg-black/40 backdrop-blur-md border border-gray-700 rounded-full px-6 py-1.5 shadow-lg shadow-gray-900/20 min-w-[90vw] lg:min-w-[1000px] mx-4">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center border border-gray-600">
              <span className="text-white font-bold text-sm font-roboto-mono">M</span>
            </div>
            <span className="text-xl font-bold text-gray-300 font-bangers font-roboto-mono">{socialLinksData.name}</span>
          </div>

          {/* Center: Navbar Menu and Buy Button */}
          <div className="flex items-center space-x-3">
            <NavbarMenu activeSection={activeSection} />
            <BuyButton />
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-3">
            <SocialIconsGroup />
          </div>
        </div>

        {/* Mobile Navbar - Hamburger Icon */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center border border-gray-600">
              <span className="text-white font-bold text-sm font-roboto-mono">M</span>
            </div>
            <span className="text-lg font-bold text-gray-300 font-bangers font-roboto-mono">MAMA</span>
          </div>
          <div className="flex items-center space-x-3">
            <BuyButton />
            <HamburgerIcon onClick={toggleDrawer} isOpen={isDrawerOpen} />
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        activeSection={activeSection}
      />
    </header>
  );
};

export default Navbar;