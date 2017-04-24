import React, { PureComponent } from 'react'
import PageTitle from '../components/PageTitle'


// style
import './SettingsAccount.sass'

class SettingsAccount extends PureComponent {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className='settings-account-wrapper'>
        <PageTitle
          titleClassName='settings-account-title'
          pageTitleContentH2='Account Settings'
          pageTitleContentH3="Let's go into the detail"/>
      </div>
    )
  }
}

export default SettingsAccount
