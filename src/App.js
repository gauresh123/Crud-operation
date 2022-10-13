
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Create/Create';
import Read from './Read/Read';
import Update from './Update/Update';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
