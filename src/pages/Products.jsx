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
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginLeft: "8px" }}>
        <option value="all">All Categories</option>
        {productCategories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
        {filteredProducts.map((p) => {
          const stockLabel = p.stock === 0 ? "Out of stock" : p.stock < 10 ? "Low stock" : "In stock";
          return (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: "16px", width: "220px" }}>
              <h3>{p.name}</h3>
              <p style={{ fontSize: "12px", color: "#666" }}>{p.category}</p>
              <p>{p.description}</p>
              <strong>${p.price}</strong>
              <p>{stockLabel} ({p.stock} units)</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}