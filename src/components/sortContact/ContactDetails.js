import React, { PureComponent, PropTypes } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { formDataContactDetails as formData } from '../../helpers/formData'
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
      name={label}
      fullWidth={true}
      inputStyle={styles.input}
      errorText={touched && error}
      {...input}
    />
  )

  renderFormFields = () => {
    const { initialValues } = this.props

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
  onSubmit () {
    console.log('submitted?')
  }
  // handleButtonClick () {
  //   console.log('in handlebtnclick')
  //   const submitter = this.props.handleSubmit(this.props.onSubmit)
  //   submitter()
  // }

  renderContactDetails () {
    const { oneContact, handleSubmit } = this.props
    return oneContact.map((c) => {
      return (
        <div className='contact-details' key={c.id}>
        <form className='details-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            { this.renderFormFields()}
            <div className='detail-item5'>
              <TextField
                name='email'
                inputStyle={styles.input}
                style={styles.txtfield}
                value={c.email}
                fullWidth={true} />
            </div>
            <button type='submit'>save form</button>
          </form>
        </div>
      )
    })
  }

  render () {
    console.log(this.props.submit)
    return (
      <div className='contact-details-holder'>
        {this.renderContactDetails()}
        {/* <button onClick={this.handleButtonClick.bind(this)}>save</button> */}
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
  validate
})(ContactDetails))
