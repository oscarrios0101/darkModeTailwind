// src/ThemeContext.js
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Check if dark mode was previously set in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true" ? true : false;
  });

  // Toggle function to switch between dark and light
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update document class when theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Update the class on the html element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const theme = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
