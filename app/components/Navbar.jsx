import { assets } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-100%]">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          className="w-full"
          priority
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-300 
          ${isScroll
            ? `bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ${isDarkMode ? 'dark:bg-black dark:shadow-white/20' : ''}`
            : isDarkMode
            ? 'bg-black'
            : 'bg-white'
          }`}
      >
        <div className="text-h1 tracking-wide text-light ">Yesha Kaniyawala</div>

        {/* Navigation Menu with Correct Order */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-black'
          }`}
        >
          <li><a className="font-Ovo" href="#top">About me</a></li>
          <li><a className="font-Ovo" href="#company">Work</a></li>
          <li><a className="font-Ovo" href="#about">Education</a></li>
          <li><a className="font-Ovo" href="#services">Hobbies</a></li>
          <li><a className="font-Ovo" href="#work">Projects</a></li>
          <li><a className="font-Ovo" href="#superpowers">SuperPowers</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu with Correct Order */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${
            isMenuOpen ? 'right-0' : '-right-64'
          } top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-black`}
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              className="w-5"
            />
          </div>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#top">About me</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#company">Work</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#about">Education</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#services">Hobbies</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#work">Projects</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#superpowers">Superpowers</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
