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
export const API_addComments = (data) => {
  console.log(data);
  return axios({
    method: "POST",
    url: API,
    data,
  }).then((res) => {
    return res.data;
  });
};
// removeComments
export const API_deleteComments = (id) => {
  return axios({
    method: "DELETE",
    url: `${API}/${id}`,
  }).then((res) => {
    return res.data;
  });
};
// removeComments
export const API_putComments = (data) => {
  return axios({
    method: "PUT",
    data,
    url: `${API}/${data.id}`,
  }).then((res) => {
    console.log(res);
    return res.data;
  });
};
