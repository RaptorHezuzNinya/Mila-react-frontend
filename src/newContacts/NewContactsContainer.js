import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import ContactCard from './ContactCard'

class NewContactsContainer extends PureComponent {

  render() {
    const { contactCards } = this.props

    // console.log(this.props)
    return (
      <div>
        <h1>New Contact Container!</h1>
        <div>
          { contactCards.map((contactCard, i) => {
            return <ContactCard key={`contactCard-${contactCard.id}`} { ...contactCard } />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ contactCards }) => ({
  contactCards
})

export default connect(mapStateToProps)(NewContactsContainer)
