import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import NetworkButton from './NetworkButton'
import NetworkButtonDrop from './NetworkButtonDrop'
import NetworkList from './NetworkList'
import ModalButton from '../modals/ModalButton'
import './NetworkContainer.sass'

class NetworkContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      createNetworkListModal: 'CREATE_NETWORKLIST_MODAL',
    }
  }

  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    contacts: PropTypes.array.isRequired
  }

  renderNetworkButton(networkList, index){
    console.log('LOGGING NEWL', networkList)
    return <NetworkButton key={ index } { ...networkList }/>
  }

  render() {
    const { createNetworkListModal } = this.state
    const { networkLists, contacts } = this.props
    if (!networkLists) return null

    return (
      <div className='network-component'>
        <div className='network-dropdown'>
          <NetworkButtonDrop networkLists={ networkLists }/>
        </div>
        <div className='network-lists-container'>
          { networkLists.map(this.renderNetworkButton) }
          <ModalButton usedClassName='create-list-modal' label='+' modal={ createNetworkListModal }/>
        </div>
        <div className='networklist'>
          <NetworkList contacts={contacts} />
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ networkLists, contacts }) => ({ networkLists, contacts })

export default connect(mapStateToProps)(NetworkContainer)
