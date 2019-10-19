import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { postReviewAction } from "../../redux/reducers/reviewsReducer"
import {connect} from "react-redux"
import { reviewFormValidator } from "../../utils/schemas/yupReviewFormValidator";

const renderTextField = ({
													 label,
													 input,
													 meta: { touched, invalid, error },
												 }) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
	/>
)

const ReviewForm = (props) => {

	const submitReviewForm = async (ev) => {
		ev.preventDefault()
		try {
			await reviewFormValidator.validate(props.fields.values)
	  	props.postReview({productId: props.productId, data: props.fields.values})
		} catch (e) {
			//toast
			console.log(e)
		}
	}

	return (
		<form onSubmit={submitReviewForm}>
			<Field name="rate" component={renderTextField}/>
			<Field name="text" component={renderTextField}/>
			<Button variant="contained" type="submit" color="primary">Send review</Button>
		</form>
	)
}

const mapStateToProps = ({reviewsState, form}) => ({
	reviews: reviewsState,
	fields: form.reviewForm
})

const mapDispatchToProps = {
	postReview: postReviewAction
}

export default reduxForm({
	form: 'reviewForm',

})(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))
