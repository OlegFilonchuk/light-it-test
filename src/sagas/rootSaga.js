import { takeLatest } from 'redux-saga/effects';
import { PRODUCTS_FETCH } from '../redux/reducers/productsReducer'
import { productsListSaga } from './productsSaga'
import { userLoginSaga } from "./userSaga"
import { userRegisterSaga } from "./userSaga"
import { USER_REGISTER, USER_LOGIN } from "../redux/reducers/userReducer"

function* rootSaga() {
  yield takeLatest(PRODUCTS_FETCH, productsListSaga);
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_REGISTER, userRegisterSaga);
}

export default rootSaga;
