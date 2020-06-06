import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Todo from './components/todo/Todo'

export default (props) => {
  return (
    <HashRouter>
      <Route path="/todos" component={Todo} />
      <Redirect from="*" to="/todos" />
    </HashRouter>
  )
}
