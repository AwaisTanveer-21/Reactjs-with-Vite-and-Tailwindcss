const About = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white  mb-12">
      <div className="max-w-7xl  -mb-12 mx-4 rounded-xl border border-gray-900 px-12 pt-24 pb-8">

        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-indigo-400">Me</span>
          </h1>
          <p className="text-gray-400 max-w-4xl leading-relaxed text-center">
            Hi! I’m Awais Tanveer, a Frontend Developer who loves turning ideas into
            interactive and user-friendly websites. I enjoy creating
            web experiences that are not only visually appealing but also
            simple to use and fast. For me, coding is like solving a puzzle —
            every line should have a purpose and make the interface feel smooth
            and natural.
          </p>
        </div>

        {/* Who I Am / What I Do Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Who I Am */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I specialize in frontend development, focusing on React.js,
              Tailwind CSS, and modern JavaScript. I enjoy learning new
              technologies, improving my workflow, and finding better ways
              to make websites faster, cleaner, and easier to use.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond coding, I care about the user’s experience. I want
              websites to feel intuitive, no matter who is using them.
              Accessibility, performance, and responsive design are always
              top priorities in my work.
            </p>
          </div>

          {/* What I Do */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">What I Do</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✔ Build clean and responsive UI layouts</li>
              <li>✔ Convert designs from Figma into working websites</li>
              <li>✔ Write maintainable and scalable React components</li>
              <li>✔ Connect frontend with APIs for real data handling</li>
              <li>✔ Ensure websites work well on any device or screen size</li>
            </ul>
          </div>

        </div>

        {/* Long Skills Description */}
        <div className="mt-16 border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">My Skills & Workflow</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Over the years, I have developed a set of skills that help me
            bring projects to life. On the technical side, I’m confident in
            HTML, CSS, JavaScript, React.js, Tailwind CSS, and Vite. These
            tools let me build websites that are clean, responsive, and
            optimized for performance. I focus on writing code that is easy
            to read, maintain, and improve in the future.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I also have experience with design and creative tools like
            Canva, Adobe Illustrator, and Figma. This helps me take a design
            concept and turn it into a fully working interface while keeping
            aesthetics and user experience in mind. Combining design and
            development skills allows me to create websites that look good
            and feel natural to use.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond coding and design, I’m organized and detail-oriented. Tools
            like MS Office, fast typing, and data entry skills help me manage
            projects efficiently. I take pride in writing accurate
            documentation, keeping track of progress, and delivering quality
            work consistently.
          </p>
          <p className="text-gray-300 leading-relaxed ">
            In short, I like to combine creativity, technical skill, and
            thoughtful design to build websites that work well, look great,
            and make a real impact. I’m always learning and improving, and
            I approach every project as an opportunity to grow and provide
            value to users.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
