import React, { PureComponent, PropTypes } from 'react'

// Components
import NetworkList from './NetworkList'

class Network extends PureComponent {
  static propTypes = {
    networkList: PropTypes.array.isRequired
  }

  renderNetworkList(networklist, index) {
    return <NetworkList key={ index } { ...networklist } />
  }

  render() {
    if (!networkList) return null
    const { networkLists } = this.props

    return (
      <div className="network-component">
        { networkLists.map(this.renderNetworkList.bind(this))}
      </div>
    )
  }
}

export default Network
