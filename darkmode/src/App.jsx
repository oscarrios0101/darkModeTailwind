import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("");
  return (
    <div
      className={`${theme ? "dark" : ""}
    bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full `}
    >
      <div className="p-2 rounded-xl flex space-x-2 border border-zinc-200 dark:border-zinc-700">
        <button
          onClick={() => setTheme("")}
          className="focus:outline-none p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        >
          <FaRegSun className="text-zinc-600 dark:text-zinc-400" size={20} />
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
