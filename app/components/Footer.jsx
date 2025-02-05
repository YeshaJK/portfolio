import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-300 py-10">
      {/* Logo and Email */}
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          <span className="dark:text-gray-300">yeshakaniyawala@gmail.com</span>
        </div>
      </div>

      {/* Copyright & Social Links */}
      <div className="text-center mt-6">
        <p className="text-sm dark:text-gray-400">
          © 2025 Yesha Kaniyawala. All rights reserved.
        </p>
        <ul className="flex justify-center gap-6 mt-3">
          <li>
            <a
              href="https://github.com/YeshaJK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yesha-kaniyawala-5908b822b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
