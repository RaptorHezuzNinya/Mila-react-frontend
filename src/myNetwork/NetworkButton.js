import React, { PureComponent, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'

// styles
import './NetworkButton.sass'

class NetworkButton extends PureComponent {
  static propType = {
    title: PropTypes.string.isRequired
  }

  render() {
    const { title } = this.props
    return (
      <FlatButton className="networklist-button"
                  label={title}
                  icon={<ListIcon className="list-icon"/>}
      />
    )
  }
}

export default NetworkButton
