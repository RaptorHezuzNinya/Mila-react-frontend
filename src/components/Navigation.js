import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

// material-ui Components
import Appbar from 'material-ui/AppBar'
import Flatbutton from 'material-ui/FlatButton'
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
  static propTypes = {
  }

  render(){
    // const navButtonStyle = {
    //   color: '$greenA',
    //   fontFamily: 'Montserrat-Light',
    //   border: '1px solid $blueB',
    //   verticalAlign: 'top',
    //   marginTop: '10px'
    //
    // }

    const rightIconLinks = (
      <div className="right-icons-wrap">
        <Link to=""><div className="sub-button" ><p className="sub-text">295 CONTACTS FREE</p></div></Link>
        <Link to=""><div className="wrap-icon-grey"><img className="user-grey" src={UserIconGrey} /></div></Link>
        <Link to=""><div className="wrap-icon-blue"><img className="user-blue" src={UserIconBlue} /></div></Link>
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
