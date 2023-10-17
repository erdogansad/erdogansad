import { useWindowScroll } from "@uidotdev/usehooks";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollTo from "react-scroll-into-view";

const ToTopButton = () => {
  const [{ y }] = useWindowScroll();

  return (
    <div className={`${y > 500 ? "bottom-4 opacity-100" : "-bottom-20 opacity-0"} transition-all duration-500 fixed end-6 group w-10 h-10 lg:h-12 lg:w-12`}>
      <div className="absolute inset-0 transition-transform bg-blue-800 duration-200 translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1 rounded-xl w-full h-full -z-10"></div>
      <ScrollTo
        className={`p-2 rounded-xl group bg-blue-200 text-blue-900 border border-blue-800 cursor-pointer`}
        scrollOptions={{ behavior: "smooth", block: "center", inline: "nearest" }}
        selector={`#main-section`}
      >
        <FaChevronUp className="w-full h-full" />
      </ScrollTo>
    </div>
  );
};

export default ToTopButton;
