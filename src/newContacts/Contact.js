import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions & Reducers
import contact from '~/reducers/contacts'
import updateContact from '~/actions/contacts/update'

// Material UI Components
import { Card, CardHeader, CardActions, CardText, CardMedia, CardTitle } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

// Styles
import './Contact.sass'
import '~/assets/styles/base/colors.sass'
import avatar from '~/assets/images/icons/user-blue.jpg'

const styles = {
  name: {
    fontWeight: 500,
    letterSpacing: 0.3
  },
  underlineStyle: {
    borderColor: 'rgba(0, 0, 0, 0)'
  },
  underlineFocusStyle: {
    borderWidth: 0.5
  },
  iconStyle: {
    color: '#f2f6fa',
    fontSize: 40
  },
  button: {
    height: 100,
    width: 100
  },
  hoveredStyle: {
    backgroundColor:'rgba(41, 47, 54, 0.3)'
  },
  avatar: {
    height: '100%',
    width: 'auto',
    borderRadius: 0
  },
  fontWeight: 300,
  letterSpacing: 0.3
}

class Contact extends PureComponent {

  static propTypes = {
    updateContact: PropTypes.func.isRequired
  }

  state = {
    contactId: this.props.contactId,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    companyRole: this.props.companyRole,
    companyName: this.props.companyName,
    email: this.props.email,
    avatar: this.props.avatar,
    message: this.props.message
  }

  saveContact(event){
    event.preventDefault()
    const { contactId, firstName, lastName, companyRole, companyName, email } = this.state

    this.props.updateContact(this.state)

    console.log('after save', contact)
  }

  handleChange = (event) => {
    const field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }

  render() {

    const { contactId, firstName, lastName, companyRole, companyName, email, avatar, message } = this.props

    console.log('logging props', this.props)
    console.log('logging state', this.state)

    return (
      <div className="container">
        <Card className="contact-card-element">
          <div className="contact-card">
            <div className="contact-card-input">

              <div className="contact-card-row-top">
                <TextField
                  className="contact-card-firstname"
                  type="text"
                  ref="firstName"
                  hintText="First Name"
                  name="firstName"
                  value={this.state.firstName || ''}
                  onChange={this.handleChange}
                  inputStyle={styles.name}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />

                <TextField
                  className="contact-card-lastname"
                  type="text"
                  ref="lastName"
                  hintText="Last Name"
                  name="lastName"
                  value={this.state.lastName || ''}
                  onChange={this.handleChange}
                  inputStyle={styles.name}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
              </div>

              <div className="contact-card-row-bottom">
                <TextField
                  className="contact-card-inputfield"
                  type="text"
                  ref="companyRole"
                  hintText="Company Role"
                  name="companyRole"
                  value={this.state.companyRole || ''}
                  onChange={this.handleChange}
                  inputStyle={styles}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />

                <TextField
                  className="contact-card-inputfield"
                  type="text"
                  ref="companyName"
                  hintText="Company Name"
                  name="companyName"
                  value={this.state.companyName || ''}
                  onChange={this.handleChange}
                  inputStyle={styles}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
              </div>

              <TextField
                className="contact-card-inputfield"
                type="text"
                ref="email"
                hintText="Email"
                name="email"
                value={this.state.email || ''}
                onChange={this.handleChange}
                inputStyle={styles}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
              />
            </div>

            <div className="contact-card-avatar">
              <Avatar
                className="contact-card-avatar-img"
                style={styles.avatar}
                src={this.props.avatar}
              />
              <div className="social-media-bar">
                <a href="#">f</a>
                <a href="#">li</a>
                <a href="#">t</a>
              </div>
            </div>
          </div>

          <div className="contact-card-message">
            {this.props.message}
          </div>
        </Card>

        <div className="button-contact-navigate">
          <IconButton
            iconClassName="material-icons"
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyle}
            style={styles.button}
            onClick={this.saveContact.bind(this)}>
            navigate_next
          </IconButton>
        </div>
        <br/>

      </div>
    )
  }
}

export default connect(null, { updateContact })(Contact)
