import React, { useState } from "react";
import "./ThemeSelect.css"
import Reactions from "./Reactions";
import ShopList from "./ShopList";

function ThemeSelect() {
  //isDarkMode {true/false}
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    const currentMode = isDarkMode;
    setDarkMode(!currentMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <button onClick={toggleTheme}>Cambiar</button>
      </header>
      <main>
        <p>Este es el contenido del sitio</p>
        <Reactions isDarkMode = {isDarkMode} />
        <ShopList/>
      </main>
    </div>
  );
}

export default ThemeSelect;
