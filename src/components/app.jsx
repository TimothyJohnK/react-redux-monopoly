import React from 'react'
import styled from 'styled-components'

import Board from 'components/board.jsx'
import { Button, Container } from 'semantic-ui-react'

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
    </Container>
  </App>
)
