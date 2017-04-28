import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deleteNetworkList, updateNetworkList } from '../actions/networklists'
import FlatButton from 'material-ui/FlatButton'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import './EditNetworkList.sass'
class EditNetworkList extends PureComponent {

  handleDeleteListClick(networkList) {
    console.log(networkList)
    // this.props.deleteNetworkList({networkList})

  }

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
        {this.renderNetworkLists()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    networkLists: state.networkLists
  }
}
export default connect(mapStateToProps)(EditNetworkList)
