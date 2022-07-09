import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../const";
import { reducerUtils } from "../../util/async.utill";
// config
const name = "comments";

const initialState = {
  status: "",
  comments: [],
  // comments: reducerUtils.initial(), // 초기화
};

export const getComments = createAsyncThunk(
  `comments/getComments`,
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

//*-------------------------------
const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});
//*------------------------------- [export]
export const commentsReducer = slice.reducer;
export const commentsAction = slice.actions;
export const COMMENTS = slice.name;

/* saga */
