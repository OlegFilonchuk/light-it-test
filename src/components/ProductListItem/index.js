import React, {Component} from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core"
import { connect } from 'react-redux'
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"
import {productSelectAction} from "../../redux/reducers/productsReducer"

class ProductListItem extends Component {

  handleClick = async () => {
    const { product: { id }, selectProduct, fetchReviews } = this.props
    selectProduct(id)
    fetchReviews(id)
  }

  render() {
    const { id, img } = this.props.product
    return (
      <ListItem button onClick={this.handleClick}>
        <ListItemAvatar>
          <Avatar alt={`product ${id}`} src={`http://smktesting.herokuapp.com/static/${img}`}/>
        </ListItemAvatar>
        <ListItemText primary={`product ${id}`}/>
      </ListItem>
    )
  }
}

const mapStateToProps = ({productsState}) => ({
  productsState,
})

const mapDispatchToProps = {
  fetchReviews: fetchReviewsAction,
  selectProduct: productSelectAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)
