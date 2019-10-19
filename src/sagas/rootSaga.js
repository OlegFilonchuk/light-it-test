import { takeLatest } from 'redux-saga/effects';
import { PRODUCTS_FETCH } from '../redux/reducers/productsReducer'
import { productsListSaga } from './productsSaga'

function* rootSaga() {
  yield takeLatest(PRODUCTS_FETCH, productsListSaga);
}

export default rootSaga;
