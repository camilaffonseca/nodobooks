import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT } from 'helpers/constants'

const breakpoints = [0, `${TABLET_BREAKPOINT}px`, `${DESKTOP_BREAKPOINT}px`]

const space = [0, 2, 4, 8, 15, 16, 20, 23, 24, 32, 40, 48, 56, 160]

const fontSizes = [10, 12, 13, 14, 16, 24, 32, 40, 48]

const fontWeights = [400, 500, 600, 700]

const radii = [0, 2, 4, 8, 10]

const colors = {
  blues: {
    A100: '#756AD3',
    A200: '#4C3DB2'
  },

  grays: {
    A50: '#F7F7F7',
    A100: '#FBFDFF',
    A200: '#EFEEF6',
    A250: '#E2E2E2',
    A300: '#BDBDBD',
    A400: '#A6A6A6',
    A500: '#5C6A79',
    A600: '#666666',
    A700: '#333333',
    A800: '#1C2A39',
    A900: '#0A0A0A'
  },

  specials: {
    error: '#C00000'
  },

  defaults: {
    white: '#fff',
    black: '#000'
  }
}

export default { breakpoints, space, fontSizes, fontWeights, radii, colors }
