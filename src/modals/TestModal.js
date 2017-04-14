import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// actions
import { hideModal } from '../actions/modals/index'

// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const customContentStyle = {
  width: '50%',
  height: '500px',
  maxWidth: 'none',
}

class TestModal extends PureComponent {
  state = {
    open: true
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
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
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
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
        <h1>Test Modal</h1>
        Only actions can close this dialog.
        </Dialog>
      </div>
    )
  }
}

export default connect(null, { hideModal } ) (TestModal)
