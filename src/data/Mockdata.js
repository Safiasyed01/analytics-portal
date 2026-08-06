export const users = [
     { id: "USR-1001", name: "Ali", country: "Pakistan", orders: 42, revenue: 4300, status: "Active" },
  { id: "USR-1002", name: "Sara", country: "USA", orders: 28, revenue: 6200, status: "Active" },
  { id: "USR-1003", name: "John", country: "Canada", orders: 15, revenue: 1900, status: "Inactive" }
];


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
  { label: "Active", value: 2 },
  { label: "Inactive", value: 1 },
];