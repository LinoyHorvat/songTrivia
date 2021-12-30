import axios from "axios";

const shoesApi = axios.create({
  baseURL: "https://61c311419cfb8f0017a3e93f.mockapi.io/",
});

export default shoesApi;
