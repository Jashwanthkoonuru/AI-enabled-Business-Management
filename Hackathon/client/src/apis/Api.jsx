import axiosInstance from "./axiosInstance"; 

export const loginApi = (data) =>
  axiosInstance.post("/auth/login", data);

export const registerApi = (data) =>
  axiosInstance.post("/auth/register", data);

export const createUser = (data) =>
  axiosInstance.post("/contact", data);

export const getUsers = () =>
  axiosInstance.get("/users");
