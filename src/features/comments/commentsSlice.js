import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState  = {
  comments : reducerUtils.initial()
};

const name = 'comments';

const slice = createSlice({
  name ,
  initialState ,
  reducers : {

	}
});

export const commentsReducer = slice.reducer;
export const commentsAction = slice.actions;
export const COMMENTS = slice.name;