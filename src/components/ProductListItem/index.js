import React, {Component} from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core"

class ProductListItem extends Component {

  render() {
    const {id, img} = this.props.product
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={`product ${id}`} src={`http://smktesting.herokuapp.com/static/${img}`}/>
        </ListItemAvatar>
        <ListItemText primary={`product ${id}`}/>
      </ListItem>
    )
  }
}

export default ProductListItem
