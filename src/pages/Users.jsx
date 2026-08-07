import { users } from "../data/mockData";

export function Users() {
  return (
    <div>
      <h1>Reports</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Orders</th>
            <th>Revenue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
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