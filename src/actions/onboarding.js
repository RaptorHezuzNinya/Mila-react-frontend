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

export const SHOW_PROCEED_WARN = 'SHOW_PROCEED_WARN'
export const showProceedWarn = (proceedWarning) => {
  return {
    type: SHOW_PROCEED_WARN,
    payload: proceedWarning
  }
}

export const HIDE_PROCEED_WARN = 'HIDE_PROCEED_WARN'
export const hideProceedWarn = (proceedWarning) => {
  return {
    type: HIDE_PROCEED_WARN,
    payload: proceedWarning
  }
}
