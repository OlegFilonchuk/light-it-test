import { put } from 'redux-saga/effects'
import { PRODUCTS_REQUEST, PRODUCTS_ERROR, PRODUCTS_RESPONSE } from '../redux/reducers/productsReducer'
import { getProducts} from "../api/restApiController"

export function* productsListSaga() {
  yield put({ type: PRODUCTS_REQUEST });
  try {
    const {data} = yield getProducts()
    yield put({
      type: PRODUCTS_RESPONSE,
      payload: {
        products: data
      }
    });
  }
  catch (e) {
    yield put({
      type: PRODUCTS_ERROR,
      payload: {
        error: e
      }
    });
  }
}
