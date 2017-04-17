import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper'
import FlatButton from 'material-ui/FlatButton'

//Components
import ScanningInbox from './ScanningInbox'
import CreateListsContainer from './CreateListsContainer'
import ProceedWarning from './ProceedWarning'
import StartSorting from './StartSorting'

// Styles
import './OnboardingStepper.sass'

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

  componentDidMount() {
    // window.addEventListener('resize', this.onResize.bind(this));
    // this.onResize()
  }

  // onResize() {
  //   if(document.documentElement.clientWidth < 500) {
  //     this.setState({ stepperwidth: 450});
  //   } else {
  //     let update_width  = document.documentElement.clientWidth-100;
  //     this.setState({ stepperwidth: update_width});
  //   }
  // }

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
    const { stepIndex, listCount, appended } = this.state;

    console.log('logging listcount', listCount)
    return (
      <div>
        <div className="onboarding-next">
          <FlatButton
            className="btn-green"
            label={this.renderStepbutton(stepIndex)}
            primary={true}
            onTouchTap={this.handleNext}
          />
          <ProceedWarning appended={ appended }/>
        </div>
      </div>
    );
  }

  render() {
    const { stepIndex, stepperwidth } = this.state;
    console.log('logging stepIndex:', stepIndex)
    return (
      <div className="stepper-wrapper">
        <Stepper activeStep={stepIndex} orientation='vertical' >
          <Step>
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
        <div>
      </div>
    </div>
    )
  }
}

export default OnboardingStepper
