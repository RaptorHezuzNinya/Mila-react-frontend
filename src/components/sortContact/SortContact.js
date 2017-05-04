import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactCard from './ContactCard'
import ProgressIndicator from './ProgressIndicator'
import PageTitle from '../PageTitle'
import './SortContact.sass'

class SortContact extends PureComponent {

  getOneContact () {
    const { contacts } = this.props
    return contacts.filter((contact) => {
      return contact.contactId === 1
    })
  }

  returnSomeMarkup = (contact) => (
    <div>
      {contact.contactId}
      {contact.firstName}
    </div>
  )

  render () {
    const { contacts } = this.props
    return (
      <div className='sort-contact-wrapper'>
        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2='1 / 1 new contact'
            pageTitleContentH3='since your last vist'/>
          <ProgressIndicator
            mode='determinate' />
        </div>
        <div className='contact-card-wrapper'>
          <ContactCard contact={this.getOneContact().map((contact) => this.returnSomeMarkup(contact))}/>
        </div>
        <div className=''>
          <pre><code>{JSON.stringify(this.getOneContact(), null, 4)}</code></pre>
          { this.getOneContact().map((contact) => this.returnSomeMarkup(contact))}
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

export default connect(mapStateToProps)(SortContact)
