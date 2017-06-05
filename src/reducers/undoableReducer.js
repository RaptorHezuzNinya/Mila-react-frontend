import { UNDO, REDO } from '../actions/undoable';

import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists';
export const undoable = sortContactReducer => {
  const sortContactReducerConst = sortContactReducer(undefined, {});
  const initialState = {
    past: [],
    present: sortContactReducer(undefined, {}),
    future: [],
    sortingData: sortContactReducerConst,
  };

  return (state = initialState, action) => {
    const { past, present, future } = state;

    const sortingState = state.sortingData;
    switch (action.type) {
      case UNDO:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
          sortingData: { ...sortingState },
        };

      case REDO:
        const next = future[0];
        const newFuture = future.slice(1);

        return {
          past: [...past, present],
          present: next,
          future: newFuture,
          sortingData: { ...sortingState },
        };

      case ADD_CONTACT_TO_NETWORKLIST:
        if (
          state.sortingData.addedContactIds.includes(action.payload.contactId)
        ) {
          return state;
        }
        return {
          ...state,
          sortingData: {
            ...state.sortingData,
            addedContactIds: [
              ...state.sortingData.addedContactIds,
              action.payload.contactId,
            ],
          },
        };

      default:
        const newPresent = sortContactReducer(present, action);
        console.log(
          'present',
          present,
          'newPresent',
          newPresent,
          'state',
          state
        );
        if (present === newPresent) {
          console.log('ITS EQUAL');
          return state;
        }
        console.log('YOLOSWAG');
        const neededPresent = newPresent.totalSortContacts.slice(0, 1);
        const neededFuture = newPresent.totalSortContacts.slice(1);
        return {
          past: [...past, present],
          present: neededPresent[0],
          future: neededFuture,
          sortingData: { ...newPresent },
        };
    }
  };
};
