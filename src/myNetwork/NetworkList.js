import React, { PureComponent, PropTypes } from 'react'

class NetworkList extends PureComponent {
  static propTypes = {

  }
  render(){
    return (
      <h3>{this.props.content}</h3>
    )
  }
}

export default NetworkList
