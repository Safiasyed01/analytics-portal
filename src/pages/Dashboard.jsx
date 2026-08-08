import { summary, monthlyRevenue, salesByCategory, userDistribution } from '../data/mockData';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      <div style={{ display: "flex", gap: "16px" }}>
        <div className="card" style={{ flex: 1 }}>
          <div style={{ color: "var(--text-muted)", fontSize: 12 }}>Revenue</div>
          <strong style={{ fontSize: 22 }}>${summary.revenue.toLocaleString()}</strong>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <div style={{ color: "var(--text-muted)", fontSize: 12 }}>Orders</div>
          <strong style={{ fontSize: 22 }}>{summary.orders}</strong>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <div style={{ color: "var(--text-muted)", fontSize: 12 }}>Customers</div>
          <strong style={{ fontSize: 22 }}>{summary.customers}</strong>
        </div>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3 style={{ marginTop: 0 }}>Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyRevenue}>
            <XAxis dataKey="month" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <div className="card" style={{ flex: 1.2 }}>
          <h3 style={{ marginTop: 0 }}>Sales by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesByCategory}>
              <XAxis dataKey="category" stroke="var(--text-muted)" />
              <YAxis stroke="var(--text-muted)" />
              <Tooltip />
              <Bar dataKey="value" fill="#0f766e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <h3 style={{ marginTop: 0 }}>User Distribution</h3>
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
    </div>
  );
}