const PRELOAD = 'PRELOAD'

export const preloadImage = (url) => async (dispatch) => {
	const img = new Image()
	img.src = url
	dispatch({
		type: PRELOAD,
		payload: img
	})
}

export const imagesReducer = (state=[], action) => {
	const {type, payload} = action

	switch (type) {
		case PRELOAD:
			return [
				...state,
				payload
			]
		default: 
			return state
	}
}