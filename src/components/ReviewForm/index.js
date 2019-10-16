import React, { useState } from 'react'

const ReviewForm = () => {

	const [value, setValue] = useState('')

	return (
		<div>
			<textarea  value={value} onChange={(ev) => setValue(ev.target.value)}/>
		</div>
	)
}

export default ReviewForm