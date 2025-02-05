import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" 
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
Maker at heart.
</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
What I love doing
</motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 
            hover:shadow-lg cursor-pointer hover:bg-gray-100 
            hover:-translate-y-1 duration-500 dark:hover:bg-gray-800 dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
         </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
