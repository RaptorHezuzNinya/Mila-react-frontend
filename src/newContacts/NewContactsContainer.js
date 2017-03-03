import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import ContactCard from './ContactCard'

class NewContactsContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1>New Contact Container!</h1>
        <ContactCard />
      </div>
    )
  }
}

export default NewContactsContainer
