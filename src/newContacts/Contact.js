import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'
import contact from '~/reducers/contacts'
import updateContact from '~/actions/contacts/update'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'

// Styles
import './Contact.sass'
import '../assets/styles/base/colors.sass'

const styles = {
  nameStyle: {
    fontWeight: 600,
    letterSpacing: 0.5
  },
  hintStyle: {
    fontWeight: 300
  }
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

      <div className="card">
        <Card>
          <TextField
            type="text"
            ref="firstName"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName || ''}
            onChange={this.handleChange}
          />

          <TextField
            type="text"
            ref="lastName"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName || ''}
            onChange={this.handleChange}
          />

          <TextField
            type="text"
            ref="companyRole"
            placeholder="Company Role"
            name="companyRole"
            value={this.state.companyRole || ''}
            onChange={this.handleChange}
          />

          <TextField
            type="text"
            ref="companyName"
            placeholder="Company Name"
            name="companyName"
            value={this.state.companyName || ''}
            onChange={this.handleChange}
          />

          <TextField
            type="text"
            ref="email"
            placeholder="Email"
            name="email"
            value={this.state.email || ''}
            onChange={this.handleChange}
          />

          <div className="actions">
            <button onClick={this.saveContact.bind(this)}>save</button>
          </div>
        </Card>
        <br/>
      </div>
    )
  }
}

export default connect(null, { updateContact })(Contact)
