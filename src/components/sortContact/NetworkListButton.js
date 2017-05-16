import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addContactToNetworklist } from '../../actions/networklists'
import { addNetworkListToContact } from '../../actions/contacts'
import Snackbar from 'material-ui/Snackbar'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import './NetworkListButton.sass'

class NetworkListButton extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      snackOpen: false,
    }
  }

  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    oneContact: PropTypes.array.isRequired
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    })
  }

  handleNetworkButtonClick (networkListId) {
    const { activeButtonIds } = this.state
    const { oneContact, networkLists } = this.props
    const theOneContactId = oneContact[0].id
    if (!activeButtonIds.includes(networkListId)){
      this.setState({
        activeButtonIds: this.state.activeButtonIds.concat([networkListId])
      })
    }
    const neededNWL = networkLists.filter((networkList) => {
      return networkList.id === networkListId
    })
    const match = neededNWL[0].contactIds.includes(theOneContactId)
    if (match) {
      return this.setState({
        snackOpen: true
      })
    }
    this.props.addContactToNetworklist(theOneContactId, networkListId)
    this.props.addNetworkListToContact(networkListId, theOneContactId)
  }


  renderNetworkLists () {
    const { networkLists } = this.props
    const { activeButtonIds } = this.state
    return networkLists.map((networkList) => {
      return (
        <div className='network-list' key={networkList.id}>
          <FlatButton
            name={networkList.name}
            onClick={this.handleNetworkButtonClick.bind(this, networkList.id)}
            className={activeButtonIds.includes(networkList.id) ? 'network-list-btn-clicked' : 'network-list-btn'}
            label={networkList.title}>
            <ListIcon className='list-icon' />
          </FlatButton>
        </div>
      )
    })
  }

  render () {
    const { snackOpen } = this.state
    const { oneContact } = this.props
    console.log('DO I RERENDER', this.state.activeButtonIds)
    return (
      <div className='network-lists-holder'>
        {this.renderNetworkLists()}
        <Snackbar
          className='snackbar'
          open={snackOpen}
          autoHideDuration={3000}
          message={`${oneContact[0].firstName} already added`}
          onRequestClose={this.handleRequestClose} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    networkLists: state.networkLists
  }
}

export default connect(mapStateToProps, { addContactToNetworklist, addNetworkListToContact })(NetworkListButton)
