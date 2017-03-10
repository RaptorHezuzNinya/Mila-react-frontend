import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions & Reducers
import networkList from '../reducers/networklists'
import createNetworkList from '../actions/networklists/create'

//material-ui Components
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

//styles
import './CreateNetworkButton.sass'

class CreateNetworkButton extends PureComponent {
  state = {
    name: this.props.name
  }

  createNetworkList(event){
    event.preventDefault()
    const { name } = this.state

    this.props.createNetworkList(this.state)
  }

  handleChange = (event) => {
    const field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }

  render(){
    const { name } = this.props
    return (
      <div>
        <TextField
          type="text"
          ref="listtitle"
          name="name"
          value={this.state.name || ''}
          onChange={this.handleChange}
        />
        <FlatButton
          className="unicorn"
          label="+"
          onClick={this.createNetworkList.bind(this)}
        />
      </div>
    )
  }
}

export default connect(null, { createNetworkList })(CreateNetworkButton)
