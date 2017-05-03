import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OnboardingStepper from '../onboarding/OnboardingStepper'
import { hideModal } from '../../actions/modals/index'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import './OnboardingDeskModal.sass'

const styles = {
  dialogRoot: {
    display: 'flex',
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

    return (
      <Dialog
        contentClassName="onboard-desk-modal"
        style={styles.dialogRoot}
        bodyStyle={styles.bodyStyle}
        contentStyle={styles.customContentStyle}
        autoScrollBodyContent={true}
        modal={true}
        open={this.state.open}
      >
        <OnboardingStepper orientation='horizontal'/>
      </Dialog>
    )
  }
}

export default connect(null, {hideModal})(OnboardingDeskModal)
