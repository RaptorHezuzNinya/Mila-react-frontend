import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import {
  inlineNavigateContactsStyles as styles,
} from '../../helpers/inlineStyles';
import './NavigateContacts.sass';

const NavigateContacts = ({ handleNextContact, handlePrevContact }) => {
  return (
    <div className="navigate-contacts-holder">
      <div className="contact-navigate-prev">
        <IconButton
          onClick={handlePrevContact}
          iconClassName="material-icons"
          hoveredStyle={styles.hoveredStyle}
          iconStyle={styles.iconStylePrev}
          style={styles.button}
        >
          navigate_before
        </IconButton>
      </div>
      <div className="contact-navigate-next">
        <IconButton
          onClick={handleNextContact}
          iconClassName="material-icons"
          hoveredStyle={styles.hoveredStyle}
          iconStyle={styles.iconStyleNext}
          style={styles.button}
        >
          navigate_next
        </IconButton>
      </div>
    </div>
  );
};
NavigateContacts.propTypes = {
  handlePrevContact: PropTypes.func.isRequired,
  handleNextContact: PropTypes.func.isRequired,
};

export default NavigateContacts;
