import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Paper from 'material-ui/Paper';

class ShadowCard extends PureComponent {
  static propTypes = {
    contact: PropTypes.object,
  };

  render() {
    const { contact } = this.props;
    if (!contact) return null;
    return (
      <Paper zDepth={2} className="contact-card-paper">
        <div className="details-holder">
          <div className="details">
            <p className="par1">{contact.firstName}</p>
            <p className="par2">{contact.lastName}</p>
            <p className="par3">{contact.companyName}</p>
            <p className="par4">{contact.companyRole}</p>
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

export default ShadowCard;
