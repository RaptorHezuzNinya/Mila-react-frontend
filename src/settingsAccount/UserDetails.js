import React, {PureComponent} from 'react'
// material-ui components
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class UserDetails extends PureComponent {
  render () {
    return (
      <div className='user-details-wrapper'>
        <div>
          <TextField />


        </div>
        <div>
          <FlatButton label='save'/>
        </div>
      </div>
    )
  }
}

export default UserDetails
