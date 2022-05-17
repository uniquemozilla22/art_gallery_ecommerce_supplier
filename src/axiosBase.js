import axios from "axios";
import { store } from "./store/store";

const base = "http://localhost:4000/suppliers";

const axiosBase = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
    Authorization: store.user?.token ? "Bearer " + store.user.token : "",
  },
});

export default axiosBase;
