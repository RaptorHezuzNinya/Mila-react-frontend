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
import ConnectTools from './ConnectTools'
import CreateLists from './CreateLists'

// Styles
import './Onboarding.sass'

class OnboardingStepper extends PureComponent {
  constructor(props){
    super(props)
      this.state = {
        finished: false,
        stepIndex: 0,
        stepperwidth: 450,
        displayOtherTools: false,
        otherTools: [
          {
            label: 'CONNECT TO MAILCHIMP',
            icon: 'https://static.mailchimp.com/web/brand-assets/logo-freddie-fullcolor.svg',
          },
          {
            label: 'PIPEDRIVE',
            icon: 'http://cdn.appstorm.net/web.appstorm.net/files/2011/08/pipedrive-icon.png',
          },
          {
            label: 'HIGHRISE',
            icon: 'https://rocketdock.com/images/screenshots/Highrise.png',
          },
          {
            label: 'EVENTBRITE',
            icon: 'http://reviewzd.com/wp-content/uploads/2015/11/eventbrite-7976d2df30d02333a69549d4a7f86890.png',
          },
          {
            label: 'REVUE',
            icon: 'http://a5.mzstatic.com/eu/r30/Purple69/v4/bf/b4/ce/bfb4ce49-14cd-f00c-5d13-466acb8703a3/icon175x175.png',
          },
          {
            label: 'CAMPAIGN MONITOR',
            icon: 'https://ffb2efd5105ff0aedbc9-9cdacdeebf0faa19b665bf427f0c8092.ssl.cf1.rackcdn.com/img/campaign-monitor.png',
          },
        ]

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
        return <ConnectTools displayOtherTools={displayOtherTools} toggleTools={this.toggleTools.bind(this)} otherTools={otherTools} />
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

    console.log(stepIndex, this.state.finished, 'render')
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
            <StepLabel className='steplabel'>Connect tools</StepLabel>
            <StepContent>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
          </StepContent>
          </Step>
          <Step >
            <StepLabel className="steplabel">Create lists</StepLabel>
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
