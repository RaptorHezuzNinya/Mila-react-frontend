import React from 'react'
import { Link } from 'react-router'
import milaLogo from '../assets/images/logos/logo-white.png'
import './Navigation.sass'

const MilaLogo = (props) => {

  return (
    <Link to='/'>
      <div className='wrapper-logo'>
        <img className='logo-mila' src={milaLogo} />
      </div>
    </Link>
  )
}

export default MilaLogo
