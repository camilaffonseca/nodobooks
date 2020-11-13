import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Routes from 'routes'

import { GlobalStyle, ThemeProvider } from 'theme'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <ToastContainer />
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
