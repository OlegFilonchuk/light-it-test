import { history } from '../utils/history'
import { put } from 'redux-saga/effects'
import { USER_RESPONSE, USER_ERROR, USER_REQUEST } from "../redux/reducers/userReducer"
import { loginUser, registerUser} from "../api/restApiController"
import {toast} from "react-toastify"

export function* userLoginSaga(form) {
  yield put({ type: USER_REQUEST });
  try {
    const {data: {token, success, message}} = yield loginUser(form.payload)

    if (success) {
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
    } else {

      toast.error(message)
      yield put({
        type: USER_ERROR,
        payload: {
          error: message
        }
      })
    }
  }
  catch (e) {
    yield put({
      type: USER_ERROR,
      payload: {
        error: e.response.message
      }
    })

  }
}

export function* userRegisterSaga(form) {
  yield put({ type: USER_REQUEST });
  try {
    const {data: {token, success, message}} = yield registerUser(form.payload)
    if (success) {
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
    } else {
      toast.error('registration error')
      yield put({
        type: USER_ERROR,
        payload: {
          error: message
        }
      });
    }
  }
  catch (e) {
    yield put({
      type: USER_ERROR,
      payload: {
        error: e.response.message
      }
    });
  }
}
