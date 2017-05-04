import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import './ContactCard.sass'
import { inlineContactCardStyles as styles } from '../../helpers/inlineStyles'

class ContactCard extends PureComponent {
  constructor(props) {
    super(props)

  }
  renderContactDetails () {
    const { contact } = this.props
    return contact.map((c) => {
      return (
        <div className='details-holder'>
          <div className='detail-item'>{c.firstName}</div>
          <div className='detail-item'>{c.lastName}</div>
          <div className='detail-item'>{c.companyName}</div>
          <div className='detail-item'>{c.companyRole}</div>
          <div className='detail-item'>{c.email}</div>
        </div>
      )
    })
  }

  renderContactAvatar () {
    const { contact } = this.props
    return contact.map((c) => {
      return (
        <div className='avatar-holder'>
          <img src={c.avatar} alt='user avatar'/>
        </div>
      )
    })
  }
  renderContactEmail () {
    const { contact } = this.props
    return contact.map((c) => {
      return (
        <div className='email-header-holder'>
          <p>{c.message}</p>
        </div>
      )
    })
  }

  render () {
    const { contact } = this.props
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
