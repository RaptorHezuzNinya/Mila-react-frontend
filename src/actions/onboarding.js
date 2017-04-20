export const INCR_STEP_INDEX = 'INCR_STEP_INDEX'
export const addStepIndex = (stepIndex) => {
  return {
    type: INCR_STEP_INDEX,
    payload: stepIndex
  }
}

export const DECR_STEP_INDEX = 'DECR_STEP_INDEX'
export const reduceStepIndex = (stepIndex) => {
  return {
    type: DECR_STEP_INDEX,
    payload: stepIndex
  }
}
