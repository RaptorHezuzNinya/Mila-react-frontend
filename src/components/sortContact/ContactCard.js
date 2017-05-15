import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateContact } from '../../actions/contacts'
import ContactDetails from './ContactDetails'
import Paper from 'material-ui/Paper'
import './ContactCard.sass'
import { inlineContactCardStyles as styles } from '../../helpers/inlineStyles'

class ContactCard extends PureComponent {
  constructor(props) {
    super(props)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    oneContact: PropTypes.array.isRequired
  }

  renderContactAvatar () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='avatar-holder' key={c.id}>
          <img src={c.avatar} alt='user avatar'/>
        </div>
      )
    })
  }

  renderContactEmail () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='email-header-holder' key={c.id}>
          <p>{c.message}</p>
        </div>
      )
    })
  }

  // onSubmit (formData, id) {
  //   const { oneContact } = this.props
  //   const contactId = oneContact[0].id
  //   this.props.updateContact(formData, contactId)
  //   console.log('submitted?', formData)
  // }

  render () {
    const { oneContact } = this.props
    return (
      <div className='contact-card-holder'>
        <Paper style={styles.paper} zDepth={2}>
          <div className='paper-content-holder'>
            <ContactDetails oneContact={oneContact} />
            {this.renderContactAvatar()}
            {this.renderContactEmail()}
          </div>
        </Paper>
      </div>
    )
  }
}

export default connect(null, { updateContact })(ContactCard)
