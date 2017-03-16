import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Network from './Network'

class NetworkContainer extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  render(){

    const styles = {
      textAlign: 'center'
    }

    const { networkLists, contacts } = this.props

    return (
      <div className="networkcontainer">
        <h2 style={styles}>Unicorns ftw</h2>
        <Network networkLists={ networkLists } contacts={contacts} />
      </div>
    )
  }
}

const mapStateToProps = ({ networkLists, contacts }) => ({ networkLists, contacts })

export default connect(mapStateToProps)(NetworkContainer)
