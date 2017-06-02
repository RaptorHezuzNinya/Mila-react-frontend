export const UNDO = 'UNDO'
export const undo = () => {
  return {
    type: UNDO
  }
}

export const REDO = 'REDO'
export const redo = () => {
  return {
    type: REDO
  }
}
