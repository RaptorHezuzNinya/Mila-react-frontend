import React, { PureComponent, PropTypes } from 'react'
import './ContactDetails.sass'

class ContactDetails extends PureComponent {
  static propTypes = {
    oneContact: PropTypes.array.isRequired
  }

  renderContactDetails () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='' key={c.contactId}>
          <div className='detail-item'>{c.firstName}</div>
          <div className='detail-item'>{c.lastName}</div>
          <div className='detail-item'>{c.companyName}</div>
          <div className='detail-item'>{c.companyRole}</div>
          <div className='detail-item'>{c.email}</div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='contact-details-holder'>
        {this.renderContactDetails()}
      </div>
    )
  }
}
export default ContactDetails
