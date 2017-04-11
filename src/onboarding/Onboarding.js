import React, { PureComponent, PropTypes } from 'react'
// Material UI Components
import { Card } from 'material-ui/Card'
// Components
import OnboardingStepper from './OnboardingStepper'
// Styles
import './Onboarding.sass'

const styles = {
  card: {
    height: '100vh'
  }
}

class Onboarding extends PureComponent {

  render() {
    return (
      <div className="onboarding-card">
        <Card style={styles.card}>
          <OnboardingStepper />
        </Card>
      </div>
    )
  }
}

export default Onboarding
