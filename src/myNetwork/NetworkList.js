import React, { PureComponent, PropTypes } from 'react'

class NetworkList extends PureComponent {
  static propTypes = {

  }
  render(){
    const { name, avatar, listId } = this.props

    return (
      <div>
        <h3>{name}</h3>
      </div>

    )
  }
}

export default NetworkList
