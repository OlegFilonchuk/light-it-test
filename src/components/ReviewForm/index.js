import React, { useState } from 'react'

const ReviewForm = (props) => {

	const [reviewForm, setReviewForm] = useState({
		rate: '',
		text: ''
	})

	const handleInputChange = (ev) => {
		setReviewForm({
			...reviewForm,
			[ev.target.name]: ev.target.value
		})
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		const {id} = props;
		const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`, {
			method: 'POST',
			body: JSON.stringify(reviewForm),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('a_token')
			}
		})
		const response = await rawRes.json()
		console.log(response)
	}

	return (
		<form onSubmit={onSubmit}>
			<label>
				rate
				<input type="text" name="rate" value={reviewForm.rate} onChange={handleInputChange}/>
			</label>
			<label>
				enter text
				<input type="text" name="text" value={reviewForm.text} onChange={handleInputChange}/>
			</label>
			<input type="submit"/>
		</form>
	)
}

export default ReviewForm