import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'

// actions
import showModal from '../actions/modals/show-modal'

class ButtonModal extends PureComponent {

  openModal = () => {
    if (this.props.modal) {
      const { modal } = this.props
      console.log('Like a boss', modal)
      this.props.showModal(modal)
    }
  }


  render(){

    return (
      <div>
        <FlatButton onClick={this.openModal} label={this.props.label} />
      </div>
    )
  }
}


export default connect (null, { showModal })(ButtonModal)
