export const INCR_STEP_INDEX = 'INCR_STEP_INDEX'
export const incrStepIndex = (stepIndex) => {
  return {
    type: INCR_STEP_INDEX,
    payload: stepIndex
  }
}

export const DECR_STEP_INDEX = 'DECR_STEP_INDEX'
export const decrStepIndex = (stepIndex) => {
  return {
    type: DECR_STEP_INDEX,
    payload: stepIndex
  }
}

export const INCR_LIST_COUNT = 'INCR_LIST_COUNT'
export const incrListCount = (listCount) => {
  return {
    type: INCR_LIST_COUNT,
    payload: listCount
  }
}

export const DECR_LIST_COUNT = 'DECR_LIST_COUNT'
export const decrListCount = (listCount) => {
  return {
    type: DECR_LIST_COUNT,
    payload: listCount
  }
}

export const TOGGLE_PROCEED_WARN = 'TOGGLE_PROCEED_WARN'
export const toggleProceedWarn = (proceedWarning) => {
  return {
    type: TOGGLE_PROCEED_WARN,
    payload: proceedWarning
  }
}
