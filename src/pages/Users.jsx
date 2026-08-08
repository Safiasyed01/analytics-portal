import { useState } from "react";
import { users } from "../data/mockData";

export function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="page-title">Users</h1>

      <input
        className="input"
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "16px", width: "260px" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "14px" }}>
        {filteredUsers.map((u) => (
          <div key={u.id} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "var(--accent-soft)", color: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: 13,
              }}>
                {u.name[0]}
              </span>
              <strong>{u.name}</strong>
            </div>
            <p style={{ margin: "4px 0", fontSize: 13, color: "var(--text-muted)" }}>Sales: ${u.revenue.toLocaleString()}</p>
            <p style={{ margin: "4px 0", fontSize: 13, color: "var(--text-muted)" }}>Orders: {u.orders}</p>
            <p style={{ margin: "4px 0", fontSize: 13, color: "var(--text-muted)" }}>Country: {u.country}</p>
            <span style={{
              display: "inline-block", marginTop: "6px",
              padding: "2px 9px", borderRadius: "999px", fontSize: "12px", fontWeight: 600,
              color: u.status === "Active" ? "var(--accent)" : "var(--text-muted)",
              background: u.status === "Active" ? "var(--accent-soft)" : "var(--border)",
            }}>
              {u.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}