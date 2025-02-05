import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import programmingImg from '@/assets/programming.png';
import devopsImg from '@/assets/docker.png';
import databaseImg from '@/assets/database.png';
import cloudImg from '@/assets/cloud.png';
import frontendImg from '@/assets/react.svg';
import apiImg from '@/assets/api.png';

const superpowers = [
  {
    category: 'Programming languages and frameworks',
    items: ['TypeScript', 'JavaScript', 'NodeJS', 'PHP (Laravel)', 'Python', 'Serverless'],
    image: programmingImg,
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Nginx', 'Terraform', 'Git'],
    image: devopsImg,
  },
  {
    category: 'Data storage and caching',
    items: ['MongoDB', 'ElasticSearch', 'Redis', 'MySQL', 'PostgreSQL', 'SQLite'],
    image: databaseImg,
  },
  {
    category: 'Client side',
    items: ['UI/UX design', 'React', 'React Native', 'NextJS', 'Redux', 'Tailwind'],
    image: frontendImg,
  },
  {
    category: 'AWS',
    items: ['S3', 'Cognito', 'CloudWatch', 'Lambda functions', 'CloudFront', 'VPC'],
    image: cloudImg,
  },
  {
    category: 'Integrations',
    items: ['Stripe', 'Firebase', 'Twilio', 'Google Maps', 'Paypal', 'ApplePay'],
    image: apiImg,
  },
];

const Superpowers = ({ isDarkMode }) => {
  return (
    <div
      className={`w-full px-[5%] py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-800'
      }`}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
        id="superpowers"
      >
        <h1 className="text-4xl font-bold">
          Superpowers
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Tools and technologies that I leverage to create innovative solutions.
        </p>
        <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
      </motion.div>

      {/* Superpowers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {superpowers.map((power, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <div className="w-full h-24 bg-gray-900 flex justify-center items-center">
              <Image src={power.image} alt={power.category} width={50} height={50} />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-4">
                {power.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {power.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-700 text-teal-600 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Superpowers;
