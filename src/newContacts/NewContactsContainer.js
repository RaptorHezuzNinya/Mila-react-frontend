import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import ContactCard from './ContactCard'

class NewContactsContainer extends PureComponent {
  static propTypes = {
    contactCards: PropTypes.array.isRequired
  }

  renderContactCard(contactCard, index) {
      return <ContactCard key={index} { ...contactCard } />
  }

  render() {
    const { contactCards } = this.props
    if (!contactCards) return null

    return (
      <div>
        <h1>New Contact Container!</h1>
        <div>
          {contactCards.map(this.renderContactCard.bind(this))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ contactCards }) => ({ contactCards })

export default connect(mapStateToProps)(NewContactsContainer)
