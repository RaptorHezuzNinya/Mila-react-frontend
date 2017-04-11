import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


// Styles
import './CreateLists.sass'

class CreateLists extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      listName: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      listName: event.target.value
    })
  }

  clickDo = () => {
    const { listName } = this.state.listName
    this.props.saveList(listName)
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
      </div>
    )
  }
}

export default CreateLists
