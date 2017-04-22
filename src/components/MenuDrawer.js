import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
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
    height: 'calc(100vh - 60px)',
    top: 60,
    width: 224,
    backgroundColor: '#dadce0'

  }
}
class MenuDrawer extends PureComponent {
  static propTypes = {
    openDrawer: PropTypes.bool.isRequired
  }

  render () {
    return (
      <Drawer
          style={styles.style}
          open={this.props.openDrawer}
          containerStyle={styles.containerStyle}>

        <div className='drawer-menu-wrapper'>

          <Menu className='top-menu-holder' width='100px'>
            <MenuItem className='menu-item'>
              <div className='trial-item'>Free trial</div>
            </MenuItem>
            <Link to='/newcontacts'>
              <MenuItem className='menu-item' style={{textDecoration: 'none'}} onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  New Contacts
              </MenuItem>
            </Link>
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
