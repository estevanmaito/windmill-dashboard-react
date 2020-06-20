import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './tailwind.output.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <SidebarProvider>
    <ThemeProvider>
      <Suspense fallback="Loading app...">
        <App />
      </Suspense>
    </ThemeProvider>
  </SidebarProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
