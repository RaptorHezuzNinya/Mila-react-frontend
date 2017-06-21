import React, { PureComponent } from 'react'
import Media from 'react-media'
import OnboardingDeskModal from '../modals/OnboardingDeskModal'
import OnboardingStepper from './OnboardingStepper'
import './Onboarding.sass'

class Onboarding extends PureComponent {
  render() {
    return (
      <div>
        <Media
          query="(max-width: 769px)"
          render={() => <OnboardingStepper orientation="vertical" />}
        />
        <Media query="(min-width: 769px)" render={() => <OnboardingDeskModal />} />
      </div>
    )
  }
}

export default Onboarding
