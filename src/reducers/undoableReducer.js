// import { UNDO, REDO}

const initialState = {
  past: [],
  present: [],
  future: [],
}
const expression = null

export const undoable = (state = initialState, {type, action} = {}) => {
  const { past, present, future } = state
  switch (type) {
    case expression:


    default:
      return state

  }
}
