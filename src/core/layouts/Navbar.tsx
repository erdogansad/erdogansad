import { UIState, toggleDarkMode } from "@/redux/slices/uiSlice";

import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {
  const [time, setTime] = useState<string>("");
  const dispatch = useAppDispatch();
  const { darkMode } = useSelector((state: { ui: UIState }) => state.ui);

  useEffect(() => {
    const getTime = () => {
      const date = new Date();
      const hours =
        date.getUTCHours() + 3 > 23 ? `0${date.getUTCHours() - 21}` : date.getUTCHours() < 10 ? `0${date.getUTCHours() + 3}` : date.getUTCHours() + 3;
      const minutes = date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();
      const seconds = date.getUTCSeconds() < 10 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds();

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    getTime();
    const clock = setInterval(getTime, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <motion.ul className="hidden md:flex gap-8 text-slate-950 dark:text-slate-50 *:cursor-pointer *:select-none transition-colors">
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="hover:text-slate-400 transition-colors"
            >
              <ScrollIntoView
                smooth
                scrollOptions={{
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                }}
                selector="#hakkimda"
              >
                Hakkımda
              </ScrollIntoView>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hover:text-slate-400 transition-colors"
            >
              <ScrollIntoView
                smooth
                scrollOptions={{
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                }}
                selector="#projelerim"
              >
                Projelerim
              </ScrollIntoView>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="hover:text-slate-400 transition-colors"
            >
              <ScrollIntoView
                smooth
                scrollOptions={{
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                }}
                selector="#iletisim"
              >
                İletişim
              </ScrollIntoView>
            </motion.li>
          </motion.ul>
          <div className="flex w-full md:w-fit gap-5 items-center justify-between md:justify-normal">
            <button onClick={() => dispatch(toggleDarkMode())} className="overflow-hidden rounded-full">
              {darkMode ? (
                <motion.div
                  key={darkMode ? "sun" : "moon"}
                  style={{ originX: 1 }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [-180, 0] }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <FaMoon className="size-6 text-slate-50 hover:text-slate-400 transition-colors" />
                </motion.div>
              ) : (
                <motion.div
                  key={darkMode ? "sun" : "moon"}
                  style={{ originX: 1 }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [-180, 0] }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <IoSunny className="size-7 text-yellow-500 hover:text-yellow-700 transition-colors" />
                </motion.div>
              )}
            </button>
            <motion.hr
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block h-12 border-r text-slate-50"
            />
            <div className="text-right *:select-none">
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xs text-slate-500 dark:text-slate-400 transition-colors"
              >
                İzmir / Türkiye
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-md text-slate-950 dark:text-slate-50 transition-colors"
              >
                {time}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
