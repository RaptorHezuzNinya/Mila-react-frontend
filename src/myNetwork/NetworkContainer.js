import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Network from './Network'

class NetworkContainer extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  render(){
    return (
      <div>
        <h1> NetworkContainer </h1>
        <Network />
      </div>
    )
  }
}

const mapStateToProps = ({ networkLists }) => ({ networkLists })

export default connect(mapStateToProps)(NetworkContainer)
