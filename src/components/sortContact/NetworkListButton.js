import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addContactToNetworklist } from '../../actions/networklists'
import { addNetworkListToContact } from '../../actions/contacts'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import './NetworkListButton.sass'

class NetworkListButton extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    oneContact: PropTypes.array.isRequired
  }

  handleNetworkButtonClick (networkListId) {
    const { oneContact } = this.props
    const theOneContactId = oneContact[0].id
    this.props.addContactToNetworklist(theOneContactId, networkListId)
    this.props.addNetworkListToContact(networkListId, theOneContactId)
  }

  renderNetworkLists () {
    const { networkLists } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='network-lists' key={networkList.id}>
          <FlatButton
            onClick={this.handleNetworkButtonClick.bind(this, networkList.id)}
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
