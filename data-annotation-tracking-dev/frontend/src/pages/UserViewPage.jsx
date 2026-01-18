import React, { useState } from "react";
import axios from "axios";
import UserFormModal from "./UserFormModal";
import Layout from "../components/Layout";
import TableContainer from "../components/TableContainer";

const API_URL = "http://localhost:8000/users/";

export default function UsersViewPage() {
  const [filters, setFilters] = useState({ username: "", role: "", created_at: "" });
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFilters({ username: "", role: "", created_at: "" });
    setUsers([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {};
    if (filters.username) params.username = filters.username;
    if (filters.role) params.role = filters.role;
    if (filters.created_at) params.created_at = filters.created_at;
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL, {
      params,
      headers: { Authorization: `Bearer ${token}` }
    });
    setUsers(res.data);
  };

  const handleAdd = () => {
    setEditUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleModalSubmit = async (form) => {
    const token = localStorage.getItem("token");
    if (editUser) {
      // Update user
      await axios.put(`${API_URL}${editUser.id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      // Add user
      await axios.post(`${API_URL}register`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setShowModal(false);
    handleSubmit(new Event("submit"));
  };

  return (
    <Layout title="User Management">
        <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
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
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
        <div>
          <label>Username:</label>
          <input name="username" value={filters.username} onChange={handleFilterChange} style={{ marginLeft: 4 }} />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={filters.role} onChange={handleFilterChange} style={{ marginLeft: 4 }}>
            <option value="">All</option>
            <option value="admin">Admin</option>
            <option value="annotator">Annotator</option>
            <option value="checker">Checker</option>
          </select>
        </div>
        <div>
          <label>Created On:</label>
          <input name="created_at" type="date" value={filters.created_at} onChange={handleFilterChange} style={{ marginLeft: 4 }} />
        </div>
        <div>
          <button type="submit" style={{ marginRight: 8 }}>Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
      <TableContainer>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Username</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Email</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Role</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Active</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Created At</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: 16 }}>No users found.</td>
              </tr>
            )}
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{user.username}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{user.email}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{user.role}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{user.is_active ? "Yes" : "No"}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{user.created_at ? user.created_at.split("T")[0] : ""}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  <button onClick={() => handleEdit(user)} style={{ marginRight: 8 }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
      <UserFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        initialData={editUser}
      />
    </div>
    </Layout>
    
  );
}