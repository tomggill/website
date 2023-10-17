import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8080'

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "skip-browser-warning": "true",
    "Content-Type": "application/json"
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "skip-browser-warning": "true",
    "Content-Type": "application/json"
  },
});