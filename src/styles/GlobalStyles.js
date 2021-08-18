import { createGlobalStyle } from 'styled-components'

import { reset } from './reset'
import { variables } from './variables'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${variables}

  html, body, #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    overflow-x: hidden;
  }
  
  body {
    font-family: 'Formular';
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`
