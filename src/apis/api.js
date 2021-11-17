import axios from "../lib/axios-common";

export function getTrendingFeed() {
  return axios.get("/trending/feed");
}

export function getUserInfo(username) {
  return axios.get(`/user/info/${username}`);
}

export function getUserFeed(username) {
  return axios.get(`/user/feed/${username}`);
}
