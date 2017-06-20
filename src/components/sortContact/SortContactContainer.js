import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { updateContact } from '../../actions/contacts'
import { addContactToDeleted, undoAddContactToDeleted } from '../../actions/sortContacts'
import { fetchContacts } from '../../actions/sortContacts'
import { prev, next } from '../../actions/prevNextAble'
import { formFieldsContactDetails as formFields } from '../../helpers/formData'
import _ from 'lodash'
import Media from 'react-media'
import ContactCard from './ContactCard'
import DoneSorting from './DoneSorting'
import DeletedContactCard from './DeletedContactCard'
import DummyCard from './DummyCard'
import ProgressIndicator from '../ProgressIndicator'
import NetworkListButton from './NetworkListButton'
import PageTitle from '../PageTitle'
import NavigateContacts from './NavigateContacts'
import HintFooter from './HintFooter'
import Snackbar from 'material-ui/Snackbar'
import FlatButton from 'material-ui/FlatButton'
import NotIcon from 'material-ui/svg-icons/av/not-interested'
import './SortContactContainer.sass'

class SortContactContainer extends PureComponent {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    currentContact: PropTypes.object.isRequired,
    totalContacts: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    addContactToDeleted: PropTypes.func.isRequired,
    contactDetailsForm: PropTypes.object,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired
    // addedContactIds: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      snackProceed: false,
      contactIndex: 0,
      curContactNumb: 1,
      totalContCount: null,
      completedProgress: 4
    }
    this.handleNextContact = this.handleNextContact.bind(this)
    this.handlePrevContact = this.handlePrevContact.bind(this)
    this.handleDeleteContact = this.handleDeleteContact.bind(this)
  }

  componentDidMount() {
    this.props.fetchContacts()
    window.addEventListener('keydown', this.handleContainerKeyPress)
  }

  componentWillReceiveProps() {
    const { totalContacts } = this.props
    this.setState({
      totalContCount: totalContacts.length
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleContainerKeyPress)
  }

  handleRequestClose = () => {
    this.setState({
      snackProceed: false
    })
  }

  onSubmit = (values, dispatch, props) => {
    const { currentContact } = this.props
    const initVal = props.initialValues
    formFields.forEach(field => {
      if (!values[field]) {
        values[field] = initVal[field]
      }
      return values
    })
    if (props.dirty) {
      return dispatch(updateContact(values, currentContact))
    }
  }

  handleDeleteContact() {
    const { currentContact } = this.props
    this.props.addContactToDeleted(currentContact)
  }

  handleContainerKeyPress = event => {
    const { contactDetailsForm } = this.props
    if (!contactDetailsForm) {
      if (event.keyCode === 37) {
        return this.handlePrevContact()
      } else if (event.keyCode === 39) {
        return this.handleNextContact()
      } else {
        return null
      }
    } else {
      let arr = []
      let activeField
      formFields.forEach(field => {
        activeField = _.get(contactDetailsForm.fields, [field, 'active'], false)
        return arr.push(activeField)
      })
      if (arr.includes(true)) {
        return
      } else if (event.keyCode === 37) {
        return this.handlePrevContact()
      } else if (event.keyCode === 39) {
        return this.handleNextContact()
      } else if (event.keyCode === 88) {
        return this.handleDeleteContact()
      }
    }
  }

  handleRemoteContactDetailSubmit() {
    return this.props.submit('contactDetailsForm')
  }

  async handleNextContact() {
    const { contactIndex, curContactNumb, totalContCount, completedProgress } = this.state
    const { networkLists, addedContactIds, currentContact, next } = this.props
    await this.handleRemoteContactDetailSubmit()
    // if (contactIndex > totalContCount - 1) return null
    const contactAddedToNwl = networkLists.map(networkList => {
      return networkList.contactIds.includes(currentContact.id)
    })
    console.log('contactAddedToNwl', contactAddedToNwl)
    if (contactAddedToNwl.includes(true) || currentContact.isDeleted) {
      this.setState({
        completedProgress: completedProgress + 100 / totalContCount,
        contactIndex: contactIndex + 1,
        curContactNumb: curContactNumb + 1
      })
      return next()
    } else {
      return this.setState({
        snackProceed: true
      })
    }
  }

  async handlePrevContact() {
    const { contactIndex, curContactNumb, totalContCount, completedProgress } = this.state
    await this.handleRemoteContactDetailSubmit()
    if (contactIndex === 0) return null
    this.setState({
      contactIndex: contactIndex - 1,
      curContactNumb: curContactNumb - 1,
      completedProgress: completedProgress - 100 / totalContCount
    })
    return this.props.prev()
  }

  handleUndo = () => this.props.undoAddContactToDeleted(this.props.currentContact)

  render() {
    const { curContactNumb, totalContCount, completedProgress, snackProceed } = this.state
    const {
      currentContact,
      futureContact,
      pastContact,
      doneSorting,
      deletedSortContacts
    } = this.props

    let whichCard = !currentContact.isDeleted
      ? <div className="contact-card-wrapper">
          <ContactCard onSubmit={this.onSubmit} />
        </div>
      : <div className="delete-card-wrapper">
          <DeletedContactCard
            contact={currentContact}
            deleteCopy="will be kept out of my records."
          />
        </div>

    const lastPastContact = pastContact[pastContact.length - 1]

    if (doneSorting) {
      return <DoneSorting past={pastContact} deletedSortContacts={deletedSortContacts} />
    } else {
      return (
        <div className="global-wrapper">
          <Media
            query="(min-width: 1280px)"
            render={() => (
              <div className="past-wrapper" id="past-shadow" onClick={this.handlePrevContact}>
                <DummyCard contact={lastPastContact} paperClass="dummy-paper-prev" />
              </div>
            )}
          />
          <div className="sort-contact-wrapper">
            <div className="progress-indicator-wrapper">
              <PageTitle
                titleClassName="sortcontact-title"
                pageTitleContentH2={`${curContactNumb} / ${totalContCount} new contacts`}
              />
              <ProgressIndicator
                mode="determinate"
                holderClass="progress-indicator-holder"
                color="#5DD9B2"
                completedProgress={completedProgress}
              />
            </div>
            <NavigateContacts
              handleNextContact={this.handleNextContact}
              handlePrevContact={this.handlePrevContact}
            >
              {whichCard}
            </NavigateContacts>
            <div className="network-lists-wrapper">
              <NetworkListButton />
            </div>
            <div className="delete-btn-wrapper">
              <FlatButton
                label="Don't save this contact (x)"
                className="delete-btn"
                labelPosition="before"
                hoverColor="none"
                disableTouchRipple={true}
                onClick={this.handleDeleteContact}
              >
                <NotIcon className="not-icon" />
              </FlatButton>
            </div>
            <Snackbar
              className="snackbar-delete"
              message={`${!currentContact ? null : currentContact.firstName} is deleted`}
              open={currentContact.isDeleted !== undefined ? currentContact.isDeleted : false}
              onRequestClose={this.handleRequestClose}
              onActionTouchTap={this.handleUndo}
              action="undo"
            />
            <Snackbar
              className="snackbar"
              autoHideDuration={3000}
              message={`Assign ${!currentContact ? null : currentContact.firstName} to a list before pressing next`}
              open={snackProceed}
              onRequestClose={this.handleRequestClose}
            />
          </div>
          <Media
            query="(min-width: 1280px)"
            render={() => (
              <div className="future-wrapper" id="fut-shadow" onClick={this.handleNextContact}>
                <DummyCard contact={futureContact} paperClass="dummy-paper-next" />
              </div>
            )}
          />
          {/* <Media
          query="(min-width: 769px)"
          render={() => (
            <HintFooter holderClass="footer-holder" hintText="hint-text" />
          )}
        /> */}
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  const sortingData = state.sortContact.sortingData
  return {
    networkLists: state.networkLists,
    pastContact: state.sortContact.past,
    futureContact: state.sortContact.future[0],
    currentContact: state.sortContact.present,
    contactDetailsForm: state.form.contactDetailsForm,
    totalContacts: sortingData.totalSortContacts,
    // addedContactIds: sortingData.addedContactIds,
    doneSorting: sortingData.doneSorting,
    deletedSortContacts: state.sortContact.deletedSortContacts
  }
}

export default connect(mapStateToProps, {
  updateContact,
  addContactToDeleted,
  undoAddContactToDeleted,
  submit,
  fetchContacts,
  prev,
  next
})(SortContactContainer)
