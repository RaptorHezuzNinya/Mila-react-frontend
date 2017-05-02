import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { hideModal } from '../actions/modals/index'
import { createNetworkList } from '../actions/networklists'
import NetworkListForm from '../components/NetworkListForm'
import PageTitle from '../components/PageTitle'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CheckBox from 'material-ui/Checkbox'
import './CreateNetworkListModal.sass'

const maxTitleCount = 25
const maxDescCount = 250

const styles = {
  customContentStyle: {
    width: '600px',
  },
  hintStyle: {
    color: '#737a80',
    fontSize: 14,
    fontWeight: 100,
    fontFamily: 'Montserrat-Light'
  }
}

const formData = [
  {
    name: 'title',
    label: 'Type a list name, e.g. Top clients, freelancers, potential investors',
    maxLength: 25,
    formHeader: <p className='list-name'>LIST NAME</p>
  },
  {
    name: 'description',
    label: 'What do you do with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update',
    maxLength: 250,
    formHeader: <p className='desc-name'>DESCRIPTION (optional)</p>
  }
]

const required = (value) => value ? undefined : 'Required'
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

class CreateNetworkListModal extends PureComponent {

  constructor(){
    super()
    this.state = {
      open: true,
    }
  }


  handleClose = () => {
    this.setState({open: !this.state.open})
    this.props.hideModal()
  }

  onSubmit (formProps) {
    console.log('submitted')
    this.props.createNetworkList(formProps)
    this.handleClose()
  }

  renderTextField = ({ input, maxLength, label, meta: { touched, error } }) => (
    <TextField
      name={name}
      hintText={label}
      hintStyle={styles.hintStyle}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      maxLength={maxLength}
      {...input}
    />
  )

  renderFormFields = () => {
    return formData.map((form) => {
      return (
        <div key={form.name}>
          {form.formHeader}
          <Field
            validate={[ maxLength15 ]}
            name={form.name}
            label={form.label}
            component={ this.renderTextField } />
        </div>
      )
    })
  }


  render(){
    const { title, description, handleSubmit } = this.props
    console.log('name props', this.props.networkListFormValue)
    return (
      <div className='modal-wrapper'>
        <Dialog
          className='createlist-dialog'
          modal={true}
          contentStyle={styles.customContentStyle}
          open={this.state.open} >
          <div className='content-wrapper'>
            <PageTitle
              titleClassName='createlist-modal-title'
              pageTitleContentH2='Create a new Mila list'
              pageTitleContentH3='Use lists to group your contacts' />


            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className='listname-container'>
                { this.renderFormFields() }
              </div>
              <div className='descript-container'>


              </div>
              <div className='cta-container'>

                <CheckBox className='team-checkb' label='Share this list with your team.' />

                <div className='submit-but'>
                  <FlatButton
                    type='submit'
                    label='CREATE'
                    disabled={false} />
                </div>
                <div className='cancel-but'>
                  <FlatButton
                    label='Cancel'
                    onTouchTap={this.handleClose} />
                </div>
              </div>
            </form>
          </div>
        </Dialog>
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
  dispatch(reset('createNWLModalForm'))
}

export default connect(null, { hideModal, createNetworkList } )(reduxForm({
  form: 'createNWLModalForm',
  validate,
  onSubmitSuccess: afterSubmit
})(CreateNetworkListModal))
