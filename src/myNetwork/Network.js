import React, { PureComponent, PropTypes } from 'react'

// Components
import NetworkButton from '../components/NetworkButton'
import NetworkButtonDrop from '../components/NetworkButtonDrop'
import NetworkList from './NetworkList'
import CreateNetwork from '../components/CreateNetworkButton'

// styles
import './Network.sass'

class Network extends PureComponent {

  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkButton(networkList, index){
    return <NetworkButton key={ index } { ...networkList }/>
  }

  render() {

    const { networkLists, contacts } = this.props
    if (!networkLists) return null

    return (
      <div className="network-component">
        <div className="networkdropdown">
          <NetworkButtonDrop networkLists={ networkLists }/>

        </div>
        <div className="networkbutton">
          <CreateNetwork />
          { networkLists.map(this.renderNetworkButton.bind(this)) }
        </div>
        <div className="networklist">
          <NetworkList contacts={contacts} />
        </div>
      </div>

    )
  }
}

export default Network
