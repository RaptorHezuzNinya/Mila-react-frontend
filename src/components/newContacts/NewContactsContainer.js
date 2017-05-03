import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Contact from './Contact'

// exporting it here seems redundant but is necessary for shallow rendering in tests.
export class NewContactsContainer extends PureComponent {
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
        {contacts.map(this.renderContact.bind(this))}
      </div>
    )
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts })

export default connect(mapStateToProps)(NewContactsContainer)
