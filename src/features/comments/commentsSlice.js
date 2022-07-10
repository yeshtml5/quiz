import { createSlice } from "@reduxjs/toolkit";
import { PAGE_LIST_LIMIT } from "../../const";
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

    //*------------------------------- [getComments]
    getAllComments: (state) => {},
    getAllCommentsSuccess: (state, action) => {
      state.total = action.payload.length;
      state.page_total = Math.ceil(action.payload.length / PAGE_LIST_LIMIT);
    },
    getComments: (state, action) => {
      state.page = action.payload || 0;
    },
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload;
    },
    getCommentsError: (state, action) => {},
  },
});
//*------------------------------- [export]
export const commentsReducer = slice.reducer;
export const commentsAction = slice.actions;
export const COMMENTS = slice.name;
//*------------------------------- [const]

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
