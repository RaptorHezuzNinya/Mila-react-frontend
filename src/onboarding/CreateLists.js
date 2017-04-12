import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// actions
import createNetworkList from '../actions/networklists/create'

// Material UI Components
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import ListIcon from 'material-ui/svg-icons/action/list'

// Styles
import './CreateLists.sass'

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

class CreateLists extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value
    })
    console.log(this.state.title)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('imma in handlesubmit fun')
    const { title } = this.state
    this.props.createNetworkList({title})
    this.setState({
      title: ''
    })
  }

  render() {

    return (
      <div className="create-lists-wrapper">
        <p>Ok, In the mean time, tell me: Which lists shall we use to sort your contacts? Do you (want to) keep a newslettes, sales-funnel, prospects?
        </p>
        {/*  Hier moet nieuw gemaakte networklists gerenderd worden*/}
        {/* <div className="example-list">
          <span><ListIcon className="list-icon"/></span>
          <p className="example-title">Stakeholders</p>
        </div> */}
        <div className="list-form-holder">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              onChange={this.handleChange.bind(this)}
              className="list-input"
              hintText="Enter list title, e.g. clients, prospects …"
              hintStyle={styles.hint}
              fullWidth={true}
              inputStyle={styles.inputStyle}
              value={this.state.title}/>

            <div className="form-btn-holder">
              <FlatButton
                type="submit"
                className="btn-grey form-btn"
                label="Add a List"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createNetworkList })(CreateLists)
