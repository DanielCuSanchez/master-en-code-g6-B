import axios from "axios";
import { BASE_URL } from "./constants";

export const getItems = () => {
  return axios
    .get(BASE_URL + "/item")
    .then((resp) => {
      return resp.data;
    });
};

export const getOneItem = (id) => {
  return axios
    .get(`${BASE_URL}/item/${id}`)
    .then((resp) => {
      return resp.data;
    });
};