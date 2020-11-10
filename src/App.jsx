import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Routes from 'routes'
import Topbar from 'components/Topbar'

import { GlobalStyle, ThemeProvider } from 'theme'

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Router>
      <Topbar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
