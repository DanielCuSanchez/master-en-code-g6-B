import axios from "axios";
import { BASE_URL } from "./constants";

export const getProfile = () => {
  const token = localStorage.getItem("token");
  return axios
    .get(BASE_URL + "/user/me", { headers: { Authorization: `JWT ${token}` } })
    .then((resp) => {
      //console.log(resp.data)
      return resp.data;
    });
};
