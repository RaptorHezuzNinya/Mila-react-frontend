import React, { PureComponent } from 'react'
import ContactCard from './ContactCard'
import ProgressIndicator from './ProgressIndicator'

import './SortContact.sass'

class SortContact extends PureComponent {
  render () {
    return (
      <div className='sort-contact-wrapper'>
        <div className='linear-progress-wrapper'>
          <ProgressIndicator
            mode='determinate' />
        </div>
        <div className='contact-card-wrapper'>
          <ContactCard />
        </div>
      </div>
    )
  }
}

export default SortContact
