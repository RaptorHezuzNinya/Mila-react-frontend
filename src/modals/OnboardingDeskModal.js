import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// Components
import OnboardingStepper from '../onboarding/OnboardingStepper'
// actions
import { hideModal } from '../actions/modals/index'
// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const customContentStyle = {
  width: '700px',
  height: '500px'
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
      <div>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <OnboardingStepper orientation='horizontal'/>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, {hideModal})(OnboardingDeskModal)
