import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
  createNetworkList,
  deleteNetworkList,
  requestNetworkLists
} from '../../actions/networklists'
import Media from 'react-media'
import ResponsiveContent from './ResponsiveContent'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import ListIcon from 'material-ui/svg-icons/action/list'
import './CreateListsContainer.sass'
import { inlineCreateListsContainerStyles as styles } from '../../helpers/inlineStyles'

class CreateListsContainer extends PureComponent {
  static propTypes = {
    addListCount: PropTypes.func.isRequired,
    lowerListCount: PropTypes.func.isRequired,
    disableProceedWarn: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleTextFieldClick = this.handleTextFieldClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    return this.props.requestContacts()
  }

  handleDeleteListClick(networkList) {
    this.props.deleteNetworkList(networkList.title)
    this.props.lowerListCount()
  }

  onSubmit(props) {
    this.props.createNetworkList(props)
    this.props.addListCount()
  }

  handleTextFieldClick() {
    this.props.disableProceedWarn()
  }

  renderNetworkLists = ({ networkLists } = this.props) => {
    return networkLists.map(networkList => {
      return (
        <li className="list-item" key={networkList.id}>
          <span><ListIcon className="list-icon" /></span>
          <p className="list-title">{networkList.title}</p>
          <Media
            query="(max-width: 769px)"
            render={() => (
              <span>
                <IconButton onClick={this.handleDeleteListClick.bind(this, networkList)}>
                  <DeleteIcon />
                </IconButton>
              </span>
            )}
          />
          <Media
            query="(min-width: 769px)"
            render={() => (
              <span>
                <FlatButton
                  className="list-delete-btn"
                  label="delete"
                  onClick={this.handleDeleteListClick.bind(this, networkList)}
                />
              </span>
            )}
          />
        </li>
      )
    })
  }

  renderTextField = ({ input, label, meta: { touched, error } }) => (
    <TextField
      className="list-input"
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
      <div className="create-lists-wrapper">
        <ResponsiveContent />
        <ul className="network-lists">
          {this.renderNetworkLists()}
        </ul>
        <div className="list-form-holder">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <Field
                name="title"
                label="Enter list title, e.g. clients, prospects …"
                component={this.renderTextField}
              />
            </div>
            <div className="form-btn-holder">
              <FlatButton
                type="submit"
                className="btn-grey form-btn"
                label="Create List"
                disabled={pristine || submitting}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = ['title']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const mapStateToProps = state => {
  return {
    networkLists: state.networkLists
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('onboardCreateNWL'))
}

export default connect(mapStateToProps, {
  createNetworkList,
  deleteNetworkList,
  requestNetworkLists
})(
  reduxForm({
    form: 'onboardCreateNWL',
    validate,
    onSubmitSuccess: afterSubmit
  })(CreateListsContainer)
)
