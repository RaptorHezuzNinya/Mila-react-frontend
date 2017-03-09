import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'
import contact from '~/reducers/contacts'
import updateContact from '~/actions/contacts/update'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'

// Styles
import './Contact.sass'
import '../assets/styles/base/colors.sass'

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
    color: '#292f36',
    fontSize: 60
  },
  hoveredStyle: {
    backgroundColor:'rgba(41, 47, 54, 0.3)'
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
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
    email: this.props.email
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

    const { contactId, firstName, lastName, companyRole, companyName, email } = this.props

    console.log('logging props', this.props)
    console.log('logging state', this.state)

    return (
      <div className="contact-card-container">
        <Card className="contact-card">
            <TextField
              className="contact-card-inputfield"
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
              className="contact-card-inputfield"
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

            <IconButton
              className="button-contact-navigate"
              iconClassName="material-icons"
              hoveredStyle={styles.hoveredStyle}
              iconStyle={styles.iconStyle}
              style={styles.large}
              onClick={this.saveContact.bind(this)}>
              navigate_next
            </IconButton>
        </Card>
        <br/>
      </div>
    )
  }
}

export default connect(null, { updateContact })(Contact)
