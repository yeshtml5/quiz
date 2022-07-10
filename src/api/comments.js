import axios from "axios";
import { API } from "../const";

/*--------------------------------------*/
// getComments
export const API_getComments = () => {
  const res = fetch(API).then((res) => res.json());
  return res;
};
// addComments

// removeComments
