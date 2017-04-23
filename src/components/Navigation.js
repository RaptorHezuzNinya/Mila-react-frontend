import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
import MilaLogo from './MilaLogo'
// material-ui Components
import Appbar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
// logos icons
import UserIconBlue from '../assets/images/icons/user-blue.jpg'
import UserIconGrey from '../assets/images/icons/user-grey.svg'
import milaLogo from '../assets/images/logos/logo-white.png'
import UserCircle from 'material-ui/svg-icons/action/account-circle'
import HamBurger from 'material-ui/svg-icons/image/dehaze'
// Styles
import './Navigation.sass'

class Navigation extends PureComponent {
  static propTypes = {
    handleOpenMenuDrawer: PropTypes.func.isRequired
  }

  render(){
    const styles = {
      mediumIcon: {
        width: 40,
        height: 40,
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
        flex: 'inherit',
        height: '100%'
      },
      hamburger: {
        color: 'white'
      },
      iconStyle: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      }
    }

    const { handleOpenMenuDrawer } = this.props
    const leftIcon = (
      <div className='left-icon-wrap'>
        <div className='hamburger'>
          <HamBurger style={styles.mediumIcon} color={'white'} onClick={handleOpenMenuDrawer} />
        </div>
      </div>
    )

    const rightIconLinks = (
      <div className='right-icons-wrap'>
        <Link to='/settings/account'>
          <div className='wrap-icon-blue'>
            <img className='user-blue' src={UserIconBlue} />
          </div>
        </Link>
      </div>
    )

    return (
      <header className='nav-bar'>
        <Appbar
        className='appbar'
        title={<MilaLogo />}
        titleStyle={styles.title}
        iconElementLeft={leftIcon}
        iconStyleLeft={styles.iconStyle}
        iconElementRight={ rightIconLinks }
        iconStyleRight={styles.iconStyle}
      />
      </header>
    )
  }
}

export default Navigation
