import React, { useContext, useState } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { ThemeProvide } from "../UseContext/Theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { mode, ThemeToogle } = useContext(ThemeProvide)

  return (
    <nav className={`${mode === "dark" ? 'bg-black text-white' : 'bg-white text-black'} shadow-md w-full px-4 md:px-8 fixed`}>

      <div className="h-24 flex items-center justify-around">

        <div className="flex items-center gap-2">
          <div className="h-16">
            <img
              src="/assets/logo.avif"
              alt="logo"
              className="h-full object-contain rounded-xl"
            />
          </div>
          <span className="capitalize font-bold text-xl">
            fitness pro
          </span>
        </div>

        <div
          className={`${mode ==='dark' ? 'bg-black text-white' : 'bg-white text-black'}
            absolute top-24 left-0 w-full
            flex flex-col items-center gap-6
          py-6 shadow-md
            md:static md:w-auto md:shadow-none
            md:flex-row md:gap-8 md:py-0
            ${open ? "flex" : "hidden md:flex"}
          `}
        >
          <ul className="flex flex-col md:flex-row gap-6 capitalize text-lg text-gray-600">
            <li className="border border-transparent p-2 text-center rounded-xl duration-500 transition-all hover:opacity-85 hover:scale-95 active:bg-gray-300 active:text-amber-600 border-b-4 hover:border-b-amber-500 px-5 py-2 selection:bg-gray-500 selection:text-white hover:ring ring-gray-400">home</li>
            <li className="px-5 py-2 text-center rounded-xl duration-500 transition-all hover:opacity-85 hover:scale-95 active:bg-gray-300 border-transparent active:text-amber-600 border-b-4 hover:border-b-amber-500 selection:bg-gray-500 selection:text-white hover:ring ring-gray-400">pricing</li>
            <li className="p-2 text-center rounded-xl duration-500 transition-all hover:opacity-85 hover:scale-95 active:bg-gray-300 border-transparent active:text-amber-600 border-b-4  hover:border-b-amber-500 selection:bg-gray-500 selection:text-white hover:ring ring-gray-400">features</li>
            <li className="p-2 text-center rounded-xl transition-all hover:opacity-85 hover:scale-95 duration-500  active:bg-gray-300 border-transparent active:text-amber-600 border-b-4 hover:border-b-amber-500 selection:bg-gray-500 selection:text-white hover:ring ring-gray-400">testimonial</li>
          </ul>

          <button className="border px-4 py-2 rounded-lg active:text-amber-600 hover:scale-95 hover:bg-gray-300 transition-all duration-500 selection:bg-gray-500 selection:text-white hover:ring ring-yellow-400">
            sign up
          </button>
        </div>

        <div className="flex items-center gap-4">
         {mode ==='dark' ?<FaSun onClick={ThemeToogle} className="text-yellow-500 text-2xl"/>
        :  <FaMoon onClick={ThemeToogle} className="text-black text-2xl"/>}
        </div>

        <FaBars
          className="md:hidden cursor-pointer mr-7"
          onClick={() => setOpen(!open)}
        />

      </div>
    </nav>
  );
};

export default Navbar;
