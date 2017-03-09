import React, { PureComponent, PropTypes } from 'react'

// Material ui comp
import FlatButton from 'material-ui/FlatButton'

class NetworkButton extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <FlatButton label={name}/>
    )
  }
}

export default NetworkButton
