/**
 * @name 코멘트Saga
 **/
import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { useTheme } from "styled-components";
import { API_getComments } from "../../api/comments";
import { API } from "../../const";
import { commentsAction } from "./commentsSlice";
// mport { getComments, getCommentsSuccess } from "./commentsSlice";

// 가져오기(GET)
function* getComments() {
  try {
    // API요청
    const res = yield call(() => API_getComments());
    yield put(commentsAction.getCommentsSuccess(res));
  } catch (error) {
    yield put(commentsAction.getCommentsError(error));
  }
}
// 삭제하기(DELETE)
function* deleteComments() {
  try {
    // API요청
    const res = yield call(() => fetch(API));
    const formatResponse = yield res.json();
    yield put(commentsAction.getCommentsSuccess(formatResponse));
  } catch (error) {
    yield put(commentsAction.getCommentsError(error));
  }
}

function* watchGetComments() {
  yield takeEvery(commentsAction.getComments, getComments);
}
// export const
// watchGetProducts를 바로 export 해서 rootSaga에 넣어도 되는데 saga가 여러개 인 경우 saga로 한번더 감싸준다.
export function* commentsSaga() {
  yield all([fork(watchGetComments)]);
}
