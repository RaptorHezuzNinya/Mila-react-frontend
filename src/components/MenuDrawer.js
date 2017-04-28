import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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

  renderTopMenu = () => {
    const { currentRoute } = this.props
    const dataTopMenu = [
      {
        route: '/newcontacts',
        iconComp: <NewContactIcon className={ currentRoute === '/newcontacts' ? 'icon active-icon' : 'icon'}/>,
        title: 'New Contacts'
      },
      {
        route: '/mynetwork',
        iconComp: <NetworkIcon className={ currentRoute === '/mynetwork' ? 'icon active-icon' : 'icon'}/>,
        title: 'My Network'
      },
      {
        route: '/settings/list',
        iconComp: <ListSettingsIcon className={ currentRoute === '/settings/list' ? 'icon active-icon' : 'icon'}/>,
        title: 'List Settings'
      }
    ]
    return dataTopMenu.map((data, index) => {
      return (
        <Link to={data.route} style={styles.link} key={index}>
          <MenuItem className={ currentRoute === data.route ? 'menu-item active-menu-item' : 'menu-item' }>
            <div className='menu-item-content-holder'>
              <div className='icon-holder'>
                {data.iconComp}
              </div>
              <div className='text'>
                {data.title}
              </div>
            </div>
          </MenuItem>
        </Link>
      )
    })
  }
  renderBottomMenu = () => {
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
            {this.renderTopMenu()}
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
