import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../const";

// config
const name = "comments";

const initialState = {
  status: "",
  list: [
    {
      id: 1,
      profile_url: "https://picsum.photos/id/1/50/50",
      author: "abc_1",
      content: "UI 테스트는 어떻게 진행하나요",
      createdAt: "2022-03-01",
    },
    {
      id: 2,
      profile_url: "https://picsum.photos/id/2/50/50",
      author: "abc_2",
      content: "막히면 대답은 빨리 해주나요",
      createdAt: "2022-03-02",
    },
  ],
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
      state.list = action.payload;
    });
  },
});
//*------------------------------- [export]
export const commentsReducer = slice.reducer;
export const commentsAction = slice.actions;
export const COMMENTS = slice.name;

/* saga */
