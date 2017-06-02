import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { updateContact, deleteContact } from '../../actions/contacts'
import { fetchContacts } from '../../actions/sortContacts'
import { undo, redo } from '../../actions/undoable'
import {formFieldsContactDetails as formFields} from '../../helpers/formData'
import _ from 'lodash'
import Media from 'react-media'
import ContactCard from './ContactCard'
import DeleteCard from './DeleteCard'
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
  constructor(props){
    super(props)
    this.state = {
      snackOpen: false,
      snackDelete: false,
      contactIndex: 0,
      curContactNumb: 1,
      totalContacts: null,
      completedProgress: 4,
      isDeleted: false
    }
    this.handleNextContact = this.handleNextContact.bind(this)
    this.handlePrevContact = this.handlePrevContact.bind(this)
    this.handleContainerKeyPress = this.handleContainerKeyPress.bind(this)
    this.handleDeleteContact = this.handleDeleteContact.bind(this)
  }

  static propTypes = {
    currentContact: PropTypes.object.isRequired,
    totalContacts: PropTypes.array.isRequired

    // addedContactIds: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetchContacts()
    window.addEventListener('keydown', this.handleContainerKeyPress)
  }

  componentWillReceiveProps() {
    this.setState({
      totalContacts: this.props.totalContacts.length,
      completedProgress: 100 / this.props.totalContacts.length
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleContainerKeyPress)
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    })
  }

  onSubmit (values, dispatch, props) {
    const initVal = props.initialValues
    // console.log('val before', values)
    formFields.forEach((field) => {
      if (!values[field]){
        values[field] = initVal[field]
      }
      return values
    })
    if (props.dirty) {
      return dispatch(updateContact(values, props.oneContact[0].id))
    }
  }

  handleRemoteContactDetailSubmit = () => {
    this.props.submit('contactDetailsForm')
  }

  handleDeleteContact() {
    const theCurrentContact = this.getOneContact()
    this.setState({
      snackDelete: true,
      isDeleted: true
    })
    this.props.deleteContact(theCurrentContact)
  }

  handleContainerKeyPress(event) {
    const { contactDetailsForm } = this.props
    console.log(event.keyCode)
    // if (contactDetailsForm.fields === null) return NOTE i prolly need to ascape this shit when the emprty contact is being rendered
    let arr = []
    let activeField
    formFields.forEach((field) => {
      activeField = _.get(contactDetailsForm.fields, [field, 'active'], false)
      return arr.push(activeField)
    })
    if (arr.includes(true)) {
      return
    }
    else if (event.keyCode === 37) {
      return this.handlePrevContact()
    } else if (event.keyCode === 39 ) {
      return this.handleNextContact()
    } else if (event.keyCode === 88) {
      return this.handleDeleteContact()
    }
  }

  handleNextContact() {
    const { contactIndex, curContactNumb, totalContacts, completedProgress } = this.state
    const { addedContactIds } = this.props

    return this.props.redo()

    this.handleRemoteContactDetailSubmit()
    if (contactIndex >= (totalContacts - 1) ) return null
    const theCurrentContactId = this.getOneContact()
    if (addedContactIds.includes(theCurrentContactId[0].id)) {
      this.setState({
        contactIndex: contactIndex + 1,
        curContactNumb: curContactNumb + 1,
        completedProgress: completedProgress + (100 / totalContacts)
      })
    } else {
      return this.setState({
        snackOpen: true
      })
    }
  }

  handlePrevContact() {
    const { contactIndex, curContactNumb, totalContacts, completedProgress } = this.state
    if (contactIndex === 0) return null
    this.setState({
      contactIndex: contactIndex - 1,
      curContactNumb: curContactNumb - 1,
      completedProgress: completedProgress - (100 / totalContacts)
    })
  }

  // handleUndo() {
  //   console.log('Undo works with second snackbar')
  // }
  
  render () {
    const { curContactNumb, totalContacts, completedProgress, snackOpen, snackDelete, isDeleted } = this.state
    const { currentContact } = this.props

    let whichCard = !isDeleted
      ? <div className='contact-card-wrapper'>
          <ContactCard onSubmit={this.onSubmit} />
        </div>
      : <div className='delete-card-wrapper'>
          <DeleteCard />
        </div>

    return (
      <div className='sort-contact-wrapper'>
        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2={`${curContactNumb} / ${totalContacts} new contacts`}
          />
          <ProgressIndicator
            mode='determinate'
            holderClass='progress-indicator-holder'
            color='#5DD9B2'
            completedProgress={completedProgress}/>
        </div>
        <NavigateContacts
          handleNextContact={this.handleNextContact}
          handlePrevContact={this.handlePrevContact}
        />
        {whichCard}
        <div className='network-lists-wrapper'>
          <NetworkListButton />
        </div>
        <div className='delete-btn-wrapper'>
          <FlatButton
            label="Don't save this contact (x)"
            className='delete-btn'
            labelPosition='before'
            hoverColor='none'
            disableTouchRipple={true}
            onClick={this.handleDeleteContact} >
            <NotIcon className='not-icon' />
          </FlatButton>
        </div>
        <Snackbar
          className='snackbar-delete'
          autoHideDuration={3000}
          message={`${!currentContact ? null : currentContact.firstName} is deleted`}
          open={snackDelete}
          onRequestClose={this.handleRequestClose}
          onActionTouchTap={this.handleUndo}
          action="undo"
        />
        <Snackbar
          className='snackbar'
          autoHideDuration={3000}
          message={`Assign ${!currentContact ? null : currentContact.firstName} to a list before pressing next`}
          open={this.state.snackOpen}
          onRequestClose={this.handleRequestClose}
        />
        <Media query='(min-width: 769px)' render={() => (
          <HintFooter
            holderClass='footer-holder'
            hintText='hint-text'
          />
        )}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentContact: state.sortContact.present,
    totalContacts: state.contacts.totalContacts,
    addedContactIds: state.sortContact.addedContactIds,
    contactDetailsForm: state.form.contactDetailsForm,

  }
}

export default connect(mapStateToProps, { updateContact, deleteContact, submit, fetchContacts, undo, redo})(SortContactContainer)
