import WrapperHome from './UI/WrapperHome';
import Main from './HomepageElements/Main'
import { Routes, Route } from 'react-router-dom';
import DataPage from '../src/DataPage/DataPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/data" element={<DataPage></DataPage>}/>
      </Routes>
    </div>
  );
}

export default App;
