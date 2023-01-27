import React,{useState, useEffect, useRef} from 'react'
import FileSubmitForm from './FileSubmitForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import WrapperHome from '../UI/WrapperHome'

let firstChange = false;

export default function Main(props) {
  const[dataReceived, setDataReceived] = useState(false);
  const [isFileOver, setFileOver] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const navigate = useNavigate();
  const wrapperRef = useRef();
  
  useEffect(()=>{
    if(dataReceived){
      navigate('/data')
    }
  },[dataReceived, navigate])
  
  const fileOverHandler = (e) => {
    e.preventDefault();
    setFileOver(true);
  }

  const fileLeaveHandler =  (e) => {
    e.preventDefault();
    setFileOver(false);
  }

  const fileDropHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', e.dataTransfer.files[0]);
    if(e.dataTransfer.files[0].type!='text/csv'){
      setErrorState(true);
      return;
    }

    // axios.post takes an object and sends it to the backend server

    const response = await axios.post(`/handleFile`,
        formData
    ,{
      headers:{
        'content-type': 'multipart/form-data'
      }
    })

    if(response.data.status===200){
      setDataReceived(true); 
    }

    setFileOver(false);

  }

  const handleFileUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('file', e.target[0].files[0]);
    if(e.target[0].files[0].type!='text/csv'){
      setErrorState(true);
      return;
    }
    

    // axios.post takes an object and sends it to the backend server

    const response = await axios.post(`/handleFile`,
        formData
    ,{
      headers:{
        'content-type': 'multipart/form-data'
      }
    })

    if(response.data.status===200){
      setDataReceived(true); 
    }

  }

  const wrapperClickHandler = () => {
    wrapperRef.current.click();
  }

  const changeHandler = (e) => {
    if(e.target.files[0].type!='text/csv'){
      setErrorState(true);
    }
    else{
      setErrorState(false);
    }
    firstChange = true;
  }

  return (
    <div className='absolute w-full h-full bg-[#253647]'>
      <WrapperHome wrapperClickHandler={wrapperClickHandler} className={`w-3/6 bg-white h-1/2 rounded-3xl m-auto -translate-y-1/2 top-1/2 cursor-pointer hover:bg-slate-100 relative overflow-hidden ${isFileOver && 'bg-slate-100'}`} fileDropHandler={fileDropHandler} fileLeaveHandler={fileLeaveHandler} fileOverHandler={fileOverHandler}>
          <p className={`text-red-500 text-center ${errorState ? `` : `invisible`}`}>Only CSV files are supported</p>
          <h1 className='text-center relative top-[40%] -translate-y-[40%] text-2xl text-blue-400'>Select a CSV File to upload</h1>
          <p className='text-center relative top-[40%] -translate-y-[40%] text-slate-400'>or drag and drop it here</p>
          <FileSubmitForm changeHandler={changeHandler} buttonShow={firstChange && !errorState} ref={wrapperRef} className="bg-inherit" fileSubmitHandler={handleFileUpload}></FileSubmitForm>
      </WrapperHome>
    </div>
  )
}
