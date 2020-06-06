import React from 'react'

import Button from './Button'
import Input from './Input'

export default (props) => {
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.searchHandler(e) : props.addHandler(e)
    } else if (e.key === 'Escape' || e.key === 'Delete') {
      props.clearHandle(e)
    }
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
                    onChange={props.todoChange}
                    value={props.description}
                    onKeyUp={keyHandler}
                  />
                  <div className="input-group-append">
                    <Button
                      type="submit"
                      className="outline-primary"
                      onClick={props.addHandler}
                      icon='fa-plus'>
                    </Button>
                    <Button
                      type="submit"
                      className="outline-primary"
                      onClick={props.searchHandler}
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
