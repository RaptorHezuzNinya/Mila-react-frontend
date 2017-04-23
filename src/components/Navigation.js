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
    const { handleOpenMenuDrawer } = this.props
    const styles = {
      mediumIcon: {
        width: 40,
        height: 40,
      },
      medium: {
        width: 40,
        height: 40,
        padding: 5,
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
      },
      button: {
        color: '$steelC'
      },
      hamburger: {
        color: 'white'
      }
    }
    const leftIcon = (
      <div>
        <IconButton
          iconStyle={styles.mediumIcon}
          style={styles.medium}
          >
          <HamBurger color={'white'} onClick={this.props.handleOpenMenuDrawer.bind(this)}/>
        </IconButton>
      </div>
    )

    const rightIconLinks = (
      <div className='right-icons-wrap'>
        <Link to='/newcontacts'><FlatButton className='new-contact' label='New Contacts' style={styles.button}/></Link>
        <Link to='/'><FlatButton className='network-button' label='My Network' style={styles.button}/></Link>
        <Link to='/mynetwork'><div className='wrap-icon-grey'><img className='user-grey' src={UserIconGrey} /></div></Link>
        <Link to='/settings/account'><div className='wrap-icon-blue'><img className='user-blue' src={UserIconBlue} /></div></Link>
      </div>
    )

    return (
      <header className='nav-bar'>
        <Appbar
        className='appbar'
        title={<MilaLogo />}
        titleStyle={styles.title}
        iconElementLeft={leftIcon}
        iconElementRight={ rightIconLinks }
      />


      </header>
    )
  }
}

export default Navigation
