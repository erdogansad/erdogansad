import { NavLink } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, type RootState } from "~/redux/store";
import { changeTheme, setHardwareAcceleration } from "~/redux/slices/rootSlice";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useSharedRef } from "~/context/ContextRef";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import clsx from "clsx";
import runningMan from "~/assets/img/running.gif";
import runningManSingle from "~/assets/img/running_single.png";

const MotionDiv = ({ hwSupported, children }: { hwSupported: boolean; children: React.ReactNode }) => {
  return hwSupported ? (
    <motion.div style={{ originX: 1.5 }} initial={{ rotate: 0 }} animate={{ rotate: [-180, 0] }} transition={{ duration: 0.4, delay: 0 }}>
      {children}
    </motion.div>
  ) : (
    children
  );
};

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme, hwSupported } = useSelector((state: RootState) => state.root);
  const { contactRef } = useSharedRef();
  const { t } = useTranslation();

  const handleDarkMode = () => {
    let theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    dispatch(changeTheme(theme));
  };

  const handleHwMode = () => {
    dispatch(setHardwareAcceleration(!hwSupported));
  };

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center pt-3 md:py-6 px-12 lg:sticky top-0 bg-white/90 dark:bg-black/80 z-30">
      <NavLink to="/" className="text-xl tracking-[0.15rem]">
        ERDOGAN.CODES
      </NavLink>
      <div className="flex gap-4 flex-col lg:flex-row">
        <ul className="flex items-center justify-center lg:justify-start gap-4">
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <button
              onClick={handleDarkMode}
              className={clsx(
                "p-2 rounded-full border border-sky-500 overflow-hidden cursor-pointer hover:bg-sky-500 group",
                hwSupported && "hover:scale-110 hover:rotate-12 transition-transform duration-300"
              )}
            >
              {theme === "dark" ? (
                <MotionDiv hwSupported={hwSupported as boolean} key="sun">
                  <IoSunnyOutline className="size-6 text-sky-500 group-hover:text-white group-dark:hover:text-black" />
                </MotionDiv>
              ) : theme === "light" ? (
                <MotionDiv hwSupported={hwSupported as boolean} key="moon">
                  <IoMoonOutline className="size-6 text-sky-500 group-hover:text-white group-dark:hover:text-black" />
                </MotionDiv>
              ) : (
                <div className="size-6" />
              )}
            </button>
          </li>
          <li>
            <button
              onClick={handleHwMode}
              className={clsx(
                "p-2 rounded-full border border-sky-500 overflow-hidden cursor-pointer group",
                hwSupported && "hover:scale-110 transition-transform duration-300"
              )}
            >
              <img className="size-6" src={hwSupported ? runningMan : runningManSingle} />
            </button>
          </li>
        </ul>
        <Button onClick={scrollToContact}>{t("header.contact")}</Button>
      </div>
    </nav>
  );
};

export default Header;
