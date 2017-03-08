import React, { PureComponent, PropTypes } from 'react'

class Network extends PureComponent {
  static propTypes = {

  }

  render() {

    return (
      <h2>{this.props.content}</h2>
    )
  }
}

export default Network
