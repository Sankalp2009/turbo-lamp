import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
