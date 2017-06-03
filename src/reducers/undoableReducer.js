import { UNDO, REDO } from '../actions/undoable';

export const undoable = reducer => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
    sortingData: reducer(undefined, {}),
  };

  return (state = initialState, action) => {
    const { past, present, future } = state;

    switch (action.type) {
      // case UNDO:
      //   const previous = past[past.length - 1];
      //   const newPast = past.slice(0, past.length - 1);
      //   return {
      //     past: newPast,
      //     present: previous,
      //     future: [present, ...future],
      //   };
      //
      // case REDO:
      //   const next = future[0];
      //   const newFuture = future.slice(1);
      //   const sortingState = state.sortingData;
      //   return {
      //     past: [...past, present],
      //     present: next,
      //     future: newFuture,
      //     sortingData: { ...sortingState },
      //   };

      default:
        const newPresent = reducer(present, action);
        console.log('present', present, 'newPresent', newPresent);
        if (present === newPresent) {
          return state;
        }
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
