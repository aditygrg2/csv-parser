import {useState, useEffect} from 'react'
import axios from 'axios';
import TableHeaders from './TableHeaders';
import TableData from './TableData';
import loading from '../styles/loading.gif'

export default function Main() {
  const [headers, setHeaders] = useState([]);
  const [rowsData, setRowsData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [activeSorter, setActiveSorter] = useState(null);

  useEffect(()=>{
    const getData = async () => {
      const response = await axios.get('/data');

      let data = response.data.data;
      
      let h = [];
      for(let header in data[0]){
        h.push(header);
      }
      setHeaders(h);
      setRowsData(data);
      setLoadingState(false);
    }

    getData();
  },[])
 
  const sortHandler = (e) =>{
    // Saved the key which is in active sort, if same then sorted ascendingly and set the state to null, if different set to that state.
    const key = e.target.id;
    setLoadingState(true);
    console.log(activeSorter, key);
    let data = rowsData.slice();
    if(activeSorter!=key){
      data.sort((d1, d2) => d1[key]<d2[key] ? 1 : d1[key]>d2[key] ? -1 : 0 );
      setActiveSorter(key);
    }
    else{
        data.sort((d1, d2) => d1[key]<d2[key] ? -1 : d1[key]>d2[key] ? 1 : 0 );
        setActiveSorter(null);
    }
      setRowsData(data);
    setLoadingState(false);
  }

  return (
    <div className='p-10 w-full bg-[#253647]'>
      <div className='bg-white  rounded-xl'>
          {loadingState && <img alt="loading-icon" className='relative left-1/2 -translate-x-1/2' src={loading}></img>}
          {!loadingState && <><TableHeaders setLoadingState={setLoadingState} sortHandler={sortHandler} data={headers}></TableHeaders>
          <TableData headers={headers} data={rowsData}></TableData></>}
      </div>
    </div>
  )
}
