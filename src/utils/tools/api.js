import axios from "axios";

const axiosInterface = () => {
  return axios.create({
    baseURL: "https://reqres.in/api",
  });
};

export default axiosInterface();
