import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createNetworkList } from '../actions/networklists'
import { Field, reduxForm, reset } from 'redux-form'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  hint: {
    fontSize: 14,
    fontFamily: 'Montserrat-Light'
  },
  inputStyle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Light',
    color: '#292f36',
  }
}

const formData = [
  {
    name: 'title',
    label: 'Enter list title, e.g. clients, prospects …'
  },
  {
    name: 'description',
    label: 'Enter list description',
  }
]

class NetworkListForm extends PureComponent {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(props) {
    this.props.createNetworkList(props)
  }

  renderTextField = ({ input, label, meta: { touched, error } }) => (
    <TextField
      className='list-input'
      hintText={label}
      hintStyle={styles.hint}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      {...input}
    />
  )

  renderFormFields = () => {
    return formData.map((form) => {
      return (
        <div key={form.name}>
          <Field
            name={form.name}
            label={form.label}
            component={ this.renderTextField } />
        </div>
      )
    })
  }

  render () {
    const { handleSubmit, btnLabel } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {this.renderFormFields()}
          <div>
            <FlatButton
              type='submit'
              label={btnLabel}
            />
          </div>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}
  const requiredFields = [ 'title', 'description']
  requiredFields.forEach( (field) => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('networkListForm'))
}

export default connect(null, { createNetworkList })(reduxForm({
  form: 'networkListForm',
  validate,
  onSubmitSuccess: afterSubmit
})(NetworkListForm))

// export default reduxForm({
//   form: 'networkListForm',
//   validate
// })(NetworkListForm)
