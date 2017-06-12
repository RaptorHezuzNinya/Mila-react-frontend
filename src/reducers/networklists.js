import {
  CREATE_NETWORKLIST,
  UPDATE_NETWORKLIST,
  DELETE_NETWORKLIST,
  ADD_CONTACT_TO_NETWORKLIST,
} from '../actions/networklists';

import { ADD_CONTACT_TO_DELETED } from '../actions/sortContacts';

const initialState = [
  {
    id: 1,
    title: 'Business',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
    contactIds: [],
  },
  {
    id: 2,
    title: 'Business Int',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
    contactIds: [],
  },
];

const networklist = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case CREATE_NETWORKLIST:
      console.log(payload, 'networklist payload');
      return {
        id: payload.id,
        title: payload.networkList.title,
        description: payload.networkList.description,
        contactIds: [],
      };

    default:
      return state;
  }
};

const networklists = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NETWORKLIST:
      return state.map(networklist => {
        if (networklist.id === action.payload.id) {
          return Object.assign({}, action.payload);
        }
        return networklist;
      });

    case CREATE_NETWORKLIST:
      // console.log(action.payload, 'networklists action.payload')
      // const newNetworkList = Object.assign({}, action.payload)
      //   return [newNetworkList].concat(state)
      return [...state, networklist(undefined, action)];

    case DELETE_NETWORKLIST: //FIXME when api, key needs to be networklist.id
      return state.filter(networklist => networklist.title !== action.payload);

    case ADD_CONTACT_TO_NETWORKLIST:
      return state.map(networkList => {
        if (networkList.id === action.payload.networkListId) {
          let newContactIdsArray = networkList.contactIds.slice();
          newContactIdsArray.splice(0, 0, action.payload.contactId);
          return { ...networkList, contactIds: newContactIdsArray };
        }
        return networkList;
      });

    case ADD_CONTACT_TO_DELETED:
      console.log(state, 'state in NWL RED');
      return state;

    default:
      return state;
  }
};

export default networklists;
