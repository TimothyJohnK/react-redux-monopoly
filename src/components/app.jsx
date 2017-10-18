import React from 'react'
import { Fragment, Link } from 'redux-little-router'
import styled from 'styled-components'

import Board from 'components/board.jsx'

const App = styled.div`
  margin: 30px;
`

export default () =>
  <App>
    <Board />
  </App>
