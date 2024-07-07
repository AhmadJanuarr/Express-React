import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:4949",
});

export default Api;
