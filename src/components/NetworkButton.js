import React, { PureComponent, PropTypes } from 'react'

// Material ui comp
import FlatButton from 'material-ui/FlatButton'

// styles
import './NetworkButton.sass'

class NetworkButton extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <FlatButton className="network-button" label={name}/>
    )
  }
}

export default NetworkButton
