import useDarkMode from "../hooks/useDarckMode";
import { Moon, Sun } from "lucide-react"; // Optional: install lucide icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full transition"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;