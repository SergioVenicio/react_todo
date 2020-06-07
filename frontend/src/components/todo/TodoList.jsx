import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'

import { updateTodo, deleteTodo } from '../../store/actions/todos'

import Button from './Button'

const TodoList = (props) => {
  const setDone = (todo) => {
    axios({
      method: 'PUT',
      url: `${props.baseUrl}/${todo._id}`,
      data: {...todo, done: true}
    }).then( ( {data} ) => {
      props.updateTodo(data)
    })
  }

  const deleteTodo = (todo) => {
    axios({
      method: 'DELETE',
      url: `${props.baseUrl}/${todo._id}`,
    }).then( () => props.deleteTodo(todo))
  }

  const renderList = () => {
    return props.todoList.map( (todo) => {
      return (
        <tr key={todo._id}>
          <td>{todo._id}</td>
          <td>{todo.description}</td>
          <td>{new Date(todo.createdAt).toLocaleDateString()}</td>
          <td>{todo.done ? 'Sim' : 'Não'}</td>
          <td>
            {!todo.done ?
              <Button
                type="button"
                className="warning"
                icon="fa-pencil"
                onClick={() => props.updateTodo(todo._id)} /> : null}
            {!todo.done ?
              <Button
                type="button"
                className="primary ml-1"
                icon="fa-check-circle"
                onClick={ () => setDone(todo) } />: null}
            <Button
              type="button"
              className="danger ml-1"
              icon="fa-trash"
              onClick={() => deleteTodo(todo)} />
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table todoList mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Descrição</th>
          <th>Criado em</th>
          <th>Concluido</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        { props.todoList ? renderList() : null }
      </tbody>
    </table>
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
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
