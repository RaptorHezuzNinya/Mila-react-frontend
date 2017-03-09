import React, { PureComponent, PropTypes } from 'react'

// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components


class NetworkList extends PureComponent {

  static propTypes = {
    
  }

  render(){
    const { name, avatar, listId } = this.props
    return (
      <div className="networklist">

      </div>

    )
  }
}

export default NetworkList
