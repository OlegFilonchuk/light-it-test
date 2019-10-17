import React, { useState } from 'react'

const ReviewForm = (props) => {

	const [value, setValue] = useState('')

	const data = {
		rate: 5,
		text: "777"
	}

	const handleInputChange = (ev) => {
		setValue(ev.target.value)
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		const {id} = props;
		const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'db8421a04d3c19168acc6f086bbe3aab972a8175'
			}
		})
		const response = await rawRes.json()
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={value} onChange={handleInputChange}/>
			<input type="submit"/>
		</form>
	)
}

export default ReviewForm