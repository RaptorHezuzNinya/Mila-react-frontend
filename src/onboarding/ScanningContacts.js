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
        <h1>Scanning Contacts</h1>
      </div>
    )

  }

}

export default ScanningContacts
