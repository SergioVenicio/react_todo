import React from 'react'

export default (props) => {
  return (
    <input
      type="text"
      className="form-control col-10"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || ''}
      onKeyUp={props.onKeyUp}
    />
  )
}
