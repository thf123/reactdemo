import React from 'react'
import './App.css'
import { RootRoutes } from './config/routes'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router >
      {RootRoutes.map(items => {
        return <Route key={items.path} exact={items.exact} path={items.path} component={items.component} />
      })}
    </Router>
  )
}

export default App
