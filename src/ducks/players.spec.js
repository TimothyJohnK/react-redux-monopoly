/* global describe, it, expect */
import configureStore from 'redux-mock-store'
import { updatePlayerPosition } from 'ducks/players'
import initialState from 'mock-states'

const mockStore = configureStore([])
const store = mockStore(initialState)

/* TODO
  write tests for:
    rollDice
*/

describe('updatePlayerPosition', () => {
  it('updates player position on the board', () => {
    store.dispatch(updatePlayerPosition(8))

    expect(store.getState()).toEqual({
      ...initialState,
      players: {
        ...initialState.players,
        position: 8
      }
    })
  })
})
