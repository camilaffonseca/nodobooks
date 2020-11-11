import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Routes from 'routes'
import Topbar from 'components/Topbar'

import { GlobalStyle, ThemeProvider } from 'theme'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <ToastContainer />
    <Router>
      <Topbar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
