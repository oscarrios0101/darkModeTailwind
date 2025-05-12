import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "");
    }
  }, [theme]);

  return (
    <div
      className={`bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full transition-colors duration-300`}
    >
      <div className="p-2 rounded-xl flex space-x-2 border border-zinc-600 dark:border-zinc-700">
        <button
          onClick={() => setTheme("")}
          className="focus:outline-none p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        >
          <FaRegSun className="text-zinc-600  dark:text-zinc-400" size={20} />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="focus:outline-none p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        >
          <FaRegMoon className="text-zinc-600 dark:text-zinc-400" size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
