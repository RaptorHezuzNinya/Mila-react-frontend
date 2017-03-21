import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'

// actions
import createNetworkListModalShow from '../actions/modals/create-network-list-show'

class ButtonModal extends PureComponent {

  openModal = () => {
    // console.log(showModal)
    this.props.createNetworkListModalShow()
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
