import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/productsReducer'
import { userReducer } from './reducers/userReducer'
import { reducer as formReducer } from 'redux-form'
import {reviewReducer} from "./reducers/reviewReducer"

const rootReducer = combineReducers({
	productsState: productsReducer,
	userState: userReducer,
	reviewState: reviewReducer,
	form: formReducer
})

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose

const enhancer = composeEnhancers(
	applyMiddleware(thunk)
)

export default createStore(
	rootReducer,
	enhancer
)
