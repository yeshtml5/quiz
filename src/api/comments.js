import axios from "axios";
import { API, PAGE_LIST_LIMIT } from "../const";

/*--------------------------------------*/
// getComments
export const API_getComments = (async) => {
  return axios({
    method: "GET",
    url: API,
    params: {
      _limit: PAGE_LIST_LIMIT,
      _order: "desc",
      _sort: "id",
    },
  }).then((res) => {
    return res.data;
  });
};
// addComments

// removeComments
