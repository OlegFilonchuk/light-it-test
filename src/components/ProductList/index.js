import React, { Component } from 'react';
import { fetchProductsAction } from './../../redux/reducers/productsReducer'
import { List, Grid, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import Product from '../Product';
import './index.css';
import ProductListItem from "../ProductListItem"

const styles = {
  root: {
    width: 990,
    margin: 'auto'
  },
  productListGrid: {
    width: 400,
  },
  selectedProduct: {
    minWidth: 500
  }
}

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  getProductsList = () => {
    const { products } = this.props.productsState
    return products.map((product) => (
      <ProductListItem key={product.id} product={product}/>
    ))
  }

  render() {
    const { selectedProductId} = this.props.productsState
    const { classes } = this.props

    return (
      <Grid container direction="row" justify="center" className={classes.root}>

        <Grid item className={classes.productListGrid}>
          <List>
            {this.getProductsList()}
          </List>
        </Grid>

        <Grid item className={classes.selectedProduct}>
          { selectedProductId && <Product/> }
        </Grid>

      </Grid>
    );
  }
}

const mapStateToProps = ({ productsState }) => ({
  productsState
})

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductList));
