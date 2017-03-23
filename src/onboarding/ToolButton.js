import React, { PureComponent, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'

class ToolButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }

  render() {
    const { label, icon } = this.props
    return (
      <FlatButton
        label={label}
        labelPosition="after"
        primary={true}
        icon={<img src={icon} height='30px' width='30px'/>}
      />
    )
  }

}

export default ToolButton
