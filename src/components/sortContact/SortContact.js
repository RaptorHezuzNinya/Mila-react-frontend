import React, { PureComponent } from 'react'
import ContactCard from './ContactCard'
import ProgressIndicator from './ProgressIndicator'
import PageTitle from '../PageTitle'
import './SortContact.sass'

class SortContact extends PureComponent {
  render () {
    return (
      <div className='sort-contact-wrapper'>
        <div className='progress-indicator-wrapper'>
          <PageTitle
            titleClassName='sortcontact-title'
            pageTitleContentH2='1 / 1 new contact'
            pageTitleContentH3='since your last vist'/>
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
