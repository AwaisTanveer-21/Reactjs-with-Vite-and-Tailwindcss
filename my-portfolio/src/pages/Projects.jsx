import React from 'react'




const Projects = () => {
  const projectList = [
    {
      title: "My Portfolio Website",
      description:
        "A personal portfolio built with React.js, Vite, and Tailwind CSS. Shows my skills, projects, contact info, and professional branding.",
      tech: "React.js, Vite, Tailwind CSS",
      live: "https://your-portfolio-live-url",
      github: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/Portfolio",
    },
    {
      title: "CRUD App",
      description:
        "A full CRUD application that lets users create, read, update, and delete records. Demonstrates state management and clean UI.",
      tech: "React.js, Tailwind CSS",
      live: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/CRUD%20APP",
      github: "https://github.com/AwaisTanveer-21/Reactjs-with-Vite-and-Tailwindcss/tree/main/CRUD%20APP",
    },
    {
      title: "Counter + Calculator + BMI Tools",
      description:
        "A set of small utility web apps including a counter, calculator, and BMI calculator. Built to practice logic and UI design.",
      tech: "JavaScript, React.js, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects",
    },
    {
      title: "E‑commerce App",
      description:
        "A responsive e‑commerce frontend demonstrating product listings, add‑to‑cart and checkout UI.",
      tech: "React.js, Tailwind CSS, Vite",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/blob/main/e-commerce%20clone.rar",
    },
    {
      title: "Responsive Navbar",
      description:
        "A custom responsive navbar as part of UI component practice, fully responsive across devices.",
      tech: "React.js, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/blob/main/responsive%20navbar.rar",
    },
    {
      title: "Login Form",
      description:
        "A responsive login form with validation, demonstrating UI and UX best practices.",
      tech: "React.js, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/tree/main/zikar%20app%20loginform%20clone",
    },
    {
      title: "Aviviq Website Clone",
      description: "A clone of Aviviq website, practicing design-to-code skills.",
      tech: "React.js, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/Reactjs-projects/tree/main/AVIVQ%20website-clone",
    },
    {
      title: "Grocery Website Clone",
      description: "A simple grocery website clone using JavaScript and Tailwind CSS.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/grocery.rar",
    },
    {
      title: "Todo List App",
      description: "A basic todo list web app to practice JavaScript logic and UI.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/todo%20List'.rar",
    },
    {
      title: "Weather App",
      description: "A weather UI app to fetch and display weather info dynamically.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/weather%20ui.rar",
    },
    {
      title: "Dogs Website Clone",
      description: "A simple website clone about dogs, practicing UI and layout.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/dogs%20website%20clone.rar",
    },
    {
      title: "Garden Plants Website Clone",
      description: "A website clone focusing on plants, layouts and styling practice.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/plants%20website%20clone.rar",
    },
    {
      title: "Login Form (JS)",
      description: "A custom JS login form with validation and responsive design.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/login%20form.rar",
    },
    {
      title: "Tourism Website Clone",
      description: "A tourism site clone to practice UI and responsive layout.",
      tech: "JavaScript, Tailwind CSS",
      github: "https://github.com/AwaisTanveer-21/javascript-projects/blob/main/tourist%20webste.rar",
    },
    {
      title: "Amazon Clone",
      description: "A simple Amazon website clone for HTML/CSS practice.",
      tech: "HTML, CSS",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/amazonclone",
    },
    {
      title: "Facebook Clone",
      description: "A Facebook UI clone to practice layout and interactivity.",
      tech: "HTML, CSS",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/facebookclone",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix UI clone with focus on responsive layouts and styling.",
      tech: "HTML, CSS",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/netflexclone",
    },
    {
      title: "Zomato Clone",
      description: "A Zomato website clone, practicing HTML, CSS, and responsive design.",
      tech: "HTML, CSS",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/zomatoClone",
    },
    {
      title: "Calculator",
      description: "A basic calculator web app using JavaScript.",
      tech: "JavaScript",
      github: "https://github.com/AwaisTanveer-21/HTML-CSS/tree/main/calculator",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-12 break-words">
      <div className="max-w-7xl rounded-xl border border-gray-900 my-4 py-4 px-12 mx-4 break-words">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-indigo-400">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Below are some of the projects I’ve built. Each one demonstrates my
            approach to building clean, responsive, and user‑friendly interfaces. 
            Click GitHub to explore the code. Only live projects show a "Live" button.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-800 rounded-2xl p-6 bg-gray-900 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-indigo-400 group-hover:text-indigo-300 transition">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-gray-400 mb-6 font-medium">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
              </div>
              <div className="flex gap-3 mt-auto ">
                {/* Only show Live if it exists */}
                {project.live && (
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  className="px-4 py-2 border border-indigo-500 text-indigo-400 mx-auto hover:bg-indigo-500 hover:text-white rounded-lg font-medium transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
