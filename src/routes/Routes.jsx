import { Route, Redirect } from 'react-router-dom'

import Home from 'routes/Home'

const Routes = () => (
  <>
    <Route exact path='/' component={Home} />
    <Redirect to='/' />
  </>
)

export default Routes
