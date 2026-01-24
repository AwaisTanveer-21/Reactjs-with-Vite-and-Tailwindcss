import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket, FaUser, FaLightbulb, FaHeart } from "react-icons/fa";

const About = () => {
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

  const journeySteps = [
    {
      year: "2023",
      title: "Started Learning Web Development",
      description: "Began my journey with HTML, CSS, and JavaScript fundamentals",
      icon: <FaCode />
    },
    {
      year: "2024",
      title: "Mastered React & Modern Tools",
      description: "Deepened knowledge in React.js, Tailwind CSS, and modern development workflows",
      icon: <FaRocket />
    },
    {
      year: "Present",
      title: "Building Amazing Experiences",
      description: "Creating responsive, user-friendly web applications and continuously learning new technologies",
      icon: <FaLightbulb />
    }
  ];

  const values = [
    {
      icon: <FaUser />,
      title: "User-Centric Design",
      description: "Every pixel serves a purpose in creating intuitive user experiences"
    },
    {
      icon: <FaPalette />,
      title: "Clean Aesthetics",
      description: "Combining beautiful design with functional, accessible interfaces"
    },
    {
      icon: <FaHeart />,
      title: "Passion for Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none"></div>

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
            About <span className="text-indigo-400">Me</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Hi! I'm Awais Tanveer, a passionate Frontend Developer who transforms ideas into
            beautiful, interactive, and user-friendly digital experiences. I believe great design
            and clean code go hand in hand.
          </motion.p>
        </motion.div>

        {/* Who I Am / What I Do Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Who I Am */}
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <FaUser className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Who I Am</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a dedicated frontend developer with a passion for creating digital experiences
                that not only look beautiful but also provide exceptional user experiences. My journey
                in web development has taught me the importance of attention to detail and continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond coding, I care deeply about user experience, accessibility, and performance.
                I believe that great websites should be inclusive, fast, and intuitive for everyone,
                regardless of their device or abilities.
              </p>
            </div>
          </motion.div>

          {/* What I Do */}
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <FaCode className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-indigo-400">What I Do</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✦</span>
                  <span>Build responsive and accessible user interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✦</span>
                  <span>Transform Figma designs into pixel-perfect websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✦</span>
                  <span>Develop scalable React components and applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✦</span>
                  <span>Integrate frontend applications with REST APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✦</span>
                  <span>Optimize performance and ensure cross-browser compatibility</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* My Values */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            My Values & Principles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-gray-800/30 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            My Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                        {step.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills & Workflow */}
        <motion.div
          variants={itemVariants}
          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 lg:p-12 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-400">My Skills & Workflow</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Technical Expertise</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I specialize in modern web technologies including React.js, Tailwind CSS,
                  JavaScript (ES6+), and Vite for building fast, scalable applications. My focus
                  is on writing clean, maintainable code that follows best practices and industry standards.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm experienced with version control (Git), package management (npm),
                  and deployment platforms. I enjoy staying up-to-date with the latest
                  trends and continuously improving my development workflow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Design & Beyond</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My design skills complement my development expertise. I work with tools
                  like Figma, Canva, and Adobe Illustrator to create visually appealing
                  interfaces that prioritize user experience and accessibility.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Beyond technical skills, I'm highly organized with strong MS Office
                  proficiency, fast typing speed, and attention to detail. These qualities
                  help me deliver high-quality work efficiently and maintain clear communication
                  throughout the development process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;