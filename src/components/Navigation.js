import React, { PureComponent, PropTypes } from 'react'

import Appbar from 'material-ui/AppBar'
import Flatbutton from 'material-ui/FlatButton'

import './Navigation.sass'
import milaLogo from '../assets/images/logo/logo-white.png'

export class Navigation extends PureComponent {
  static propTypes = {
  }

  render(){
    const navButtonStyle = {
      color: 'white'
    }

    const rightLinks = (
      <div>
        <Flatbutton label="New Contacts" style={navButtonStyle} />
        <Flatbutton label="My network" style={navButtonStyle} />
      </div>
    )

    return (
      <Appbar
        iconElementLeft={<img className="logo-mila" src={milaLogo}  />}
        iconElementRight={ rightLinks }
      />
    )

  }
}

export default Navigation

