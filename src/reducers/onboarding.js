import { INCR_STEP_INDEX, DECR_STEP_INDEX } from '../actions/onboarding'

const initialState = {
  stepIndex: 0,
}

export default function onboarding(state = initialState, {type, payload} = {}) {
  switch (type) {

    case INCR_STEP_INDEX:
      return Object.assign({}, state, {stepIndex: payload + 1})

    case DECR_STEP_INDEX:
      return Object.assign({}, state, {stepIndex: payload - 1})

    default:
      return state

  }
}
