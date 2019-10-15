import React, { Component } from 'react'

export default class ProductPage extends Component {

  componentDidMount() {
		console.log(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        Product Page
      </div>
    )
  }
}
