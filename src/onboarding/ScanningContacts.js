import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


// Styles
import './onboarding.sass'

class ScanningContacts extends PureComponent {

  render() {
    return (
      <div className="scanning-contacts">
        <h1>Hi User!</h1>
        <p>I'm Mila. I need about 30-40 seconds to scan your inbox for your contacts.</p>
        <p>In the meantime, tell me how you want to keep in touch with your network.</p>
      </div>
    )
  }
}

export default ScanningContacts
