import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../../store'
import Media from 'react-media'
import classNames from 'classNames'
import {
  incrStepIndex,
  decrStepIndex,
  incrListCount,
  decrListCount,
  showProceedWarn,
  hideProceedWarn
} from '../../actions/onboarding'
import StepContentCopy from './StepContentCopy'
import CreateListsContainer from './CreateListsContainer'
import ProceedWarning from '../ProceedWarning'
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper'
import FlatButton from 'material-ui/FlatButton'
import './OnboardingStepper.sass'
import { inlineOnboardingStepperStyles as styles } from '../../helpers/inlineStyles'

class OnboardingStepper extends PureComponent {
  static propTypes = {
    incrStepIndex: PropTypes.func.isRequired,
    decrStepIndex: PropTypes.func.isRequired,
    incrListCount: PropTypes.func.isRequired,
    decrListCount: PropTypes.func.isRequired,
    showProceedWarn: PropTypes.func.isRequired,
    hideProceedWarn: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      stepperwidth: 450
    }
    this.disableProceedWarn = this.disableProceedWarn.bind(this)
    this.addListCount = this.addListCount.bind(this)
    this.lowerListCount = this.lowerListCount.bind(this)
  }

  componentDidMount() {
    this.props.requestNetworkLists()
  }

  handleNext = () => {
    const { stepIndex, incrStepIndex, listCount, showProceedWarn, proceedWarning } = this.props
    if (stepIndex === 1 && listCount <= 1) {
      return showProceedWarn()
    }
    incrStepIndex(stepIndex)
  }

  handlePrev = () => {
    const { stepIndex, decrStepIndex, hideProceedWarn } = this.props
    decrStepIndex(stepIndex)
    if (stepIndex > 0) {
      return hideProceedWarn()
    }
  }

  addListCount = () => {
    const { listCount, incrListCount } = this.props
    return incrListCount(listCount)
  }

  lowerListCount = () => {
    const { listCount, decrListCount } = this.props
    return decrListCount(listCount)
  }

  disableProceedWarn = () => {
    const { hideProceedWarn } = this.props
    return hideProceedWarn()
  }

  getStepContent(stepIndex) {
    const { listCount } = this.props
    switch (stepIndex) {
      case 0:
        return (
          <StepContentCopy holderClass="scanning-inbox">
            <h3>{'Hi #{username}!'}</h3>
            <p className="parag-one">I am Mila. Nice to meet you.</p>
            <p className="parag-two">
              I’ve already started scanning your inbox in the background. From now on, it’s my job to keep track of all the valuable contacts in your inbox.
            </p>
          </StepContentCopy>
        )
      case 1:
        return (
          <CreateListsContainer
            disableProceedWarn={this.disableProceedWarn}
            addListCount={this.addListCount}
            lowerListCount={this.lowerListCount}
          />
        )
      case 2:
        return (
          <StepContentCopy holderClass="startsorting-holder">
            <h3>Alright!</h3>
            <p>
              You can always sync your lists with any newsletter or sales tool. But let's worry about that later.
            </p>
            <p>
              Lets's start sorting the 25 most interesting people I found!
            </p>
          </StepContentCopy>
        )
      default:
        return history.push('/sortcontact')
    }
  }

  renderStepbutton = stepIndex => {
    switch (stepIndex) {
      case 0:
        return 'Great!'
      case 1:
        return 'Go to contacts'
      case 2:
        return 'Get Started!'
      default:
        return 'Great!'
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
        <Media
          query="(min-width: 769px)"
          render={() => <FlatButton className="btn-grey" label="Back" onClick={this.handlePrev} />}
        />
      )
    }
    return (
      <div>
        <div className="onboarding-next">
          <div className="warning-holder">
            <ProceedWarning
              holderClass="warning"
              textClass="proceed-warning"
              warningText="You need atleast 2 lists to proceed"
              proceedWarning={proceedWarning}
            />
          </div>
          <div className={btnholderClass}>
            {backBtn}
            <FlatButton
              className={btnClass}
              label={this.renderStepbutton(stepIndex)}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { finished, stepperwidth } = this.state
    const { orientation, stepIndex, listCount } = this.props
    const stepWrapClass = classNames({
      'stepper-wrapper': true,
      'step-wrap-step1-desk': stepIndex === 1
    })
    return (
      <div className={stepWrapClass}>
        <Stepper activeStep={stepIndex} orientation={orientation} style={styles.stepper}>
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
          <Step>
            <StepLabel className="steplabel">Start sorting</StepLabel>
            <StepContent>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
            </StepContent>
          </Step>
        </Stepper>
        <Media
          query="(min-width: 769px)"
          render={() => (
            <div className="desktop-stepcontent">
              {this.getStepContent(stepIndex)}
              {this.renderStepActions()}
            </div>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stepIndex: state.onboarding.stepIndex,
    listCount: state.onboarding.listCount,
    proceedWarning: state.onboarding.proceedWarning
  }
}

export default connect(mapStateToProps, {
  incrStepIndex,
  decrStepIndex,
  incrListCount,
  decrListCount,
  showProceedWarn,
  hideProceedWarn
})(OnboardingStepper)
