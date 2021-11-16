import axios from '../lib/axios-common';

export function getTrendingFeed() {
    return axios.get("/trending/feed");
};