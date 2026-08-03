import { useTheme } from '../context/ThemeContext.jsx'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}