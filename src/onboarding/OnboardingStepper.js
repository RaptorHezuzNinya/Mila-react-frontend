import React, { PureComponent, PropTypes } from 'react'
import Media from 'react-media'
import classNames from 'classNames'
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
      stepIndex: 0,
      stepperwidth: 450,
      displayOtherTools: false,
      listCount: 0,
      appended: false

    }
  };

  handleNext = () => {
    const { stepIndex, listCount } = this.state;
    if (stepIndex === 1 && listCount <= 1) {
      return (
        this.setState({
          appended: true
        })
      );
    };
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  addListCount = () => {
    const { listCount } = this.state
    this.setState({
      listCount: listCount + 1
    })
    this.disableAppended()
  }

  lowerListCount = () => {
    const { listCount } = this.state
    this.setState({
      listCount: listCount - 1
    })
  }

  disableAppended = () => {
    const { listCount } = this.state
    if (listCount >= 1) {
      this.setState({
        appended: false
      })
    }
  }

  getStepContent(stepIndex) {
    const { listCount } = this.state
    switch (stepIndex) {
      case 0:
        return <ScanningInbox />
      case 1:
        return <CreateListsContainer addListCount={this.addListCount.bind(this)} lowerListCount={this.lowerListCount.bind(this)}/>
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
    const { stepIndex, listCount, appended } = this.state
    const btnClass = classNames({
      'btn-green': true,
      'btn-desktop': stepIndex === 0 || stepIndex === 2,
      'btn-desktop-step1': stepIndex === 1
    })
    const btnholderClass = classNames({
      'buttons-holder': true,
      'buttons-holder-step1': stepIndex === 1
    })
    return (
      <div>
        <div className='onboarding-next'>
          <div className='warning-holder'>
            <ProceedWarning appended={ appended }/>
          </div>
          <div className={btnholderClass}>
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
    const { stepIndex, stepperwidth } = this.state;
    const { orientation } = this.props
    console.log('STEPINDEX:', stepIndex)
    return (
      <div className={ stepIndex === 1 ? 'step-wrap-step1-desk' : 'stepper-wrapper' }>
        <Stepper activeStep={stepIndex} orientation={orientation} style={styles.stepper} className="stepper">
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
