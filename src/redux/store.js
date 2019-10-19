import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import { productsReducer } from './reducers/productsReducer'
import { userReducer } from './reducers/userReducer'
import { reducer as formReducer } from 'redux-form'
import { reviewReducer } from "./reducers/reviewReducer"
import rootSaga from '../sagas/rootSaga'

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
	applyMiddleware(createSagaMiddleware)
)

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	sagaMiddleware,
];

const store = createStore(
	rootReducer,
	//enhancer
	compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
