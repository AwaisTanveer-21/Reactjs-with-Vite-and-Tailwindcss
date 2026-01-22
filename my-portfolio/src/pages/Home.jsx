import profileImg from "../assets/s-wmgzPPdV5Z.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="rounded-2xl min-h-screen w-full flex items-center bg-gray-950 text-white">
      <div className="max-w-full  grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-4 rounded-xl border border-gray-900 my-4 py-4 px-12">

        {/* Left Side */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-8 ">
         hii i am a Frontend Developer
          </h2>

          <h1 className=" text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I’m <span className="text-indigo-400">Awais</span> <br />
            I build modern & responsive web interfaces
          </h1>

          <p className="text-gray-400 mb-8 max-w-xl">
           

            I’m a Frontend Developer who loves building modern and responsive web interfaces. I mainly work with HTML, CSS, JavaScript, React.js, and Tailwind CSS. My goal is to write clean and organized code while creating interfaces that are easy to understand, fast to use, and helpful for real users.
          </p>

          <div className="flex gap-4">
   <li className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition list-none">   <Link to="/projects">View Projects</Link>  </li>   
             
              
            
              
           
<li className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg font-medium transition list-none">
  <Link to="/contact">Contact Me</Link>
  </li>
            
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Awais profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-indigo-500 shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
