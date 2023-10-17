import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";
import ScrollTo from "react-scroll-into-view";

const Header = () => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <header className="hidden lg:block absolute h-full lg:h-auto w-full py-10 z-10">
      <Transition
        className="container h-full mx-auto flex items-center justify-between font-arimo"
        show={show}
        enter="transition ease duration-1000 transform delay-[1250ms]"
        enterFrom="opacity-0 translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-12"
      >
        <div className="hidden lg:block basis-1/3"></div>
        <nav className="basis-1/3 flex items-center justify-center gap-7 font-bold text-white text-lg">
          <ScrollTo
            scrollOptions={{
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            }}
            selector={`#about-section`}
          >
            <button className="relative group">
              <span className="absolute inset-0 transition text-blue-500 duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                Hakkımda
              </span>
              <span className="absolute inset-0">Hakkımda</span>
              <span>Hakkımda</span>
            </button>
          </ScrollTo>
          <div className="h-8 border-e"></div>
          <ScrollTo
            scrollOptions={{
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            }}
            selector={`#projects-section`}
          >
            <button className="relative group">
              <span className="absolute inset-0 transition text-blue-300 duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                Projelerim
              </span>
              <span className="absolute inset-0">Projelerim</span>
              <span>Projelerim</span>
            </button>
          </ScrollTo>
          <div className="h-8 border-e"></div>

          <ScrollTo
            scrollOptions={{
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            }}
            selector={`#footer`}
          >
            <button className="relative group">
              <span className="absolute inset-0 transition text-blue-300 duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                İletişim
              </span>
              <span className="absolute inset-0">İletişim</span>
              <span>İletişim</span>
            </button>
          </ScrollTo>
        </nav>
        <Transition.Child
          className="flex basis-1/3 justify-end"
          enter="transition ease duration-1000 transform delay-[2500ms]"
          enterFrom="opacity-0 translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-12"
        >
          <button className="relative group">
            <span className="absolute inset-0 transition text-blue-300 duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
              English
            </span>
            <span className="absolute inset-0 text-white">English</span>
            <span className="text-white">English</span>
          </button>
        </Transition.Child>
      </Transition>
    </header>
  );
};

export default Header;
