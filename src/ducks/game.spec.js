/* global describe, it */
import { Reducer } from 'redux-testkit'
import gameReducer, { initialState, setIsRolling } from 'ducks/game'

describe('setIsRolling', () => {
  it('updates isRolling', () => {
    const result = {
      ...initialState,
      isRolling: true
    }

    Reducer(gameReducer).withState(initialState).expect(setIsRolling(true)).toReturnState(result)
  })
})
