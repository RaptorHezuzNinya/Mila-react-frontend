import React, { PureComponent } from 'react'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'

// actions
import showModal from '../actions/modals/show-modal'

class ButtonModal extends PureComponent {

  openModal = () => {
    console.log('hi')
  }

  render(){
    return (
      <div>
        <FlatButton onClick={this.openModal} label="Modal Button" />
      </div>
    )
  }
}

export default ButtonModal
