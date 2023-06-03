import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="font-inter">
      <div className="container">
        <div className="flex items-center w-fit mx-auto lg:me-0 lg:ms-auto gap-x-5 lg:gap-x-10 py-8 text-xs md:text-base">
          <span className="font-bold text-sulu dark:text-bilobaFlower text-center md:text-start">
            TÜRKÇE<span className="text-alto dark:text-boulder">'YE GEÇ</span>
          </span>
          <div className="relative afher:hidden after:lg:absolute after:w-72 after:2xl:w-screen after:h-screen after:bg-sulu after:-top-8 after:-start-5 after:dark:bg-seaWeed">
            <label className="w-[10.2rem] relative flex items-center md:justify-between cursor-pointer z-10">
              <input onClick={() => setDarkMode(!darkMode)} type="checkbox" value="" className="sr-only peer" checked={!darkMode} />
              <div className="w-12 h-6 bg-mineShaft-500 relative rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-1 after:left-1 peer-checked:after:left-3 after:bg-kournikova after:border-kournikova after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-malibu"></div>
              <div className="absolute w-3 h-3 rounded-full start-2.5 z-10 peer top-1 bg-mineShaft-500 peer-checked:w-0 peer-checked:h-0"></div>
              <span className="ml-3 font-bold text-sulu lg:text-purpleHearth dark:text-alto"> {!darkMode ? "LIGHT" : "DARK"} MODE</span>
            </label>
          </div>
        </div>
        <div className="lg:pb-8 text-center lg:text-start">
          <span className="font-bold text-sulu text-3xl">Erdoğan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

/* <header className="container px-10 xl:px-0 mx-auto font-inter">
      <div className="relative flex items-center w-fit ms-auto gap-x-10 py-8 after:content-[''] after:-z-10 after:bg-sulu after:dark:bg-seaWeed after:absolute after:top-0 after:end-0 after:w-[11rem] after:h-screen">
        <span className="font-bold text-sulu dark:text-bilobaFlower">
          TÜRKÇE<span className="text-alto dark:text-boulder">'YE GEÇ</span>
        </span>
        <label className="w-[10.2rem] relative flex justify-between cursor-pointer z-10">
          <input onClick={() => setDarkMode(!darkMode)} type="checkbox" value="" className="sr-only peer" checked={!darkMode} />
          <div className="w-12 h-6 bg-mineShaft-500 relative rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-1 after:left-1 peer-checked:after:left-3 after:bg-kournikova after:border-kournikova after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-malibu"></div>
          <div className="absolute w-3 h-3 rounded-full start-2.5 z-10 peer top-1 bg-mineShaft-500 peer-checked:w-0 peer-checked:h-0"></div>
          <span className="ml-3 font-bold text-purpleHearth dark:text-alto"> {!darkMode ? "LIGHT" : "DARK"} MODE</span>
        </label>
      </div>
      <div className="pb-8">
        <span className="font-bold text-sulu text-3xl">Erdoğan</span>
      </div>
    </header> */
