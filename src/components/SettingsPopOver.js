import React from 'react'
import { Link } from 'react-router'
// material-ui Components
import PopOver from 'material-ui/Popover'
import MenuItem from 'material-ui/MenuItem'

import './SettingsPopOver.sass'
const SettingsPopOver = (props) => {

  return (
    <div>
      <PopOver
        className='popover-settings'
        open={props.openSettingsPopOver}
        anchorEl={props.anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        onRequestClose={props.handleRequestClose}
      >
        <Link to='/settings/account' className='popover-links'>
          <MenuItem className='menu-item'>
            <div className='text'>My Account</div>
          </MenuItem>
        </Link>
        <Link to='/' className='popover-links'>
          <MenuItem className='menu-item'>
            <div className='text'>Subscription</div>
          </MenuItem>
        </Link>
        <Link to='/settings/account' className='popover-links'>
          <MenuItem className='menu-item'>
            <div className='text'>Log Out</div>
          </MenuItem>
        </Link>
      </PopOver>
    </div>
  )
}

export default SettingsPopOver
