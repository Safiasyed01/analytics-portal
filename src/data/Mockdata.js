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
export const products = [
  { id: "PRD-1", name: "Laptop Pro 14", category: "Electronics", price: 1299, stock: 12, description: "High-performance laptop for professionals." },
  { id: "PRD-2", name: "Wireless Earbuds", category: "Electronics", price: 89, stock: 40, description: "Noise-cancelling wireless earbuds." },
  { id: "PRD-3", name: "Denim Jacket", category: "Clothes", price: 65, stock: 20, description: "Classic fit denim jacket." },
  { id: "PRD-4", name: "Running Shoes", category: "Clothes", price: 75, stock: 0, description: "Lightweight running shoes." },
  { id: "PRD-5", name: "Organic Honey", category: "Food", price: 15, stock: 30, description: "Pure organic honey, 500g jar." },
  { id: "PRD-6", name: "Clean Code", category: "Books", price: 35, stock: 8, description: "A handbook of agile software craftsmanship." },
];

export const productCategories = ["Electronics", "Clothes", "Food", "Books"];