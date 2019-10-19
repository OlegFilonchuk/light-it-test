import { history } from '../utils/history'
import { put } from 'redux-saga/effects'
import { USER_RESPONSE, USER_ERROR, USER_REQUEST } from "../redux/reducers/userReducer"
import { loginUser, registerUser} from "../api/restApiController"

export function* userLoginSaga(form) {
  yield put({ type: USER_REQUEST });
  try {
    const {data: {token}} = yield loginUser(form.payload)
    localStorage.setItem('a_token', token)
    localStorage.setItem('user', form.payload.username)
    history.push('/')

    yield put({
      type: USER_RESPONSE,
      payload: {
        token,
        user: form.payload.username
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
    const {data: {token}} = yield registerUser(form.payload)
    localStorage.setItem('a_token', token)
    localStorage.setItem('user', form.payload.username)
    history.push('/')

    yield put({
      type: USER_RESPONSE,
      payload: {
        token,
        user: form.payload.username
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
