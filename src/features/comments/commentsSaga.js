/**
 * @name 코멘트Saga
 **/
import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { useTheme } from "styled-components";
import {
  API_deleteComments,
  API_getAllComments,
  API_getComments,
} from "../../api/comments";
import { API } from "../../const";
import { commentsAction } from "./commentsSlice";
// mport { getComments, getCommentsSuccess } from "./commentsSlice";

// 모두가져오기(GET)
function* getAllComments() {
  try {
    const res = yield call(() => API_getAllComments());
    yield put(commentsAction.getAllCommentsSuccess(res));
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
// 가져오기(GET)
function* getComments(data) {
  try {
    const res = yield call(() => API_getComments(data?.payload + 1));
    yield put(commentsAction.getCommentsSuccess(res));
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
// 삭제하기(DELETE)
function* deleteComments(data) {
  try {
    const res = yield call(() => API_deleteComments(data?.payload));
    yield put(commentsAction.deleteCommentsSuccess(res));
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}

function* watchGetComments() {
  yield takeEvery(commentsAction.getAllComments, getAllComments);
  yield takeEvery(commentsAction.getComments, getComments);
  yield takeEvery(commentsAction.deleteComments, deleteComments);
}
// export const
// watchGetProducts를 바로 export 해서 rootSaga에 넣어도 되는데 saga가 여러개 인 경우 saga로 한번더 감싸준다.
export function* commentsSaga() {
  yield all([fork(watchGetComments)]);
}
