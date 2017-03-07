import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'
import contactCard from '~/reducers/contactCards'
import updateContactCard from '~/actions/contactcards/update'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'

// Styles
import './ContactCard.sass'

class ContactCard extends PureComponent {

  static propTypes = {
    updateContactCard: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      contactId: this.props.contactId,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      companyRole: this.props.companyRole,
      companyName: this.props.companyName,
      email: this.props.email
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleCompanyRoleChange = this.handleCompanyRoleChange.bind(this)
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    })
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    })
  }

  handleCompanyRoleChange(event) {
    this.setState({
      companyRole: event.target.value,
    })
  }

  handleCompanyNameChange(event) {
    this.setState({
      companyName: event.target.value,
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  saveContactCard(event){
    event.preventDefault()
    const { contactId, firstName, lastName, companyRole, companyName, email } = this.state

    this.props.updateContactCard(this.state)

    console.log('after save', contactCard)
  }

  render() {
    const { contactId, firstName, lastName, companyRole, companyName, email } = this.props

    console.log('logging props', this.props)
    console.log('logging state', this.state)

    return (

      <div className="card">
        <Card>
          <input
            type="text"
            ref="firstName"
            placeholder="first name"
            defaultValue={this.state.firstName}
            onChange={this.handleFirstNameChange.bind(this)}
          />

          <input
            type="text"
            ref="lastName"
            placeholder="last name"
            defaultValue={this.state.lastName}
            onChange={this.handleLastNameChange.bind(this)}
          />

          <input
            type="text"
            ref="companyRole"
            placeholder="company role"
            defaultValue={this.state.companyRole}
            onChange={this.handleCompanyRoleChange.bind(this)}
          />

          <input
            type="text"
            ref="companyName"
            placeholder="company name"
            defaultValue={this.state.companyName}
            onChange={this.handleCompanyNameChange.bind(this)}
          />

          <input
            type="text"
            ref="email"
            placeholder="email"
            defaultValue={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
          />

          <div className="actions">
            <button onClick={this.saveContactCard.bind(this)}>save</button>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(null, { updateContactCard })(ContactCard)
