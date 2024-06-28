import React from "react";
import { Link } from "react-router-dom";

const base = "relative z-10 flex justify-center items-center p-2 rounded-lg transition-colors duration-100";

const themes = {
  primary: ["bg-blue-900 border border-blue-50 text-blue-50", "bg-blue-50"],
  secondary: ["bg-blue-50 border border-blue-950 text-blue-950", "bg-blue-950"],
  third: ["bg-blue-200 border border-blue-950 text-blue-900", "bg-blue-950"],
  transparent: [
    "bg-transparent border border-transparent text-blue-50 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-950",
    "bg-blue-950 delay-100 opacity-0 group-hover:opacity-100",
  ],
};

const iconSizes = {
  4: "lg:w-4 lg:h-4",
  8: "lg:w-8 lg:h-8",
  10: "lg:w-10 lg:h-10",
  12: "lg:w-12 lg:h-12",
  16: "lg:w-16 lg:h-16",
  20: "lg:w-20 lg:h-20",
  24: "lg:w-24 lg:h-24",
  32: "lg:w-32 lg:h-32",
};

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const ButtonBody = ({ theme, title, iconSize, textSize, ButtonIcon }) => {
  return (
    <div className={`${base} ${themes[theme][0]}`}>
      {ButtonIcon ? (
        <div className="flex gap-1 items-center">
          <ButtonIcon className={`h-4 w-4 ${iconSizes[iconSize]}`} />
          {title && <span className={`font-bold font-arimo ${textSizes[textSize]}`}>{title}</span>}
        </div>
      ) : (
        <span className={`font-bold font-arimo ${textSizes[textSize]}`}>{title}</span>
      )}
    </div>
  );
};

const Button = ({ to = null, onClick = null, ButtonIcon = null, title, theme = "primary", iconSize = 8, textSize = "md" }) => {
  const buttonBg = `absolute inset-0 w-full h-full rounded-lg transition-transform duration-200 translate-x-0 translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5 ${themes[theme][1]}`;

  if (to) {
    return (
      <Link className="relative w-fit h-fit group" to={to} target="_blank" rel="noopener noreferrer">
        <ButtonBody theme={theme} title={title} iconSize={iconSize} ButtonIcon={ButtonIcon} textSize={textSize} />
        <div className={buttonBg}></div>
      </Link>
    );
  } else {
    return (
      <button className="relative w-fit h-fit group" onClick={onClick}>
        <ButtonBody theme={theme} title={title} iconSize={iconSize} ButtonIcon={ButtonIcon} textSize={textSize} />
        <div className={buttonBg}></div>
      </button>
    );
  }
};

export default Button;
