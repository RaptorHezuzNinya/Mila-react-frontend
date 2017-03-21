import React, { PureComponent, PropTypes } from 'react'

// Components
import NetworkButton from '../components/NetworkButton'
import NetworkButtonDrop from '../components/NetworkButtonDrop'
import NetworkList from './NetworkList'

import ButtonModal from '../modals/ButtonModal'
import ModalRoot from '../modals/ModalRoot'

// styles
import './Network.sass'

class Network extends PureComponent {

  constructor(props){
    super(props)
      this.state = {
      modalProperties: {
        createNetworkListModal: 'CREATE_NETWORKLIST_MODAL',
        testModal: 'TEST_MODAL',
      }
    }
  }

  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkButton(networkList, index){
    return <NetworkButton key={ index } { ...networkList }/>
  }

  render() {

    const { networkLists, contacts } = this.props
    const { createNetworkListModal, testModal } = this.state.modalProperties

    if (!networkLists) return null

    return (
      <div className="network-component">
        <div className="networkdropdown">
          <NetworkButtonDrop networkLists={ networkLists }/>
        </div>
        <div className="networkbutton">
          <ButtonModal label="Create List" modal={ createNetworkListModal }/>
          <ButtonModal label="Test Modal" modal={ testModal }/>
          <ModalRoot />
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
