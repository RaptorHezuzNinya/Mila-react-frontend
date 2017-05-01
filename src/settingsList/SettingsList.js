import React, { PureComponent, PropTypes } from 'react'
import PageTitle from '../components/PageTitle'
import EditNetworkList from './EditNetworkList'
import SyncContacts from './SyncContacts'
import './SettingsList.sass'

class SettingsList extends PureComponent {
  render () {
    return (
      <div className='settings-list-wrapper'>
        <div className='pagetitle-list-wrap'>
          <PageTitle
            titleClassName='settings-list-title'
            pageTitleContentH2='Tools & Lists'
            pageTitleContentH3='Use your favorite sales and marketing tools or create your own lists to keep in touch.'/>
        </div>
        <div className='editnetworklist-list-wrap'>
          <EditNetworkList />
        </div>
        <div className='sync-contacts-list-wrap'>
          <SyncContacts />
        </div>
      </div>
    )
  }
}

export default SettingsList
