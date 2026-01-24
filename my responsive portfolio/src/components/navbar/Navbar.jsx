import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaCode /> },
    { name: "Projects", path: "/projects", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd save this to localStorage and apply to the document
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
            : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-lg">A</span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">Awais</h1>
                <p className="text-xs text-indigo-400 -mt-1">Tanveer</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                          isActive
                            ? "text-indigo-400 bg-indigo-500/10"
                            : "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-lg">{link.icon}</span>
                          <span>{link.name}</span>
                          {isActive && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                              layoutId="activeTab"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Dark Mode Toggle (Mobile) */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </motion.button>

              {/* Hamburger Menu */}
              <motion.button
                onClick={() => setOpen(!open)}
                className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900 to-gray-800 border-l border-gray-700/50 shadow-2xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Awais Tanveer</h2>
                    <p className="text-sm text-indigo-400">Frontend Developer</p>
                  </div>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 group ${
                            isActive
                              ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                              : "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/5 border border-transparent hover:border-indigo-500/20"
                          }`
                        }
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="text-lg">{link.name}</span>
                        {({ isActive }) => isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"
                            layoutId="activeMobileTab"
                          />
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Get in touch</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:awaistanveer210@gmail.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    >
                      <FaEnvelope />
                      <span className="text-sm">awaistanveer210@gmail.com</span>
                    </a>
                    <a
                      href="tel:+923181556110"
                      className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    >
                      <FaEnvelope />
                      <span className="text-sm">+92 3181556110</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;