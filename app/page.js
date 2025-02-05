'use client';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Company from './components/Company';
import Superpowers from './components/Superpowers';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && typeof window !== 'undefined') {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Company isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Superpowers isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
