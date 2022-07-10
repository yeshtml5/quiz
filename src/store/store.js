/**
 * @todo
 */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import logger from "redux-logger";
import { commentsReducer, COMMENTS } from "../features/comments/commentsSlice";
import { commentsSaga } from "../features/comments/commentsSaga";

export const rootReducer = combineReducers({
  [COMMENTS]: commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([call(commentsSaga)]);
}

export default function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware, logger],
  });
  sagaMiddleware.run(rootSaga);

  return store;
}
/****************
[문제]
Error: Actions must be plain objects. Use custom middleware for async actions.

middleware: [...getDefaultMiddleware(), (sagaMiddleware, logger)],
 */
