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
  },
  // textareaDesc: {
  //   height: 500
  // }
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
          <div className="content-wrapper">
            <div className="cl-header">
              <h2>Create a new Mila list</h2>
              <h3>Use lists to group your contacts</h3>
            </div>

            <div className="listname-container">
              <p className="list-name">LIST NAME</p>
              {/* Hier moet een char count komen input field moet max hebben */}
              <p className="char-count"> 25 left</p>
              <TextField hintStyle={styles.hintStyle}
                         className="list-input"
                         hintText="Type a list name, e.g. Top clients, freelancers, potential investors">
              </TextField>
            </div>

            <div className="descript-container">

              <p className="desc-name">DESCRIPTION (optional)</p>
              {/* Hier moet een char count komen input field moet max hebben */}
              <p className="char-count"> 250 left</p>
              <TextField hintStyle={styles.hintStyle}
                         className="list-input"
                        //  textareaStyle={styles.textareaDesc}
                         hintText="Type a list name, e.g. Top clients, freelancers, potential investors">
              </TextField>
              <div><hr></hr></div>
            </div>
            <div className="cta-container">
              <div className="submit-but">
                <FlatButton
                  label="CREATE"
                  primary={true}
                  disabled={false}
                  onTouchTap={this.handleClose}
                />
              </div>
              <div className="cancel-but">
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onTouchTap={this.handleClose}
                />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, { hideModal } ) (CreateNetworkListModal)
// has to be in hint text in create list DESCRIPTION
//What do youdo with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update
