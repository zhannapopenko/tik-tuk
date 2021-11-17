import axios from "axios";

const baseURL = "https://tiktok33.p.rapidapi.com/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "c17160964emsh53c95fe98847290p1030d7jsne22e88c7eb61",
    "Content-Type": "application/json",
  },
});