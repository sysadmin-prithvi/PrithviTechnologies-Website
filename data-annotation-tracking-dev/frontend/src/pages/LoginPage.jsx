import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const API_URL = "http://localhost:8000/auth/token";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);

      const res = await axios.post(API_URL, params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      localStorage.setItem("token", res.data.access_token);
      onLogin && onLogin();
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <Layout title="Login">
        <div
      style={{
        width: "100%",
        maxWidth: 400,
        margin: "0 auto",
        marginTop: 0,
        textAlign: "left",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
          <label style={{ width: 100, marginRight: 8 }}>Username:</label>
          <input
            style={{ flex: 1, padding: 8, boxSizing: "border-box" }}
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
          <label style={{ width: 100, marginRight: 8 }}>Password:</label>
          <input
            style={{ flex: 1, padding: 8, boxSizing: "border-box" }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: 10 }}>Login</button>
      </form>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
    </div>
    </Layout>
    
  );
}