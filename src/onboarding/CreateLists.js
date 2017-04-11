import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import ListIcon from 'material-ui/svg-icons/action/list'

// Styles
import './CreateLists.sass'

class CreateLists extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      listTitle: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      listTitle: event.target.value
    })
  }

  clickDo = () => {
    const { listTitle } = this.state.listTitle
    this.props.saveList(listTitle)
  }

  renderLists = (list, index) => {
    return (
      <TextField
        key={index}
        defaultValue={list.name}
      />
    )
  }

  render() {
    const { myLists } = this.state
    return (
      <div className="create-lists-wrapper">
        <p>Ok, In the mean time, tell me: Which lists shall we use to sort your contacts? Do you (want to) keep a newslettes, sales-funnel, prospects?
        </p>
        <div className="example-list">
          <span><ListIcon className="list-icon"/></span>
          <p className="example-title">Stakeholders</p>
        </div>
        <form>
          <TextField placeholder="Enter your list title here"/>
          <FlatButton
            className="btn-grey"
            label="Add a List"/>
        </form>
      </div>
    )
  }
}

export default CreateLists
