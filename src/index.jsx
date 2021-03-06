import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import reportWebVitals from './reportWebVitals'

import App from './App'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

require('dotenv').config()

if (process.env.REACT_APP_NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN_URL,
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
