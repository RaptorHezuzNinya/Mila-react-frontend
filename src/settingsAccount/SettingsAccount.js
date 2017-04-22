import React, { PureComponent } from 'react'
import MenuDrawer from '../components/MenuDrawer'
import FlatButton from 'material-ui/FlatButton'
// style
import './SettingsAccount.sass'

class SettingsAccount extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false
    }
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen () {
    console.log('clicked')
    this.setState({
      openDrawer: !this.state.open
    })
  }

  render () {
    return (
      <div>
        <div className='open-btn'>
          <FlatButton label='open' onClick={this.handleOpen} />
        </div>
        <MenuDrawer open={this.state.openDrawer}/>

      </div>
    )
  }
}

export default SettingsAccount
