import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import CircularProgress from 'material-ui/CircularProgress'
import './LoadingContacts.sass'

const LoadingContacts = () => {
  return (
    <div className='contacts-load-holder'>
      <h2>Loading new contacts...</h2>
      <div className='spinner'>
        <CircularProgress color='#292f36' size={90} thickness={7}/>
      </div>
      <p>
        I need a few minutes to scan your inbox, please try again in a minute or so
      </p>

      <div className='refresh-btn'>
        <FlatButton
          hoverColor='none'
          className='btn-l-a'
          label='refresh this page'
          onClick={() => window.location.reload()}/>
      </div>
    </div>
  )
}

export default LoadingContacts
