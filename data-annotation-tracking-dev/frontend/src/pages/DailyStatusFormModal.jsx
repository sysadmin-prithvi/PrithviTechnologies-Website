import React, { useState, useEffect } from "react";
import axios from "axios";

const PROJECTS_URL = "http://localhost:8000/projects/";

export default function DailyStatusFormModal({ open, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({
    username: "",
    date: "",
    project_id: "",
    task: "",
    image_count: 0,
    note: "",
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        username: "",
        date: "",
        project_id: "",
        task: "",
        image_count: 0,
        note: "",
      });
    }
  }, [initialData, open]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(PROJECTS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(res.data);
      } catch {
        setProjects([]);
      }
    };
    if (open) fetchProjects();
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "image_count" ? Number(value) : value,
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
        <h3>{initialData ? "Edit Daily Status" : "Add Daily Status"}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Username:</label>
            <input name="username" value={form.username} onChange={handleChange} required style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Date:</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} required style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Project ID:</label>
            <select name="project_id" value={form.project_id} onChange={handleChange} required style={{ flex: 1 }}>
              <option value="">Select Project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.id} - {project.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Task:</label>
            <select name="task" value={form.task} onChange={handleChange} required style={{ flex: 1 }}>
              <option value="">Select Task</option>
              <option value="Annotation">Annotation</option>
              <option value="Quality Check">Quality Check</option>
            </select>
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Image Count:</label>
            <input name="image_count" type="number" value={form.image_count} onChange={handleChange} required style={{ flex: 1 }} />
          </div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 110 }}>Note:</label>
            <textarea name="note" value={form.note} onChange={handleChange} style={{ flex: 1, height: 40 }} />
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