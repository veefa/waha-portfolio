import useDarkMode from "../hooks/useDarckMode";
import LightModeSvg from "../assets/Light-mode.svg";
import NightModeSvg from "../assets/Night-mode.svg";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="relative hover:bg-sage-300 hover:bg-opacity-20 mt-12 p-1 rounded-full transition"
      aria-label="Toggle dark mode">
      {theme === "dark" ? (
        <img
          src={LightModeSvg}
          alt="Switch to light mode"
          className="w-10 h-10"
        />
      ) : (
        <img
          src={NightModeSvg}
          alt="Switch to dark mode"
          className="w-10 h-10"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
