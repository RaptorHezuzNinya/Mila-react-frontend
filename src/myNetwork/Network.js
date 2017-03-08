import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import NetworkList from './NetworkList'

class Network extends PureComponent {
  static propTypes = {

  }

  renderNetworkList(networklist, index) {
    return <NetworkList key={ index } { ...networklist } />
  }

  render() {

    const { networkLists } = this.props
    return (
      <div>
        {networkLists.map(this.renderNetworkList.bind(this))}
      </div>
    )
  }
}
const mapStateToProps = ({ networkLists }) => ({ networkLists })

export default connect(mapStateToProps)(Network)
