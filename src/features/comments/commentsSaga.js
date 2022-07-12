/**
 * @name 코멘트Saga
 **/
import {
  all,
  fork,
  put,
  takeLatest,
  call,
  takeLeading,
  delay,
} from "redux-saga/effects";
import {
  API_addComments,
  API_deleteComments,
  API_getAllComments,
  API_getComments,
  API_putComments,
} from "../../api/comments";
import { commentsAction } from "./commentsSlice";
// mport { getComments, getCommentsSuccess } from "./commentsSlice";

// 가져오기(GET)
function* getComments(data) {
  try {
    const all = yield API_getAllComments();
    yield put(commentsAction.getAllCommentsSuccess(all));
    yield delay(0);
    const res = yield API_getComments(data?.payload + 1);
    yield put(commentsAction.getCommentsSuccess(res));
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
// 입력하기(ADD)
function* addComments(data) {
  try {
    // const res = yield call(() => API_addComments(data?.payload));
    const comments = yield call(() => API_addComments(data?.payload));
    yield put(commentsAction.addCommentsSuccess(comments));
    //*---- 갱신
    yield getComments();
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
// 삭제하기(DELETE)
function* deleteComments(data) {
  try {
    const res = yield API_deleteComments(data?.payload);
    yield put(commentsAction.deleteCommentsSuccess(res));
    yield getComments();
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
// 수정하기(PUT)
function* putComments(data) {
  try {
    const res = yield API_putComments(data?.payload);
    yield put(commentsAction.putCommentsSuccess(res));
    //*---- 코드추가
    yield getComments();
  } catch (error) {
    yield put(commentsAction.commentsError(error));
  }
}
function* watchGetComments() {
  yield takeLatest(commentsAction.getComments, getComments);
  yield takeLeading(commentsAction.deleteComments, deleteComments);
  yield takeLeading(commentsAction.addComments, addComments);
  yield takeLeading(commentsAction.putComments, putComments);
}
// export const
// watchGetComments 바로 export 해서 rootSaga에 넣어도 되는데 saga가 여러개 인 경우 saga로 한번더 감싸준다.
export function* commentsSaga() {
  yield all([fork(watchGetComments)]);
}
export function* comments() {}
