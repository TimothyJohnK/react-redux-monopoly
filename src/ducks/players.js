import { setIsRolling } from 'ducks/game'
import { showNotification, clearNotification } from 'ducks/notification'
import squareMap from 'common/helpers/squareMap'

export const initialState = {
  position: 0,
  piece: null,
  id: 0
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_POSITION:
      return {
        ...currentState,
        position: (currentState.position + action.dice) % 39
      }
    default:
      return currentState
  }
}

export const updatePlayerPosition = dice => ({
  type: UPDATE_PLAYER_POSITION,
  dice
})

export const rollDice = () => async (dispatch, getState) => {
  dispatch(setIsRolling(true))
  await new Promise(resolve => setTimeout(_ => resolve(), 1500))
  dispatch(setIsRolling(false))

  const dice = Math.floor(Math.random() * (12 - 2) + 2)
  dispatch(updatePlayerPosition(dice))

  dispatch(showNotification(`You Rolled ${dice}!`))
  await new Promise(resolve => setTimeout(_ => resolve(), 1500))
  dispatch(clearNotification())
}

export const getPlayerGridPosition = state => squareMap[state.players.position]

const UPDATE_PLAYER_POSITION = 'update-player-position'
