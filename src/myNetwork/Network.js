import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NetworkContainer from './NetworkContainer'

class Network extends PureComponent {

  render(){
    const styles = {
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Montserrat-Light',
      margin: '60px 0',
      fontWeight: 100,
    }

    return (
      <div>
        <h2 style={styles}>Admire your contact paradise. It's my pleasure.</h2>
        <NetworkContainer />
      </div>
    )
  }
}

export default Network
