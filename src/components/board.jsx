import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Square from './square'
import monopolyBoard from '../assets/monopoly_board.jpg'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 70px repeat(9, 40px) 70px;
  grid-template-rows: 70px repeat(9, 40px) 70px;
  background-image: url("${monopolyBoard}");
  background-repeat: no-repeat;
  background-size: contain;
`

const Squares = () => {
  const arr = []
  for (let i = 0; i < 121; i++) {
    arr.push(i)
  }
  return arr.map(i => <Square key={i} />)
}

class Board extends PureComponent {
  static propTypes = {}

  render() {
    return <GridContainer>{Squares()}</GridContainer>
  }
}

export default connect()(Board)
