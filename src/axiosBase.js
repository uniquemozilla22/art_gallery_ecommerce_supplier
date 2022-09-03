import axios from "axios";

const base = "http://localhost:4000/suppliers";

const axiosBase = (token) => {
  if (token) {
    return axios.create({
      baseURL: base,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  }
  return axios.create({
    baseURL: base,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default axiosBase;
