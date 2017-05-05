import React, { PureComponent, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import './NetworkListButton.sass'

class NetworkListButton extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  renderNetworkLists () {
    const { networkLists } = this.props
    return networkLists.map((networkList) => {
      return (
        <div className='network-lists' key={networkList.id}>

            <FlatButton
              className='network-list-btn'
              label={networkList.title}>
              {/* something */}
            </FlatButton>

        </div>
      )
    })
  }

  render () {
    return (
      <div className='network-lists-holder'>
        {this.renderNetworkLists()}
      </div>
    )
  }
}

export default NetworkListButton
