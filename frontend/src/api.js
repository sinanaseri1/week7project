import axios from 'axios';

// When deployed on Render, your backend URL will be something like:
// https://my-backend.onrender.com
// For local dev, use "http://localhost:5000"
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
  // or after deployment:
  // baseURL: 'https://my-backend.onrender.com/api'
});

// Attach JWT token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
