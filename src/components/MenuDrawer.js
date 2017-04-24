import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
// material ui
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import NewContactIcon from 'material-ui/svg-icons/social/person-add'
import FaqIcon from 'material-ui/svg-icons/social/whatshot'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import ListSettingsIcon from 'material-ui/svg-icons/action/settings'
import AboutIcon from 'material-ui/svg-icons/action/face'
import BlogIcon from 'material-ui/svg-icons/communication/chat-bubble'
// styles
import './MenuDrawer.sass'

const styles = {
  containerStyle: {
    height: 'calc(100vh - 70px)',
    top: 70,
    width: 224,
    backgroundColor: '#37414d'
  },
  link: {
    textDecoration: 'none'
  }
}

class MenuDrawer extends PureComponent {
  static propTypes = {
    openDrawer: PropTypes.bool.isRequired
  }

  render () {

    return (
      <Drawer
          docked={window.innerWidth >= 769}
          onRequestChange={this.props.handleOpenMenuDrawer}
          open={this.props.openDrawer}
          containerStyle={styles.containerStyle}>
        <div className='drawer-menu-wrapper'>
          <Menu className='top-menu-holder'>

            <Link to='/onboarding' style={styles.link}>
              <MenuItem className='top-menu-item'>
                <div className='trial-item'>Free trial</div>
              </MenuItem>
            </Link>

            <Link to='/newcontacts' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <NewContactIcon className='icon'/>
                  </div>
                  <div className='text'>
                    New Contacts
                  </div>
                </div>
              </MenuItem>
            </Link>

            <Link to='/mynetwork' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <NetworkIcon className='icon'/>
                  </div>
                  <div className='text'>
                    My Network
                  </div>
                </div>
              </MenuItem>
            </Link>

            <Link to='/settings/account' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <ListSettingsIcon className='icon'/>
                  </div>
                  <div className='text'>
                    List Settings
                  </div>
                </div>
              </MenuItem>
            </Link>

          </Menu>
          
          <Menu className='bot-menu-holder'>
            <a href='https://milahq.com/faq/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <FaqIcon className='icon'/>
                  </div>
                  <div className='text'>
                    FAQ
                  </div>
                </div>
              </MenuItem>
            </a>
            <a href='https://milahq.com/blog/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <BlogIcon className='icon'/>
                  </div>
                  <div className='text'>
                    BLOG
                  </div>
                </div>
              </MenuItem>
            </a>
            <a href='https://milahq.com/about/' target='_blank' style={styles.link}>
              <MenuItem className='menu-item'>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <AboutIcon className='icon'/>
                  </div>
                  <div className='text'>
                    ABOUT
                  </div>
                </div>
              </MenuItem>
            </a>
          </Menu>
        </div>
      </Drawer>
    )
  }
}

export default MenuDrawer
