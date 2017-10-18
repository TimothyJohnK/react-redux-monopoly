import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Box = styled.div`
	background-color: rgba(0,0,0,0.2);
	color: #fff;
	border-radius: 5px;
	padding: 20px;
	font-size: 150%;
  }
`

class Square extends PureComponent {
  static propTypes = {}

  render() {
    return <Box />
  }
}

export default connect()(Square)
