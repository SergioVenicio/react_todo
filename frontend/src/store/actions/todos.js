import {
  ADD_TODO, SET_TODOS, UPDATE_TODO, DELETE_TODO
} from './types'

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

const setTodos = (todos) => {
  return {
    type: SET_TODOS,
    payload: todos
  }
}

const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}

const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo
  }
}

export { addTodo, setTodos, updateTodo, deleteTodo }
