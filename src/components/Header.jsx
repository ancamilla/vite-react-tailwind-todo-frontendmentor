import { useState, useEffect, useRef } from "react";
import MoonIcon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect (() => {

      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

    }, [darkMode]);  //cada vez que cambiar darkMode se ejecuta el useEffect, si esta vacio se ejecuta una sola vez

    return(
        <header className="container mx-auto px-4">
          <div className="flex justify-between">
            <h1 className="uppercase text-white px-4 pt-8 text-3xl font-semibold tracking-[0.3em]">
              Todo
            </h1>
            <button onClick={() => setDarkMode(!darkMode)}>
              {
                darkMode ? <IconSun /> : <MoonIcon />
              }
            </button>
          </div>
        
        </header>

    )
}

export default Header;