import React, { PureComponent, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import './ContactDetails.sass'

const styles = {
  txtfield: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
  },
  input: {
    paddingLeft: 10
  }
}
class ContactDetails extends PureComponent {
  static propTypes = {
    oneContact: PropTypes.array.isRequired
  }

  renderContactDetails () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='contact-details' key={c.contactId}>
          <form className='details-form'>
            <div className='detail-item1'>
              <TextField
                name='firstname'
                inputStyle={styles.input}
                style={styles.txtfield}
                value={c.firstName}
                fullWidth={true} />
            </div>
            <div className='detail-item2'>
              <TextField
                name='lastname'
                style={styles.txtfield}
                value={c.lastName}
                fullWidth={true} />
            </div>

            <div className='detail-item3'>
              <TextField
                name='companyname'
                inputStyle={styles.input}
                style={styles.txtfield}
                value={c.companyName}
                fullWidth={true} />
            </div>

            <div className='detail-item4'>
              <TextField
                name='companyrole'
                inputStyle={styles.input}
                style={styles.txtfield}
                value={c.companyRole}
                fullWidth={true} />
            </div>
            <div className='detail-item5'>
              <TextField
                name='email'
                inputStyle={styles.input}
                style={styles.txtfield}
                value={c.email}
                fullWidth={true} />
            </div>
          </form>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='contact-details-holder'>
        {this.renderContactDetails()}
      </div>
    )
  }
}
export default ContactDetails
