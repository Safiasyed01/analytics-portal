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
    <div style={{ maxWidth: "320px", margin: "80px auto", border: "1px solid #ccc", padding: "24px" }}>
      <h1>Enterprise Analytics Portal</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%" }} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}