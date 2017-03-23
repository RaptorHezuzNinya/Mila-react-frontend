import React, { PureComponent, PropTypes } from 'react'

// Material ui comp
import FlatButton from 'material-ui/FlatButton'

// styles

class NetworkButton extends PureComponent {
  render() {
    const { title } = this.props
    return (
      <FlatButton label={title}/>
    )
  }
}

export default NetworkButton
