import { TOGGLE_SLACK_NOTIFICATION, TOGGLE_GMAIL_NOTIFICATION } from '../actions/user'

const initialState = {
  slackNotification: false,
  gmailNotification: false
}
export default function userReducer(state = initialState, {type, payload} = {}) {
  switch (type) {

    case TOGGLE_SLACK_NOTIFICATION :
      return {...state, slackNotification: !state.slackNotification}

    case TOGGLE_GMAIL_NOTIFICATION :
      return {...state, gmailNotification: !state.gmailNotification}

    default:
      return state

  }
}
