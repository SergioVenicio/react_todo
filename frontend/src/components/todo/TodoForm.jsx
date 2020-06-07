import axios from 'axios'

import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo, setTodos } from '../../store/actions/todos'

import Button from './Button'
import Input from './Input'

const TodoForm = (props) => {
  const [description, setDescription] = useState('')

  const addHandler = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: props.baseUrl,
      data: {description, done: false}
    }).then( ({ data }) => {
      props.addTodo(data)
      setDescription('')
    })
  }

  const searchHandler = (e) => {
    e.preventDefault()
    const url = description ? `${props.baseUrl}?description=${description}` : props.baseUrl
    axios({
      method: 'GET',
      url
    }).then( ({ data }) => {
      props.setTodos(data)
    })
  }

  return (
    <div className="todo-form mt-5">
      <div className="form">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="col-12">
              <div className="form-row">
                <div className="input-group">
                  <Input
                    placeholder='Nova tarefa'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <div className="input-group-append">
                    <Button
                      type="submit"
                      className="outline-primary"
                      onClick={addHandler}
                      icon='fa-plus'>
                    </Button>
                    <Button
                      type="submit"
                      className="outline-primary"
                      onClick={searchHandler}
                      icon='fa-search'>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    setTodos: todos => dispatch(setTodos(todos))
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList,
    baseUrl: state.todos.baseUrl
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
