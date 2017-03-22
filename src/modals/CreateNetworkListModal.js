import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// actions
import hideModal from '../actions/modals/hide-modal'

// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'

// styling
import './CreateNetworkListModal.sass'

const styles = {
  customContentStyle: {
    width: '540px',
  },
  hintStyle: {
    color: '#737a80',
    fontSize: 14,
    fontWeight: 100
  }
}

class CreateNetworkListModal extends PureComponent {
  state = {
    open: true
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
          className="create-list-modal"
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <h1>Create NetworkList Modal</h1>
          <Paper className="paper-create-list"/>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, { hideModal } ) (CreateNetworkListModal)
