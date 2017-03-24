import React, { PureComponent, PropTypes } from 'react'

// Material ui comp
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'

// styles
import './NetworkButton.sass'

class NetworkButton extends PureComponent {
  render() {
    const { title } = this.props
    return (
      <FlatButton label={title}
                  icon={<ListIcon className="list-icon"/>}
      />
    )
  }
}

export default NetworkButton
