import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Paper from 'material-ui/Paper';

class ShadowCard extends PureComponent {
  static propTypes = {
    futureContact: PropTypes.object.isRequired,
  };

  render() {
    const { futureContact } = this.props;
    if (!futureContact) return null;
    return (
      // <div className="contact-card-holder">
      (
        <Paper zDepth={2}>
          <div className="paper-content-holder">
            <div className="avatar-holder">
              <img src={futureContact.avatar} alt="user avatar" />
            </div>
            <div className="email-adress">
              <p>{futureContact.email}</p>
            </div>
            <div className="email-header-holder">
              <p>{futureContact.message}</p>
            </div>
          </div>
        </Paper>
      )
      // </div>
    );
  }
}

export default ShadowCard;
