import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addContactToNetworklist } from '../../actions/networklists';
import { addNetworkListToContact } from '../../actions/contacts';
import { formFieldsContactDetails as formFields } from '../../helpers/formData';
import _ from 'lodash';
import classNames from 'classNames';
import Media from 'react-media';
import ModalButton from '../modals/ModalButton';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import './NetworkListButton.sass';

class NetworkListButton extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired,
    addContactToNetworklist: PropTypes.func.isRequired,
    addNetworkListToContact: PropTypes.func.isRequired,
    currentContact: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      snackOpen: false,
      createNetworkListModal: 'CREATE_NETWORKLIST_MODAL',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      'keydown',
      this.handleKeyPress,
      console.log('MOUNT')
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleKeyPress,
      console.log('UNMOUNTED')
    );
  }

  handleKeyPress(event) {
    const { contactDetailsForm } = this.props;
    let arr = [];
    let activeField;
    formFields.forEach(field => {
      activeField = _.get(contactDetailsForm.fields, [field, 'active'], false);
      return arr.push(activeField);
    });
    if (arr.includes(true)) {
      return;
    } else {
      const { networkLists } = this.props;
      const newValueObject = networkLists.map((list, index) => {
        return Object.assign({ ...list }, { buttonCode: index + 49 });
      });
      const findTheOneObj = buttonCode =>
        newValueObject.filter(object => {
          return object.buttonCode === buttonCode;
        });
      const registeredButtonCodes = newValueObject.map(list => {
        return list.buttonCode;
      });
      if (registeredButtonCodes.includes(event.keyCode)) {
        this.handleNetworkButtonClick(findTheOneObj(event.keyCode)[0].id);
      }
    }
  }

  handleRequestClose = () => {
    this.setState({
      snackOpen: false,
    });
  };

  handleNetworkButtonClick = networkList => event => {
    event.preventDefault();
    // networklist list is hier 1 networklist the pressed nwl
    const { currentContact, networkLists } = this.props;
    const neededNWL = networkLists.filter(list => {
      return list.id === networkList.id;
    });

    const match = neededNWL[0].contactIds.includes(currentContact.id);
    if (match) {
      return this.setState({
        snackOpen: true,
      });
    } else {
      this.props.addContactToNetworklist(currentContact.id, networkList.id);
      this.props.addNetworkListToContact(networkList.id, currentContact.id);
    }
  };

  renderNetworkLists = (networkList, index) => {
    const { networkLists, currentContact } = this.props;
    // const { activeButtonIds } = this.state;
    if (!currentContact.networkListIds) return null;

    const networkButton = classNames({
      'network-list-btn': true,
      'network-list-btn-clicked': currentContact.networkListIds.includes(
        networkList.id
      ),
    });
    return (
      <div className="network-list" key={networkList.id}>
        <FlatButton
          labelPosition="before"
          name={networkList.name}
          onClick={this.handleNetworkButtonClick(networkList)}
          className={networkButton}
          // className="network-list-btn"
          label={networkList.title}
        >
          <ListIcon className="list-icon" />
          <span className="button-number">{index + 1}</span>
        </FlatButton>
      </div>
    );
  };

  render() {
    const { snackOpen, createNetworkListModal } = this.state;
    const { currentContact, networkLists } = this.props;
    return (
      <div>
        <div className="network-lists-holder">
          {networkLists.map(this.renderNetworkLists)}
          <Media
            query="(min-width: 769px)"
            render={() => (
              <ModalButton
                holderClass="modal-btn-holder"
                usedClassName="btn-s-a"
                label="Add List"
                modal={createNetworkListModal}
              />
            )}
          />
          <Snackbar
            className="snackbar"
            open={snackOpen}
            autoHideDuration={3000}
            message={`${!currentContact ? null : currentContact.firstName} already added`}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentContact: state.sortContact.present,
    networkLists: state.networkLists,
    contactDetailsForm: state.form.contactDetailsForm,
  };
};

export default connect(mapStateToProps, {
  addContactToNetworklist,
  addNetworkListToContact,
})(NetworkListButton);
