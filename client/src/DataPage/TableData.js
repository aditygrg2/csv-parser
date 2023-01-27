import React from 'react'
import TableRow from './TableRow';

export default function TableData(props) {
  const {data} = props;
  return (
    <div className='grid grid-flow-row'>
      {data.map((row) => {
        return <TableRow key={Math.random()} headers={props.headers} row={row}/>
      })}
    </div>
  )
}
