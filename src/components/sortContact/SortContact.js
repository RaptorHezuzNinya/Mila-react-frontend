import React, { PureComponent } from 'react'
import ContactCard from './ContactCard'

class SortContact extends PureComponent {
  render () {
    return (
      <div className='sort-contact-wrapper'>
        <ContactCard />
      </div>
    )
  }
}

export default SortContact
