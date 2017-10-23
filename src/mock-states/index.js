import { initialState as playerState } from 'ducks/player'
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
