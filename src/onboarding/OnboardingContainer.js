import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

//Components
import Onboarding from './Onboarding'

class OnboardingContainer extends PureComponent {

  render() {
    return (
      <div className="onboarding-container">
        <div><Onboarding/></div>
      </div>
    )
  }
}

export default OnboardingContainer
