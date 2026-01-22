import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6  border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-indigo-400 mb-2">Awais Tanveer<span className="text-white">.</span></h1>
          <p className="text-gray-500">Frontend Developer & Web Enthusiast</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <NavLink to="/" className="hover:text-indigo-400 transition">Home</NavLink>
          <NavLink to="/about" className="hover:text-indigo-400 transition">About</NavLink>
          <NavLink to="/skills" className="hover:text-indigo-400 transition">Skills</NavLink>
          <NavLink to="/projects" className="hover:text-indigo-400 transition">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-indigo-400 transition">Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/AwaisTanveer-21" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Awais Tanveer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
