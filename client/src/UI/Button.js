import React from 'react'

const Button = React.forwardRef((props,ref) => {

  return (
    <button type={props.type} onClick={props.onClick} className="p-2 bg-blue-400 hover:bg-blue-500">{props.message}</button>
  )
})

export default Button;