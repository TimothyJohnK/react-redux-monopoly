import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

import Board from 'components/board.jsx'
import Controls from 'components/controls.jsx'

const App = styled.div`margin: 30px;`

export default () => (
  <App>
    <Container>
      <Board />
      <Controls />
    </Container>
  </App>
)
