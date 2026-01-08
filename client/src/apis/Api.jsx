import axios from "axios";

// Use environment variable for the API URL
const API_URL = import.meta.env.VITE_API_URL;

// Create Axios instance
export const api = axios.create({
  baseURL: API_URL,
});

// Set Authorization header
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Clear auth token
export const clearAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
};

// Get user
export const getUser = () => {
  return api.get("api/user/"); // Axios automatically prepends API_URL
};

// Dummy API call (works with db.json)
export const createUser = (data) => {
  return api.post("contactMessages", data);
};

// Update user
export const updateUser = (data) => {
  return api.put("api/user/", data);
};
