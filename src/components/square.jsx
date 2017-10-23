import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getPlayerGridPosition } from 'ducks/player'
import avatar from '../assets/thimble.png'

const Box = styled.div`
	background: rgba(255,255,0,${props => (props.hasPlayer ? 0.2 : 0)});
	// color: #fff;
	border-radius: 5px;
	font-size: 150%;
  }
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  float: left;
`

const Square = ({ hasPlayer, info }) => {
  return <Box hasPlayer={hasPlayer}>{hasPlayer && <Image src={avatar} />}</Box>
}

export default connect((state, ownProps) => ({
  hasPlayer: getPlayerGridPosition(state) === ownProps.index,
}))(Square)
