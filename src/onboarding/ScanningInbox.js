import React from 'react'
// Styles
import './Onboarding.sass'

const ScanningInbox = () => {
  return (
    <div className="scanning-contacts">
      <h3>{"Hi #{username}!"}</h3>
      <p>I am Mila. Nice to meet you.</p>
      <p>I’ve already started scanning your inbox in the background. From now on, it’s my job to keep track of all the valuable contacts in your inbox.
      </p>
    </div>
  )
}

export default ScanningInbox
