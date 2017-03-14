import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

// Components
import OnboardingStepper from './OnboardingStepper'

// Styles
import './onboarding.sass'

class Onboarding extends PureComponent {

  render() {
    return (
      <div className="onboarding-card">
        <Card>
          <OnboardingStepper />
        </Card>
      </div>
    )
  }
}

export default Onboarding
