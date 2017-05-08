import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactCard from './ContactCard'
import ProgressIndicator from './ProgressIndicator'
import NetworkListButton from '../NetworkListButton'
import PageTitle from '../PageTitle'
import NavigateContacts from './NavigateContacts'
import './SortContactContainer.sass'

class SortContactContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
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

  getOneContact () {
    const { contacts } = this.props
    const { contactIndex } = this.state
    return contacts.filter((contact, index) => {
      return index === contactIndex
    })
  }

  handleNextContact () {
    const { contactIndex, currentContact, totalContacts, completedProgress } = this.state
    if (contactIndex >= (totalContacts - 1) ) return null
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
    const { currentContact, totalContacts, completedProgress } = this.state
    const { networkLists } = this.props

    return (
      <div className='sort-contact-wrapper'>

        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2={`${currentContact} / ${totalContacts} new contacts`}
            pageTitleContentH3='since your last vist' />
          <ProgressIndicator
            mode='determinate'
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
            networkLists={networkLists} />
        </div>
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
