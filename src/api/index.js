import axios from "../utils/request";

const base = {
  baseUrl: "http://localhost:5566",
  cityUrl: "/api/aj/getcitycode",
  homehot1: "/api/home/hot1",
  homehot2: "/api/home/hot2",
  search: "/api/search",
};

const api = {
  getHomeHot1(params) {
    return axios.get(base.baseUrl + base.homehot1, { params });
  },
  getHomeHot2(params) {
    return axios.get(base.baseUrl + base.homehot2, { params });
  },
  getCityList() {
    return axios.get(base.cityUrl);
  },
  search(params) {
    return axios.get(base.baseUrl + base.search, { params });
  },
};

export default api;
