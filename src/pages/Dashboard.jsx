import { summary, monthlyRevenue, salesByCategory, userDistribution } from '../data/mockData';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ border: "1px solid #ccc", padding: "16px" }}>
          <div>Revenue</div>
          <strong>${summary.revenue.toLocaleString()}</strong>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "16px" }}>
          <div>Orders</div>
          <strong>{summary.orders}</strong>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "16px" }}>
          <div>Customers</div>
          <strong>{summary.customers}</strong>
        </div>
      </div>

      <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "16px" }}>
        <h3>Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyRevenue}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0f766e" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "16px" }}>
        <h3>Sales by Category</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesByCategory}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0f766e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "16px" }}>
  <h3>User Distribution</h3>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Tooltip />
      <Pie data={userDistribution} dataKey="value" nameKey="label" outerRadius={80}>
        <Cell fill="#0f766e" />
        <Cell fill="#f59e0b" />
      </Pie>
    </PieChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}