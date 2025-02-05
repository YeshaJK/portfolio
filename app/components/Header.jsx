import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 
        bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`} >
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.yesha_profile}
          alt="Profile Picture of Yesha Kaniyawala"
          className="rounded-full w-32"
          priority 
        />
      </motion.div>

      {/* Heading */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}  
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-black dark:text-white transition-colors duration-300"
      >
        Hi! I'm Yesha Kaniyawala
        <Image
          src={isDarkMode ? assets.hand_icon : assets.hand_icon}
          alt="Waving Hand Icon"
          className="w-6"
        />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}  
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-black dark:text-white transition-colors duration-300"
      >
        Software Engineer based in Auckland.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} 
        className="max-w-2xl mx-auto font-Ovo text-black dark:text-white/80 transition-colors duration-300"
      >
        With a strong understanding of continuous integration, automated testing, and cloud-native
        software engineering, I am excited to join a dynamic team to deliver innovative solutions
        and drive high-performance, impactful software applications.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/yesha_resume.pdf"
          className="px-10 py-3 border rounded-full flex items-center gap-2 border-black bg-white text-black 
            dark:border-white dark:bg-black dark:text-white transition-colors duration-300"
          aria-label="Download My Resume"
        >
          My resume
          <Image
            src={assets.download_icon} 
            alt="Download Icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
