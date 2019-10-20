import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"
import { Paper, Grid, Typography, withStyles } from '@material-ui/core'

const styles = {
	root: {
		backgroundColor: '#ddd',
		padding: 20
	}
}

class Product extends Component {

	getProduct = () => this.props.productsState.products.filter((product) => product.id === this.props.productsState.selectedProductId)[0]

	render() {

		const { id, title, img, text } = this.getProduct()
		const { reviews } = this.props.reviewsState
		const { selectedProductId } = this.props.productsState
		const { classes } = this.props

		return (
			<Paper>
				<Grid className={classes.root}>
					<Grid>
						<img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`}/>
					</Grid>
					<Grid>
						<Typography variant="h3">
							{title}
						</Typography >
						<Typography variant="body1">
							{text}
						</Typography >

						<ReviewForm productId={id}/>

						<ul>
							{id === selectedProductId && reviews.map((item) => (
								<li key={item.id}>
									<div>{item.rate}</div>
									<div>{item.text}</div>
									<div>{item.created_by.username}</div>
									<div>{item.created_at}</div>
								</li>
							))}
						</ul>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

const mapStateToProps = ({reviewsState, productsState}) => ({
	reviewsState,
	productsState
})

const mapDispatchToProps = {
	fetchReviews: fetchReviewsAction,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Product))
