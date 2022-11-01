import axios from "axios";

const apiKey = `73b11b8f7b994db7a1a2c3ba059b7a4f`;

const api = axios.create({
  baseURL: `https://newsapi.org/v2/`,
});

export const getTopNews = () => {
  const url = `top-headlines?country=br&apiKey=${apiKey}`;

  return api.get(url);
};
