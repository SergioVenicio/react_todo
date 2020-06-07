import {
  ADD_TODO, SET_TODOS, UPDATE_TODO, DELETE_TODO
} from '../actions/types'


const initialState = {
  todoList: [],
  baseUrl: 'http://localhost:3003/api/todos'
}

const todos = (state=initialState, action) => {
  const todo = action.payload || {}

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, todo]
      }
    case SET_TODOS:
      return {
        ...state,
        todoList: action.payload
      }
    case UPDATE_TODO:
      const newList = state.todoList.map( (t) => {
        if (t._id !== todo._id) return t
        return todo
      })
      return {
        ...state,
        todoList: newList
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter( (t) => t._id !== todo._id )
      }
    default:
      return state
  }
}

export default todos
