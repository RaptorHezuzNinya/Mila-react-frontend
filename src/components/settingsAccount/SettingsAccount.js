import React, { PureComponent } from 'react'
import PageTitle from '../PageTitle'
import UserDetails from './UserDetails'
import Plugins from './Plugins'
import SecureServer from '../SecureServer'
import './SettingsAccount.sass'

class SettingsAccount extends PureComponent {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className='settings-account-wrapper'>
        <div className='pagetitle-account-wrapper'>
          <PageTitle
            titleClassName='settings-account-title'
            pageTitleContentH2='Account Settings'
            pageTitleContentH3="Let's go into the detail"/>
        </div>
        <div className='user-details-wrapper'>
          <UserDetails />
        </div>
        <div className='plugin-wrapper'>
          <Plugins
            pluginHolderClassName='plugin-holder'
            textClassName='plugin-text'
            btnHolderClassName='btn-holder'
            gmailBtnlabel='Gmail'
            slackBtnlabel='Slack'/>
        </div>
        <div className='secure-server-wrapper'>
          <SecureServer />
        </div>
      </div>
    )
  }
}

export default SettingsAccount
