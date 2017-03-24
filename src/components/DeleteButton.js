import React, { PureComponent, PropTypes } from 'react'

//material-ui components
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'

import IconButton from 'material-ui/IconButton'
// styles
import './DeleteButton.sass'


class DeleteButton extends PureComponent {

  render(){
    return (
      <div>
        <FlatButton label="Delete Button"
                    className={this.props.usedClassName}
                    icon={<DeleteIcon />}
                    />
        <IconButton >
          <DeleteIcon />
      </IconButton>
      </div>
    )
  }
}

export default DeleteButton
