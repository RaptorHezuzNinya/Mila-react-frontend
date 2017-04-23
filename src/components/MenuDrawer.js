import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
// material ui
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
// styles
import './MenuDrawer.sass'
const styles = {
  containerStyle: {
    height: 'calc(100vh - 70px)',
    top: 70,
    width: 224,
    backgroundColor: '#292f36'
  },
  link: {
    textDecoration: 'none'
  },
  menuItem: {
    fontFamily: 'Montserrat-Light',
  }
}
class MenuDrawer extends PureComponent {
  static propTypes = {
    openDrawer: PropTypes.bool.isRequired
  }

  render () {
    return (
      <Drawer
          open={this.props.openDrawer}
          containerStyle={styles.containerStyle}>
        <div className='drawer-menu-wrapper'>
          <Menu className='top-menu-holder'>
            <Link to='/onboarding' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                <div className='trial-item'>Free trial</div>
              </MenuItem>
            </Link>
            <Link to='/newcontacts' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                  New Contacts
              </MenuItem>
            </Link>
            <Link to='/mynetwork' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                  My Network
              </MenuItem>
            </Link>
            <Link to='/settings/account' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                  Lists Settings
              </MenuItem>
            </Link>
          </Menu>
          <Menu className='bot-menu-holder'>
            <a href='https://milahq.com/faq/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                  FAQ
              </MenuItem>
            </a>
            <a href='https://milahq.com/blog/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
                  BLOG
              </MenuItem>
            </a>
            <a href='https://milahq.com/about/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item' style={styles.menuItem}>
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
