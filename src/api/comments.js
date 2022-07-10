import axios from "axios";
import { useSelector } from "react-redux";
import { API, PAGE_LIST_LIMIT } from "../const";

/*--------------------------------------*/
// 전체카운터갯수구하기
export const API_getAllComments = () => {
  return axios({
    method: "GET",
    url: API,
  }).then((res) => {
    return res.data;
  });
};

// getComments
export const API_getComments = (page) => {
  return axios({
    method: "GET",
    url: API,
    params: {
      _page: page || 1,
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
// getComments
export const API_deleteComments = (id) => {
  return axios({
    method: "DELETE",
    url: `${API}/${id}`,
  }).then((res) => {
    return res.data;
  });
};
