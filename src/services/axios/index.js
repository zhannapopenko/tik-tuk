import axios from "axios";

const baseURL = process.env.REACT_APP_RAPIDAPI_URL;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "Content-Type": "application/json",
  },
});
