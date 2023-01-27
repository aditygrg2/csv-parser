import React from 'react'

export default function TableRow(props) {
  return (
    <div className='grid grid-flow-col hover:bg-blue-300 p-4'>
        {
            props.headers.map((index) => {
                return <p className='text-center' key={Math.random()}>{props.row[index]}</p>
            })
        }
    </div>
  )
}
