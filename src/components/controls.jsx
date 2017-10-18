import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import { Button, Container } from 'semantic-ui-react'

import { rollDice } from 'ducks/players'
import rollingDiceGif from 'assets/rolling-dice.gif'

const gifStyle = {
  position: 'absolute',
  top: '135px',
  width: '571px',
  height: '571px',
  left: '133px',
}

class Controls extends PureComponent {
  render () {
    const { rollDice, isRolling } = this.props

    return (
      <Container>
        <Button primary disabled={ isRolling } onClick={ rollDice }>Roll Dice</Button>
        { isRolling && (
          <img src={ rollingDiceGif } style={ gifStyle } />
        ) }
      </Container>
    )
  }
}

export default connect(
  state => ({
    isRolling: state.game.isRolling
  }),
  { rollDice }
)(Controls)
