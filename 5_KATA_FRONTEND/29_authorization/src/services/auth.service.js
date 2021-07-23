import axios from "axios";
import { BASE_URL } from "./constants";
export const login = ({ email, password }) => {
  return axios
    .post(BASE_URL + "/login", { email, password })
    .then((resp) => {
      //console.log(resp)
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
      }
      return resp.data;
    })
    .catch((e) => console.error(e));
};

export const signUp = ({
  first_name,
  last_name,
  birth_date,
  gender,
  email,
  password,
  role,
}) => {
  return axios
    .post(BASE_URL + "/signup", {
      first_name,
      last_name,
      birth_date,
      gender,
      email,
      password,
      role,
    })
    .then((resp) => {
      return resp.data;
    })
    .catch((e) => console.error(e));
};
