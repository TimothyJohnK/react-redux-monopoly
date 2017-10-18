/* global describe, it, expect */
import initStore from 'store'
import { nextTurnPhase } from 'ducks/players'
import initialState from 'mock-states'

const store = initStore()

describe('next turn phase', () => {
  it('moves player to their next turn phase', () => {
    store.dispatch(nextTurnPhase())

    expect(store.getState()).toEqual({
      ...initialState,
      players: {
        ...initialState.players,
        turnPhase: 1
      }
    })
  })
})
