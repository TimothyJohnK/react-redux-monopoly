/* global describe, it, expect */
import configureStore from 'redux-mock-store'
import { setIsRolling, nextTurnPhase } from 'ducks/game'
import initialState from 'mock-states'

const mockStore = configureStore([])
const store = mockStore(initialState)

// describe > beforeEach > store = mockStore()

describe('nextTurnPhase', () => {
  it('moves player to their next turn phase', () => {
    store.dispatch(nextTurnPhase())

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        turnPhase: 1
      }
    })
  })
})

describe('setIsRolling', () => {
  it('updates isRolling', () => {
    store.dispatch(setIsRolling(true))

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        isRolling: true
      }
    })
  })
})
