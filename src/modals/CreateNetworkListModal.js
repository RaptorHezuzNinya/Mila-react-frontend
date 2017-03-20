import React, { PureComponent } from 'react'

// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const customContentStyle = {
  width: '50%',
  height: '500px',
  maxWidth: 'none',
}

class CreateNetworkListModal extends PureComponent {
  state = {
    open: true
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render(){
    return (
      <div>
        <h1>createNetworkListModal</h1>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
        Only actions can close this dialog.
        </Dialog>
      </div>
    )
  }
}

export default CreateNetworkListModal
