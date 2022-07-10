import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../util/async.utill";
// config
const name = "comments";

const initialState = {
  status: "",
  comments: [],
  total: 0,
  //  comments: reducerUtils.initial(), // 초기화
};

//*-------------------------------
const slice = createSlice({
  name,
  initialState,
  reducers: {
    getComments: (state) => {
      // state.comments.initial;
    },
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
// export const { getComments, getCommentsSuccess } = slice.actions;

export const COMMENTS = slice.name;

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
