import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import './EditNetworkList.sass'
class EditNetworkList extends PureComponent {

  renderNetworkLists () {
    const { networkLists } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='list-item-holder' key={networkList.id}>
          <div className='list-title'>
            <span>
              <NetworkIcon color='#52be9c'/>
            </span>
            {networkList.title}
          </div>
          <div className='list-btns'>
            <FlatButton label='SHOW' />
            <FlatButton label='EDIT' />
            <FlatButton label='DELETE' />
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
