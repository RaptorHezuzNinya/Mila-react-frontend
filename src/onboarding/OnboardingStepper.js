import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'
import classNames from 'classNames'
// actions
import { incrStepIndex, decrStepIndex, incrListCount, decrListCount, showProceedWarn, hideProceedWarn } from '../actions/onboarding'
//Components
import ScanningInbox from './ScanningInbox'
import CreateListsContainer from './CreateListsContainer'
import ProceedWarning from './ProceedWarning'
import StartSorting from './StartSorting'
// Material UI Components
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper'
import FlatButton from 'material-ui/FlatButton'
// Styles
import './OnboardingStepper.sass'

const styles = {
  stepper: {
    backgroundColor: '#ffffff'
  }
}

class OnboardingStepper extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      // finished: false, after step 2, finished on true so can add a link to the GETSTARTED button to bring them to contact sort
      stepperwidth: 450,
    }
    this.disableProceedWarn = this.disableProceedWarn.bind(this)
    this.addListCount = this.addListCount.bind(this)
    this.lowerListCount = this.lowerListCount.bind(this)
  };

  handleNext = () => {
    const { stepIndex, incrStepIndex, listCount, showProceedWarn } = this.props
    if (stepIndex === 1 && listCount <= 1) {
      return showProceedWarn()
    }
    incrStepIndex(stepIndex)
  };

  handlePrev = () => {
    const { stepIndex, decrStepIndex, hideProceedWarn } = this.props
    decrStepIndex(stepIndex)
    if (stepIndex > 0) {
      hideProceedWarn()
    }
  };

  addListCount = () => {
    const { listCount, incrListCount } = this.props
    incrListCount(listCount)
  }

  lowerListCount = () => {
    const { listCount, decrListCount } = this.props
    decrListCount(listCount)
  }

  disableProceedWarn = () => {
    this.props.hideProceedWarn()
  }

  getStepContent(stepIndex) {
    const { listCount } = this.props
    switch (stepIndex) {
      case 0:
        return <ScanningInbox />
      case 1:
        return <CreateListsContainer
                disableProceedWarn={this.disableProceedWarn}
                addListCount={this.addListCount}
                lowerListCount={this.lowerListCount} />
      case 2:
        return <StartSorting />
      default:
        return <ScanningInbox />
    }
  }

  renderStepbutton = (stepIndex) => {
    switch (stepIndex) {
      case 0 :
        return 'Great!';
      case 1:
        return 'Go to contacts';
      case 2:
        return 'Get Started!';
      default:
        return 'Great!';
    }
  }

  renderStepActions() {
    const { stepIndex, listCount, proceedWarning } = this.props
    const btnClass = classNames({
      'btn-green': true,
      'btn-desktop': stepIndex === 0 || stepIndex === 2,
      'btn-desktop-step1': stepIndex === 1
    })
    const btnholderClass = classNames({
      'buttons-holder': true,
      'buttons-holder-step1': stepIndex === 1 || stepIndex === 2
    })
    let backBtn
    if (stepIndex < 1) {
      backBtn = null
    } else {
      backBtn = (
        <Media query='(min-width: 769px)' render={() => (
          <FlatButton
            className='btn-grey'
            label='Back'
            primary={true}
            onTouchTap={this.handlePrev}
          />
        )}/>
      )
    }
    return (
      <div>
        <div className='onboarding-next'>
          <div className='warning-holder'>
            <ProceedWarning proceedWarning={proceedWarning}/>
          </div>
          <div className={btnholderClass}>
            {backBtn}
            <FlatButton
              className={ btnClass }
              label={this.renderStepbutton(stepIndex)}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { stepperwidth } = this.state
    const { orientation, stepIndex, listCount } = this.props
    const stepWrapClass = classNames({
      'stepper-wrapper': true,
      'step-wrap-step1-desk': stepIndex === 1
    })
    console.log(stepIndex, listCount)
    return (
      <div className={ stepWrapClass }>
        <Stepper activeStep={stepIndex} orientation={orientation} style={styles.stepper}>
          <Step >
            <StepLabel className="steplabel">Scanning your inbox</StepLabel>
            <StepContent>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
            </StepContent>
          </Step>
          <Step>
            <StepLabel className="steplabel">Create lists</StepLabel>
            <StepContent>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
            </StepContent>
          </Step>
          <Step >
            <StepLabel className="steplabel">Start sorting</StepLabel>
            <StepContent>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
            </StepContent>
          </Step>
        </Stepper>
        <Media query="(min-width: 769px)" render={() => (
          <div className="desktop-stepcontent">
            {this.getStepContent(stepIndex)}
            {this.renderStepActions()}
          </div>
        )}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stepIndex: state.onboarding.stepIndex,
    listCount: state.onboarding.listCount,
  }
}

export default connect(mapStateToProps, {incrStepIndex, decrStepIndex, incrListCount, decrListCount})(OnboardingStepper)
