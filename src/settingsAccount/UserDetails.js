import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import './UserDetails.sass'

class UserDetails extends PureComponent {
  render () {
    const styles = {
      hintText: {
        marginLeft: 40
      },
      inputStyle: {
        marginLeft: 40
      }
    }
    return (
      <div className='user-details-holder'>

        <form onSubmit={this.handleFormSubmit}>

          <div className='details-holder'>

            <div className='firstname-holder'>
              <TextField
                hintText='First name'
                hintStyle={styles.hintText}
                inputStyle={styles.inputStyle}
                fullWidth={true}/>
            </div>
            <div className='lastname-holder'>
              <TextField
                hintText='Last name'
                hintStyle={styles.hintText}
                inputStyle={styles.inputStyle}
                fullWidth={true}/>
            </div>
            <div className='email-holder'>
              <TextField
                hintText='Email'
                hintStyle={styles.hintText}
                inputStyle={styles.inputStyle}
                fullWidth={true}/>
            </div>
          </div>

          <div className='notification-holder'>
            <div className='slack-slider-holder'>
              <p className='slack-text'>Slack Notifications</p>
              <Toggle className='slack-slider'/>
            </div>
            <div className='email-slider-holder'>
              <p className='email-text'>Email Notifications</p>
              <Toggle className='email-slider'/>
            </div>
          </div>


          <div className='submit-holder'>
            <FlatButton className='btn-green' label='save' type='submit'/>
          </div>

        </form>

      </div>
    )
  }
}

export default UserDetails
