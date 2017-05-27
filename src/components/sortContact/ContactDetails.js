import React, { PureComponent, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { formDataContactDetails as formData, formFieldsContactDetails as formFields } from '../../helpers/formData'
import { inlineContactDetailsStyles as styles } from '../../helpers/inlineStyles'
import './ContactDetails.sass'

class ContactDetails extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    oneContact: PropTypes.array.isRequired
  }

  renderTextField = ({ input, label, multiLine, rows, rowsMax, maxChars, meta: { touched, warning } }) => (
    <TextField
      name={label}
      fullWidth={true}
      inputStyle={styles.input}
      errorStyle={styles.errorStyle}
      errorText={warning}
      style={styles.style}
      underlineShow={false}
      {...input}
    />
  )

  renderFormFields = () => {
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
    const { oneContact, handleSubmit } = this.props
    return oneContact.map((contact) => {
      return (
        <div className='contact-details' key={contact.id}>
        <form className='details-form' onSubmit={handleSubmit(this.props.onSubmit)}>
            { this.renderFormFields()}
            <div className='detail-item5'>
              {/* <TextField
                name='email'
                inputStyle={styles.input}
                style={styles.style}
                value={contact.email}
                fullWidth={true} /> */}
              <p>{contact.email}</p>
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

const warn = (values) => {
  const warnings = {}
  formFields.forEach( (field) => {
    if (!values[ field ]) {
      warnings[ field ] = 'Required'
    }
  })
  return warnings
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      firstName: ownProps.oneContact[0].firstName,
      lastName: ownProps.oneContact[0].lastName,
      companyName: ownProps.oneContact[0].companyName,
      companyRole: ownProps.oneContact[0].companyRole,
    }
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'contactDetailsForm',
  enableReinitialize: true,
  warn,
})(ContactDetails))
