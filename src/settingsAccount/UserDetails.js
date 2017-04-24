import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import './UserDetails.sass'

class UserDetails extends PureComponent {
  render () {
    return (
      <div className='user-details-wrapper'>
        <div className='firstname-holder'>
          <TextField placeholder='First name' fullWidth={true}/>
        </div>
        <div className='lastname-holder'>
          <TextField placeholder='Last name' fullWidth={true}/>
        </div>
        <div className='email-holder'>
          <TextField placeholder='Email' fullWidth={true}/>
        </div>
        <div className='submit-holder'>
          <FlatButton label='save'/>
        </div>
      </div>
    )
  }
}

export default UserDetails
