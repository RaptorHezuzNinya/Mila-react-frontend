import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import IconButton from 'material-ui/IconButton'
import './NavigateContacts.sass'

const hoverInDiv = (classToFind, classToAdd) => {
  let shadowClass = document.getElementById(classToFind)
  if (shadowClass !== null) {
    return shadowClass.classList.add(classToAdd)
  }
  return null
}

const hoverOutDiv = (classToFind, classToRemove) => {
  let addedClassElement = document.querySelector(classToFind)
  if (addedClassElement !== null) {
    return addedClassElement.classList.remove(classToRemove)
  }
  return null
}

const NavigateContacts = ({ handleNextContact, handlePrevContact, children }) => {
  return (
    <div className="navigate-contacts-holder">
      <div
        className="contact-navigate-prev move-left"
        onMouseEnter={() => hoverInDiv('past-shadow', 'custom-hover')}
        onMouseOut={() => hoverOutDiv('.custom-hover', 'custom-hover')}
      >
        <IconButton onClick={handlePrevContact} iconClassName="material-icons">
          navigate_before
        </IconButton>
      </div>
      {children}
      <div
        className="contact-navigate-next move-right"
        onMouseEnter={() => hoverInDiv('fut-shadow', 'custom-hover')}
        onMouseOut={() => hoverOutDiv('.custom-hover', 'custom-hover')}
      >
        <IconButton onClick={handleNextContact} iconClassName="material-icons">
          navigate_next
        </IconButton>
      </div>
    </div>
  )
}

NavigateContacts.propTypes = {
  children: PropTypes.object.isRequired,
  handlePrevContact: PropTypes.func.isRequired,
  handleNextContact: PropTypes.func.isRequired
}

export default NavigateContacts
