import React, { PureComponent, PropTypes } from 'react'

class NetworkList extends PureComponent {
  static propTypes = {

  }

  render(){
    const { name, avatar, listId } = this.props

    return (
      <div className="networklist">
        <h3>{name}</h3>
      </div>

    )
  }
}

export default NetworkList
