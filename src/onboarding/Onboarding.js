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
      onboardingDeskModal: 'ONBOARDING_DESK_MODAL',
      viewWidth: document.documentElement.clientWidth
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize.bind(this))
  }

  onResize () {
    const width = document.documentElement.clientWidth
    this.setState({
      viewWidth: width
    })

  }

  render() {
    const { onboardingDeskModal, viewWidth } = this.state
    console.log('logging VIEWWIDTH:', viewWidth)

    let onboardingStepper
    if (viewWidth <= 769) {
      console.log('WHEN DO I GET CALLED 1')
      return <OnboardingStepper />
    } else {
      console.log('WHEN DO I GET CALLED 2')
      return <ButtonModal usedStyle='' label='Start onboard desk' modal={ onboardingDeskModal } />
    }
    return (
      <div>
        { OnboardingStepper }
      </div>
    )
  }
}

export default Onboarding
