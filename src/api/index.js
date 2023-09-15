import axios from "axios";
import React from "react";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${this.getToken()}`,
  },
});

export const ContextApi = React.createContext(api);
