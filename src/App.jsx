import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Routes from 'routes'

import { GlobalStyle, ThemeProvider } from 'theme'

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
