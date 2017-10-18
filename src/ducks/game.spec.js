/* global describe, it */
import { Reducer } from 'redux-testkit'
import gameReducer, { initialState, setIsRolling, nextTurnPhase } from 'ducks/game'

describe('nextTurnPhase', () => {
  it('moves player to their next turn phase', () => {
    const result = {
      ...initialState,
      turnPhase: 1
    }

    Reducer(gameReducer).withState(initialState).expect(nextTurnPhase()).toReturnState(result)
  })
})

describe('setIsRolling', () => {
  it('updates isRolling', () => {
    const result = {
      ...initialState,
      isRolling: true
    }

    Reducer(gameReducer).withState(initialState).expect(setIsRolling(true)).toReturnState(result)
  })
})
