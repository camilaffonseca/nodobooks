import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import styles from './styles'

const ThemeProviderComponent = ({ children }) => <ThemeProvider theme={styles}>{children}</ThemeProvider>

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProviderComponent
