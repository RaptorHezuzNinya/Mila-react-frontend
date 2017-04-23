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
    height: 'calc(100vh - 70px)',
    top: 70,
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
            <Link to='/newcontacts' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' style={{textDecoration: 'none'}} onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  New Contacts
              </MenuItem>
            </Link>
            <Link to='/mynetwork' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  My Network
              </MenuItem>
            </Link>
            <Link to='/settings/account' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  Lists Settings
              </MenuItem>
            </Link>
          </Menu>

          <Menu className='bot-menu-holder'>
            <a href='https://milahq.com/faq/' target='_blank' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  FAQ
              </MenuItem>
            </a>
            <a href='https://milahq.com/blog/' target='_blank' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  BLOG
              </MenuItem>
            </a>
            <a href='https://milahq.com/about/' target='_blank' style={{ textDecoration: 'none' }}>
              <MenuItem className='menu-item' onClick={() => console.log('YOLOSWAG ITEM1 ClICKED')}>
                  ABOUT
              </MenuItem>
            </a>
          </Menu>

        </div>

      </Drawer>
    )
  }
}

export default MenuDrawer
