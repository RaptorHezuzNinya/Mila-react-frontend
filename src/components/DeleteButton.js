import React, { PureComponent, PropTypes } from 'react'

//material-ui components
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'

import IconButton from 'material-ui/IconButton'
// styles
import './DeleteButton.sass'


class DeleteButton extends PureComponent {

  render(){
    const { usedDeskClassName, usedMobClassName } = this.props
    console.log(usedDeskClassName, usedMobClassName)
    return (
      <div>
        <FlatButton
                    label="Delete Button"
                    className={usedDeskClassName}
                    icon={<DeleteIcon />}
                    />
        <IconButton className={usedMobClassName}>
          <DeleteIcon />
      </IconButton>
      </div>
    )
  }
}

export default DeleteButton
