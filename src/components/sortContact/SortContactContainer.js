import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactCard from './ContactCard'
import ProgressIndicator from '../ProgressIndicator'
import NetworkListButton from './NetworkListButton'
import PageTitle from '../PageTitle'
import NavigateContacts from './NavigateContacts'
import Snackbar from 'material-ui/Snackbar'
import './SortContactContainer.sass'

class SortContactContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      snackOpen: false,
      contactIndex: 0,
      currentContact: 1,
      totalContacts: this.props.contacts.length,
      completedProgress: 100 / this.props.contacts.length
    }
    this.handleNextContact = this.handleNextContact.bind(this)
    this.handlePrevContact = this.handlePrevContact.bind(this)
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    })
  }

  handleRequestOpen = () => {
    this.setState({
      snackOpen: true,
    })
  }

  getOneContact () {
    const { contacts } = this.props
    const { contactIndex } = this.state
    return contacts.filter((contact, index) => {
      return index === contactIndex
    })
  }

  handleNextContact () {
    const { contactIndex, currentContact, totalContacts, completedProgress } = this.state
    const { networkLists } = this.props
    if (contactIndex >= (totalContacts - 1) ) return null
    // const theOneContactId = this.getOneContact().map((contact) => {
    //   return contact.id
    // })
    // const networkListsContactIds = networkLists.map((networkList) => {
    //   return networkList.contactIds
    // })
    // if (true) {
    //   debugger
    // }
    this.setState({
      contactIndex: contactIndex + 1,
      currentContact: currentContact + 1,
      completedProgress: completedProgress + (100 / totalContacts)
    })
  }

  handlePrevContact () {
    const { contactIndex, currentContact, totalContacts, completedProgress } = this.state
    if (contactIndex === 0) return null
    this.setState({
      contactIndex: contactIndex - 1,
      currentContact: currentContact - 1,
      completedProgress: completedProgress - (100 / totalContacts)
    })
  }

  render () {
    const { currentContact, totalContacts, completedProgress, snackOpen } = this.state
    const { networkLists } = this.props
    console.log()
    return (
      <div className='sort-contact-wrapper'>

        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2={`${currentContact} / ${totalContacts} new contacts`}
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
          <ContactCard oneContact={this.getOneContact()} />
        </div>
        <div className='network-lists-wrapper'>
          <NetworkListButton
            oneContact={this.getOneContact()}
          />
        </div>
        <Snackbar
          autoHideDuration={3000}
          message='Assign Name to a list before pressing next'
          open={snackOpen}
          onRequestClose={this.handleRequestClose}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    networkLists: state.networkLists
  }
}

export default connect(mapStateToProps)(SortContactContainer)
