import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
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
const dataTopMenu = [
  {
    url: 'https://milahq.com/faq/',
    title: 'FAQ',
    iconComp: <FaqIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/blog/',
    title: 'BLOG',
    iconComp: <BlogIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/about/',
    title: 'ABOUT',
    iconComp: <AboutIcon className='icon'/>
  }
]

const dataBotMenu = [
  {
    url: 'https://milahq.com/faq/',
    title: 'FAQ',
    iconComp: <FaqIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/blog/',
    title: 'BLOG',
    iconComp: <BlogIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/about/',
    title: 'ABOUT',
    iconComp: <AboutIcon className='icon'/>
  }
]

class MenuDrawer extends PureComponent {
  static propTypes = {
    openDrawer: PropTypes.bool.isRequired
  }
  

  renderBottomMenu = () => {
    return dataBotMenu.map((link, index) => {
      return (
        <a href={link.url} target='_blank' style={styles.link} key={index}>
          <MenuItem className='menu-item'>
            <div className='menu-item-content-holder'>
              <div className='icon-holder'>
                {link.iconComp}
              </div>
              <div className='text'>
                {link.title}
              </div>
            </div>
          </MenuItem>
        </a>
      )
    })
  }


  render () {
    const {currentRoute} = this.props
    return (
      <Drawer
          docked={window.innerWidth >= 769}
          onRequestChange={this.props.handleOpenMenuDrawer}
          open={this.props.openDrawer}
          containerStyle={styles.containerStyle}>
        <div className='drawer-menu-wrapper'>
          <Menu className='top-menu-holder'>
            <Link to='/' style={styles.link}>
              <MenuItem className='top-menu-item'>
                <div className='trial-item'>Free trial</div>
              </MenuItem>
            </Link>
            <Link to='/newcontacts' style={styles.link}>
              <MenuItem className={ currentRoute === '/newcontacts' ? 'menu-item active-menu-item' : 'menu-item' }>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <NewContactIcon className={ currentRoute === '/newcontacts' ? 'icon active-icon' : 'icon'}/>
                  </div>
                  <div className='text'>
                    New Contacts
                  </div>
                </div>
              </MenuItem>
            </Link>
            <Link to='/mynetwork' style={styles.link}>
              <MenuItem className={ currentRoute === '/mynetwork' ? 'menu-item active-menu-item' : 'menu-item'}>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <NetworkIcon className={ currentRoute === '/mynetwork' ? 'icon active-icon' : 'icon'}/>
                  </div>
                  <div className='text'>
                    My Network
                  </div>
                </div>
              </MenuItem>
            </Link>
            <Link to='/settings/account' style={styles.link}>
              <MenuItem className={ currentRoute === '/settings/account' ? 'menu-item active-menu-item' : 'menu-item'}>
                <div className='menu-item-content-holder'>
                  <div className='icon-holder'>
                    <ListSettingsIcon className={ currentRoute === '/settings/account' ? 'icon active-icon' : 'icon'}/>
                  </div>
                  <div className='text'>
                    List Settings
                  </div>
                </div>
              </MenuItem>
            </Link>
          </Menu>

          <Menu className='bot-menu-holder'>
            {this.renderBottomMenu()}
          </Menu>

        </div>
      </Drawer>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentRoute: state.routing.locationBeforeTransitions.pathname
  }
}

export default connect(mapStateToProps)(MenuDrawer)
