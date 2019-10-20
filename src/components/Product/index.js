import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"
import { Paper, Grid, Typography, withStyles, List, ListItem } from '@material-ui/core'
import LoginSuggest from "../LoginSuggest"

const styles = {
	root: {
		backgroundColor: '#ddd',
		padding: 20
	},
	title: {
		marginTop: 30
	},
	text: {
		marginTop: 30
	}
}

class Product extends Component {

	getProduct = () => this.props.productsState.products.filter((product) => product.id === this.props.productsState.selectedProductId)[0]

	render() {

		const { id, title, img, text } = this.getProduct()
		const { reviews } = this.props.reviewsState
		const { selectedProductId } = this.props.productsState
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

						{isLoggedIn ? <ReviewForm productId={id}/> : <LoginSuggest />}

						<List>
							{id === selectedProductId && reviews.map((item) => (
								<ListItem key={item.id}>
									<div>{item.rate}</div>
									<div>{item.text}</div>
									<div>{item.created_by.username}</div>
									<div>{item.created_at}</div>
								</ListItem>
							))}
						</List>
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
