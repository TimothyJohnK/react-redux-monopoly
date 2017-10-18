/* global describe, it */
import { Reducer } from 'redux-testkit'
import playerReducer, { initialState, updatePlayerPosition } from 'ducks/players'

/* TODO
  write tests for:
    rollDice
*/

describe('updatePlayerPosition', () => {
  it('updates player position on the board', () => {
    const result = {
      ...initialState,
      position: 8
    }

    Reducer(playerReducer).withState(initialState).expect(updatePlayerPosition(8)).toReturnState(result)
  })
})
