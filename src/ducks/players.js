import { setIsRolling } from 'ducks/game'

export const initialState = {
  isActive: false,
  turnPhase: 0,
  position: 0
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
    default:
      return currentState
  }
}

export const nextTurnPhase = () => ({ type: NEXT_TURN_PHASE })

export const rollDice = () => async ({ dispatch, getState }) => {
  dispatch(setIsRolling(true))
  await new Promise(resolve => setTimeout(_ => resolve(), 2000))
  const dice = Math.random() * (12 - 2) + 2
  dispatch(setIsRolling(false))
  dispatch(updatePlayerPosition(dice))
}

export const updatePlayerPosition = dice => ({
  type: UPDATE_PLAYER_POSITION,
  dice
})

const NEXT_TURN_PHASE = 'next-turn-phase'
const UPDATE_PLAYER_POSITION = 'update-player-position'
