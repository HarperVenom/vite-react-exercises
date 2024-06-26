import { useEffect, useState } from "react";
import "./style.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [mode, setMode] = useLocalStorage("theme", "light");

  function changeMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="switch">
      <button onClick={() => changeMode()}>Theme: {mode}</button>
    </div>
  );
};

export default LightDarkMode;
