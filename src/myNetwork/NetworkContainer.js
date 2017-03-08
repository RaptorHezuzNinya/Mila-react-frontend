import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Network from './Network'
import NetworkList from './NetworkList'

class NetworkContainer extends PureComponent {
  static propTypes = {
    
  }

  render(){
    return (
      <div>
        <h1> NetworkContainer </h1>
        <Network content="Network comp" />
        <NetworkList content="NetworkList comp" />
      </div>
    )
  }
}

export default connect(null)(NetworkContainer)
