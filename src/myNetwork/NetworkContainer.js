import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Network from './Network'

class NetworkContainer extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  render(){

    const { networkLists } = this.props
    
    return (
      <div className="networkcontainer">
        <Network networkLists={ networkLists }/>
      </div>
    )
  }
}

const mapStateToProps = ({ networkLists }) => ({ networkLists })

export default connect(mapStateToProps)(NetworkContainer)
