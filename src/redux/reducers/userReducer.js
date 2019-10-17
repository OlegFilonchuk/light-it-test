import { history } from '../../utils/history'

const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR'; 

export const loginUserAction = (userForm) => async (dispatch) => {
  const rawRes = await fetch('http://smktesting.herokuapp.com/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userForm)
    })
    const {success, token, message} = await rawRes.json()
    if (success) {
      localStorage.setItem("a_token", token);
      localStorage.setItem("usename", userForm.username)
      console.log('logined')
      history.push('/');
      dispatch({
        type: USER_SUCCESS,
        payload: token
      })
    } else {
      console.log('error')
      dispatch({
        type: USER_ERROR,
        payload: message
      })
    }
}

export const registerUserAction = (userForm) => async (dispatch) => {
  const rawRes = await fetch('http://smktesting.herokuapp.com/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userForm)
    })
    const {success, token, message} = await rawRes.json()
    if (success) {
      localStorage.setItem("a_token", token);
      localStorage.setItem("usename", userForm.username)
      history.push('/');
      console.log('registered')
      dispatch({
        type: USER_SUCCESS,
        payload: token
      })
    } else {
      console.log('error')
      dispatch({
        type: USER_ERROR,
        payload: message
      })
    }
}

const initialState = {
  token: null,
  error: null
}

export const userReducer = (state=initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case USER_SUCCESS:
			return{
        ...state,
        token: payload,
        error: null
      }
    case USER_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
		default:
			return state
	}
}