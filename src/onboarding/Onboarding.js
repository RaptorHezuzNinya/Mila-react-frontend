import React, { PureComponent, PropTypes } from 'react'
// Components
import OnboardingStepper from './OnboardingStepper'
import ButtonModal from '../modals/ButtonModal'
import ModalRoot from '../modals/ModalRoot'
// Styles
import './Onboarding.sass'

class Onboarding extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      modalProperties: {
        onboardingDeskModal: 'ONBOARDING_DESK_MODAL'
      }
    }
  }

  render() {
    const { onboardingDeskModal } = this.state.modalProperties
    return (
      <div>
        <div>
          <OnboardingStepper />
        </div>
        <div className=''>

          <ButtonModal usedStyle='' label='Start onboard desk' Onboard modal={ onboardingDeskModal } />
        </div>
      </div>
    )
  }
}

export default Onboarding
