import React, { PureComponent, PropTypes } from 'react'

// Components
import NetworkList from './NetworkList'

class Network extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkList(networklist, index) {
    return <NetworkList key={ index } { ...networklist } />
  }

  render() {
    const { networkLists } = this.props
    if (!networkLists) return null

    return (
      <div className="network-component">
        { networkLists.map(this.renderNetworkList.bind(this))}
      </div>
    )
  }
}

export default Network
