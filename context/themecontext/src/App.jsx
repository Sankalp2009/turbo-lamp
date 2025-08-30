import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Components/ThemeContext";

const style = {
  light: {
    color: "white",
    backgroundColor: "pink",
    width: "400px",
    height: "400px",
    alignContent: "center",
    borderRadius: "20px",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
    width: "400px",
    height: "400px",
    alignContent: "center",
    borderRadius: "50%",
  },
};

function App() {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div style={theme === "light" ? style.light : style.dark}>
        <h2>Theme is {theme}</h2>
        <button
          style={theme === "light" ? { color: "orange" } : { color: "red" }}
          onClick={ToggleTheme}
        >
          Change Theme
        </button>
      </div>
    </>
  );
}

export default App;
