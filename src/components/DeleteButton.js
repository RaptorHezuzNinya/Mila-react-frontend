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
    selectedContacts: PropTypes.array.isRequired
  }


  handleClick = () => {
    const { selectedContacts } = this.props
    this.props.deleteContact(selectedContacts)
    console.log('handleClick triggered in deletebutton comp')
  }

  render() {
    const { usedDeskClassName, usedMobClassName, selectedContacts } = this.props

    return (
      <div className="delete-button-container">
        <FlatButton label="Delete Button"
                    className={usedDeskClassName}
                    icon={<DeleteIcon />}
                    onClick={this.handleClick.bind(this)}
                    />
        <IconButton className={usedMobClassName}
                    onClick={this.handleClick.bind(this)}>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }
}

export default connect(null, { deleteContact })(DeleteButton)
