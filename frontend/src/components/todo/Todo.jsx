import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { setTodos } from '../../store/actions/todos'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = (props) => {

  axios({
    method: 'GET',
    url: props.baseUrl + '?sort=-createdAt',
    responseType: 'json'
  }).then( (response) => {
    props.setTodos(Array.from(response.data))
  })

  return (
    <div className="todo">
      <TodoForm />
      <TodoList />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList,
    baseUrl: state.todos.baseUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTodos: todos => dispatch(setTodos(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
