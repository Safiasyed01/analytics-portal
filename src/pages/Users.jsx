import { useState } from "react";
import { users } from "../data/mockData";

export function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Users</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
        {filteredUsers.map((u) => (
          <div key={u.id} style={{ border: "1px solid #ccc", padding: "16px", width: "200px" }}>
            <h3>{u.name}</h3>
            <p>Sales: ${u.revenue.toLocaleString()}</p>
            <p>Orders: {u.orders}</p>
            <p>Country: {u.country}</p>
            <p>Status: {u.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}