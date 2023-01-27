import React from 'react'
import TableHeaderBox from './TableHeaderBox'

export default function TableHeaders(props) {
  return (
    <div className='grid grid-flow-col p-4'>
        {props.data.map(data => <TableHeaderBox key={data} sortHandler={props.sortHandler} loadingState={props.setLoadingState} headerName={data}></TableHeaderBox>)}
    </div>
  )
}