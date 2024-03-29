import axios from "../utils/request";

const base = {
  baseUrl: "http://localhost:5566",
  cityUrl: "/api/aj/getcitycode",
  homehot1: "/api/home/hot1",
  homehot2: "/api/home/hot2",
  search: "/api/search",
  details: "/api/details",
  login: "/api/login",
  comment: "/api/comment",
  commentOrder: "/api/order/comment",
  submitComment: "/api/order/submit/comment",
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
  details(params) {
    return axios.get(base.baseUrl + base.details, { params });
  },
  login(params) {
    return axios.post(base.baseUrl + base.login, params);
  },
  comment(params) {
    return axios.get(base.baseUrl + base.comment, { params });
  },
  commentOrder(params) {
    return axios.get(base.baseUrl + base.commentOrder, { params });
  },
  submitComment(params) {
    return axios.post(base.baseUrl + base.submitComment, params);
  },
};

export default api;
