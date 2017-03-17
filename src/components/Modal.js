import React, { PropTypes, PureComponent } from 'react'

// Components
import CreateNetwork from './CreateNetwork'
// material ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

  const customContentStyle = {
    width: '50%',
    height: '500px',
    maxWidth: 'none',
  }

class Modal extends PureComponent {
  state = {
    open: false
  }




  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
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
        <RaisedButton label="+" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <CreateNetwork />
          Only actions can close this dialog.
        </Dialog>
      </div>
    )
  }
}

export default Modal
