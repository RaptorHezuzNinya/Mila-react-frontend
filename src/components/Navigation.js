import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
import Media from 'react-media'
import MilaLogo from './MilaLogo'
import SettingsPopOver from './SettingsPopOver'
import Appbar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import UserIconBlue from '../assets/images/icons/user-blue.jpg'
import UserIconGrey from '../assets/images/icons/user-grey.svg'
import milaLogo from '../assets/images/logos/logo-white.png'
import UserCircle from 'material-ui/svg-icons/action/account-circle'
import HamBurger from 'material-ui/svg-icons/image/dehaze'
import './Navigation.sass'
import { inlineNavigationStyles as styles } from '../helpers/inlineStyles'

class Navigation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      openSettingsPopOver: false,
    }
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  static propTypes = {
    handleOpenMenuDrawer: PropTypes.func.isRequired
  }

  handleTouchTap = (event) => {
    event.preventDefault()
    this.setState({
      openSettingsPopOver: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      openSettingsPopOver: false,
    })
  }


  render(){
    const { handleOpenMenuDrawer } = this.props
    const leftIcon = (
      <div className='left-icon-wrap'>
        <div className='hamburger'>
          <HamBurger
            style={styles.mediumIcon}
            color={'white'}
            onClick={handleOpenMenuDrawer} />
        </div>
      </div>
    )

    const rightIconLinks = (
      <div className='right-icons-wrap'>
        <Media query='(min-width: 769px)' render={() => (
          <div className='username-holder'>
            {"#{userName}"}
          </div>
        )}/>
        <div className='wrap-icon-blue' onTouchTap={this.handleTouchTap}>
          <img className='user-blue' src={UserIconBlue} />
        </div>
        <SettingsPopOver
          openSettingsPopOver={this.state.openSettingsPopOver}
          anchorEl={this.state.anchorEl}
          handleRequestClose={this.handleRequestClose} />
      </div>
    )

    return (
      <header className='nav-bar'>
        <Appbar
          className='appbar'
          title={<MilaLogo />}
          titleStyle={styles.title}
          iconElementLeft={leftIcon}
          iconStyleLeft={styles.iconStyleLeft}
          iconElementRight={ rightIconLinks }
          iconStyleRight={styles.iconStyleRight} />
      </header>
    )
  }
}

export default Navigation
