import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import ContactCard from './ContactCard'

export class NewContactsContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1>Container!</h1>
        <ContactCard />
      </div>
    )
  }
}

export default NewContactsContainer
