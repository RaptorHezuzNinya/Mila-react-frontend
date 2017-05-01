import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deleteNetworkList, updateNetworkList } from '../actions/networklists'
import Media from 'react-media'
import ModalButton from '../modals/ModalButton'
import NetworkListForm from '../components/NetworkListForm'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import './EditNetworkList.sass'

class EditNetworkList extends PureComponent {

  renderNetworkLists () {
    const { networkLists, updateNetworkList, deleteNetworkList } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='list-item-holder' key={networkList.id}>
          <div className='list-title'>
            <span className='list-icon'>
              <NetworkIcon color='#52be9c'/>
            </span>
            {networkList.title}
          </div>
          <div className='list-btns'>
            <FlatButton label='EDIT' primary={true} onClick={updateNetworkList.bind(this, networkList.title)} />
            <FlatButton label='DELETE' primary={true} onClick={deleteNetworkList.bind(this, networkList.title)} />
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='edit-networklist-holder'>
        <div className='add-list-holder'>
          <h3 className='create-header'>Create new contact lists</h3>
          <NetworkListForm
            fieldHolder='edit-list-field-holder'
            btnLabel='+ add list'
            btnClass='btn-grey-wide'
            btnHolder='edit-list-btnholder'/>
        </div>
        <div className='list-item-wrap'>
          <h3 className='list-header'>Your contact lists</h3>
          {this.renderNetworkLists()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    networkLists: state.networkLists
  }
}
export default connect(mapStateToProps, {updateNetworkList, deleteNetworkList})(EditNetworkList)
