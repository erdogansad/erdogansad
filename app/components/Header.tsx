import { NavLink } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, type RootState } from "~/redux/store";
import { setTheme } from "~/redux/slices/rootSlice";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useSharedRef } from "~/context/ContextRef";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

interface CookieValues {
  theme?: string;
}

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.root);
  const { contactRef } = useSharedRef();
  const { t } = useTranslation();
  const [cookies] = useCookies<"theme", CookieValues>(["theme"]);

  useEffect(() => {
    if (cookies.theme) {
      dispatch(setTheme(cookies.theme));
    }
  }, []);

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    dispatch(setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light"));
  };

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center py-6 px-12 lg:sticky top-0 bg-white/90 dark:bg-black/80 z-30">
      <NavLink to="/" className="text-xl tracking-[0.15rem]">
        ERDOGAN.CODES
      </NavLink>
      <div className="flex gap-8 flex-col lg:flex-row">
        <ul className="flex items-center justify-center lg:justify-start gap-8">
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <button onClick={handleDarkMode} className="p-2 rounded-full border border-sky-500 overflow-hidden cursor-pointer">
              {theme === "dark" ? (
                <motion.div key="sun" style={{ originX: 1.5 }} initial={{ rotate: 0 }} animate={{ rotate: [-180, 0] }} transition={{ duration: 0.4, delay: 0 }}>
                  <IoSunnyOutline className="size-6 text-sky-500" />
                </motion.div>
              ) : theme === "light" ? (
                <motion.div
                  key="moon"
                  style={{ originX: 1.5 }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [-180, 0] }}
                  transition={{ duration: 0.4, delay: 0 }}
                >
                  <IoMoonOutline className="size-6 text-sky-500" />
                </motion.div>
              ) : (
                <div className="size-6" />
              )}
            </button>
          </li>
        </ul>
        <button
          onClick={scrollToContact}
          className="px-8 py-3 border border-sky-500 text-sky-500 text-sm uppercase cursor-pointer hover:bg-sky-500 hover:text-white dark:hover:text-black transition-colors duration-300"
        >
          {t("header.contact")}
        </button>
      </div>
    </nav>
  );
};

export default Header;
