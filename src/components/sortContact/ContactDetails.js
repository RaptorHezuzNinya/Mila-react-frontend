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
    currentContact: PropTypes.array.isRequired
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
    const { currentContact, handleSubmit } = this.props
      return (
        <form className='details-form' onSubmit={handleSubmit(this.props.onSubmit)}>
          { this.renderFormFields()}
          <div className='dot'>•</div>
        </form>
      )

  }

  render () {
    const { currentContact } = this.props
    if (!currentContact) return null
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
  if (!state.sortContact.present[0]) return {}
  return {
    initialValues: {
      firstName: state.sortContact.present[0].firstName,
      lastName: state.sortContact.present[0].lastName,
      companyName: state.sortContact.present[0].companyName,
      companyRole: state.sortContact.present[0].companyRole,
    },
    currentContact: state.sortContact.present[0]
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'contactDetailsForm',
  enableReinitialize: true,
  warn,
})(ContactDetails))
