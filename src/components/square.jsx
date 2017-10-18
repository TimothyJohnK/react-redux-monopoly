import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getPlayerGridPosition } from 'ducks/players'
import avatar from '../assets/thimble.png'

const Box = styled.div`
	background-color: rgba(0,0,0,0.2);
	color: #fff;
	border-radius: 5px;
	// padding: 20px;
	font-size: 150%;
  }
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  // margin-top: -20px;
  float: left;
`

const Square = ({ hasPlayer, info }) => {
  return <Box>{ hasPlayer && <Image src={avatar} />}</Box>
}

export default connect((state, ownProps) => ({
  hasPlayer: getPlayerGridPosition(state) === ownProps.index
}))(Square)
