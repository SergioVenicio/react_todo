import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const base_url = 'http://localhost:3003/api/todos'

export default (props) => {
  const [description, setDescription] = useState('')
  const [todoList, setTodoList] = useState([])

  useEffect( () => {
    refresh()
  }, [])

  const refresh = () => {
    axios({
      method: 'GET',
      url: base_url + '?sort=-createdAt',
      responseType: 'json'
    }).then( (response) => {
      setTodoList(Array.from(response.data))
    })
  }

  const deleteTodo = (_id) => {
    axios({
      method: 'DELETE',
      url: base_url + `/${_id}`,
      responseType: 'json'
    }).then( (response) => {
      const newList = todoList.filter( (todo) => todo._id !== _id )
      setTodoList(newList)
    }).catch( (err) => {
      alert('Erro ao deletar tarefa!')
    })
  }

  const updateTodo = (_id) => {
    if(!description) {
      return
    }

    const todo = todoList.filter( (todo) => todo._id === _id)[0]
    const todoIdx = todoList.findIndex( (todo) => todo._id === _id)

    axios({
      method: 'PUT',
      url: base_url + `/${_id}`,
      responseType: 'json',
      data: { description }
    }).then( () => {
      setTodoList(todoList.map( (t) => {
        if(t._id !== _id) { return t}
        return {...t, description}
      }))
    })
  }

  const doneToggle = (_id) => {
    const todo = todoList.filter( (todo) => todo._id === _id)[0]
    const todoIdx = todoList.findIndex( (todo) => todo._id === _id)

    axios({
      method: 'PUT',
      url: base_url + `/${_id}`,
      responseType: 'json',
      data: { done: true }
    }).then( () => {
      setTodoList(todoList.map( (t) => {
        if(t._id !== _id) { return t}
        return {...t, done: true}
      }))
    })
  }

  const clearHandle = (e) => {
    e.preventDefault()
    setDescription('')
  }

  const searchHandler = (e) => {
    e.preventDefault()
    if(!description) {
      return refresh()
    }

    const todos = todoList.filter( (t) => {
      return String(t.description).toLowerCase() === String(description).toLowerCase()
    })
    setTodoList([...todos])
  }

  const addHandler = (e) => {
    console.log('Add')
    e.preventDefault()

    axios({
      method: 'POST',
      url: base_url,
      responseType: 'json',
      data: { description, done: false }
    }).then( (resp) => {
      const newList = [...todoList, resp.data]
      setTodoList(newList)
      setDescription('')
    }).catch( (err) => {
      console.log(err)
    })
  }

  const todoChange = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  return (
    <div className="todo">
      <TodoForm
        addHandler={addHandler}
        todoChange={todoChange}
        description={description}
        searchHandler={searchHandler}
        clearHandle={clearHandle}
      />
    <TodoList
      todosChange={setTodoList}
      todos={todoList}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
      doneToggle={doneToggle}
    />
    </div>
  )
}
