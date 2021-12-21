import axios from "axios";

const route = "auth";

export const login = (email: string, password: string) =>
  axios.post(`/${route}/login`, {
    email,
    password,
  });
export const register = (email: String, username: String, password: String) =>
  axios.post(`/${route}/register`, {
    email,
    username,
    password,
  });
export const logout = (token: string) =>
  axios.post(`/${route}/logout`, {
    refreshtoken: token,
  });
export const validate = (token: string) =>
  axios.get(`/${route}/validate`, {
    headers: {
      Authorization: `Beaer ${token}`,
    },
  });
