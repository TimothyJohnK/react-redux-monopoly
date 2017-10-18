import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Message } from 'semantic-ui-react'

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

const App = ({ message }) => (
  <Wrapper>
    { message && <Message content= { message } /> }
    <Container>
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
