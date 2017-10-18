export const initialState = {
  isRolling: false
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case SET_IS_ROLLING:
      return {
        isRolling: action.isRolling
      }
    default:
      return currentState
  }
}

export const setIsRolling = isRolling => ({ type: SET_IS_ROLLING, isRolling })

const SET_IS_ROLLING = 'set-is-rolling'
