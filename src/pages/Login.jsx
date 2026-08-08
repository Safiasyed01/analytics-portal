import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(email);
    navigate("/");
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: "320px" }}>
        <h2 style={{ textAlign: "center", marginTop: 0 }}>Enterprise Analytics Portal</h2>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontSize: "13px", color: "var(--text-muted)" }}>Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontSize: "13px", color: "var(--text-muted)" }}>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          />
        </div>

        <button type="submit" style={{ width: "100%" }}>Login</button>

        <p style={{ fontSize: "11px", color: "var(--text-muted)", textAlign: "center", marginBottom: 0 }}>
          Demo only — any email and password works.
        </p>
      </form>
    </div>
  );
}