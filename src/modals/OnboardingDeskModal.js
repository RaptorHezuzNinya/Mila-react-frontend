import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// Components
import OnboardingStepper from '../onboarding/OnboardingStepper'
// actions
import { hideModal } from '../actions/modals/index'
// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// styles
import './OnboardingDeskModal.sass'

const styles = {
  bodyStyle: {
    padding: 0
  },
  customContentStyle: {
    width: '700px',
    height: '500px',
    color: 'green'
  }
}
class OnboardingDeskModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.hideModal()
  }

  render(){
    const actions = [
      // <FlatButton
      //   label="Cancel"
      //   primary={true}
      //   onTouchTap={this.handleClose}
      // />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ]

    return (
      <Dialog
        contentClassName="onboard-desk-modal"
        actions={actions}
        modal={true}
        contentStyle={customContentStyle}
        open={this.state.open}
      >
        <OnboardingStepper orientation='horizontal'/>
      </Dialog>
    )
  }
}

export default connect(null, {hideModal})(OnboardingDeskModal)
