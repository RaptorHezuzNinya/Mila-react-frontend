import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Paper from 'material-ui/Paper';

class DummyCard extends PureComponent {
  static propTypes = {
    contact: PropTypes.object,
    paperClass: PropTypes.string.isRequired,
  };

  render() {
    const { contact, paperClass } = this.props;
    if (!contact) return null;
    return (
      <Paper zDepth={2} className={paperClass}>
        <div className="details-holder">
          <div className="details">
            <p className="par1">
              {!contact.firstName ? 'First Name' : contact.firstName}
            </p>
            <p className="dot">•</p>
            <p className="par2">
              {!contact.lastName ? 'last name' : contact.lastName}
            </p>
            <p className="par3">
              {!contact.companyName ? 'Company' : contact.companyName}
            </p>
            <p className="par4">
              {!contact.companyRole ? 'Role' : contact.companyRole}
            </p>
          </div>
          <div className="avatar-holder">
            <img src={contact.avatar} alt="user avatar" />
          </div>
          <p className="email-adress">{contact.email}</p>
          <p className="email-header">{contact.message}</p>
        </div>
      </Paper>
    );
  }
}

export default DummyCard;
