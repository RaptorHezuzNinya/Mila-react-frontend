import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// actions & reducers
import deleteContact from '../actions/contacts/delete'

//material-ui components
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'
import IconButton from 'material-ui/IconButton'

// styles
import './DeleteButton.sass'


class DeleteButton extends PureComponent {
  static propTypes = {
    // contact: PropTypes.func.isRequired
  }

  doSomething = () => {
    this.props.deleteContact()
    console.log('doing something')
  }

  render() {
    console.log(this.props)
    const { usedDeskClassName, usedMobClassName } = this.props
    return (
      <div className="delete-button-container">
        <FlatButton label="Delete Button"
                    className={usedDeskClassName}
                    icon={<DeleteIcon />}
                    onClick={this.doSomething.bind(this)}
                    />
        <IconButton className={usedMobClassName}>
          <DeleteIcon />
      </IconButton>
      </div>
    )
  }
}

export default connect(null, { deleteContact })(DeleteButton)
