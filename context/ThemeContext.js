// useState
import { useState } from "react";
// createContext
import { createContext } from "react";

export const ModeContext = createContext({
  mode: "dark",
  lightMode: () => {},
  darkMode: () => {},
});

const ThemeContext = (props) => {
  const [mode, setMode] = useState("dark");

  function lightMode() {
    setMode("light");

    const body = document.querySelector("body");
    body.setAttribute("data-theme", "light");
  }

  function darkMode() {
    setMode("dark");
    const body = document.querySelector("body");
    body.setAttribute("data-theme", "dark");
  }

  return (
    <ModeContext.Provider value={{ mode, lightMode, darkMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ThemeContext;
