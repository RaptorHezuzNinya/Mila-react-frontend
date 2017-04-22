import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui Components
import Appbar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
// logos icons
import UserIconBlue from '../assets/images/icons/user-blue.jpg'
import UserIconGrey from '../assets/images/icons/user-grey.svg'
import milaLogo from '../assets/images/logos/logo-white.png'
import UserCircle from 'material-ui/svg-icons/action/account-circle'
// Styles
import './Navigation.sass'

class Navigation extends PureComponent {
  static propTypes = {
    handleOpenMenuDrawer: PropTypes.func.isRequired
  }



  render(){
    const { handleOpenMenuDrawer } = this.props
    const styles = {
      button: {
        color: '$steelC'
      }
    }
    const rightIconLinks = (
      <div className='right-icons-wrap'>
        {/* <Link to='/newcontacts'><div className='sub-button' ><p className='sub-text'>295 CONTACTS FREE</p></div></Link> */}
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
        iconElementLeft={ <div className='wrapper-logo' onClick={handleOpenMenuDrawer}>
                            <img className='logo-mila' src={milaLogo} />
                          </div> }
        iconElementRight={ rightIconLinks }
        />
      </header>
    )
  }
}

export default Navigation
