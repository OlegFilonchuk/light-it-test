import React, { Component } from 'react';
import { fetchProductsAction } from './../../redux/reducers/productsReducer'
import { logoutUserAction, autologinUserAction } from "../../redux/reducers/userReducer"
import { List, Grid, withStyles, AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { connect } from 'react-redux'
import Product from '../Product';
import ProductListItem from "../ProductListItem"
import './index.css';
import { history } from "../../utils/history"

const styles = {
  root: {
    width: 990,
    margin: 'auto'
  },
  productListGrid: {
    width: 400,
  },
  selectedProduct: {
    width: 590
  },
  title: {
    flexGrow: 1
  },
  logButton: {
    color: '#fff'
  }
}

class ProductList extends Component {

  componentDidMount() {
    const token = localStorage.getItem('a_token')
    const username = localStorage.getItem('username')
    if (token && username) {
      this.props.autologin({
        token,
        username
      })
    }
    this.props.fetchProducts()
  }

  getProductsList = () => {
    const { products } = this.props.productsState
    return products.map((product) => (
      <ProductListItem key={product.id} product={product}/>
    ))
  }

  handleButtonClick = () => {
    const { isLoggedIn } = this.props.userState
    if (isLoggedIn) {
      localStorage.clear()
      this.props.logout()
    }  else {
      history.push('/login')
    }
  }

  render() {
    const { selectedProductId } = this.props.productsState
    const { classes } = this.props
    const { isLoggedIn, username } = this.props.userState

    return (
      <>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography className={classes.title}>
            Our awesome application
          </Typography>
          <Typography className={classes.title}>
            {isLoggedIn ? `You logged in as ${username}` : ''}
          </Typography>
          <Button onClick={this.handleButtonClick} className={classes.logButton}>
            {isLoggedIn ? 'Log out' : 'Log in'}
          </Button>
        </Toolbar>
      </AppBar>

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
      </>
    );
  }
}

const mapStateToProps = ({ productsState, userState }) => ({
  productsState,
  userState
})

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction,
  logout: logoutUserAction,
  autologin: autologinUserAction
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductList));
