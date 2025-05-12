// src/Card.jsx
import { useTheme } from "./ThemeContext";

function Card({ title, children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-6 overflow-hidden ">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold p-4 text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="p-4 text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
}

export default Card;
