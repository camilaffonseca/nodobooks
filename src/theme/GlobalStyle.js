import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT } from 'helpers'

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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .toast {
    font-size: 16px;
  }

  .loader-landing-image {
    width: 100%;
    object-fit: cover;
    height: 62vw;
    margin-top: calc(115px + ${({ theme }) => theme?.space[6]}px);

    @media (min-width: ${TABLET_BREAKPOINT}px) {
      height: 52vw;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT}px) {
      height: 57vw;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
      height: 50vw;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT + 500}px) {
      height: auto;
    }
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    :root {
        font-size: 40%;
    }
  }

  .loader-card-image {
    cursor: pointer;
    box-shadow: 1.4px 6px 7px rgba(53, 49, 84, 0.28);
    width: 100% !important;
    object-fit: cover;
    height: 60vw;
    max-height: 330px;

    @media (min-width: ${TABLET_BREAKPOINT}px) {
      height: 34vw;
    }

    @media (min-width: ${TABLET_BREAKPOINT + 100}px) {
      height: 35vw;
      max-height: 360px;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT}px) {
      max-height: none;
      max-width: 17vw;
      height: 23vw;
    }
  }
`

export default GlobalStyle
