import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'

// actions
import showModal from '../actions/modals/show-modal'

class ButtonModal extends PureComponent {

  openModal = () => {
    const { modal } = this.props
    this.props.showModal(modal)
  }

  render(){
    if (!this.props.modal) return null;
    return (
      <div>
        <FlatButton onClick={this.openModal} label={this.props.label} />
      </div>
    )
  }
}

export default connect (null, { showModal })(ButtonModal)
