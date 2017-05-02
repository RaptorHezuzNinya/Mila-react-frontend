import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
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

const required = (value) => value ? undefined : 'Required'
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

class CreateNetworkListModal extends PureComponent {
  constructor(){
    super()
    this.state = {
      open: true,
      titleCount: 0,
      descCount: 0
    }
  }

  handleClose = () => {
    // this.setState({open: !this.state.open})
    this.props.hideModal()
  }

  onSubmit (formProps) {
    console.log('submitted')
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

  renderTextField = ({ name, input, multiLine, rows, rowsMax, maxChars, label, meta: { touched, error } }) => {
    console.log(multiLine)
    const maxLengthHack = classNames({
      10 : multiLine,
      5 : !multiLine,
    })
    return (
      <TextField
        name={name}
        hintText={label}
        hintStyle={styles.hintStyle}
        fullWidth={true}
        inputStyle={styles.inputStyle}
        errorText={touched && error}
        maxLength={maxLengthHack}
        multiLine={multiLine}
        rows={rows}
        rowsMax={rowsMax}
        {...input}
      />
    )
  }

  renderFormFields = () => {
    const formData = [
      {
        name: 'title',
        label: 'Type a list name, e.g. Top clients, freelancers, potential investors',
        maxChars: 25,
        formHeader: <div className='details-holder'><p className='list-name'>Your list title</p><p>{maxTitleCount - this.state.titleCount} LEFT</p></div>,
        className: 'title-holder',
        rows: 1,
        multiLine: false,
        rowsMax: null
      },
      {
        name: 'description',
        label: 'What do you do with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update',
        maxChars: 250,
        formHeader: <div className='details-holder'><p className='desc-name'>Your list description(optional)</p><p>{maxDescCount - this.state.descCount} LEFT</p></div>,
        className: 'desc-holder',
        rows: 2,
        multiLine: true,
        rowsMax: 4
      }
    ]

    return formData.map((form) => {
      return (
        <div key={form.name} className={form.className}>
          {form.formHeader}
          <Field
            onChange={this.handleFormChange.bind(this)}
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
          open={this.state.open} >
          <div className='content-wrapper'>
            <PageTitle
              titleClassName='createlist-modal-title'
              pageTitleContentH2='Create a new Mila list'
              pageTitleContentH3='Use lists to group your contacts' />

            <form onSubmit={handleSubmit(this.onSubmit)}>

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
