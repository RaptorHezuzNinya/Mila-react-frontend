import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
class EditNetworkList extends PureComponent {

  renderNetworkLists () {
    const { networkLists } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='list-item-holder' key={networkList.id}>
          <span>
            <NetworkIcon />
          </span>
          {networkList.title}
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
