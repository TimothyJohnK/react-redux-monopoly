import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

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

const Square = ({ player, info }) => {
  console.log({ player, info })
  return <Box>{player && <Image src={avatar} />}</Box>
}

export default connect()(Square)
