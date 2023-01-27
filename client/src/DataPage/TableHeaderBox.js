import React, { useState } from 'react'
import sort from '../styles/sort.svg'

export default function TableHeaderBox(props) {
  return (
    <>
        <p className='text-center'>{props.headerName}<img alt='sort' src={sort} id={props.headerName} onClick={props.sortHandler} className='inline cursor-pointer'></img></p>
    </>
  )
}
