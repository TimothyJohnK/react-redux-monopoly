import React from 'react'
import styled from 'styled-components'

import Square from './square'
import monopolyBoard from '../assets/monopoly_board_uk.jpg'
import squareMap from '../common/helpers/squareMap'

const GridContainer = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: 102px repeat(9, 64px) 102px;
  grid-template-rows: 102px repeat(9, 64px) 102px;
  background-image: url("${monopolyBoard}");
  background-repeat: no-repeat;
  background-size: contain;
`

const Squares = () => {
  const arr = []
  for (let i = 0; i < 121; i++) {
    arr.push(i)
  }
  return arr.map(i => <Square key={ i } index={ i } info={ squareMap[i] } />)
}

const Board = () => (
  <GridContainer>{ Squares() }</GridContainer>
)

export default Board
