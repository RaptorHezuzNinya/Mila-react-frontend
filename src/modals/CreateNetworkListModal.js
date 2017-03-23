import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// actions
import hideModal from '../actions/modals/hide-modal'
import createNetworkList from '../actions/networklists/create'
import networkList from '../reducers/networklists'

// material-ui Components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CheckBox from 'material-ui/Checkbox'

// styling
import './CreateNetworkListModal.sass'

const styles = {
  customContentStyle: {
    width: '600px',

  },
  hintStyle: {
    color: '#737a80',
    fontSize: 14,
    fontWeight: 100,
    fontFamily: 'Montserrat-Light'
  },
}

class CreateNetworkListModal extends PureComponent {
  state = {
    open: false
  }

  componentWillMount(){
    this.handleOpen()
  }

  handleChange = (event) => {
    const field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }

  createNetworkList(event){
    event.preventDefault()
    const { title, description } = this.state
    console.log(this.state)
    this.props.createNetworkList(title)
    this.handleClose()
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.hideModal()
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  render(){
    const { title, description } = this.props
    return (
      <div className="modal-wrapper">
        <Dialog
          className="createlist-dialog"
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
                         name="title"
                         className="list-input"
                         hintText="Type a list name, e.g. Top clients, freelancers, potential investors"
                         value={this.state.title || ''}
                         onChange={this.handleChange}>
              </TextField>
            </div>

            <div className="descript-container">

              <p className="desc-name">DESCRIPTION (optional)</p>
              {/* Hier moet een char count komen input field moet max hebben */}
              <p className="char-count"> 250 left</p>
              <TextField hintStyle={styles.hintStyle}
                         name="description"
                         className="list-input"
                         hintText="What do youdo with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update"
                         multiLine={true}
                         rows={2}
                         rowsMax={4}
                         value={this.state.description || ''}
                         onChange={this.handleChange}>
              </TextField>
            </div>
            <div className="cta-container">
              <CheckBox className="team-checkb" label="Share this list with your team."/>
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
