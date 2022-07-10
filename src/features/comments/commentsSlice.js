import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../util/async.utill";
// config
const name = "comments";

const initialState = {
  status: "",
  comments: [],
  total: 0,
  page: 0,
  page_total: 0,
  //  comments: reducerUtils.initial(), // 초기화
};

//*-------------------------------
const slice = createSlice({
  name,
  initialState,
  reducers: {
    //*------------------------------- [Pager]
    // 해당페이지선택
    setPage: (state, action) => {
      state.page = action.payload;
    },
    //*------------------------------- [getComments]
    getComments: (state) => {},
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.total = state.comments.length;
    },
    getCommentsError: (state, action) => {},
  },
});
//*------------------------------- [export]
export const commentsReducer = slice.reducer;
export const commentsAction = slice.actions;
export const COMMENTS = slice.name;
//*------------------------------- [const]
export const COMMENTS_EVENT = {
  GET_FETCH: "GET_FETCH",
};
/* saga */

/***********
export const getComments = createAsyncThunk(
  `comments/getComments`,
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);
  //----- thunk type
  // extraReducers: (builder) => {
  //   builder.addCase(getComments.pending, (state) => {});
  //   builder.addCase(getComments.fulfilled, (state, action) => {
  //     state.comments = action.payload;
  //   });
  // },
 */
