import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import './NavigateContacts.sass';

class NavigateContacts extends PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired,
    handlePrevContact: PropTypes.func.isRequired,
    handleNextContact: PropTypes.func.isRequired,
  };

  hoverOutDiv() {
    let addedClassElement = document.querySelector('.custom-hover');
    addedClassElement.classList.remove('custom-hover');
  }

  render() {
    const { handleNextContact, handlePrevContact, children } = this.props;
    return (
      <div className="navigate-contacts-holder">
        <div
          className="contact-navigate-prev move-left"
          onMouseEnter={() => {
            return document
              .getElementById('past-shadow')
              .classList.add('custom-hover');
          }}
          onMouseOut={this.hoverOutDiv}
        >
          <IconButton
            onClick={handlePrevContact}
            iconClassName="material-icons"
          >
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
          onMouseOut={this.hoverOutDiv}
        >
          <IconButton
            onClick={handleNextContact}
            iconClassName="material-icons"
          >
            navigate_next
          </IconButton>
        </div>
      </div>
    );
  }
}

export default NavigateContacts;
