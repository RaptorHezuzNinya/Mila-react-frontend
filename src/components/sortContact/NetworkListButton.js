import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { addContactToNetworkList, rmContactFromNetworkList } from '../../actions/networklists'
import { addNetworkListToContact, rmNetworkListFromContact } from '../../actions/contacts'
import { formFieldsContactDetails as formFields } from '../../helpers/formData'
import _ from 'lodash'
import classNames from 'classNames'
import Media from 'react-media'
import ModalButton from '../modals/ModalButton'
import Snackbar from 'material-ui/Snackbar'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import './NetworkListButton.sass'

class NetworkListButton extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    addContactToNetworkList: PropTypes.func.isRequired,
    addNetworkListToContact: PropTypes.func.isRequired,
    currentContact: PropTypes.object.isRequired,
    rmContactFromNetworkList: PropTypes.func.isRequired,
    rmNetworkListFromContact: PropTypes.func.isRequired,
    contactDetailsForm: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      snackOpen: false,
      createNetworkListModal: 'CREATE_NETWORKLIST_MODAL'
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, console.log('MOUNT'))
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleKeyPress,
      console.log('UNMOUNT remove handler')
    )
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false
    })
  }

  handleKeyPress = event => {
    const { contactDetailsForm } = this.props
    if (!contactDetailsForm) return null
    let arr = []
    let activeField
    formFields.forEach(field => {
      activeField = _.get(contactDetailsForm.fields, [field, 'active'], false)
      return arr.push(activeField)
    })
    if (arr.includes(true)) {
      return
    } else {
      const { networkLists } = this.props
      const newValueObject = networkLists.map((list, index) => {
        return Object.assign({ ...list }, { buttonCode: index + 49 })
      })
      const findTheOneObj = buttonCode =>
        newValueObject.filter(object => {
          return object.buttonCode === buttonCode
        })
      const registeredButtonCodes = newValueObject.map(list => {
        return list.buttonCode
      })
      if (registeredButtonCodes.includes(event.keyCode)) {
        return this.handleNetworkButtonClick(findTheOneObj(event.keyCode)[0])
      }
    }
  }

  async handleNetworkButtonClick(networkList) {
    const { currentContact, networkLists } = this.props
    // console.log('networkList', networkList)
    // const neededNWL = networkLists.filter(list => {
    //   return list.id === networkList.id
    // })
    // console.log('networkList cotnactIds', networkList.contactIds)

    if (!networkList.contactIds.includes(currentContact.id)) {
      await this.props.addNetworkListToContact(networkList, currentContact)
      return this.props.addContactToNetworkList(currentContact, networkList)
    } else {
      await this.props.rmContactFromNetworkList(currentContact, networkList)
      return this.props.rmNetworkListFromContact(networkList, currentContact)
    }
  }

  renderNetworkLists = (networkList, index) => {
    const { currentContact } = this.props
    if (!currentContact.networkListIds) return null
    const networkButton = classNames({
      'network-list-btn': true,
      'network-list-btn-clicked': currentContact.networkListIds.includes(networkList.id)
    })
    return (
      <div className="network-list" key={networkList.id}>
        <FlatButton
          labelPosition="before"
          name={networkList.name}
          onClick={() => this.handleNetworkButtonClick(networkList)}
          className={networkButton}
          label={networkList.title}
          disabled={currentContact.isDeleted ? true : false}
        >
          <ListIcon className="list-icon" />
          <span className="button-number">{1 + index}</span>
        </FlatButton>
      </div>
    )
  }

  render() {
    const { snackOpen, createNetworkListModal } = this.state
    const { currentContact, networkLists } = this.props
    return (
      <div className="network-lists-holder">
        {networkLists.map(this.renderNetworkLists)}
        <Media
          query="(min-width: 769px)"
          render={() => (
            <ModalButton
              holderClass="modal-btn-holder"
              usedClassName="btn-s-a"
              label="Add List"
              modal={createNetworkListModal}
            />
          )}
        />
        <Snackbar
          className="snackbar"
          open={snackOpen}
          autoHideDuration={3000}
          message={`${!currentContact ? null : currentContact.firstName} already added`}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentContact: state.sortContact.present,
    networkLists: state.networkLists,
    contactDetailsForm: state.form.contactDetailsForm
  }
}

export default connect(mapStateToProps, {
  addContactToNetworkList,
  addNetworkListToContact,
  rmNetworkListFromContact,
  rmContactFromNetworkList
})(NetworkListButton)
