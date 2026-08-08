import { useTheme } from "../context/ThemeContext";

export function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1 className="page-title">Settings</h1>

      <div className="card" style={{ maxWidth: "420px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
          <span>Theme: {theme === "light" ? "Light" : "Dark"}</span>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"}
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
          <span>Language</span>
          <select className="select">
            <option>English</option>
            <option>Urdu</option>
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
          <span>Email notifications</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>
    </div>
  );
}