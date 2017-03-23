import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


// Styles
import './onboarding.sass'

class CreateLists extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      listName: '',
      myLists: [
        {
          name: 'StakeHolders',
          source: 'Mila',
        },
        {
          name: `VIP's of the company`,
          source: `Mila`
        },
        {
          name: `Newsletter US`,
          source: 'MailChimp',
        },
      ]
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
      <div className="create-lists">
        <div>
          <h1>What other lists do you need?</h1>
          <p>Email a quick update to key partners? Follow-up on prospects? Keep track of freelancers? Just create a list for it.</p>
        </div>
        <div>
          <h4>YOUR LISTS</h4>
            {myLists.map(this.renderLists)}
            <TextField
              hintText="Type a list name, e.g. VIP's, freelancers, friends"
              onChange={this.handleChange}
              fullWidth={true}
            />
            <FlatButton label='ADD A LIST' value='submit' onClick={this.clickDo}/>
        </div>
      </div>
    )
  }
}

export default CreateLists
