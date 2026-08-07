import { useState } from "react";
import { users, countries, statuses } from "../data/mockData";

export function Reports() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [status, setStatus] = useState("all");

  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country === "all" || u.country === country;
    const matchesStatus = status === "all" || u.status === status;
    return matchesSearch && matchesCountry && matchesStatus;
  });

  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

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

  return (
    <div>
      <h1>Reports</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="all">All Countries</option>
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All Statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>Name</th>
            <th onClick={() => handleSort("country")} style={{ cursor: "pointer" }}>Country</th>
            <th onClick={() => handleSort("orders")} style={{ cursor: "pointer" }}>Orders</th>
            <th onClick={() => handleSort("revenue")} style={{ cursor: "pointer" }}>Revenue</th>
            <th onClick={() => handleSort("status")} style={{ cursor: "pointer" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.country}</td>
              <td>{u.orders}</td>
              <td>${u.revenue.toLocaleString()}</td>
              <td>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}