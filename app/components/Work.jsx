import { assets, workData } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-specific code runs after hydration
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className={`w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}
      >
      {/* Section Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      {/* Work Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{
              backgroundImage: `url(${project.bgImage || '/fallback-image.jpg'})`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-md group-hover:bg-lime-300 transition"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Image
                    src={assets.send_icon || '/default-icon.png'}
                    alt={`${project.title} send icon`}
                    className="w-5"
                  />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
    </motion.div>
  );
};

export default Work;
