import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { toggleSlackNotification, toggleGmailNotification } from '../actions/user'
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
    const { toggleSlackNotification, toggleGmailNotification, slackNotification, gmailNotification } = this.props
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
              <Toggle
                className='slack-slider'
                onToggle={toggleSlackNotification}
                toggled={slackNotification}/>
            </div>
            <div className='email-slider-holder'>
              <p className='email-text'>Email Notifications</p>
              <Toggle
                className='email-slider'
                onToggle={toggleGmailNotification}
                toggled={gmailNotification}/>
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
const mapStateToProps = (state) => {
  return {
    slackNotification: state.user.slackNotification,
    gmailNotification: state.user.gmailNotification
  }
}

export default connect(mapStateToProps, {toggleSlackNotification, toggleGmailNotification})(UserDetails)
