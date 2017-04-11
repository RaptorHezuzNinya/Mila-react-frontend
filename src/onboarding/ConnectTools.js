import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import MailChimp from '../assets/images/icons/mailchimp-logo.svg'
import ToolButton from './ToolButton'


// Styles
import './Onboarding.sass'

class ConnectTools extends PureComponent {

  clickDo() {
    const {toggleTools} = this.props
    this.props.toggleTools()
  }

  renderTools(tool, index) {
    return <ToolButton key={index} {...tool}/>
  }

  render() {
    const {displayOtherTools, otherTools} = this.props
    const mailchimp = otherTools.slice(0,1)[0]
    const rest = otherTools.slice(1)
    console.log(mailchimp.label)
    return (
      <div className="connect-tools">
        <h1>Do you send a newsletter?</h1>
        <p>
          Do you already keep email lists in a tool like MailChimp? Let's use them.
        </p>
        <ToolButton label={mailchimp.label} icon={mailchimp.icon} />
        <FlatButton label='CONNECT TO OTHER SERVICES' onClick={this.clickDo.bind(this)} />
         {displayOtherTools && rest.map(this.renderTools.bind(this))}
      </div>
    )

  }

}

export default ConnectTools
