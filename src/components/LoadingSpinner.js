import React from "react";
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  const { theme } = useSelector((store) => store.core);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <div className="flex justify-center items-center h-screen w-full bg-purpleHearth dark:bg-bunting">
        <div className="absolute h-24 w-24 rounded-full border-8 border-solid border-trueV "></div>
        <div
          className="inline-block h-24 w-24  animate-spin rounded-full border-8 border-solid border-sulu  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
