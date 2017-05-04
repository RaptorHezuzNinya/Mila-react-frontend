import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { dataTopMenu, dataBotMenu } from '../helpers/formData'
import { inlineMenuDrawerStyles as styles } from '../helpers/inlineStyles'
import './MenuDrawer.sass'

class MenuDrawer extends PureComponent {
  static propTypes = {
    openDrawer: PropTypes.bool.isRequired
  }

  renderTopMenu = () => {
    const { currentRoute } = this.props
    return dataTopMenu(currentRoute).map((data, index) => {
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
