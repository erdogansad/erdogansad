import React from "react";

const LoadingSpinner = ({ size }) => {
  return (
    <div
      style={size ? { height: `${size / 4}rem`, width: `${size / 4}rem` } : {}}
      className={`${size !== undefined ? "" : "h-16 w-16"} inline-block animate-ping rounded-full bg-blue-500`}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
