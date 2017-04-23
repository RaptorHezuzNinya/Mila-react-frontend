import React from 'react'
import { Link } from 'react-router'
// material-ui Components
import PopOver from 'material-ui/Popover'
import MenuItem from 'material-ui/MenuItem'

const SettingsPopOver = (props) => {
  const styles = {
    menuItem: {
      color: '#f2f6fa',
      fontFamily: 'Montserrat-Light',

    }
  }
  return (
    <div>
      <PopOver
        style={{backgroundColor: '#292f36'}}
        open={props.openSettingsPopOver}
        anchorEl={props.anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        onRequestClose={props.handleRequestClose}
      >
        <Link to='settings/account' style={{textDecoration: 'none'}}>
          <MenuItem primaryText='My Account' style={styles.menuItem} touchRippleColor="#dadce0"/>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <MenuItem primaryText='Subscription' style={styles.menuItem} touchRippleColor="#dadce0"/>
        </Link>
        <Link to='/settings/account' style={{textDecoration: 'none'}}>
          <MenuItem primaryText='Log Out' style={styles.menuItem} touchRippleColor="#dadce0"/>
        </Link>
      </PopOver>
    </div>
  )
}

export default SettingsPopOver
