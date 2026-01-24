import profileImg from "../assets/s-wmgzPPdV5Z.jpeg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section className="min-h-screen w-full flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-12 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side */}
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium tracking-wide uppercase mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👋 Hi, I'm a Frontend Developer
            </motion.span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-indigo-400 bg-clip-text text-transparent">
              Awais <span className="text-indigo-400">Tanveer</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Crafting beautiful, responsive, and user-centric web experiences with modern technologies.
              Passionate about clean code, innovative design, and creating digital solutions that make a difference.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-xl font-semibold transition-all duration-300 group"
              >
                Get In Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            <motion.a
              href="https://github.com/AwaisTanveer-21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/awais-tanveer-17b132389"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* Profile Image with enhanced styling */}
            <div className="relative">
              <img
                src={profileImg}
                alt="Awais Tanveer - Frontend Developer"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-indigo-500/20"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-80 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-60 blur-xl"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
