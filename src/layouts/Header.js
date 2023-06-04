import { useDispatch, useSelector } from "react-redux";
import { changeLang, changeTheme } from "@slices/coreSlice";

const Header = () => {
  const { contents, theme, lang } = useSelector((store) => store.core);
  const dispatch = useDispatch();

  const resolveSwitchBtn = () => {
    if (lang && contents) {
      if (lang === "tr") {
        let text = contents.langText.split(" ");
        return (
          <button onClick={() => dispatch(changeLang("en"))} className="font-bold text-sulu dark:text-bilobaFlower text-center md:text-start">
            <span className="text-alto dark:text-boulder">
              {text[0]} {text[1]}
            </span>
            {` ${text[2]}`}
          </button>
        );
      } else {
        let text = contents.langText.split("'");
        return (
          <button onClick={() => dispatch(changeLang("tr"))} className="font-bold text-sulu dark:text-bilobaFlower text-center md:text-start">
            {text[0]}
            <span className="text-alto dark:text-boulder">'{text[1]}</span>
          </button>
        );
      }
    }
  };

  return (
    <header className="font-inter">
      <div className="container">
        <div className="flex items-center w-fit mx-auto lg:me-0 lg:ms-auto gap-x-5 lg:gap-x-10 py-8 text-xs md:text-base">
          {resolveSwitchBtn()}
          <div className="relative afher:hidden after:lg:absolute after:w-72 after:2xl:w-screen after:h-screen after:bg-sulu after:-top-8 after:-start-5 after:dark:bg-seaWeed">
            <label className="w-[10.2rem] relative flex items-center cursor-pointer z-10">
              <input
                onClick={() => dispatch(changeTheme(theme === "light" ? "dark" : "light"))}
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked={theme === "light"}
              />
              <div className="w-12 h-6 bg-mineShaft-500 relative rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-1 after:left-1 peer-checked:after:left-3 after:bg-kournikova after:border-kournikova after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-malibu"></div>
              <div className="absolute w-3 h-3 rounded-full start-2.5 z-10 peer top-1 bg-mineShaft-500 peer-checked:w-0 peer-checked:h-0"></div>
              <span className="ml-3 font-bold text-sulu lg:text-purpleHearth dark:text-alto">
                {theme === "light" && contents ? contents.lightText : contents.darkText}
              </span>
            </label>
          </div>
        </div>
        <div className="lg:pb-8 text-center lg:text-start">
          <span className="font-bold text-sulu text-3xl">Erdoğan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
