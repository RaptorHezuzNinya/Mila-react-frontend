import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactDetails from './ContactDetails';
import Paper from 'material-ui/Paper';
import './ContactCard.sass';
import { inlineContactCardStyles as styles } from '../../helpers/inlineStyles';

class ContactCard extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    currentContact: PropTypes.object.isRequired,
  };

  renderContactAvatar() {
    const { currentContact } = this.props;
    if (!currentContact) return null;
    return (
      <div className="avatar-holder">
        <img src={currentContact.avatar} alt="user avatar" />
      </div>
    );
  }

  renderContactEmail() {
    const { currentContact } = this.props;
    if (!currentContact) return null;
    return (
      <div className="email-adress">
        <p>{currentContact.email}</p>
      </div>
    );
  }

  renderEmailHeader() {
    const { currentContact } = this.props;
    if (!currentContact) return null;
    return (
      <div className="email-header-holder">
        <p>{currentContact.message}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="contact-card-holder">
        <Paper style={styles.paper} zDepth={2}>
          <div className="paper-content-holder">
            <ContactDetails
              onSubmit={this.props.onSubmit}
              currentContact={this.props.currentContact}
            />
            {this.renderContactAvatar()}
            {this.renderContactEmail()}
            {this.renderEmailHeader()}
          </div>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentContact: state.sortContact.present,
  };
};
export default connect(mapStateToProps)(ContactCard);
