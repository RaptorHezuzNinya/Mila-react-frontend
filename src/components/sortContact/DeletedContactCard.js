import React from 'react';
import { PropTypes } from 'prop-types';

const DeletedContactCard = ({ contact, deleteCopy }) => {
  const firstName = contact.firstName === null
    ? 'First name'
    : contact.firstName;
  const lastName = contact.lastName === null ? 'Last name' : contact.lastName;
  return (
    <div className="delete-card-holder">
      <div className="delete-card">
        <h2>Ok!</h2>
        <p>{`${firstName} ${lastName} ${deleteCopy}`}</p>
      </div>
    </div>
  );
};
DeletedContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteCopy: PropTypes.string.isRequired,
};
export default DeletedContactCard;
