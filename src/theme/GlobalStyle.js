import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 50%;
  }

  body,
  #root {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  .toast {
    font-size: 16px;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    :root {
        font-size: 40%;
    }
  }
`

export default GlobalStyle
