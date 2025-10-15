import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const fetchIssues = () => API.get("/issues");
export const createIssue = (data, token) =>
  API.post("/issues", data, { headers: { Authorization: `Bearer ${token}` } });
export const updateIssue = (id, data, token) =>
  API.patch(`/issues/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
