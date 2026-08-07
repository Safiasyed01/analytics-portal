import { useTheme } from "../context/ThemeContext";

export function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Settings</h1>

      <div style={{ marginBottom: "16px" }}>
        <label>
          Theme: {theme}
          <button onClick={toggleTheme} style={{ marginLeft: "8px" }}>
            Switch to {theme === "light" ? "dark" : "light"}
          </button>
        </label>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label>
          Language:
          <select style={{ marginLeft: "8px" }}>
            <option>English</option>
            <option>Urdu</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label>
          <input type="checkbox" defaultChecked /> Email notifications
        </label>
      </div>
    </div>
  );
}