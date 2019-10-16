import React, { useState } from 'react'

const ReviewForm = (props) => {

	const [value, setValue] = useState('')

	const data = {
		rate: 5,
		text: 777
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		const {id} = props;
		const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': '26e9b0069ee8f078acc80df00ef8d815cc9809dc'
			}
		})
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={value} onChange={(ev) => setValue(ev.target.value)}/>
			<input type="submit"/>
		</form>
	)
}

export default ReviewForm