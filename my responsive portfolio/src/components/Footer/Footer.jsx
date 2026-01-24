import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode, FaRocket, FaDownload } from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/AwaisTanveer-21",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/awais-tanveer-17b132389",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/your-twitter",
      label: "Twitter",
      color: "hover:text-blue-300"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      value: "awaistanveer210@gmail.com",
      link: "mailto:awaistanveer210@gmail.com"
    },
    {
      icon: <FaPhone />,
      value: "+92 3181556110",
      link: "tel:+923181556110"
    },
    {
      icon: <FaMapMarkerAlt />,
      value: "Pakistan",
      link: null
    }
  ];

  const services = [
    "Frontend Development",
    "React.js Applications",
    "Responsive Web Design",
    "UI/UX Implementation",
    "Performance Optimization",
    "Cross-browser Compatibility"
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-800/50"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">A</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Awais Tanveer</h3>
                <p className="text-indigo-400 text-sm">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate about creating beautiful, functional, and user-centric web experiences
              with modern technologies and best practices.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <NavLink
                    to={link.path}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 flex items-center gap-2"
                  variants={itemVariants}
                >
                  <FaCode className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-indigo-400">
                    {contact.icon}
                  </div>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="hover:text-indigo-400 transition-colors duration-300 text-sm"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm">{contact.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-6">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-gray-700/30 rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3 text-indigo-400">Stay Updated</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new projects, blog posts, and opportunities.
              I'll send you valuable content about web development and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800/50"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {new Date().getFullYear()} Awais Tanveer. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
            <motion.a
              href="#"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaDownload />
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;