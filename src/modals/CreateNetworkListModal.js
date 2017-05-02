import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { hideModal } from '../actions/modals/index'
import { createNetworkList } from '../actions/networklists'
import PageTitle from '../components/PageTitle'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CheckBox from 'material-ui/Checkbox'
import './CreateNetworkListModal.sass'

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

class CreateNetworkListModal extends PureComponent {
  constructor(){
    super()
    this.state = {
      titleCount: 0,
      descCount: 0,
      maxTitleCount: 25,
      maxDescCount: 250
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

  renderTextField = ({ input, meta: { touched, error }, label, multiLine, rows, rowsMax }) => {

    return (
      <TextField
        name={name}
        hintText={label}
        hintStyle={styles.hintStyle}
        fullWidth={true}
        inputStyle={styles.inputStyle}
        errorText={touched && error}
        multiLine={multiLine}
        maxLength={25}
        rows={rows}
        rowsMax={rowsMax}
        {...input}
      />
    )
  }

  renderFormFields = () => {
    const { titleCount, maxTitleCount, descCount, maxDescCount } = this.state
    const formData = [
      {
        name: 'title',
        label: 'Type a list name, e.g. Top clients, freelancers, potential investors',
        formHeader: <div className='title-details'><p className='list-name'>Your list title</p><p>{maxTitleCount - titleCount} LEFT</p></div>,
        className: 'title-holder',
        rows: 1,
        multiLine: false,
        rowsMax: null,
        maxChars: 25,
      },
      {
        name: 'description',
        label: 'What do you do with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update',
        formHeader: <div className='desc-details'><p className='desc-name'>Your list description(optional)</p><p>{maxDescCount - descCount} LEFT</p></div>,
        className: 'desc-holder',
        rows: 2,
        multiLine: true,
        rowsMax: 4,
        maxChars: 250,
      }
    ]

    return formData.map((form) => {
      return (
        <div key={form.name} className={form.className}>
          {form.formHeader}
          <Field
            onChange={this.handleFormChange}
            name={form.name}
            label={form.label}
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
          contentStyle={styles.customContentStyle}
          open={true} >
          <div className='content-wrapper'>
            <PageTitle
              titleClassName='createlist-modal-title'
              pageTitleContentH2='Create a new Mila list'
              pageTitleContentH3='Use lists to group your contacts' />

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className='form-container'>
                { this.renderFormFields() }
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

const afterSubmit = (result, dispatch) => {
  dispatch(reset('createNWLModalForm'))
}

export default connect(null, { hideModal, createNetworkList } )(reduxForm({
  form: 'createNWLModalForm',
  validate,
  onSubmitSuccess: afterSubmit
})(CreateNetworkListModal))
