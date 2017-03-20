import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import MailChimp from '../assets/images/icons/mailchimp-logo.svg'


// Styles
import './onboarding.sass'

class ConnectTools extends PureComponent {

  clickDo() {
    const {toggleTools} = this.props
    this.props.toggleTools()
  }

  render() {
    const {otherTools} = this.props
    return (
      <div className="connect-tools">
        <h1>Do you send a newsletter?</h1>
        <p>
          Do you already keep email lists in a tool like MailChimp? Let's use them.
        </p>
        <FlatButton
          label="CONNECT TO MAILCHIMP"
          labelPosition="after"
          primary={true}
          icon={<img src='https://static.mailchimp.com/web/brand-assets/logo-freddie-fullcolor.svg' width='30px' height='30px' />}
        />
        <FlatButton
          label='or connect to other tools'
          onClick={this.clickDo.bind(this)}
          primary={true}
          onClick={this.clickDo.bind(this)}
         />
      </div>
    )

  }

}

export default ConnectTools
