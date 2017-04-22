import React, { PureComponent } from 'react'
import MenuDrawer from '../components/MenuDrawer'
import FlatButton from 'material-ui/FlatButton'
// style
import './SettingsAccount.sass'

class SettingsAccount extends PureComponent {
  constructor(props){
    super(props)
    this.state = {

    }
    // this.handleOpen = this.handleOpen.bind(this)
  }



  render () {
    return (
      <div>
        <div className='open-btn'>
          {/* <FlatButton label='open' onClick={this.handleOpen} /> */}
          Settings Account
        </div>

      </div>
    )
  }
}

export default SettingsAccount
