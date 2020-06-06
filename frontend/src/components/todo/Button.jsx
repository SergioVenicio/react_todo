import React from 'react'

export default (props) => {
  return (
    <button
      type={props.type}
      className={`btn btn-${props.className}`}
      onClick={props.onClick}>
      <i className={`fa ${props.icon}`}></i>
    </button>
  )
}
