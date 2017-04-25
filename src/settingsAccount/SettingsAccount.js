import React, { PureComponent } from 'react'
import PageTitle from '../components/PageTitle'
import UserDetails from './UserDetails'
import Plugins from './Plugins'
import SecureServer from '../components/SecureServer'
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
