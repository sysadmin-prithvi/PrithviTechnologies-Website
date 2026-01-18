import React, { useState, useEffect } from "react";

export default function ProjectFormModal({ open, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    is_active: true,
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        id: "",
        name: "",
        description: "",
        start_date: "",
        end_date: "",
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
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 350 }}>
        <h3>{initialData ? "Edit Project" : "Add Project"}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Name:</label>
            <input name="name" value={form.name} onChange={handleChange} required style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Description:</label>
            <input name="description" value={form.description} onChange={handleChange} style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Start Date:</label>
            <input name="start_date" type="date" value={form.start_date} onChange={handleChange} style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>End Date:</label>
            <input name="end_date" type="date" value={form.end_date} onChange={handleChange} style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Active:</label>
            <input name="is_active" type="checkbox" checked={form.is_active} onChange={handleChange} />
          </div>
          <div style={{ textAlign: "right", marginTop: 16 }}>
            <button type="button" onClick={onClose} style={{ marginRight: 8 }}>Cancel</button>
            <button type="submit">{initialData ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}