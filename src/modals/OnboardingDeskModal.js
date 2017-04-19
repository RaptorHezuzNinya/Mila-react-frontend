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
  dialogRoot: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px'
  },
  bodyStyle: {
    padding: 0
  },
  customContentStyle: {
    width: '700px',
    height: '100%'
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
      // <FlatButton
      //   label="Submit"
      //   primary={true}
      //   disabled={true}
      //   onTouchTap={this.handleClose}
      // />,
    ]

    return (
      <Dialog
        contentClassName="onboard-desk-modal"
        style={styles.dialogRoot}
        bodyStyle={styles.bodyStyle}
        contentStyle={styles.customContentStyle}
        actions={actions}
        modal={true}
        open={this.state.open}
      >
        <OnboardingStepper orientation='horizontal'/>
      </Dialog>
    )
  }
}

export default connect(null, {hideModal})(OnboardingDeskModal)
