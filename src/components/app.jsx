import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Board from 'components/board.jsx'
import Controls from 'components/controls.jsx'

import background from '../assets/mono_back.png'

const Wrapper = styled.div`
padding: 30px;
background-image: url('${background}');
background-repeat: no-repeat;
background-size: cover;
`

const Container = styled.div`
  position: relative;
  margin: auto;
`
const StyledMessage = styled.span`
  position: absolute;
  top: 42%;
  left: 21%;
  font-size: 55px;
  font-weight: bold;
  background-color: antiquewhite;
  padding: 21px 10px;
  border: 1px solid black;
  border-radius: 6px;
`

const App = ({ message }) => (
  <Wrapper>
    <Container>
      { message && <StyledMessage>{ message }</StyledMessage> }
      <Board />
      <Controls />
    </Container>
  </Wrapper>
)

export default connect(
  state => ({
    message: state.notification.message,
  }),
)(App)
