import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { showModal } from '../../actions/modals/index'
import './ModalButton.sass'

class ModalButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    usedClassName: PropTypes.string.isRequired
  }

  openModal = () => {
    this.props.showModal(this.props.modal)
  }

  render(){
    if (!this.props.modal) return null;
    return (
      <div>
        <FlatButton
          className={this.props.usedClassName}
          onClick={this.openModal}
          label={this.props.label} />
      </div>
    )
  }
}

export default connect (null, { showModal })(ModalButton)
