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
    width: 224,
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
      <Drawer
          style={styles.style}
          open={this.state.open}
          containerStyle={styles.containerStyle}>

        <div className='drawer-menu-wrapper'>

          <Menu className='top-menu-holder' width='100px'>
            <MenuItem className='menu-item'>
              <div className='trial-item'>Free trial</div>
            </MenuItem>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                New Contacts
            </MenuItem>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                My Network
            </MenuItem>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                Lists Settings
            </MenuItem>
          </Menu>

          <Menu className='bot-menu-holder'>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                FAQ
            </MenuItem>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                BLOG
            </MenuItem>
            <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                ABOUT
            </MenuItem>
          </Menu>

        </div>

      </Drawer>
    )
  }
}

export default MenuDrawer
