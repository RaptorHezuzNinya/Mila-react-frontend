import React, { PureComponent, PropTypes } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import './ContactDetails.sass'

const styles = {
  input: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    paddingLeft: 10
  }
}
class ContactDetails extends PureComponent {
  static propTypes = {
    oneContact: PropTypes.array.isRequired
  }

  renderTextField = ({ input, label, multiLine, rows, rowsMax, maxChars, meta: { touched, error } }) => (
    <TextField
      fullWidth={true}
      inputStyle={styles.input}
      errorText={touched && error}
      {...input}
    />
  )

  renderFormFields = () => {
    const { initialValues } = this.props
    const formData = [
      {
        name: 'firstName',
        label: ''
      },
      {
        name: 'lastName',
        label: ''
      },
      {
        name: 'companyName',
        label: ''
      },
      {
        name: 'companyRole',
        label: ''
      }
    ]

    return formData.map((form, index) => {
      return (
        <div key={form.name} className={`detail-item${index + 1}`}>
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
            { this.renderFormFields()}
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
