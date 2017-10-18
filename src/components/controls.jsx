import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import { Button, Container } from 'semantic-ui-react'

import { rollDice } from 'ducks/players'
import rollingDiceGif from 'assets/rolling-dice.gif'

const gifStyle = {
  position: 'absolute',
  top: '104px',
  width: '572px',
  height: '572px',
  left: '106px',
}

class Controls extends PureComponent {
  render () {
    const { rollDice, isRolling } = this.props

    return (
      <div>
        <Button primary disabled={isRolling} onClick={rollDice}>
          Roll Dice
        </Button>
        {isRolling && <img src={rollingDiceGif} style={gifStyle} />}
      </div>
    )
  }
}

export default connect(
  state => ({
    isRolling: state.game.isRolling,
  }),
  { rollDice }
)(Controls)
