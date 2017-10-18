import { initialState as playerState } from 'ducks/players'
import { initialState as gameState } from 'ducks/game'

export default {
  players: {
    ...playerState
  },
  game: {
    ...gameState
  },
  router: {
    pathname: 'blank',
    query: {},
    search: ''
  }
}
