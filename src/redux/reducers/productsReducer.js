const LOAD = 'LOAD'

export const loadAction = () => async (dispatch) => {
	const rawRes = await fetch('http://smktesting.herokuapp.com/api/products/')
	const products = await rawRes.json()
	dispatch({
		type: LOAD,
		payload: products
	})
}

const initialState = []

export const productsReducer = (state=initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case LOAD:
			return [
				...payload
			]
		default:
			return state
	}
}