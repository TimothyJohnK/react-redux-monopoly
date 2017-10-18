export const initialState = {
  turnPhase: 0,
  isRolling: false,
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case NEXT_TURN_PHASE:
      let nextTurnPhase = currentState.turnPhase + 1
      if (nextTurnPhase > 1) { nextTurnPhase = 0 }
      return {
        ...currentState,
        turnPhase: nextTurnPhase
      }
    case SET_IS_ROLLING:
      return {
        ...currentState,
        isRolling: action.isRolling
      }
    default:
      return currentState
  }
}

export const setIsRolling = isRolling => ({ type: SET_IS_ROLLING, isRolling })

export const nextTurnPhase = () => ({ type: NEXT_TURN_PHASE })

const SET_IS_ROLLING = 'set-is-rolling'
const NEXT_TURN_PHASE = 'next-turn-phase'
