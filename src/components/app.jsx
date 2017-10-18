import React from 'react'
import styled from 'styled-components'
// import { Container } from 'semantic-ui-react'

import Board from 'components/board.jsx'
import Controls from 'components/controls.jsx'

import background from '../assets/mono_back.png'

const App = styled.div`
padding: 30px;
background-image: url('${background}');
background-repeat: no-repeat;
background-size: cover;
`

const Container = styled.div`
  position: relative;
  margin: auto;
`

export default () => (
  <App>
    <Container>
      <Board />
      <Controls />
    </Container>
  </App>
)
