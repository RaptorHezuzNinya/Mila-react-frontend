import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Network from './Network'

class NetworkContainer extends PureComponent {
  static propTypes = {

  }

  render(){
    return (
      <div>
        <h1> NetworkContainer </h1>
        <Network content="Network comp" />
      </div>
    )
  }
}

export default connect(null)(NetworkContainer)
