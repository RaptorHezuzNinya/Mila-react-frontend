import React from 'react'
// Styles
import './onboarding.sass'

const ScanningContacts = () => {
  return (
    <div className="scanning-contacts">
      <h3>{"Hi #{dynamic UserName}!"}</h3>
      <p>I'm Mila. I need about 30-40 seconds to scan your inbox for your contacts.</p>
      <p>In the meantime, tell me how you want to keep in touch with your network.</p>
    </div>
  )
}

export default ScanningContacts
