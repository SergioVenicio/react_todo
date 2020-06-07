import { createStore, combineReducers } from 'redux'

import todos from './reducers/todos'

const reducers = combineReducers({
  todos: todos
})

export default () => {
  return createStore(reducers)
}
