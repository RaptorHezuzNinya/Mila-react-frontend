import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deleteNetworkList, updateNetworkList } from '../actions/networklists'
import NetworkListForm from '../components/NetworkListForm'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import './EditNetworkList.sass'

class EditNetworkList extends PureComponent {

  renderNetworkLists () {
    const { networkLists } = this.props
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
            <FlatButton label='EDIT' primary={true} onClick={this.props.updateNetworkList.bind(this, networkList.title)} />
            <FlatButton label='DELETE' primary={true} onClick={this.props.deleteNetworkList.bind(this, networkList.title)} />
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='edit-networklist-holder'>
        <div className='add-list-holder'>
          <NetworkListForm btnLabel='+ add list'/>
        </div>
        <div className='list-item-wrapper'>
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
