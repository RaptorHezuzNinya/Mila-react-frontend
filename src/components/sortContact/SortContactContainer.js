import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { updateContact } from '../../actions/contacts'
import {formFieldsContactDetails as formFields} from '../../helpers/formData'
import Media from 'react-media'
import ContactCard from './ContactCard'
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
      contactIndex: 0,
      curContactNumb: 1,
      totalContacts: this.props.contacts.length,
      completedProgress: 100 / this.props.contacts.length
    }
    this.handleNextContact = this.handleNextContact.bind(this)
    this.handlePrevContact = this.handlePrevContact.bind(this)
    this.handleContainerKeyPress = this.handleContainerKeyPress.bind(this)
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    addedContactIds: PropTypes.array.isRequired
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleContainerKeyPress)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleContainerKeyPress)
  }

  handleContainerKeyPress (event) {
    console.log(event.keyCode)
    if (event.keyCode === 37) {
      this.handlePrevContact()
    } else if (event.keyCode === 39 ) {
      this.handleNextContact()
    }
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    })
  }

  getOneContact () {
    const { contacts } = this.props
    const { contactIndex } = this.state
    return contacts.filter((contact, index) => {
      return index === contactIndex
    })
  }

  onSubmit (values, dispatch, props) {
    const initVal = props.initialValues
    console.log('val before', values)
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
    this.props.dispatch(submit('contactDetailsForm'))
  }

  handleNextContact () {
    const { contactIndex, curContactNumb, totalContacts, completedProgress } = this.state
    const { addedContactIds } = this.props
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

  handlePrevContact () {
    const { contactIndex, curContactNumb, totalContacts, completedProgress } = this.state
    if (contactIndex === 0) return null
    this.setState({
      contactIndex: contactIndex - 1,
      curContactNumb: curContactNumb - 1,
      completedProgress: completedProgress - (100 / totalContacts)
    })
  }

  renderSnackBar () {
    const currentContact = this.getOneContact()
    return (
    <Snackbar
      className='snackbar'
      autoHideDuration={3000}
      message={`Assign ${currentContact[0].firstName} to a list before pressing next`}
      open={this.state.snackOpen}
      onRequestClose={this.handleRequestClose} />
    )
  }

  render () {
    const { curContactNumb, totalContacts, completedProgress, snackOpen } = this.state
    return (
      <div className='sort-contact-wrapper'>
        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2={`${curContactNumb} / ${totalContacts} new contacts`}
            pageTitleContentH3='since your last visit' />
          <ProgressIndicator
            mode='determinate'
            holderClass='progress-indicator-holder'
            color='#5DD9B2'
            completedProgress={completedProgress}/>
        </div>
        <NavigateContacts
          handleNextContact={this.handleNextContact}
          handlePrevContact={this.handlePrevContact} />
        <div className='contact-card-wrapper'>
          <ContactCard onSubmit={this.onSubmit} oneContact={this.getOneContact()} />
        </div>
        <div className='network-lists-wrapper'>
          <NetworkListButton
            oneContact={this.getOneContact()}
          />
        </div>
        { this.renderSnackBar() }

        <Media query='(min-width: 769px)' render={() => (
          <HintFooter
            holderClass='footer-holder'
            hintText='hint-text'/>
        )}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    addedContactIds: state.sortContact.addedContactIds
  }
}

export default connect(mapStateToProps)(SortContactContainer)
