import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { showModal, hideModal } from '../actions/modals/index'
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
    // console.log('WHEN DO I GET CALLED 1')
    if (width <= 769) {
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
