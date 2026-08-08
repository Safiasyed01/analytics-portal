const firstNames = ["Ali", "Sara", "John", "Emma", "Hassan", "Maria", "David", "Fatima", "Michael", "Ayesha", "Chris", "Zainab", "James", "Noor", "Daniel", "Hina", "Robert", "Sana", "Omar", "Laura", "Bilal", "Nadia", "Tom", "Aisha", "Kevin", "Mahnoor", "Sam", "Rabia", "Adam", "Iqra"];
const countryPool = ["Pakistan", "USA", "Canada"];
const statusPool = ["Active", "Inactive"];

export const users = firstNames.map((name, i) => ({
  id: `USR-${1000 + i}`,
  name,
  country: countryPool[i % countryPool.length],
  orders: 5 + ((i * 7) % 60),
  revenue: 800 + ((i * 431) % 9000),
  status: i % 3 === 0 ? "Inactive" : "Active",
}));


export const countries = ["Pakistan", "USA", "Canada"];
export const statuses = ["Active", "Inactive"];
export const summary = {
  revenue: users.reduce((total, u) => total + u.revenue, 0),
  orders: users.reduce((total, u) => total + u.orders, 0),
  customers: users.length,
};
export const monthlyRevenue = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 5200 },
  { month: "Mar", value: 4800 },
  { month: "Apr", value: 6100 },
  { month: "May", value: 7300 },
  { month: "Jun", value: 6900 },
];

export const salesByCategory = [
  { category: "Electronics", value: 8200 },
  { category: "Clothes", value: 5400 },
  { category: "Food", value: 3100 },
  { category: "Books", value: 2000 },
];

export const userDistribution = [
  { label: "Active", value: users.filter((u) => u.status === "Active").length },
  { label: "Inactive", value: users.filter((u) => u.status === "Inactive").length },
];
export const productCategories = ["Electronics", "Clothes", "Food", "Books"];
const productNames = {
  Electronics: ["Laptop Pro 14", "Wireless Earbuds", "4K Monitor", "Smart Watch", "Bluetooth Speaker", "Mechanical Keyboard"],
  Clothes: ["Denim Jacket", "Running Shoes", "Cotton Hoodie", "Formal Shirt", "Wool Sweater", "Leather Belt"],
  Food: ["Organic Honey", "Roasted Coffee Beans", "Herbal Tea Set", "Almond Butter", "Dark Chocolate Box", "Granola Pack"],
  Books: ["Clean Code", "Atomic Habits", "Sapiens", "Deep Work", "The Pragmatic Programmer", "Thinking Fast and Slow"],
};

export const products = productCategories.flatMap((category) =>
  productNames[category].map((name, i) => ({
    id: `PRD-${category}-${i}`,
    name,
    category,
    price: 15 + ((name.length * 7) % 180),
    stock: (name.length * 3) % 55,
    description: `${name} — a top-performing ${category.toLowerCase()} item.`,
  }))
);