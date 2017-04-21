import React, { PureComponent } from 'react'
// material ui
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import './MenuDrawer.sass'
const styles = {
  style: {
  },
  containerStyle: {
    height: 'calc(100% - 60px)',
    top: 60,
    width: 220,
    backgroundColor: '#dadce0'

  }
}
class MenuDrawer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      open: true
    }
  }

  handleOpen () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <div className='menu-drawer-wrapper'>
        <FlatButton className='' label='open' onClick={this.handleOpen.bind(this)}/>
        <Drawer
          style={styles.style}
          open={this.state.open}
          containerStyle={styles.containerStyle}>

        </Drawer>
      </div>
    )
  }
}

export default MenuDrawer
