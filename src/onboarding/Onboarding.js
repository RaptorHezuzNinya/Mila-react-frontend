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
      mobileView: true
    }
  }

  componentDidMount () {
    this.onResize()
    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize.bind(this))
  }

  onResize () {
    const width = window.innerWidth
    console.log('WHEN DO I GET CALLED 1')
    if (width <= 769) {
      this.setState({
        mobileView: true
      })
      console.log('WHEN DO I GET CALLED 2')
    } else {
      this.setState({
        mobileView: false
      })
      console.log('WHEN DO I GET CALLED 3')
    }
  }

  render() {
    
    const { onboardingDeskModal, mobileView } = this.state

    let onboardingStepper
    if (mobileView) {
      console.log('WHEN DO I GET CALLED XX')
      return <OnboardingStepper />
    } else {
      console.log('WHEN DO I GET CALLED YY')
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
