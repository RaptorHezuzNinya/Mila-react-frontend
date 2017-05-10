import React, { PureComponent, PropTypes } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
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

  renderTextField = ({ input, label, multiLine, rows, rowsMax, maxChars, meta: { touched, error } }) => (
    <TextField
      name={name}
      hintText={label}
      hintStyle={styles.hintStyle}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      {...input}
    />
  )

  renderFormFields = () => {
    const formData = [
      {
        name: 'firstname',
        label: ''
      },
      {
        name: 'lastname',
        label: ''
      },
      {
        name: 'companyname',
        label: ''
      },
      {
        name: 'companyrole',
        label: ''
      }
    ]

    return formData.map((form) => {
      return (
        <div key={form.name} className='holder'>
          <Field
            name={form.name}
            label={form.name}
            component={ this.renderTextField } />
        </div>
      )
    })
  }

  renderContactDetails () {
    const { oneContact } = this.props
    return oneContact.map((c) => {
      return (
        <div className='contact-details' key={c.id}>
          <form className='details-form'>
            {/* <div className='detail-item1'>
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
            </div> */}
            { this.renderFormFields()}
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

const validate = (values) => {
  const errors = {}
  const requiredFields = [ 'firstname', 'lastname', 'companyrole', 'company' ]
  requiredFields.forEach( (field) => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

export default reduxForm({
  form: 'contactDetailsForm',
  validate
})(ContactDetails)
