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

export class Navigation extends PureComponent {
  static propTypes = {
  }

  render(){
    const navButtonStyle = {
      color: 'white'
    }

    const rightLinks = (
      <div>
        <Flatbutton label="Subcription" style={navButtonStyle} />
      </div>
    )
    const rightIconLinks = (
      <div>
        <Link to=""><div className="wrapper-icon"><img className="user-blue" src={UserIconBlue} /></div></Link>
        {/* <Link to=""><div className="wrapper-icon"><img className="user-grey" src={UserIconGrey} /></div></Link> */}
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
