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
    font-size: var(--font-size-reg);
    font-weight: 400;
    color: var(--color-black-100);
  }

  a {
    color: var(--color-black-100);
    text-decoration: none;
  }
`
