import React, { PureComponent, PropTypes } from 'react'
// Components
import OnboardingDeskModal from '../modals/OnboardingDeskModal'
import OnboardingStepper from './OnboardingStepper'
import ButtonModal from '../modals/ButtonModal'
import ModalRoot from '../modals/ModalRoot'
// Styles
import './Onboarding.sass'

class Onboarding extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      mobileView: false
    }
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onResize () {
    const width = window.innerWidth
    if (width <= 769) {
      console.log('in &&&&')
      this.setState({
        mobileView: true,
      })
    } else {
      this.setState({
        mobileView: false,
      })
    }
  }


  render() {

    const { onboardingDeskModal, mobileView } = this.state
    console.log('innewidth', window.innerWidth)
    let onboardingStepper
    if (mobileView) {
      console.log('WHEN DO I GET CALLED XX')
      return <OnboardingStepper />
    } else {
      console.log('WHEN DO I GET CALLED YY')
      return <OnboardingDeskModal />
    }
    return (
      <div>
        { OnboardingStepper }
      </div>
    )
  }
}

export default connect(null, {showModal, hideModal})(Onboarding)

// {/* <ButtonModal usedStyle='' label='Start onboard desk' modal={ onboardingDeskModal } /> */}
// () => this.props.dispatch(this.props.showModal(this.state.onboardingDeskModal))
