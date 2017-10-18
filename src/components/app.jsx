import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

import Board from 'components/board.jsx'
import Controls from 'components/controls.jsx'

import background from '../assets/mono_back.png'

const App = styled.div`
margin: 30px;
background-image: url('${background}');
background-repeat: no-repeat;
background-size: cover;
`

export default () => (
  <App>
    <Container>
      <Board />
      <Controls />
    </Container>
  </App>
)
