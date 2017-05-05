import React, { PureComponent, PropTypes } from 'react'
import ContactDetails from './ContactDetails'
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

        <Paper style={styles.paper} zDepth={2}>
          <div className='paper-content-holder'>
            {/* {this.renderContactDetails()} */}
            <ContactDetails oneContact={oneContact} />
            {this.renderContactAvatar()}
            {this.renderContactEmail()}
          </div>
        </Paper>

      </div>
    )
  }
}

export default ContactCard
