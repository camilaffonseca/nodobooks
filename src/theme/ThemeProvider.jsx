import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import theme from './theme'

const ThemeProviderComponent = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProviderComponent
