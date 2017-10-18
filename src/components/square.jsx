import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import avatar from '../assets/avatar.jpg'

const Box = styled.div`
	background-color: rgba(0,0,0,0.2);
	color: #fff;
	border-radius: 5px;
	padding: 20px;
	font-size: 150%;
  }
`

const Image = styled.img`
  width: 36px;
  height: 36px;
`

const Square = ({ player }) => {
  console.log({ player })
  return <Box>{player && <Image src={avatar} />}</Box>
}

export default connect()(Square)
