import { put } from 'redux-saga/effects'
import axios from 'axios'
import { USER_RESPONSE, USER_ERROR, USER_REQUEST } from "../redux/reducers/userReducer"


export function* userLoginSaga(form) {
  yield put({ type: USER_REQUEST });
  try {
    console.log(form)
    const {data: {token}} = yield axios.post('http://smktesting.herokuapp.com/api/login/', form.payload)
    yield put({
      type: USER_RESPONSE,
      payload: {
        token,
        user: form.username
      }
    });
  }
  catch (e) {
    yield put({
      type: USER_ERROR,
      payload: {
        error: e
      }
    });
  }
}

export function* userRegisterSaga(form) {
  yield put({ type: USER_REQUEST });
  try {
    const {data: {token}} = yield axios.post('http://smktesting.herokuapp.com/api/register/', form.payload)
    yield put({
      type: USER_RESPONSE,
      payload: {
        token,
        user: form.username
      }
    });
  }
  catch (e) {
    yield put({
      type: USER_ERROR,
      payload: {
        error: e
      }
    });
  }
}
