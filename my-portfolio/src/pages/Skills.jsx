const Skills = () => {
  return (
    <section className=" min-h-screen bg-gray-950 text-white ">
      <div className="max-w-7xl mx-auto px-6 -mb-8 rounded-xl border border-gray-900 my-2 py-24">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-indigo-400">Skills</span>
          </h1>
          <p className="text-gray-400 max-w-6xl leading-relaxed text-center">
           These are the skills I use to build modern, responsive, and user-friendly web applications. I focus on writing clean and well-structured code that is easy to understand and maintain.

I care a lot about usability, performance, and consistency, so the user experience stays smooth on all screen sizes and devices. I always try to build layouts that look clean, feel simple to use, and solve real problems instead of just looking good.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Frontend Card */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
              Frontend Development
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>• HTML & CSS – Semantic, responsive layouts</li>
              <li>• JavaScript – Interactive and dynamic UI logic</li>
              <li>• React.js – Component-based scalable applications</li>
              <li>• Tailwind CSS – Fast and consistent UI styling</li>
              <li>• Vite – Modern tooling for faster development</li>
            </ul>
          </div>

          {/* Tools & Design Card */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
              Tools & Design
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>• Figma – Understanding UI/UX layouts & design flow</li>
              <li>• Canva & Illustrator – Graphics and visual assets</li>
              <li>• MS Office – Documentation & data handling</li>
              <li>• Typing & Data Entry – Speed with accuracy</li>
            </ul>
          </div>

        </div>

        {/* Long Description Card */}
        <div className="mt-16 border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-indigo-500 transition">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            How I Work With These Skills
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I use my frontend development skills to turn ideas and designs into
            fully functional and responsive web interfaces. I usually begin by
            understanding the layout through design files or simple wireframes,
            often created in Figma. Once the structure is clear, I focus on
            building clean HTML and styling it using Tailwind CSS to ensure the
            design looks consistent across all screen sizes.
            <br /><br />
            With JavaScript and React.js, I add interactivity and manage data in
            a structured way. I prefer writing readable and maintainable code,
            because good code should be easy to understand and update in the
            future. Tools like Vite help me speed up development and keep my
            workflow smooth.
            <br /><br />
            Alongside development, my experience in graphic designing allows me
            to make better visual decisions, while my typing, data entry, and MS
            Office skills help me stay organized, accurate, and productive in
            both technical and non-technical tasks.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
