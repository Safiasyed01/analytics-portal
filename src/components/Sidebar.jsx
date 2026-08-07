import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        padding: "20px 16px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "24px" }}>Meridian</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {[
          { to: "/", label: "Dashboard" },
          { to: "/reports", label: "Reports" },
          { to: "/users", label: "Users" },
          { to: "/products", label: "Products" },
          { to: "/settings", label: "Settings" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => ({
              padding: "8px 12px",
              borderRadius: "6px",
              textDecoration: "none",
              color: isActive ? "#fff" : "var(--text)",
              background: isActive ? "var(--accent)" : "transparent",
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}