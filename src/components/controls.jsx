import { connect } from 'react-redux'
import React from 'react'
import { Button } from 'semantic-ui-react'

import { rollDice } from 'ducks/players'
import rollingDiceGif from 'assets/rolling-dice.gif'

const gifStyle = {
  position: 'absolute',
  top: '104px',
  width: '572px',
  height: '572px',
  left: '106px',
}

const Controls = ({ rollDice, isRolling }) => (
  <div>
    <Button primary disabled={isRolling} onClick={rollDice}>
      Roll Dice
    </Button>
    {isRolling && <img src={rollingDiceGif} style={gifStyle} />}
  </div>
)

export default connect(
  state => ({
    isRolling: state.game.isRolling,
  }),
  { rollDice }
)(Controls)
