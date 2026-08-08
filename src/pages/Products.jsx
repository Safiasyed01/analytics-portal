import { useState } from "react";
import { products, productCategories } from "../data/mockData";

export function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="page-title">Products</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <input
          className="input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {productCategories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div style={{ marginLeft: "auto", alignSelf: "center", fontSize: "12.5px", color: "var(--text-muted)" }}>
          {filteredProducts.length} of {products.length}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
        {filteredProducts.map((p) => {
          const stockLabel = p.stock === 0 ? "Out of stock" : p.stock < 10 ? "Low stock" : "In stock";
          const stockColor = p.stock === 0 ? "#f87171" : p.stock < 10 ? "#f59e0b" : "var(--accent)";
          return (
            <div key={p.id} className="card">
              <div style={{ fontSize: "11.5px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {p.category}
              </div>
              <strong style={{ display: "block", margin: "4px 0 6px" }}>{p.name}</strong>
              <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: "0 0 10px" }}>
                {p.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>${p.price}</strong>
                <span style={{ fontSize: "12px", color: stockColor, fontWeight: 600 }}>
                  {stockLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}