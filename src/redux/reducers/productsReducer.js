const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export const fetchProductsAction = () => async (dispatch) => {
	const rawRes = await fetch('http://smktesting.herokuapp.com/api/products/')
	const products = await rawRes.json()
	dispatch({
		type: FETCH_PRODUCTS,
		payload: products
	})
}

const initialState = []

export const productsReducer = (state=initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case FETCH_PRODUCTS:
			return [
				...payload
			]
		default:
			return state
	}
}
