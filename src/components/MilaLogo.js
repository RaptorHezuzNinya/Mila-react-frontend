import React from 'react'
import milaLogo from '../assets/images/logos/logo-white.png'
import './Navigation.sass'

const MilaLogo = (props) => {

  return (
    <div className='wrapper-logo' onClick={props.handleOpenMenuDrawer}>
      <img className='logo-mila' src={milaLogo} />
    </div>
  )
}

export default MilaLogo
