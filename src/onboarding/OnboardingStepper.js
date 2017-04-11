import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import FlatButton from 'material-ui/FlatButton'

//Components
import ScanningContacts from './ScanningContacts'

import CreateLists from './CreateLists'

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
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize()
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
    console.log(stepIndex)
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  toggleTools() {
    const {displayOtherTools} = this.state
    this.setState({displayOtherTools: !displayOtherTools})
  }

  saveList(listName) {
    //this function should fire off action that adds list to store
    console.log("in onboardingstepper")
    return null
  }

  getStepContent(stepIndex) {
    const {otherTools, displayOtherTools} = this.state
    switch (stepIndex) {
      case 0:
        return <ScanningContacts />
      case 1:
        return
      case 2:
        return <CreateLists saveList={this.saveList.bind(this)}/>
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderStepbutton = (stepIndex) => {
    switch (stepIndex) {
      case 0 :
        return 'Great!';
      case 1:
        return 'Next';
      case 2:
        return 'Finish';
      default:
        return 'You\'re a long way from home sonny jim';
    }
  }

  renderStepActions() {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <div>
          {!(stepIndex === 0) &&
            <FlatButton
              label="Back"
              disabled={(stepIndex === 0)}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
          }
        </div>
        <div className="onboarding-next">
          <FlatButton
            className="but-green"
            label={this.renderStepbutton(stepIndex)}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {finished, stepIndex, stepperwidth } = this.state;

    // console.log(stepIndex, this.state.finished, 'render')
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
            <StepLabel className='steplabel'>Create lists</StepLabel>
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
        { finished && (
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
        )}
      </div>
    </div>
    )
  }
}
export default OnboardingStepper
