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
// import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'

// Styles
import './Navigation.sass'
import '../assets/styles/base/colors.sass'

export class Navigation extends PureComponent {

  render(){
    const styles = {
      button: {
        fontFamily: 'Montserrat-Light',
        color: '$greyB'
      }
    }

    const rightIconLinks = (
      <div className="right-icons-wrap">
        <Link to="/newcontacts"><div className="sub-button" ><p className="sub-text">295 CONTACTS FREE</p></div></Link>
        <Link><FlatButton className="new-contact" label="New Contacts" style={styles.button}/></Link>
        <Link><FlatButton className="network-button" label="My Network" style={styles.button}/></Link>
        <Link to="/newcontacts"><div className="wrap-icon-grey"><img className="user-grey" src={UserIconGrey} /></div></Link>
        <Link to="/newcontacts"><div className="wrap-icon-blue"><img className="user-blue" src={UserIconBlue} /></div></Link>
      </div>
    )

    return (
      <header className="nav-bar">
        <Appbar
        className="appbar"
        iconElementLeft={ <div className="wrapper-logo"><img className="logo-mila" src={milaLogo} /></div> }
        iconElementRight={ rightIconLinks }
        />
      </header>
    )

  }
}

export default Navigation
