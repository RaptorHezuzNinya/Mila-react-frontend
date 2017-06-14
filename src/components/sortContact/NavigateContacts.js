import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import './NavigateContacts.sass';

const hoverOutDiv = () => {
  let addedClassElement = document.querySelector('.custom-hover');
  addedClassElement.classList.remove('custom-hover');
};

const NavigateContacts = ({
  children,
  handleNextContact,
  handlePrevContact,
}) => {
  return (
    <div className="navigate-contacts-holder">
      <div
        className="contact-navigate-prev move-left"
        onMouseEnter={() => {
          return document
            .getElementById('past-shadow')
            .classList.add('custom-hover');
        }}
        onMouseOut={hoverOutDiv}
      >
        <IconButton onClick={handlePrevContact} iconClassName="material-icons">
          navigate_before
        </IconButton>
      </div>
      {children}
      <div
        className="contact-navigate-next move-right"
        onMouseEnter={() => {
          return document
            .getElementById('fut-shadow')
            .classList.add('custom-hover');
        }}
        onMouseOut={hoverOutDiv}
      >
        <IconButton onClick={handleNextContact} iconClassName="material-icons">
          navigate_next
        </IconButton>
      </div>
    </div>
  );
};

NavigateContacts.propTypes = {
  children: PropTypes.object.isRequired,
  handlePrevContact: PropTypes.func.isRequired,
  handleNextContact: PropTypes.func.isRequired,
};

export default NavigateContacts;
