import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button, Grid, Box, Typography, Paper } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { postReviewAction } from "../../redux/reducers/reviewsReducer"
import {connect} from "react-redux"
import { reviewFormValidator } from "../../utils/schemas/yupReviewFormValidator";
import { toast } from "react-toastify"

const useStyles = makeStyles({
	root: {
		padding: 20,

	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			marginBottom: 20
		}
	}
})

const renderTextField = ({label, input, meta: { touched, invalid, error }}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
	/>
)

// const renderRatingField = () => {
//	const [value, setValue] = React.useState(2)
// 	return (
// 		<Rating name="rating" value={value} />
// 	)
// }

const ReviewForm = (props) => {

	const [value, setValue] = React.useState(0)

	const submitReviewForm = async (ev) => {
		ev.preventDefault()
		try {
			await reviewFormValidator.validate(props.fields.values)
	  	props.postReview({productId: props.productId, data: props.fields.values})
		} catch (e) {
			toast.error(e.message)
			console.log(e)
		} finally {
			props.reset()
		}
	}

	const classes = useStyles()

	console.log(props.fields)

	return (
		<Paper className={classes.root}>
			<form onSubmit={submitReviewForm} className={classes.form}>
				<Typography>
					You can leave your own review:
				</Typography>
				<Field name="rate" label="Rate" component="div">
					<Rating name="rate" value={value} onChange={(ev, nextValue) => {
						setValue(nextValue)
					}}/>
				</Field>
				<Field name="text" label="Text" component={renderTextField}/>
				<Button variant="contained" type="submit" color="primary">Send review</Button>
			</form>
		</Paper>
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
