//import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/appointment' element={<Appointment></Appointment>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
