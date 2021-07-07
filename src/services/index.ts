import axios from "axios";
export const mesaCheiaApi = axios.create({
  baseURL: "https://mesa-cheia-fake-api.herokuapp.com/",
});
