import React, { useState, useEffect } from "react";

export default function UserFormModal({ open, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
    is_active: true,
  });

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData, password: "" });
    } else {
      setForm({
        username: "",
        password: "",
        email: "",
        role: "",
        is_active: true,
      });
    }
  }, [initialData, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
    }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 320 }}>
        <h3>{initialData ? "Edit User" : "Add User"}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 90 }}>Username:</label>
            <input name="username" value={form.username} onChange={handleChange} required style={{ flex: 1 }} disabled={!!initialData}/>
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 90 }}>Password:</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required={!initialData} style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 90 }}>Email:</label>
            <input name="email" value={form.email} onChange={handleChange} style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 90 }}>Role:</label>
            <select name="role" value={form.role} onChange={handleChange} required style={{ flex: 1 }}>
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="annotator">Annotator</option>
              <option value="checker">Checker</option>
            </select>
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 90 }}>Active:</label>
            <input name="is_active" type="checkbox" checked={form.is_active} onChange={handleChange} />
          </div>
          <div style={{ textAlign: "right" }}>
            <button type="button" onClick={onClose} style={{ marginRight: 8 }}>Cancel</button>
            <button type="submit">{initialData ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}