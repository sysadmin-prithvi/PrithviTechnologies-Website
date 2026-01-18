import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/daily_status/create";

export default function DailyStatusPage({ onLogout }) {
  const [form, setForm] = useState({
    username: "",
    date: "",
    project_id: "",
    task: "",
    image_count: 0,
    note: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const token = localStorage.getItem("token");
      await axios.post(API_URL, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Daily status submitted!");
      setForm({
        username: "",
        date: "",
        project_id: "",
        task: "",
        image_count: 0,
        note: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Failed to submit daily status"
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onLogout) onLogout();
    window.location.reload();
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "#fff",
          color: "#1976d2",
          border: "none",
          padding: "8px 16px",
          borderRadius: 4,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
<h2 style={{ marginTop: 24, marginBottom: 24, textAlign: "center" }}>Submit Daily Status</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Username:</label>
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              style={{ width: 180 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Date:</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
              style={{ width: 180 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Project ID:</label>
            <input
              name="project_id"
              placeholder="Project ID"
              value={form.project_id}
              onChange={handleChange}
              required
              style={{ width: 180 }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Task:</label>
            <input
              name="task"
              placeholder="Task"
              value={form.task}
              onChange={handleChange}
              required
              style={{ width: 180 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Image Count:</label>
            <input
              name="image_count"
              type="number"
              placeholder="Image Count"
              value={form.image_count}
              onChange={handleChange}
              required
              style={{ width: 180 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <label style={{ width: 100, marginRight: 8 }}>Note:</label>
            <textarea
              name="note"
              placeholder="Note"
              value={form.note}
              onChange={handleChange}
              style={{ width: 180, height: 36, resize: "vertical" }}
            />
          </div>
        </div>
        <button type="submit" style={{ marginTop: 8 }}>Submit</button>
      </form>
      {message && <div style={{ color: "green", marginTop: 12 }}>{message}</div>}
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
    </div>
  );
}