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
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Montserrat-Light',
      margin: '60px 0',
      fontWeight: 100,
    }

    const { networkLists, contacts } = this.props

    return (
      <div className="">
        <h2 style={styles}>Admire your contact paradise. It's my pleasure.</h2>
        <Network networkLists={ networkLists } contacts={contacts} />
      </div>
    )
  }
}

const mapStateToProps = ({ networkLists, contacts }) => ({ networkLists, contacts })

export default connect(mapStateToProps)(NetworkContainer)
