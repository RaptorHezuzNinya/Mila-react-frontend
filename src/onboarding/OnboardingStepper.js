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
            label: 'PIJDRIVE',
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

  getStepContent(stepIndex) {
    const {otherTools, displayOtherTools} = this.state
    switch (stepIndex) {
      case 0:
        return <ScanningContacts />
      case 1:
        return <ConnectTools displayOtherTools={displayOtherTools} toggleTools={this.toggleTools.bind(this)} otherTools={otherTools} />
      case 2:
        return <CreateLists />
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderStepbutton = (stepIndex) => {
    if (stepIndex === 0) return `OK, LET'S GET STARTED`;
    if (stepIndex === 1) return 'Next';
    if (stepIndex === 2) return 'Finish';
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
                {!(stepIndex === 0) &&
                <FlatButton
                  label="Back"
                  disabled={(stepIndex === 0)}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
              }
                <FlatButton
                  label={this.renderStepbutton(stepIndex)}
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
