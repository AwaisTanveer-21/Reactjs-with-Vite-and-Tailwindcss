import React from 'react'
import { ThemeProvide } from "../UseContext/Theme";
import { useContext } from 'react'


const Home = () => {
  const { mode, ThemeToogle } = useContext(ThemeProvide)


  return (
    <section className={`${mode === "dark" ? 'bg-black text-white' : 'bg-white text-black'}
  grid grid-cols-1 md:grid-cols-2
  gap-6 p-6 md:p-12 items-center min-h-screen w-full
  overflow-hidden
   items-stretch
`}> 
  {/* TEXT */}
  <div className="p-12 md:px-20 flex flex-col gap-6 md:gap-8 mx-12 md:pt-20 pt-32">
    <p className="text-gray-500">work smarter achieve more</p>

    <h1 className="font-bold text-3xl md:text-4xl leading-snug capitalize">
      simple fitness exercise for everyone
    </h1>

    <p className="text-gray-500">
      track your workouts, get better results and be the best version of you.
    </p>

    <div className="flex flex-col md:flex-row gap-6">
      <button className="bg-orange-400/80 text-white rounded-3xl p-3 hover:opacity-85 whitespace-break-spaces duration-300 transition-all hover:scale-95 active:bg-orange-400/100 active:text-white hover:ring ring-orange-400 capitalize">
        get started
      </button>
      <button className="border rounded-3xl p-3 capitalize hover:opacity-80 hover:scale-95 whitespace-break-spaces overflow-hidden duration-500 transition-all">
        view pricing
      </button>
    </div>
  </div>

  {/* IMAGE */}
  <div className="w-full flex justify-center items-center ">
    <img
      src="/section1.jpg"
      alt="img"
      className="w-full max-w-[520px] h-auto object-contain rounded-2xl object-center"
    />
  </div>

</section>

  )
}

export default Home