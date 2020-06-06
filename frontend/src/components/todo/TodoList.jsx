import React, { useState } from 'react'

import Button from './Button'

export default (props) => {
  const renderList = () => {
    return props.todos.map( (todo) => {
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
                onClick={() => props.doneToggle(todo._id)} />: null}
            <Button
              type="button"
              className="danger ml-1"
              icon="fa-trash"
              onClick={() => props.deleteTodo(todo._id)} />
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
        { props.todos ? renderList() : null }
      </tbody>
    </table>
  )
}
