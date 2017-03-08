import React, { PureComponent, PropTypes } from 'react'

class Network extends PureComponent {
  static propTypes = {

  }

  render() {

    return (
      <h1>{this.props.content}</h1>
    )
  }
}

export default Network
