import React from 'react'
import PageTitle from '../components/PageTitle'
import NetworkContainer from './NetworkContainer'

const Network = () => {
  return (
    <div>
      <PageTitle
        titleClassName='network-page-title'
        pageTitleContentH2="Admire your contact paradise. It's my pleasure." />
      <NetworkContainer />
    </div>
  )
}

export default Network
