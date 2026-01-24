import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaTools, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const technicalSkills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-blue-500" },
    { name: "HTML & CSS", level: 95, color: "from-orange-500 to-red-500" },
    { name: "Vite", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "Git & GitHub", level: 85, color: "from-gray-600 to-gray-800" }
  ];

  const designSkills = [
    { name: "Figma", level: 85, color: "from-purple-500 to-indigo-500" },
    { name: "Canva", level: 90, color: "from-blue-500 to-purple-500" },
    { name: "Adobe Illustrator", level: 75, color: "from-orange-500 to-red-500" },
    { name: "UI/UX Design", level: 80, color: "from-pink-500 to-rose-500" }
  ];

  const otherSkills = [
    "MS Office Suite",
    "Fast Typing (80+ WPM)",
    "Data Entry",
    "Project Management",
    "Documentation",
    "Problem Solving"
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-white">{skill.name}</span>
        <span className="text-sm text-indigo-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-indigo-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            My <span className="text-indigo-400">Skills</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            These are the skills I use to build modern, responsive, and user-friendly web applications.
            I focus on writing clean and well-structured code that is easy to understand and maintain.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400">Frontend Development</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Design Skills */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Design & Creative Skills
          </motion.h2>
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <FaPalette className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400">Design & Tools</h3>
              </div>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Other Skills */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Additional Skills
          </motion.h2>
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <FaTools className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400">Professional Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaCheckCircle className="text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          variants={itemVariants}
          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-400">How I Work With These Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Development Approach</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I use my frontend development skills to turn ideas and designs into
                  fully functional and responsive web interfaces. I usually begin by
                  understanding the layout through design files or simple wireframes,
                  often created in Figma. Once the structure is clear, I focus on
                  building clean HTML and styling it using Tailwind CSS to ensure the
                  design looks consistent across all screen sizes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With JavaScript and React.js, I add interactivity and manage data in
                  a structured way. I prefer writing readable and maintainable code,
                  because good code should be easy to understand and update in the
                  future. Tools like Vite help me speed up development and keep my
                  workflow smooth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Design Integration</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My experience in graphic designing allows me to make better visual decisions,
                  while my typing, data entry, and MS Office skills help me stay organized,
                  accurate, and productive in both technical and non-technical tasks.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in combining creativity with technical precision. Each project
                  is an opportunity to push boundaries, learn something new, and deliver
                  exceptional results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;