import { connect } from 'react-redux'
import React from 'react'
import { Button } from 'semantic-ui-react'

import { rollDice } from 'ducks/players'
import rollingDiceGif from 'assets/rolling-dice-transparent.gif'

const gifStyle = {
  position: 'absolute',
  top: '103px',
  width: '574px',
  height: '574px',
  left: '105px',
}

const Controls = ({ rollDice, isRolling }) => (
  <div>
    <Button primary disabled={isRolling} onClick={rollDice}>
      Roll Dice
    </Button>
    {true && <img src={rollingDiceGif} style={gifStyle} />}
  </div>
)

export default connect(
  state => ({
    isRolling: state.game.isRolling,
  }),
  { rollDice }
)(Controls)
