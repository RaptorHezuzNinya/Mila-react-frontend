import React, { PureComponent, PropTypes } from 'react'

// material-ui Components
import Appbar from 'material-ui/AppBar'
import Flatbutton from 'material-ui/FlatButton'

// logos icons
import milaLogo from '../assets/images/logo/logo-white.png'

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
        <Flatbutton label="New Contacts" style={navButtonStyle} />
        <Flatbutton label="My network" style={navButtonStyle} />
      </div>
    )

    return (
      <Appbar
        className="nav-bar"
        iconElementLeft={<div className="wrapper-logo"><img className="logo-mila" src={milaLogo} /></div>}
        iconElementRight={ rightLinks }
      />
    )

  }
}

export default Navigation

