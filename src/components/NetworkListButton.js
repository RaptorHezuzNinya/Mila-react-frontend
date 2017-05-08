import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addContactToNetworklist } from '../actions/networklists'
import { addNetworkListToContact } from '../actions/contacts'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import './NetworkListButton.sass'

class NetworkListButton extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    oneContact: PropTypes.array.isRequired,
    handleNetworkButtonClick: PropTypes.func.isRequired
  }

  renderNetworkLists () {
    const { networkLists, handleNetworkButtonClick } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='network-lists' key={networkList.id}>
          <FlatButton
            onClick={handleNetworkButtonClick.bind(this, networkList.id)}
            className='network-list-btn'
            label={networkList.title}>
            <ListIcon className='list-icon' />
          </FlatButton>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='network-lists-holder'>
        {this.renderNetworkLists()}
      </div>
    )
  }
}

export default connect(null, { addContactToNetworklist, addNetworkListToContact })(NetworkListButton)
