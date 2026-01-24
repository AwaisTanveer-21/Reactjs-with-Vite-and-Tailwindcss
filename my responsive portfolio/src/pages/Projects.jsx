import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilter, FaSearch, FaCode, FaPalette, FaRocket } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const projectList = [
    {
      title: "My Portfolio Website",
      description: "A personal portfolio built with React.js, Vite, and Tailwind CSS. Showcases my skills, projects, and professional branding with modern animations and responsive design.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "react",
      live: "https://your-portfolio-live-url",
      github: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/Portfolio",
      featured: true,
      icon: <FaRocket />
    },


   {
      title: "MY responsive Portfolio",
      description: "A full CRUD application that lets users create, read, update, and delete records. Features state management, form validation, and clean UI components.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "react",
      live: "https://vercel.com/awaistanveer-21s-projects/reactjs-with-vite-and-tailwindcss-1c4q",
      github: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/edit/main/my%20responsive%20portfolio",
      featured: false,
      icon: <FaCode />
    },


    
    {
      title: "CRUD App",
      description: "A full CRUD application that lets users create, read, update, and delete records. Features state management, form validation, and clean UI components.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "react",
      live: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/CRUD%20APP",
      github: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/CRUD%20APP",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Counter + Calculator + BMI Tools",
      description: "A set of small utility web apps including a counter, calculator, and BMI calculator. Built to practice logic, state management, and UI design principles.",
      tech: ["JavaScript", "React.js", "Tailwind CSS"],
      category: "react",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "E-commerce App",
      description: "A responsive e-commerce frontend demonstrating product listings, shopping cart functionality, and checkout UI with modern design patterns.",
      tech: ["React.js", "Tailwind CSS", "Vite"],
      category: "react",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/blob/main/e-commerce%20clone.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Responsive Navbar",
      description: "A custom responsive navbar component with smooth animations and mobile-first design approach.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "react",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/blob/main/responsive%20navbar.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Login Form",
      description: "A responsive login form with validation, error handling, and modern UI/UX design patterns.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "react",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/tree/main/zikar%20app%20loginform%20clone",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Aviviq Website Clone",
      description: "A pixel-perfect clone of the Aviviq website, practicing design-to-code conversion skills and responsive layout techniques.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "clone",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/tree/main/AVIVQ%20website-clone",
      featured: false,
      icon: <FaPalette />
    },
    {
      title: "Grocery Website Clone",
      description: "A simple grocery website clone using JavaScript and Tailwind CSS, focusing on layout and styling.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/grocery.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Todo List App",
      description: "A basic todo list web app to practice JavaScript logic, DOM manipulation, and UI state management.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/todo%20List'.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Weather App",
      description: "A weather UI app that fetches and displays weather information dynamically with clean, modern interface.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/weather%20ui.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Dogs Website Clone",
      description: "A simple website clone about dogs, practicing UI layout, responsive design, and styling techniques.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/dogs%20website%20clone.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Garden Plants Website Clone",
      description: "A website clone focusing on plants, practicing advanced CSS layouts and responsive design patterns.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/plants%20website%20clone.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Login Form (JS)",
      description: "A custom JavaScript login form with validation and responsive design, focusing on form handling and user experience.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/login%20form.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Tourism Website Clone",
      description: "A tourism site clone to practice UI design, responsive layout, and modern web development techniques.",
      tech: ["JavaScript", "Tailwind CSS", "HTML"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/tourist%20webste.rar",
      featured: false,
      icon: <FaCode />
    },
    {
      title: "Amazon Clone",
      description: "A simple Amazon website clone for HTML/CSS practice, focusing on layout structure and styling fundamentals.",
      tech: ["HTML", "CSS"],
      category: "html-css",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/amazonclone",
      featured: false,
      icon: <FaPalette />
    },
    {
      title: "Facebook Clone",
      description: "A Facebook UI clone to practice layout design, component structure, and responsive web development.",
      tech: ["HTML", "CSS"],
      category: "html-css",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/facebookclone",
      featured: false,
      icon: <FaPalette />
    },
    {
      title: "Netflix Clone",
      description: "A Netflix UI clone with focus on responsive layouts, modern CSS techniques, and clean design principles.",
      tech: ["HTML", "CSS"],
      category: "html-css",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/netflexclone",
      featured: false,
      icon: <FaPalette />
    },
    {
      title: "Zomato Clone",
      description: "A Zomato website clone, practicing HTML, CSS, and responsive design for food delivery interface.",
      tech: ["HTML", "CSS"],
      category: "html-css",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/zomatoClone",
      featured: false,
      icon: <FaPalette />
    },
    {
      title: "Calculator",
      description: "A basic calculator web app using JavaScript, practicing DOM manipulation and mathematical operations.",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "javascript",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/calculator",
      featured: false,
      icon: <FaCode />
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projectList.length },
    { id: 'react', name: 'React.js', count: projectList.filter(p => p.category === 'react').length },
    { id: 'javascript', name: 'JavaScript', count: projectList.filter(p => p.category === 'javascript').length },
    { id: 'html-css', name: 'HTML/CSS', count: projectList.filter(p => p.category === 'html-css').length },
    { id: 'clone', name: 'Website Clones', count: projectList.filter(p => p.category === 'clone').length },
    { id: 'featured', name: 'Featured', count: projectList.filter(p => p.featured).length }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = projectList;

    if (filter !== 'all') {
      if (filter === 'featured') {
        filtered = filtered.filter(project => project.featured);
      } else {
        filtered = filtered.filter(project => project.category === filter);
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [filter, searchTerm, projectList]);

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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-indigo-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            My <span className="text-indigo-400">Projects</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8"
            variants={itemVariants}
          >
            Below are some of the projects I've built. Each one demonstrates my approach to building
            clean, responsive, and user-friendly interfaces. Click GitHub to explore the code.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === category.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFilter className="text-sm" />
                  {category.name}
                  <span className="text-xs bg-gray-900/50 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + searchTerm}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden ${
                  project.featured ? 'ring-2 ring-indigo-500/30' : ''
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                )}

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  {/* Project Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">{project.icon}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-xl font-semibold transition-all duration-300 ${
                        project.live ? 'flex-1' : 'w-full'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};


export default Projects;
