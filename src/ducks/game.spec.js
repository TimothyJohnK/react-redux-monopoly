/* global describe, it, expect */
import initStore from 'store'
import { setIsRolling } from 'ducks/game'
import initialState from 'mock-states'

const store = initStore()

describe('incrementAsync', () => {
  it('dispatches the increment action after one second', () => {
    store.dispatch(setIsRolling(true))

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        isRolling: true
      }
    })
  })
})
