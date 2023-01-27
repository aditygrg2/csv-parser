import React from 'react';


export default function WrapperHome(props) {
  // For drop to work as per your expectations, please dropOver ko preventDefault karo.

  return (
    <div onClick={props.wrapperClickHandler} onDrop={props.fileDropHandler} onDragOver={props.fileOverHandler} onDragLeave={props.fileLeaveHandler} className={`border-black outline-dashed ${props.className}`}>
        {props.children}
    </div>
  )
}
