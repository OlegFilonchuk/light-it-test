import { takeLatest } from 'redux-saga/effects';
import { PRODUCTS_FETCH } from '../redux/reducers/productsReducer'
import { productsListSaga } from './productsSaga'
import { USER_REGISTER, USER_LOGIN } from "../redux/reducers/userReducer"
import { userLoginSaga,userRegisterSaga } from "./userSaga"
import { REVIEWS_FETCH, REVIEW_POST } from "../redux/reducers/reviewsReducer"
import { postReviewSaga, fetchReviewsSaga } from "./reviewsSaga"

function* rootSaga() {
  yield takeLatest(PRODUCTS_FETCH, productsListSaga)
  yield takeLatest(USER_LOGIN, userLoginSaga)
  yield takeLatest(USER_REGISTER, userRegisterSaga)
  yield takeLatest(REVIEWS_FETCH, fetchReviewsSaga)
  yield takeLatest(REVIEW_POST, postReviewSaga)
}

export default rootSaga;
