import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import Contact from './Contact'

class NewContactsContainer extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }

  renderContact(contact, index) {
      return <Contact key={index} { ...contact } />
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return null

    return (
      <div>
        <h1>New Contact Container!</h1>
        <div>
          {contacts.map(this.renderContact.bind(this))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts })

export default connect(mapStateToProps)(NewContactsContainer)
