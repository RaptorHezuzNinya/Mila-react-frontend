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
    fontWeight: 100,
    fontFamily: 'Montserrat-Light'
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
      <div className="modal-wrapper">
        <Dialog
          className="createlist-dialog"
          // title="Dialog With Actions"
          modal={true}
          contentStyle={styles.customContentStyle}
          open={this.state.open}
        >

          <div className="cl-header">
            <h2>Create a new Mila list</h2>
            <h3>Use lists to group your contacts</h3>
          </div>
          <div className="cl-body">
            <p className="list-name">LIST NAME</p>
            <p className="char-count"> 25 left</p>
            <TextField hintStyle={styles.hintStyle} className="list-input" hintText="Type a list name, e.g. Top clients, freelancers, potential investors"></TextField>
          </div>

        </Dialog>
      </div>
    )
  }
}

export default connect(null, { hideModal } ) (CreateNetworkListModal)
