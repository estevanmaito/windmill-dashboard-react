import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  )
}

export default App
