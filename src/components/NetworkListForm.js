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

  render () {
    return (
      <div>
        <form>
          <div>
            <Field
              name='title'
              label='Enter list title, e.g. clients, prospects …'
              component={ this.renderTextField } />
          </div>
          <div>
            <FlatButton
              type='submit'
              label='+ add list'
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

// export default reduxForm({
//   form: 'networkListForm',
//   validate
// })(NetworkListForm)


// NetworkListForm = reduxForm({
//   form: 'networkListForm' // a unique name for this form
// })(NetworkListForm)

// export default NetworkListForm

// export default connect(null, { createNetworkList })(reduxForm({
//   form: 'networkListForm',
//   validate
// })(NetworkListForm))

export default connect(null, { createNetworkList })(reduxForm({
  form: 'createNWLForm',
  validate
})(NetworkListForm))
