import axios from "axios";

const BASE_URL = "http://localhost:8000";

// Helper to get token
function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// USERS
export const getUsers = (filters = {}) =>
  axios.get(`${BASE_URL}/users/`, {
    params: filters,
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const getUserById = (id) =>
  axios.get(`${BASE_URL}/users/${id}`, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const createUser = (data) =>
  axios.post(`${BASE_URL}/users/register`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const updateUser = (id, data) =>
  axios.put(`${BASE_URL}/users/${id}`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const deleteUser = (id) =>
  axios.delete(`${BASE_URL}/users/${id}`, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

// PROJECTS
export const getProjects = (filters = {}) =>
  axios.get(`${BASE_URL}/projects/`, {
    params: filters,
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const createProject = (data) =>
  axios.post(`${BASE_URL}/projects/create`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const updateProject = (id, data) =>
  axios.put(`${BASE_URL}/projects/${id}`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const deleteProject = (id) =>
  axios.delete(`${BASE_URL}/projects/${id}`, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

// DAILY STATUS
export const getDailyStatus = (filters = {}) =>
  axios.get(`${BASE_URL}/daily_status/`, {
    params: filters,
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const createDailyStatus = (data) =>
  axios.post(`${BASE_URL}/daily_status/create`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const updateDailyStatus = (id, data) =>
  axios.put(`${BASE_URL}/daily_status/${id}`, data, {
    headers: getAuthHeaders(),
  }).then(res => res.data);

export const deleteDailyStatus = (id) =>
  axios.delete(`${BASE_URL}/daily_status/${id}`, {
    headers: getAuthHeaders(),
  }).then(res => res.data);