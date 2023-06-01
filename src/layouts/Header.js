import React, { useState } from "react";

const Header = () => {
  const [darkM, setDarkM] = useState(false);

  return (
    <header className="container px-5 md:px-0 mx-auto">
      <div className="flex items-center w-fit ms-auto gap-x-3 py-5">
        <label className="relative flex items-stretch cursor-pointer">
          <input onClick={() => setDarkM(!darkM)} type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-6 bg-mineShaft relative rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-1 after:left-1 peer-checked:after:left-3 after:bg-yellow-500 after:border-yellow-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleHearth"></div>
          <div className="absolute w-3 h-3 rounded-full start-2.5 z-10 peer top-1 bg-mineShaft peer-checked:w-0 peer-checked:h-0"></div>
          <span className="ml-3 font-bold text-gray-500">{darkM ? "LIGHT" : "DARK"} MODE</span>
        </label>

        <span className="font-bold text-gray-500">|</span>
        <button className="font-bold text-gray-500">
          <span className="text-purpleHearth">TÜRKÇE</span>'YE GEÇ
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-purpleHearth/10 w-16 h-16 border rounded-full flex items-center justify-center rotate-[30deg] pb-1 pe-1 text-2xl">
          <span className="font-bold text-indigo-600">E</span>
        </button>
        <nav className="flex items-center gap-x-20 py-3 text-lg font-medium text-gray-500">
          <span>Skills</span>
          <span>Projects</span>
          <span className="px-7 py-2 border rounded border-purpleHearth text-purpleHearth">Hire me</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
