import React, { useState } from "react";
import { motion } from "framer-motion";

const Company = () => {
  // Set the initial state to the first company in the object
  const [selectedCompany, setSelectedCompany] = useState("Felicity_Infotech");

  const workExperience = {
    Felicity_Infotech: {
      title: "Felicity Infotech",
      role: "Software Engineer",
      duration: "JUNE 2023 – DEC 2023",
      description:
        "I worked on the Zters project, where I developed an application to track products and services across various regions in the USA, ensuring efficient resource management and service availability. As part of this, I built web pages similar to Stack Overflow, enabling seamless user interactions and knowledge sharing. Additionally, I implemented a technical support functionality, streamlining customer queries and enhancing user experience.",
    },
    Felicity_Infotech_Intern: {
      title: "Felicity Infotech",
      role: "Web Developer – Intern",
      duration: "JAN 2022 – JUNE 2023",
      description:
        "When I was working on my problem-solving skills through hackathons, I became fascinated by how everything comes together in real-world projects. That curiosity led me to Felicity Infotech, where I got the opportunity to work on a project from scratch—building from the database model to UX design. One of my key projects was a Hospital Management System, where I helped design the database structure, integrated Google Calendar for appointment scheduling and handled meeting setups to streamline workflows. I also worked on a Skincare Website that used AI to scan faces and recommend personalized skincare products. My role involved working on both the frontend and backend, ensuring seamless data flow and accuracy in recommendations. "
    },
  };

  return (
    <div id="company" className="w-full px-[10%] py-16 bg-white dark:bg-black transition-colors duration-300">
      {/* Section Title */}

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
      >
        Work Experience
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/3 bg-white dark:bg-black shadow-lg rounded-lg p-5"
        >
          <ul className="space-y-4">
            {Object.keys(workExperience).map((company) => (
              <li
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`p-3 rounded-lg text-lg font-medium cursor-pointer ${
                  selectedCompany === company
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {company}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          key={selectedCompany} // Ensures re-animation when the selected company changes
          className="w-full lg:w-2/3 bg-gradient-to-r from-blue-600 to-blue-800 text-white dark:from-gray-900 dark:to-black shadow-lg rounded-lg p-8"
        >
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-3"
          >
            {workExperience[selectedCompany]?.title || "Company not found"}
          </motion.h3>
          <motion.h4
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-2"
          >
            {workExperience[selectedCompany]?.role || "Role unavailable"}
          </motion.h4>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm mb-4"
          >
            {workExperience[selectedCompany]?.duration || "Duration unavailable"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base leading-relaxed"
          >
            {workExperience[selectedCompany]?.description ||
              "Description unavailable"}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
