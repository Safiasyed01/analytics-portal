import { useState } from "react";
import { users, countries, statuses } from "../data/mockData";

export function Reports() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country === "all" || u.country === country;
    const matchesStatus = status === "all" || u.status === status;
    return matchesSearch && matchesCountry && matchesStatus;
  });

  function handleSort(column) {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  }

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortBy) return 0;
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (typeof valA === "number") {
      return sortDirection === "asc" ? valA - valB : valB - valA;
    }
    return sortDirection === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  function sortArrow(column) {
    if (sortBy !== column) return "";
    return sortDirection === "asc" ? " ↑" : " ↓";
  }

  return (
    <div>
      <h1 className="page-title">Reports</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <input
          className="input"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="all">All Countries</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All Statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <div style={{ marginLeft: "auto", alignSelf: "center", fontSize: "12.5px", color: "var(--text-muted)" }}>
          {sortedUsers.length} of {users.length}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name{sortArrow("name")}</th>
            <th onClick={() => handleSort("country")}>Country{sortArrow("country")}</th>
            <th onClick={() => handleSort("orders")}>Orders{sortArrow("orders")}</th>
            <th onClick={() => handleSort("revenue")}>Revenue{sortArrow("revenue")}</th>
            <th onClick={() => handleSort("status")}>Status{sortArrow("status")}</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.country}</td>
              <td>{u.orders}</td>
              <td>${u.revenue.toLocaleString()}</td>
              <td>
                <span style={{
                  padding: "2px 9px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: u.status === "Active" ? "var(--accent)" : "var(--text-muted)",
                  background: u.status === "Active" ? "var(--accent-soft)" : "var(--border)",
                }}>
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}