import React, { PureComponent, PropTypes } from 'react'
// Material UI Components
// Components
import OnboardingStepper from './OnboardingStepper'
// Styles
import './Onboarding.sass'

class Onboarding extends PureComponent {

  render() {
    return (
      <div>
        <OnboardingStepper />
      </div>
    )
  }
}

export default Onboarding
