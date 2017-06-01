import { UNDO, REDO } from './actions/undoable'

const initialState = {
  past: [],
  present: [],
  future: [],
}
const expression = null

export const undoable = (state = initialState, {type, action} = {}) => {
  const { past, present, future } = state

  switch (type) {
    case UNDO :
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }

    case REDO :
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }

    default:
      return state

  }
}
