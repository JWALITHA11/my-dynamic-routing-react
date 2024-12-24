
import './App.css';

import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';
import ErrorFound from './components/ErrorNotFound';
import {  Routes, Route } from 'react-router-dom';
import ErrorNotFound from './components/ErrorNotFound';
function App() {
  

  return (
    <div className='App'>
 
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="*" element={<ErrorNotFound />} /> */}
        </Routes>
   
    </div>
  );
}

export default App;
