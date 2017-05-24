import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { showModal } from '../../actions/modals/index'
import './ModalButton.sass'

class ModalButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    usedClassName: PropTypes.string.isRequired,
    modal: PropTypes.string.isRequired
  }

  openModal = () => {
    this.props.showModal(this.props.modal)
  }

  render(){
    const { modal, holderClass, usedClassName, openModal, label } = this.props
    if (!modal) return null;
    return (
      <div className={holderClass === undefined ? '' : holderClass}>
        <FlatButton
          className={usedClassName}
          onClick={this.openModal}
          label={label} />
      </div>
    )
  }
}

export default connect (null, { showModal })(ModalButton)
