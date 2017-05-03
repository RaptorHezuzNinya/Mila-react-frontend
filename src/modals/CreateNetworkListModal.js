import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { hideModal } from '../actions/modals/index'
import { createNetworkList } from '../actions/networklists'
import { formDataCreateNetworkListModal as formData } from '../helpers/formData'
import PageTitle from '../components/PageTitle'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CheckBox from 'material-ui/Checkbox'
import './CreateNetworkListModal.sass'
import { inlineCreateNetworkListModalStyles as styles } from '../helpers/inlineStyles'

class CreateNetworkListModal extends PureComponent {
  constructor(){
    super()
    this.state = {
      titleCount: 0,
      descCount: 0,
      maxTitleCount: 25,
      maxDescCount: 130
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleClose = () => {
    this.props.hideModal()
  }

  onSubmit (formProps) {
    this.props.createNetworkList(formProps)
    this.handleClose()
  }

  handleFormChange (value) {
    const fieldName = value.currentTarget.name
    const fieldValue = value.currentTarget.value.length
    if (fieldName === 'title') {
      return this.setState({
        titleCount: fieldValue
      })
    }
    if (fieldName === 'description') {
      return this.setState({
        descCount: fieldValue
      })
    }
  }

  renderTextField = ({ input, label, multiLine, rows, rowsMax, maxChars, meta: { touched, error } }) => (
    <TextField
      name={name}
      hintText={label}
      hintStyle={styles.hintStyle}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      multiLine={multiLine}
      maxLength={maxChars}
      rows={rows}
      rowsMax={rowsMax}
      {...input}
    />
  )

  renderFormFields = () => {
    const { titleCount, maxTitleCount, descCount, maxDescCount } = this.state

    return formData.map((form) => {
      return (
        <div key={form.name} className={form.className}>
          {form.formHeader}
          <Field
            onChange={this.handleFormChange}
            name={form.name}
            label={form.label}
            maxChars={form.maxChars}
            multiLine={form.multiLine}
            rows={form.rows}
            rowsMax={form.rowsMax}
            component={ this.renderTextField } />
        </div>
      )
    })
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <div className='modal-wrapper'>
        <Dialog
          className='createlist-dialog'
          modal={true}
          open={true}
          contentStyle={styles.customContentStyle}>
          <div className='content-wrapper'>
            <PageTitle
              titleClassName='createlist-modal-title'
              pageTitleContentH2='Create a new Mila list'
              pageTitleContentH3='Use lists to group your contacts' />
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className='form-container'>
                { this.renderFormFields() }
              </div>
              <CheckBox className='team-cb' label='Share this list with your team.' />
              <div className='cta-container'>
                <div className='submit-but'>
                  <FlatButton
                    className='btn-green-modal'
                    type='submit'
                    label='Create'
                    disabled={false} />
                </div>
                <div className='cancel-but'>
                  <FlatButton
                    className='btn-grey-modal'
                    label='Cancel'
                    onClick={this.handleClose} />
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
  const requiredFields = [ 'title' ]
  requiredFields.forEach( (field) => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

export default connect(null, { hideModal, createNetworkList } )(reduxForm({
  form: 'createNWLModalForm',
  validate
})(CreateNetworkListModal))
