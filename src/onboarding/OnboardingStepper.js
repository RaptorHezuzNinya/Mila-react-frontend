import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import FlatButton from 'material-ui/FlatButton'

//Components
import ScanningContacts from './ScanningContacts'
import ConnectTools from './ConnectTools'
import CreateLists from './CreateLists'

// Styles
import './onboarding.sass'

class OnboardingStepper extends PureComponent {

  state = {
    finished: false,
    stepIndex: 0,
    stepperwidth: 450,
  };

  componentWillMount(){
    if(document.documentElement.clientWidth < 500) {
      this.setState({ stepperwidth: 450});
    } else {
      let update_width  = document.documentElement.clientWidth-100;
      this.setState({ stepperwidth: update_width});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    if(document.documentElement.clientWidth < 500) {
      this.setState({ stepperwidth: 450});
    } else {
      let update_width  = document.documentElement.clientWidth-100;
      this.setState({ stepperwidth: update_width});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
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

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <ScanningContacts />
      case 1:
        return <ConnectTools />
      case 2:
        return <CreateLists />
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex, stepperwidth} = this.state;
    const contentStyle = {width: '100%'};

    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Stepper ref="stepperwrapper" activeStep={stepIndex} orientation={ stepperwidth <= 700  ? 'vertical' : 'horizontal'}>
          <Step>
            <StepLabel className="steplabel">Scanning contacts</StepLabel>
          </Step>
          <Step className="steplabel">
            <StepLabel>Connect tools</StepLabel>
          </Step>
          <Step className="steplabel">
            <StepLabel>Create lists</StepLabel>
          </Step>
        </Stepper>

        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div className="step-content">
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <FlatButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OnboardingStepper
