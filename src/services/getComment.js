import axios from "axios";
import { providedAPI } from "../CONSTANTS";

export const getComment = () => {
  return axios.get(providedAPI).then(({ data, status, statusText }) => {
    if (status === 200) return [null, data];
    return [statusText, null];
  });
};
