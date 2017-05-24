import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import './ZeroContacts.sass'

const ZeroContacts = () => {
  return (
    <div className='zero-contacts-holder'>
      <h2>Zero new contacts...</h2>
      <p>
        I need a few minutes to scan your inbox, please try again in a minute or so
      </p>
      <div className='refresh-btn'>
        <FlatButton
          className='btn-grey-wide'
          label='refresh this page'
          onClick={() => window.location.reload()}/>
      </div>
    </div>
  )
}

export default ZeroContacts
