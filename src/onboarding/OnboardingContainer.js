import React, { PureComponent, PropTypes } from 'react'

//Components
import Onboarding from './Onboarding'

class OnboardingContainer extends PureComponent {

  render() {
    return (
      <div className="onboarding-container">
        <Onboarding/>
      </div>
    )
  }
}

export default OnboardingContainer
