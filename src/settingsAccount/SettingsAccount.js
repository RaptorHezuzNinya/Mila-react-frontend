import React, { PureComponent } from 'react'
import PageTitle from '../components/PageTitle'
import UserDetails from './UserDetails'
import './SettingsAccount.sass'

class SettingsAccount extends PureComponent {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className='settings-account-wrapper'>
        <div className='page-title-holder'>
          <PageTitle
            titleClassName='settings-account-title'
            pageTitleContentH2='Account Settings'
            pageTitleContentH3="Let's go into the detail"/>
        </div>
        <div className='settings-account-content'>
          <UserDetails />
        </div>
      </div>
    )
  }
}

export default SettingsAccount
