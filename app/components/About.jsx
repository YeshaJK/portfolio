import { assets, educationList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 h-64 sm:h-80 rounded-full overflow-hidden max-w-none"
          >
          <Image
            src={assets.yesha_profile}
            alt="Profile Picture"
            className="w-full h-full object-cover"
            />
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <p className="mb-5 max-w-2xl font-Ovo">
            I’m a dedicated Full-Stack Developer who enjoys tackling challenges and creating
            meaningful solutions. I’m always looking to learn new things and improve, whether it’s
            through working with others or exploring new technologies.
          </p>

          {/* Education Section */}
          <h3 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-white">
            Education
          </h3>
          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 text-white rounded-xl p-8 shadow-lg"
              > 
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  {/* Logo */}
                  <div className="w-20 h-20 flex-shrink-0"> 
                    {edu.logo ? (
                      <Image
                        src={edu.logo}
                        alt={`${edu.university} Logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                        <p> No Image</p>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold">
                      {edu.degree}
                      <span className="block text-gray-300 font-normal mt-1">
                        {edu.duration}
                      </span>
                    </h4>
                    <p className="text-lg font-medium mt-2">{edu.university}</p>
                    <p className="text-sm mt-1">{edu.description}</p>
                    <div className="flex gap-4 mt-4 flex-wrap">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          className="bg-blue-700 px-4 py-2 rounded-full text-sm"
                        >
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
