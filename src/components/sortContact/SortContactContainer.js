import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactCard from './ContactCard'
import ProgressIndicator from './ProgressIndicator'
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
      completedProgress: 4
    }
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
    const { contactIndex } = this.state
    if (contactIndex >= 24 ) return null
    this.setState({
      contactIndex: this.state.contactIndex + 1
    })
  }

  handlePrevContact () {
    const { contactIndex } = this.state
    if (contactIndex === 0) return null
    this.setState({
      contactIndex: contactIndex - 1
    })
  }

  render () {

    console.log(this.getOneContact())
    return (
      <div className='sort-contact-wrapper'>

        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2='1 / 1 new contact'
            pageTitleContentH3='since your last vist' />
          <ProgressIndicator
            mode='determinate' />
        </div>

        <NavigateContacts
          handleNextContact={this.handleNextContact.bind(this)}
          handlePrevContact={this.handlePrevContact.bind(this)} />

        <div className='contact-card-wrapper'>
          <ContactCard oneContact={this.getOneContact()} />
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(SortContactContainer)
