import { history } from '../../utils/history'

export const USER_RESPONSE = 'USER_RESPONSE';
export const USER_LOGIN = 'USER_LOGIN'
export const USER_REGISTER = 'USER_REGISTER'
export const USER_ERROR = 'USER_ERROR'
export const USER_REQUEST = 'USER_REQUEST'

export const loginUserAction = (form) => ({
  type: USER_LOGIN,
  payload: form
})

export const registerUserAction = (form) => ({
  type: USER_REGISTER,
  payload: form
})

const initialState = {
  username: '',
  token: '',
  error: null,
  isFetching: false
}

export const userReducer = (state=initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case USER_RESPONSE:
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        isFetching: false,
        error: null
      }
    case USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: payload.error
      }
    }
    default:
      return state
  }
}
