import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import NetworkList from './NetworkList'

class Network extends PureComponent {
  static propTypes = {

  }

  render() {
    debugger
    const { networkLists } = this.props
    return (
      <NetworkList content="NetworkList comp" />
    )
  }
}

export default Network
