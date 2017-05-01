import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions/modals/index'
import { createNetworkList } from '../actions/networklists'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CheckBox from 'material-ui/Checkbox'
import './CreateNetworkListModal.sass'

const maxTitleCount = 25
const maxDescCount = 250

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

  constructor(){
    super()
    this.state = {
      open: true,
      title: '',
      description: '',
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }


  createNetworkList(event){
    event.preventDefault()
    const { title, description } = this.state
    this.props.createNetworkList({title, description})
    this.handleClose()
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.hideModal()
  }

  // handleOpen = () => {
  //   this.setState({open: true});
  // };

  render(){
    const { title, description } = this.props
    return (
      <div className='modal-wrapper'>
        <Dialog
          className='createlist-dialog'
          modal={true}
          contentStyle={styles.customContentStyle}
          open={this.state.open}
        >
          <div className='content-wrapper'>
            <div className='cl-header'>
              <h2>Create a new Mila list</h2>
              <h3>Use lists to group your contacts</h3>
            </div>
            <div className='listname-container'>
              <p className='list-name'>LIST NAME</p>
              <p className='char-count'> {maxTitleCount - this.state.title.length} left</p>
              <TextField hintStyle={styles.hintStyle}
                         className='list-input'
                         name='title'
                         hintText='Type a list name, e.g. Top clients, freelancers, potential investors'
                         value={this.state.title || ''}
                         onChange={ this.handleChange.bind(this) }
                         maxLength='25'>
              </TextField>
            </div>
            <div className='descript-container'>
              <p className='desc-name'>DESCRIPTION (optional)</p>
              <p className='char-count'> {maxDescCount - this.state.description.length} left</p>
              <TextField hintStyle={styles.hintStyle}
                         className='list-input'
                         name='description'
                         hintText='What do youdo with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update'
                         multiLine={true}
                         rows={2}
                         rowsMax={4}
                         value={this.state.description || ''}
                         onChange={ this.handleChange.bind(this) }
                         maxLength='250'>
              </TextField>
            </div>
            <div className='cta-container'>
              <CheckBox className='team-checkb' label='Share this list with your team.'/>
              <div className='submit-but'>
                <FlatButton
                  label='CREATE'
                  primary={true}
                  disabled={false}
                  onClick={this.createNetworkList.bind(this)}
                />
              </div>
              <div className='cancel-but'>
                <FlatButton
                  label='Cancel'
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

export default connect(null, { hideModal, createNetworkList } ) (CreateNetworkListModal)
