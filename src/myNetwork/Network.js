import React, { PureComponent, PropTypes } from 'react'
// Components
import NetworkButton from './NetworkButton'
import NetworkButtonDrop from './NetworkButtonDrop'
import NetworkList from './NetworkList'
import ModalButton from '../modals/ModalButton'
// styles
import './Network.sass'

class Network extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      createNetworkListModal: 'CREATE_NETWORKLIST_MODAL',
    }
  }

  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkButton(networkList, index){
    return <NetworkButton key={ index } { ...networkList }/>
  }

  render() {
    const { createNetworkListModal } = this.state.modalProperties
    const { networkLists, contacts } = this.props
    if (!networkLists) return null

    return (
      <div className="network-component">
        <div className="network-dropdown">
          <NetworkButtonDrop networkLists={ networkLists }/>
        </div>
        <div className="network-lists-container">
          { networkLists.map(this.renderNetworkButton.bind(this)) }
          <ModalButton usedClassName="create-list-modal" label="+" modal={ createNetworkListModal }/>
        </div>
        <div className="networklist">
          <NetworkList contacts={contacts} />
        </div>
      </div>

    )
  }
}

export default Network
