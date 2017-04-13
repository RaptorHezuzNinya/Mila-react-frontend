import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form'

// actions
import createNetworkList from '../actions/networklists/create'

// Material UI Components
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import ListIcon from 'material-ui/svg-icons/action/list'

// Styles
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
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     title: ''
  //   }
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   })
  //   console.log(this.state.title)
  // }

  renderNetworkLists(){
    return this.props.networkLists.map((networkList) => {
      return (
        <li className="list-item" key={networkList.id}>
          <span><ListIcon className="list-icon"/></span>
          <p className="example-title">{networkList.title}</p>
        </li>
      )
    })
  }

  renderTextField = ({ input, label, meta: { touched, error } }) => (
    <TextField
      className="list-input"
      hintText={label}
      hintStyle={styles.hint}
      fullWidth={true}
      inputStyle={styles.inputStyle}
      errorText={touched && error}
      {...input}
    />
  )

  onSubmit(props){
    this.props.createNetworkList(props)
  }

  render() {


    const { networkLists, handleSubmit, reset, submitting, pristine } = this.props
    console.log(pristine)
    return (
      <div className="create-lists-wrapper">
        <p>Ok, In the mean time, tell me: Which lists shall we use to sort your contacts? Do you (want to) keep a newslettes, sales-funnel, prospects?
        </p>
        <ul className="network-lists">
          { this.renderNetworkLists() }
        </ul>
        <div className="list-form-holder">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div>
              <Field
                name="title"
                label="Enter list title, e.g. clients, prospects …"
                component={this.renderTextField} />
            </div>

            <div className="form-btn-holder">
              <FlatButton

                type="submit"
                className="btn-grey form-btn"
                label="Add a List"
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

export default connect(mapStateToProps, { createNetworkList })(reduxForm({
  form: 'onboardCreateNWL',
  validate,
  onSubmitSuccess: afterSubmit
})(CreateListsContainer));

// This was the old stakeholders example
{/* <div className="example-list">
  <span><ListIcon className="list-icon"/></span>
  <p className="example-title">Stakeholders</p>
</div> */}
