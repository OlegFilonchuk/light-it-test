import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"
import { Paper, Grid, Typography, withStyles, List, ListItem, Box } from '@material-ui/core'
import LoginSuggest from "../LoginSuggest"
import Review from "../Review"

const styles = {
	root: {
		backgroundColor: '#ddd',
		padding: 20
	},
	title: {
		marginTop: 30,
	},
	text: {
		marginTop: 30,
		marginBottom: 50
	}
}

class Product extends Component {

	getProduct = () => this.props.productsState.products.filter((product) => product.id === this.props.productsState.selectedProductId)[0]

	getReviewsList = () => {
		const { id } = this.getProduct()
		const { selectedProductId } = this.props.productsState
		const { reviews } = this.props.reviewsState

		return (

			<List>
				{id === selectedProductId && reviews
					.sort((itemA, itemB) => new Date(itemB.created_at) - new Date(itemA.created_at))
					.map((item) => (
					<ListItem key={item.id}>
						<Review review={item}/>
					</ListItem>
				))}
			</List>
		)
	}

	render() {

		const { id, title, img, text } = this.getProduct()
		const { classes } = this.props
		const { isLoggedIn } = this.props.userState

		return (
			<Paper>
				<Grid className={classes.root}>
					<Grid>
						<img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`}/>
					</Grid>
					<Grid>
						<Typography variant="h3" className={classes.title}>
							{title}
						</Typography >
						<Typography variant="body1" className={classes.text}>
							{text}
						</Typography >

						<Box>
							<Typography variant="h5">
								Reviews:
							</Typography>

							{isLoggedIn ? <ReviewForm productId={id}/> : <LoginSuggest />}

							{this.getReviewsList()}

						</Box>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

const mapStateToProps = ({reviewsState, productsState, userState}) => ({
	reviewsState,
	productsState,
	userState
})

const mapDispatchToProps = {
	fetchReviews: fetchReviewsAction,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Product))
