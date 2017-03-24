import React, { PureComponent, PropTypes } from 'react'

//material-ui components
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'
// styles
import './DeleteButton.sass'


class DeleteButton extends PureComponent {

  render(){
    return (

      <FlatButton label="Delete Button"
                  className={this.props.usedClassName}
                  icon={<DeleteIcon />}
                  />
    )
  }
}

export default DeleteButton
