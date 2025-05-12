import { useTheme } from "./ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-md ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Tailwind Theme Switcher
        </h1>
        <button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-200"
          onClick={toggleTheme}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
