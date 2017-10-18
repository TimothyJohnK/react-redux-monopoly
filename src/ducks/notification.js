export const initialState = {
  message: null
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        message: action.message
      }
    case CLEAR_NOTIFICATION:
      return initialState
    default:
      return currentState
  }
}

export const showNotification = message => ({ type: SHOW_NOTIFICATION, message })

export const clearNotification = () => ({ type: CLEAR_NOTIFICATION })

const SHOW_NOTIFICATION = 'show-notification'
const CLEAR_NOTIFICATION = 'clear-notification'
