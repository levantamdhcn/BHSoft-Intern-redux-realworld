import axios from "axios";

export const getPost = () =>
  axios.get("https://api.realworld.io/api/articles?limit=3&offset=0");
