import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Media from 'react-media'
import classNames from 'classNames'
// actions
import { addStepIndex } from '../actions/onboarding'
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
      finished: false,
      // stepIndex: 0,
      stepperwidth: 450,
      displayOtherTools: false,
      listCount: 0,
      proceedWarning: false
    }
  };

  handleNext = () => {
    const { listCount } = this.state
    const { stepIndex } = this.props
    return this.props.addStepIndex(stepIndex)
    // if (stepIndex === 1 && listCount <= 1) {
    //   return (
    //     this.setState({
    //       proceedWarning: true
    //     })
    //   );
    // };
    // this.setState({
    //   stepIndex: stepIndex + 1,
    //   finished: stepIndex >= 2,
    // });
  };

  handlePrev = () => {
    const {stepIndex} = this.props
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        proceedWarning: false
      });
    }
  };

  addListCount = () => {
    const { listCount } = this.state
    this.setState({
      listCount: listCount + 1
    })
  }

  lowerListCount = () => {
    const { listCount } = this.state
    this.setState({
      listCount: listCount - 1
    })
  }

  disableProceedWarn = () => {
    this.setState({
      proceedWarning: false
    })
  }

  getStepContent(stepIndex) {
    const { listCount } = this.state
    switch (stepIndex) {
      case 0:
        return <ScanningInbox />
      case 1:
        return <CreateListsContainer
                disableProceedWarn={this.disableProceedWarn.bind(this)}
                addListCount={this.addListCount.bind(this)}
                lowerListCount={this.lowerListCount.bind(this)} />
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
    const { stepIndex, listCount, proceedWarning } = this.state
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
            <ProceedWarning proceedWarning={ proceedWarning }/>
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
    const { stepIndex, stepperwidth } = this.state
    console.log('STEP INDEX', stepIndex)
    const { orientation } = this.props
    const stepWrapClass = classNames({
      'stepper-wrapper': true,
      'step-wrap-step1-desk': stepIndex === 1
    })
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

export default OnboardingStepper
