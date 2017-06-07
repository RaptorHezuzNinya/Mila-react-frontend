import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import './NavigateContacts.sass';

const NavigateContacts = ({
  children,
  handleNextContact,
  handlePrevContact,
}) => {
  return (
    <div className="navigate-contacts-holder">
      <div className="contact-navigate-prev">
        <IconButton
          onClick={handlePrevContact}
          iconClassName="material-icons"
          // hoveredStyle={styles.hoveredStyle}
        >
          navigate_before
        </IconButton>
      </div>
      {children}
      <div className="contact-navigate-next">
        <IconButton
          onClick={handleNextContact}
          iconClassName="material-icons"
          // hoveredStyle={styles.hoveredStyle}
        >
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
