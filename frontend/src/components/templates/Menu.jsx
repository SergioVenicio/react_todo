import React from 'react'


export default (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#/todos">
        <i className="fa fa-calendar-check-o"></i> TodoApp
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/todos"> Tarefas</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}
