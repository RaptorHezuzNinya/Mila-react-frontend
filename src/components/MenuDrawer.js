import React, { PureComponent } from 'react'
// material ui
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'

import './MenuDrawer.sass'

class MenuDrawer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <div>
        <FlatButton label='open' onClick={this.handleOpen.bind(this)}/>
        <Drawer open={this.state.open}>

        </Drawer>
      </div>
    )
  }
}

export default MenuDrawer
