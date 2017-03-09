import React, { PureComponent, PropTypes } from 'react'

// Components
import NetworkButton from '../Components/NetworkButton'
import NetworkList from './NetworkList'

class Network extends PureComponent {

  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkButton(networkList, index){
    return <NetworkButton key={ index } { ...networkList }/>
  }

  render() {

    const { networkLists } = this.props
    if (!networkLists) return null

    return (
      <div className="network-component">
        <div className="networkbutton">
          { networkLists.map(this.renderNetworkButton.bind(this)) }
        </div>
        <div className="networklist">
        </div>
      </div>

    )
  }
}

export default Network
