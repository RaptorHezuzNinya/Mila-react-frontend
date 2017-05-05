import React, { PureComponent, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import './ContactCard.sass'
import { inlineContactCardStyles as styles } from '../../helpers/inlineStyles'

class ContactCard extends PureComponent {
  constructor(props) {
    super(props)

  }
  static propTypes = {
    oneContact: PropTypes.array.isRequired
  }

  renderContactDetails () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='details-holder' key={c.contactId}>
          <div className='detail-item'>{c.firstName}</div>
          <div className='detail-item'><strong>{c.contactId}</strong></div>
          <div className='detail-item'>{c.lastName}</div>
          <div className='detail-item'>{c.companyName}</div>
          <div className='detail-item'>{c.companyRole}</div>
          <div className='detail-item'>{c.email}</div>
        </div>
      )
    })
  }

  renderContactAvatar () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='avatar-holder' key={c.contactId}>
          <img src={c.avatar} alt='user avatar'/>
        </div>
      )
    })
  }

  renderContactEmail () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='email-header-holder' key={c.contactId}>
          <p>{c.message}</p>
        </div>
      )
    })
  }

  render () {
    const { oneContact } = this.props
    // console.log(oneContact.map((contact) => contact.contactId))
    return (
      <div className='contact-card-holder'>

        <Paper style={styles.paper} zDepth={3}>
          <div className='paper-content-holder'>
            {this.renderContactDetails()}
            {this.renderContactAvatar()}
            {this.renderContactEmail()}
          </div>
        </Paper>

      </div>
    )
  }
}

export default ContactCard
