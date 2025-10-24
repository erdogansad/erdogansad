import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import type { RootState } from "~/redux/store";
import clsx from "clsx";

const base = "block px-8 py-3 border text-xs md:text-sm uppercase cursor-pointer text-center";
const selected = "!border-sky-500 text-white dark:text-black !bg-sky-500";

const themes = {
  primary: "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white dark:hover:text-black",
  secondary: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
};

const Button = ({
  to = null,
  theme = "primary",
  onClick,
  isSelected,
  children,
}: {
  to?: string | null;
  theme?: string;
  onClick?: () => void;
  isSelected?: boolean;
  children: string;
}) => {
  const { hwSupported } = useSelector((state: RootState) => state.root);

  return to !== null ? (
    <NavLink
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={clsx(base, hwSupported && "transition-colors duration-300", themes[theme as keyof typeof themes], isSelected && selected)}
    >
      {children}
    </NavLink>
  ) : (
    <button
      onClick={onClick}
      className={clsx(base, hwSupported && "transition-colors duration-300", themes[theme as keyof typeof themes], isSelected && selected)}
    >
      {children}
    </button>
  );
};

export default Button;
