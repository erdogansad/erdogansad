import { useWindowScroll } from "@uidotdev/usehooks";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollTo from "react-scroll-into-view";
import Button from "@components/Button";

const ToTopButton = () => {
  const [{ y }] = useWindowScroll();

  return (
    <div className={`${y > 500 ? "bottom-4 opacity-100" : "-bottom-20 opacity-0"} transition-all duration-500 fixed end-4 group w-10 h-10 lg:h-12 lg:w-12`}>
      <ScrollTo scrollOptions={{ behavior: "smooth", block: "center", inline: "nearest" }} selector={`#main`}>
        <Button theme="third" ButtonIcon={FaChevronUp} />
      </ScrollTo>
    </div>
  );
};

export default ToTopButton;
