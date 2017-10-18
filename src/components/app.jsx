import React from 'react'
import styled from 'styled-components'

import Board from 'components/board.jsx'
import { Button, Container } from 'semantic-ui-react'

const App = styled.div`margin: 30px;`

export default () => (
  <App>
    <Container>
      <Board />
    </Container>
  </App>
)
