import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import ContactSlider from './ContactSlider'

// exporting it here seems redundant but is necessary for shallow rendering in tests.
export class NewContactsContainer extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return null

    return (
      <div>
        <h1>New Contact Container!</h1>
        <ContactSlider contacts={contacts} />
      </div>
    )
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts })

export default connect(mapStateToProps)(NewContactsContainer)
