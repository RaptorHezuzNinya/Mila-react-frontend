import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'

// actions
import showModal from '../actions/modals/show-modal'

class ButtonModal extends PureComponent {

  openModal = () => {
    // console.log(showModal)
    this.props.showModal()
  }

  render(){
    return (
      <div>
        <FlatButton onClick={this.openModal.bind(this)} label="Modal Button" />
      </div>
    )
  }
}


export default connect (null, { showModal })(ButtonModal)
