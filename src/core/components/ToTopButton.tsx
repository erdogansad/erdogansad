import { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { FaChevronUp } from "react-icons/fa";
import ScrollTo from "react-scroll-into-view";
import Button from "@/core/components/Button";

const ToTopButton = () => {
  const [{ y }] = useWindowScroll();
  const [yPos, setYPos] = useState<number>(0);

  useEffect(() => {
    if (y !== yPos) setYPos(y as number);
  }, [y, yPos]);

  return (
    <div className={`${yPos > 500 ? "bottom-4 opacity-100" : "-bottom-20 opacity-0"} transition-all duration-500 fixed end-4 group w-10 h-10 lg:h-12 lg:w-12`}>
      <ScrollTo scrollOptions={{ behavior: "smooth", block: "center", inline: "nearest" }} selector={`#main`}>
        <Button theme="third" ButtonIcon={FaChevronUp} />
      </ScrollTo>
    </div>
  );
};

export default ToTopButton;
