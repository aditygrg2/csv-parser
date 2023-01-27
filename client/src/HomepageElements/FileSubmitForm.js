import React from 'react'
import Button from '../UI/Button'

const FileSubmitForm = React.forwardRef((props,ref) => {
  const buttonClickHandler = (e) => {
    e.stopPropagation();
  }

  return (
      <form className='bg-inherit absolute bottom-[20%] left-[50%] -translate-x-[50%]' method="POST" onSubmit={props.fileSubmitHandler} encType="multipart/form">
          <input ref={ref} onChange={props.changeHandler} type="file" name="csv-file" className='hidden'></input>
          {props.buttonShow && <Button onClick={buttonClickHandler} type="submit" message="Import a CSV"></Button>}
      </form>
  )
})

export default FileSubmitForm;
