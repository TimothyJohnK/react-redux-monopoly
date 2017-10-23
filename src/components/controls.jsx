import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

import { rollDice } from 'ducks/player'
import rollingDiceGif from 'assets/rolling-dice-transparent.gif'

const gifStyle = {
  position: 'absolute',
  top: '103px',
  width: '574px',
  height: '574px',
  left: '105px',
}

const Button = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  background-color: cornflowerblue;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
