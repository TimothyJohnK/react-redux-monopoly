import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Square from './square'
import monopolyBoard from '../assets/monopoly_board.jpg'

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
  return arr.map(i => <Square key={i} />)
}

class Board extends PureComponent {
  static propTypes = {}

  render() {
    return <GridContainer>{Squares()}</GridContainer>
  }
}

export default connect()(Board)
