import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import TableContainer from "../components/TableContainer";
import ProjectFormModal from "./ProjectFormModal";

const API_URL = "http://localhost:8000/projects/";

export default function ProjectViewPage() {
  const [filters, setFilters] = useState({ name: "", is_active: "" });
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFilters({ name: "", is_active: "" });
    setProjects([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {};
    if (filters.name) params.name = filters.name;
    if (filters.is_active) params.is_active = filters.is_active;
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL, {
      params,
      headers: { Authorization: `Bearer ${token}` }
    });
    setProjects(res.data);
  };

  const handleAdd = () => {
    setEditProject(null);
    setShowModal(true);
  };

  const handleEdit = (project) => {
    setEditProject(project);
    setShowModal(true);
  };

  const handleDelete = async (project) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}${project.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    handleSubmit(new Event("submit"));
  };

  const handleModalSubmit = async (form) => {
    const token = localStorage.getItem("token");
    if (editProject) {
      await axios.put(`${API_URL}${editProject.id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      await axios.post(`${API_URL}create`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setShowModal(false);
    handleSubmit(new Event("submit"));
  };

  return (
    <Layout title="Project Management">
      <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <button
            onClick={handleAdd}
            style={{
              background: "#1976d2",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            + Add
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
          <div>
            <label>Name:</label>
            <input name="name" value={filters.name} onChange={handleFilterChange} style={{ marginLeft: 4 }} />
          </div>
          <div>
            <label>Active:</label>
            <select name="is_active" value={filters.is_active} onChange={handleFilterChange} style={{ marginLeft: 4 }}>
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <div style={{ width: "100%", marginTop: 8 }}>
            <button type="submit" style={{ marginRight: 8 }}>Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
          </div>
        </form>
        <TableContainer>
          <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f0f0f0" }}>
                <th style={{ minWidth: 120, border: "1px solid #ccc", padding: 8 }}>ID</th>
                <th style={{ minWidth: 120, border: "1px solid #ccc", padding: 8 }}>Name</th>
                <th style={{ minWidth: 200, border: "1px solid #ccc", padding: 8 }}>Description</th>
                <th style={{ minWidth: 120, border: "1px solid #ccc", padding: 8 }}>Start Date</th>
                <th style={{ minWidth: 120, border: "1px solid #ccc", padding: 8 }}>End Date</th>
                <th style={{ minWidth: 80, border: "1px solid #ccc", padding: 8 }}>Active</th>
                <th style={{ minWidth: 120, border: "1px solid #ccc", padding: 8 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: 16 }}>No projects found.</td>
                </tr>
              )}
              {projects.map((project) => (
                <tr key={project.id}>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.id}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.name}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.description}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.start_date}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.end_date}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{project.is_active ? "Yes" : "No"}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>
                    <button onClick={() => handleEdit(project)} style={{ marginRight: 8 }}>Edit</button>
                    <button onClick={() => handleDelete(project)} style={{ color: "red" }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
        <ProjectFormModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
          initialData={editProject}
        />
      </div>
    </Layout>
  );
}