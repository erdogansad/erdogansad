import { createContext, useState } from "react";

export const ThemeContext = createContext();

const fetchTheme = () => {
  let localData = localStorage.getItem("theme");
  return localData !== null ? localData : "light";
};

const changeTheme = (theme) => {
  localStorage.setItem("theme", theme);
  return theme;
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(fetchTheme());

  const contextState = {
    theme: themeState,
    setTheme: (theme) => setThemeState(changeTheme(theme)),
  };

  return <ThemeContext.Provider value={contextState}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
