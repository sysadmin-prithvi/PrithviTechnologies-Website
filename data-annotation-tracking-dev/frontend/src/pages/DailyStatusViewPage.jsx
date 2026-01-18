import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyStatusFormModal from "./DailyStatusFormModal";
import Layout from "../components/Layout";
import TableContainer from "../components/TableContainer";

const API_URL = "http://localhost:8000/daily_status/";
const PROJECTS_URL = "http://localhost:8000/projects/";

export default function DailyStatusViewPage() {
  const [filters, setFilters] = useState({ username: "", date: "", task: "", project_id: "" });
  const [statuses, setStatuses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editStatus, setEditStatus] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(PROJECTS_URL, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(res.data);
      } catch {
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFilters({ username: "", date: "", task: "", project_id: "" });
    setStatuses([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {};
    if (filters.username) params.username = filters.username;
    if (filters.date) params.date = filters.date;
    if (filters.task) params.task = filters.task;
    if (filters.project_id) params.project_id = filters.project_id;
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL, {
      params,
      headers: { Authorization: `Bearer ${token}` }
    });
    setStatuses(res.data);
  };

  const handleAdd = () => {
    setEditStatus(null);
    setShowModal(true);
  };

  const handleEdit = (status) => {
    setEditStatus(status);
    setShowModal(true);
  };

  const handleModalSubmit = async (form) => {
    const token = localStorage.getItem("token");
    if (editStatus) {
      // Update daily status (implement endpoint if needed)
      // await axios.put(`${API_URL}${editStatus.id}`, form, { headers: { Authorization: `Bearer ${token}` } });
    } else {
      // Add daily status
      await axios.post(`${API_URL}create`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setShowModal(false);
    handleSubmit(new Event("submit"));
  };

  return (
    <Layout title="Daily Status Management">
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
            <label>Username:</label>
            <input name="username" value={filters.username} onChange={handleFilterChange} style={{ marginLeft: 4 }} />
          </div>
          <div>
            <label>Date:</label>
            <input name="date" type="date" value={filters.date} onChange={handleFilterChange} style={{ marginLeft: 4 }} />
          </div>
          <div>
            <label>Task:</label>
            <select name="task" value={filters.task} onChange={handleFilterChange} style={{ marginLeft: 4 }}>
              <option value="">All</option>
              <option value="Annotation">Annotation</option>
              <option value="Quality Check">Quality Check</option>
            </select>
          </div>
          <div>
            <label>Project ID:</label>
            <select name="project_id" value={filters.project_id} onChange={handleFilterChange} style={{ marginLeft: 4 }}>
              <option value="">All</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.id} - {project.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: "100%", marginTop: 8 }}>
            <button type="submit" style={{ marginRight: 8 }}>Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
          </div>
        </form>
        <TableContainer>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f0f0f0" }}>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Username</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Date</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Project ID</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Task</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Image Count</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Note</th>
                <th style={{ border: "1px solid #ccc", padding: 8 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {statuses.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", padding: 16 }}>No records found.</td>
                </tr>
              )}
              {statuses.map((status) => (
                <tr key={status.id}>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.username}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.date}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.project_id}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.task}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.image_count}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>{status.note}</td>
                  <td style={{ border: "1px solid #ccc", padding: 8 }}>
                    {/* <button onClick={() => handleEdit(status)} style={{ marginRight: 8 }}>Edit</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
        <DailyStatusFormModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
          initialData={editStatus}
        />
      </div>
    </Layout>
  );
}