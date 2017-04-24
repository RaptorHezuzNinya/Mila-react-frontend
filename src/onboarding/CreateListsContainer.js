import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form'
import Media from 'react-media'
import { createNetworkList, deleteNetworkList } from '../actions/networklists/index'
import ResponsiveContent from './ResponsiveContent'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import ListIcon from 'material-ui/svg-icons/action/list'
import './CreateListsContainer.sass'

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

class CreateListsContainer extends PureComponent {
  constructor(props){
    super(props)
    this.handleTextFieldClick = this.handleTextFieldClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  static propTypes = {
    addListCount: PropTypes.func.isRequired,
    lowerListCount: PropTypes.func.isRequired,
    disableProceedWarn: PropTypes.func.isRequired,
  }

  handleDeleteListClick(networkList) {
    this.props.deleteNetworkList(networkList.title)
    this.props.lowerListCount()
  }

  onSubmit (props) {
    this.props.createNetworkList(props);
    this.props.addListCount();
  }

  handleTextFieldClick () {
    this.props.disableProceedWarn()
  }

  renderNetworkLists = () => {
    return this.props.networkLists.map((networkList) => {
      return (
          //FIXME when there is an api key needs to be .id
        <li className='list-item' key={networkList.title}>
          <span><ListIcon className='list-icon'/></span>
          <p className='list-title'>{networkList.title}</p>
          <Media query='(max-width: 769px)' render={() => (
            <span>
              <IconButton onClick={this.handleDeleteListClick.bind(this, networkList)}>
                <DeleteIcon />
              </IconButton>
            </span>
          )}/>
          <Media query='(min-width: 769px)' render={() => (
            <span>
              <FlatButton className='list-delete-btn' label='delete' onClick={this.handleDeleteListClick.bind(this, networkList)} />
            </span>
          )}/>
        </li>
      )
    })
  }

  renderTextField = ({ input, label, meta: { touched, error } }) => (
    <TextField
      className='list-input'
      onClick={this.handleTextFieldClick}
      hintText={label}
      hintStyle={styles.hint}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      {...input}
    />
  )

  render() {
    const { handleSubmit, reset, submitting, pristine } = this.props
    return (
      <div className='create-lists-wrapper'>
        <ResponsiveContent />
        <ul className='network-lists'>
          { this.renderNetworkLists() }
        </ul>
        <div className='list-form-holder'>
          <form onSubmit={ handleSubmit(this.onSubmit) }>
            <div>
              <Field
                name='title'
                label='Enter list title, e.g. clients, prospects …'
                component={ this.renderTextField } />
            </div>
            <div className='form-btn-holder'>
              <FlatButton
                type='submit'
                className='btn-grey form-btn'
                label='Create List'
                disabled={pristine || submitting}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}
  const requiredFields = [ 'title']
  requiredFields.forEach( (field) => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const mapStateToProps = (state) => {
  return {
    networkLists: state.networkLists
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('onboardCreateNWL'))
}

export default connect(mapStateToProps, { createNetworkList, deleteNetworkList })(reduxForm({
  form: 'onboardCreateNWL',
  validate,
  onSubmitSuccess: afterSubmit
})(CreateListsContainer));
