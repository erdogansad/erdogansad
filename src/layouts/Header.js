import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="relative flex items-center w-fit ms-auto gap-x-10 py-8 after:content-[''] after:-z-10 after:bg-sulu after:absolute after:top-0 after:end-0 after:w-[11rem] after:h-screen">
        <span className="font-bold text-sulu">TÜRKÇE'YE GEÇ</span>
        <label className="relative flex items-stretch cursor-pointer z-10">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-6 bg-mineShaft relative rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-1 after:left-1 peer-checked:after:left-3 after:bg-kournikova after:border-kournikova after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-malibu"></div>
          <div className="absolute w-3 h-3 rounded-full start-2.5 z-10 peer top-1 bg-mineShaft peer-checked:w-0 peer-checked:h-0"></div>
          <span className="ml-3 font-bold text-purpleHearth"> DARK MODE</span>
        </label>
      </div>
      <div className="pb-8">
        <span className="font-bold text-sulu text-3xl">Erdoğan</span>
      </div>
    </header>
  );
};

export default Header;
